import NoMessage from '@/assets/icons/no-message.webp';
import { CheckListIcon, CloseIcon, ReloadIcon } from '@/components/atom/AppIconButton';
import ModalBottom from '@/components/atom/ModalBottom';
import Progress from '@/components/atom/Progress';
import ChatField from '@/components/organisms/ChatField';
import { chatApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import { TextService } from '@/services/TextUtil';
import Card from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { ChatRoom, GetChatRoomsResponseInner } from 'oas/types';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWRInfinite from 'swr/infinite';

interface FetchArgs {
  offset: number;
  cacheKey: string;
}

interface P {}

interface NoticeItemProps extends P {
  room: ChatRoom;
  onClose: () => void;
}

function NoticeItems(props: NoticeItemProps): JSX.Element {
  const [isOpenChatModal, setIsOpenChatModal] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpenChatModal(true);
  const handleCloseModal = () => {
    setIsOpenChatModal(false);
    props.onClose();
  };

  return (
    <>
      <ListItemButton divider onClick={handleOpenModal}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <ListItemText
            primary={
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                {props.room.isUnread && (
                  <div style={{ backgroundColor: 'red', width: '0.5rem', height: '0.5rem', borderRadius: '100%' }} />
                )}
                {TextService.trimText(props.room.members.map((m) => m.name).join(', '), 50)}
              </div>
            }
            secondary={TextService.trimText(props.room.messages[0].body, 200)}
            primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
          />
          <ListItemText
            secondary={new Date().toLocaleDateString()}
            secondaryTypographyProps={{ style: { textAlign: 'right' } }}
          />
        </div>
      </ListItemButton>
      <ModalBottom isOpen={isOpenChatModal} onClose={handleCloseModal}>
        <Card style={{ height: '90svh', display: 'flex', flexGrow: 1, flexDirection: 'column', overflowY: 'hidden' }}>
          <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon onClick={handleCloseModal} />
          </div>
          <ChatField room={props.room} />
        </Card>
      </ModalBottom>
    </>
  );
}

export default function NoticeField(_: P): JSX.Element {
  const { ref, inView } = useInView();

  const getKeys = (index: number, prev: GetChatRoomsResponseInner | null): FetchArgs | null => {
    if (prev && prev.pageNation.current >= prev.pageNation.last) return null;
    return { offset: index, cacheKey: paths.account.notice.href };
  };
  const fetcher = async (args: FetchArgs) => await chatApi.getChats(args);
  const { data, setSize, isLoading, isValidating, mutate, error } = useSWRInfinite(getKeys, fetcher);

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (data && data.length !== 0 && inView && !isValidating) {
      const lastIndex: number = data.length - 1;
      if (data && data[lastIndex].pageNation.current <= data[lastIndex].pageNation.last) {
        setSize((current) => current + 1);
      }
    }
  }, [inView]);

  const handleAllNotificationAsRead = async () => {
    await chatApi.putAllChatRoomIsRead();
    mutate();
  };

  const handleReload = () => mutate();

  if (error) throw error;
  if (!data || isLoading) return <Progress />;

  return (
    <>
      <div style={{ height: '1rem' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', gap: '10px' }}>
        <CheckListIcon label='mark all' onClick={handleAllNotificationAsRead} />
        <ReloadIcon label='reload' onClick={handleReload} />
      </div>
      {data[0].data.length === 0 ? (
        <Fade in={true} timeout={{ enter: 1500 }}>
          <div className='center' style={{ height: '70svh', flexDirection: 'column' }}>
            <Image src={NoMessage} height={60} width={60} alt='no message' />
            <Typography>no message</Typography>
          </div>
        </Fade>
      ) : (
        <List>
          {data
            .flatMap((d) => d.data)
            .map((room, i) => (
              <NoticeItems room={room} key={i} onClose={handleReload} />
            ))}
        </List>
      )}
      <div ref={ref} aria-hidden='true' />
    </>
  );
}
