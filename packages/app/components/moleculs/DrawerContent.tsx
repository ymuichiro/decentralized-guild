import AppLogo from '@/assets/logos/app-logo-dark-wide.webp';
import {
  AddTaskIcon,
  ArrowRightIcon,
  DashboardIcon,
  GuildIcon,
  NoticeIcon,
  SettingsIcon,
  WalletIcon,
} from '@/components/atom/AppIconButton';
import CardInfo from '@/components/atom/CardInfo';
import UserProfile from '@/components/moleculs/UserProfile';
import paths from '@/services/Navigaion';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  user: {
    name?: string | null;
    image?: string | null;
  };
  info: {
    balance: number;
    rpt: number;
  };
  onUpdateProfile: (file: File) => Promise<void>;
}

const SITE_LINKS = [
  { title: 'Dashboard', link: paths.quest.dashboard.href, Icon: DashboardIcon },
  { title: 'Create a Quest', link: paths.quest.create.href, Icon: AddTaskIcon },
  { title: 'Notice', link: paths.account.notice.href, Icon: NoticeIcon },
  { title: 'Settings', link: paths.account.index.href, Icon: SettingsIcon },
];

export default function DrawerContent(props: Props): JSX.Element {
  return (
    <>
      <Toolbar style={{ overflow: 'hidden', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Link href={paths.quest.dashboard.href}>
            <Image src={AppLogo} alt='logo' width={170} height={50} priority={false} loading='lazy' />
          </Link>
        </div>
      </Toolbar>
      <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <UserProfile
          isEditable={true}
          profile={{ name: props.user.name, image: props.user.image }}
          onSubmit={props.onUpdateProfile}
        />
        {[
          {
            title: 'XYM',
            body: props.info.balance.toLocaleString(),
            icon: <WalletIcon disabledButton />,
          },
          {
            title: 'RPT',
            body: props.info.rpt.toLocaleString(),
            icon: <GuildIcon disabledButton />,
          },
        ].map((item, index) => (
          <CardInfo
            title={item.title}
            body={item.body}
            icon={item.icon}
            elevation={3}
            key={index}
            style={{ width: '100%' }}
          />
        ))}
        <Hidden mdUp>
          <List style={{ width: '100%' }}>
            {SITE_LINKS.map((item, index) => (
              <ListItemButton key={index} component={Link} href={item.link} style={{ width: '100%' }}>
                <ListItemAvatar>
                  <item.Icon size='medium' disabledButton />
                </ListItemAvatar>
                <ListItemText primary={item.title} />
                <ArrowRightIcon size='small' disabledButton />
              </ListItemButton>
            ))}
          </List>
        </Hidden>
      </div>
    </>
  );
}
