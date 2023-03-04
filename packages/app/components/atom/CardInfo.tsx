import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

interface InfoCardProps {
  title: string;
  elevation?: number;
  body?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

/**
 * Cards displaying world and profile statistics, etc.
 */
export default function CardInfo(props: InfoCardProps): JSX.Element {
  return (
    <Card elevation={props.elevation} style={{ border: 'none', ...props.style }}>
      <CardContent sx={{ '&.MuiCardContent-root': { padding: 1 } }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <div>{props.icon && <Icon>{props.icon}</Icon>}</div>
          <Typography style={{ lineHeight: '2rem' }}>{props.title}</Typography>
        </div>
        <div>
          <Typography style={{ lineHeight: '1.5rem' }}>{props.body}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
