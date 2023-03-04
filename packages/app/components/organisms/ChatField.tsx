import { SendIcon } from '@/components/atom/AppIconButton';
import CardUser from '@/components/atom/CardUser';
import Progress from '@/components/atom/Progress';
import { chatApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import type { GetQuestsResponseInner } from 'oas/types';
import type { ChatRoom } from 'oas/types/models';
import { useEffect, useRef, type FormEvent, type KeyboardEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWRInfinite from 'swr/infinite';

interface Props {
  room: ChatRoom;
}

interface FetchArgs {
  offset: number;
  cacheKey: string;
}

export default function ChatField(props: Props): JSX.Element {
  const { ref, inView } = useInView({
    rootMargin: '100px',
  });
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  const getKeys = (index: number, prev: GetQuestsResponseInner): FetchArgs | null => {
    if (prev && prev.pageNation.current >= prev.pageNation.last) return null;
    return { offset: index, cacheKey: paths.account.notice.href + ChatField.name };
  };

  const fetcher = (args: FetchArgs) => chatApi.getChatMessages({ offset: args.offset, chatRoomId: props.room.id });
  const { data, setSize, isLoading, isValidating, error, mutate } = useSWRInfinite(getKeys, fetcher);

  useEffect(() => {
    mutate().then(() => {
      scrollBottomRef.current?.scrollIntoView({ behavior: 'instant', block: 'end' });
      chatApi.putChatInfo({ chatRoomId: props.room.id });
    });
  }, []);

  useEffect(() => {
    if (data && data.length !== 0 && inView && !isValidating) {
      const lastIndex: number = data.length - 1;
      if (data && data[lastIndex].pageNation.current <= data[lastIndex].pageNation.last) {
        setSize((current) => current + 1);
      }
    }
    if (inView) {
      chatApi.putChatInfo({ chatRoomId: props.room.id });
    }
  }, [inView]);

  if (error) throw new Error(error);
  if (!data || isLoading) return <Progress />;

  const postChatMessage = async (message: string) => {
    await chatApi.postChatRoomToMessage({
      chatRoomId: props.room.id,
      postChatRoomToMessageBody: {
        message: message,
      },
    });
    await mutate();
    scrollBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = (e.target as HTMLFormElement).message.value;
    if (!message) return;
    await postChatMessage(message);
    (e.target as HTMLFormElement).message.value = '';
  };

  const handleKeyDownChat = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      const message = (e.target as HTMLTextAreaElement).value;
      if (!message) return;
      await postChatMessage(message);
      (e.target as HTMLTextAreaElement).value = '';
    }
  };

  return (
    <>
      <div style={{ overflowY: 'auto', flexGrow: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {data
            .flatMap((d) => d.data)
            .map((d, i) => {
              return (
                <CardUser
                  key={i}
                  name={d.user?.name}
                  avatar={d.user?.image}
                  body={d.body}
                  date={d.createdAt.toLocaleString()}
                  style={{ border: 'none', width: '100%' }}
                />
              );
            })}
          <div ref={ref} style={{ height: '1rem' }}>
            &nbsp;
          </div>
          <div ref={scrollBottomRef} aria-hidden='true' />
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: 10 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            type='text'
            placeholder='input a message'
            name='message'
            multiline
            maxRows={5}
            onKeyDown={handleKeyDownChat}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SendIcon type='submit' />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    </>
  );
}
