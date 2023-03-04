import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import {
  MdAutorenew,
  MdCheck,
  MdChecklist,
  MdClose,
  MdCopyAll,
  MdDashboard,
  MdDeleteForever,
  MdDiversity3,
  MdFormatListBulleted,
  MdMail,
  MdMenu,
  MdOutlineAddTask,
  MdOutlineArrowForwardIos,
  MdOutlineWorkspacePremium,
  MdSearch,
  MdSend,
  MdSettings,
  MdWallet,
} from 'react-icons/md';

interface Props {
  disabledButton?: boolean;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  label?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  href?: string;
  style?: CSSProperties;
  badge?: number;
  onClick?: () => void;
}

interface WrapperProps extends Props {
  children: React.ReactNode;
}

function IconButtonWrapper(props: WrapperProps): JSX.Element {
  if (props.disabledButton) {
    return (
      <Icon fontSize={props.size} color={props.color} style={props.style}>
        {props.children}
      </Icon>
    );
  }

  if (props.href) {
    return (
      <IconButton {...props} LinkComponent={Link} href={props.href} style={{ borderRadius: '8px', ...props.style }}>
        <Badge
          color='error'
          badgeContent={props.badge}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          {props.children}
          {props.label && <Typography variant='caption'>{props.label}</Typography>}
        </Badge>
      </IconButton>
    );
  }

  return (
    <IconButton {...props} style={{ borderRadius: '8px', ...props.style }}>
      <Badge
        color='error'
        badgeContent={props.badge}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        {props.children}
        {props.label && <Typography variant='caption'>{props.label}</Typography>}
      </Badge>
    </IconButton>
  );
}

export function ReloadIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdAutorenew />
    </IconButtonWrapper>
  );
}

export function CheckListIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdChecklist />
    </IconButtonWrapper>
  );
}

export function DashboardIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdDashboard />
    </IconButtonWrapper>
  );
}

export function AddTaskIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdOutlineAddTask />
    </IconButtonWrapper>
  );
}

export function GuildIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdDiversity3 />
    </IconButtonWrapper>
  );
}

export function NoticeIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdMail />
    </IconButtonWrapper>
  );
}

export function SettingsIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdSettings />
    </IconButtonWrapper>
  );
}

export function GuildPointIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdOutlineWorkspacePremium />
    </IconButtonWrapper>
  );
}

export function WalletIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdWallet />
    </IconButtonWrapper>
  );
}

export function MenuIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdMenu />
    </IconButtonWrapper>
  );
}

export function ArrowRightIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdOutlineArrowForwardIos />
    </IconButtonWrapper>
  );
}

export function SearchIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdSearch />
    </IconButtonWrapper>
  );
}

export function TrashIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdDeleteForever />
    </IconButtonWrapper>
  );
}

export function CloseIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdClose />
    </IconButtonWrapper>
  );
}

export function EarthIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <IoEarthOutline />
    </IconButtonWrapper>
  );
}

export function CopyIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdCopyAll />
    </IconButtonWrapper>
  );
}

export function CheckIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdCheck />
    </IconButtonWrapper>
  );
}

export function SendIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdSend />
    </IconButtonWrapper>
  );
}

export function ListBulletedIcon(props: Props): JSX.Element {
  return (
    <IconButtonWrapper {...props}>
      <MdFormatListBulleted />
    </IconButtonWrapper>
  );
}
