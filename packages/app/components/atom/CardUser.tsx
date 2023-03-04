import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

interface P {
  name?: string;
  date: string;
  avatar?: string;
  body: string;
  style?: React.CSSProperties;
}

export default function CardUser(props: P): JSX.Element {
  return (
    <Card style={{ paddingLeft: 8, paddingRight: 8, ...props.style }}>
      <CardHeader
        avatar={<Avatar aria-label='user-icon' src={props.avatar} />}
        title={`${props.name} - ${props.date}`}
        subheader={props.body?.split(/\r\n|\n/).map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
        titleTypographyProps={{
          color: 'text.secondary',
        }}
        subheaderTypographyProps={{
          variant: 'body1',
          color: 'text.primary',
        }}
      />
    </Card>
  );
}
