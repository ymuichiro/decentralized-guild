import { AddTaskIcon, DashboardIcon, MenuIcon, NoticeIcon, SettingsIcon } from '@/components/atom/AppIconButton';
import paths from '@/services/Navigaion';
import MuiAppbar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface P {
  onClickMenu?: () => void;
}

export default function Appbar(props: P): JSX.Element {
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger} appear={false}>
      <MuiAppbar position='fixed' style={{ boxShadow: 'none', backgroundImage: 'none' }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }} />
          <Hidden mdDown>
            <DashboardIcon size='large' title='dashboard' href={paths.quest.dashboard.href} />
            <AddTaskIcon size='large' title='new quest' href={paths.quest.create.href} />
            <NoticeIcon size='large' title='notifications' href={paths.account.notice.href} />
            <SettingsIcon size='large' title='settings' href={paths.account.index.href} />
          </Hidden>
          <Hidden mdUp>
            <MenuIcon size='large' title='menu' onClick={props.onClickMenu} />
          </Hidden>
        </Toolbar>
      </MuiAppbar>
    </Slide>
  );
}
