import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface Props {
  markdownText: string;
  containerStyle?: React.CSSProperties;
}

export default function MarkdownParser(props: Props): JSX.Element {
  const theme = useTheme();

  return (
    <div style={props.containerStyle}>
      <ReactMarkdown
        components={{
          h1: (e) => (
            <Typography variant='h1' gutterBottom style={{ fontSize: '2rem', overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          h2: (e) => (
            <Typography variant='h2' gutterBottom style={{ fontSize: '1.8rem', overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          h3: (e) => (
            <Typography variant='h3' gutterBottom style={{ fontSize: '1.6rem', overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          h4: (e) => (
            <Typography variant='h4' gutterBottom style={{ fontSize: '1.4rem', overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          h5: (e) => (
            <Typography variant='h5' gutterBottom style={{ fontSize: '1.2rem', overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          h6: (e) => (
            <Typography variant='h6' gutterBottom style={{ fontSize: '1rem', overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          p: (e) => (
            <Typography variant='body1' style={{ overflowWrap: 'break-word' }}>
              {e.children}
            </Typography>
          ),
          ul: (e) => (
            <List
              sx={{
                listStyleType: 'circle',
                pl: 2,
                '& .MuiListItem-root': {
                  display: 'list-item',
                },
              }}
            >
              {e.children}
            </List>
          ),
          ol: (e) => (
            <List
              sx={{
                listStyleType: 'decimal',
                pl: 2,
                '& .MuiListItem-root': {
                  display: 'list-item',
                },
              }}
            >
              {e.children}
            </List>
          ),
          li: (e) => <ListItem>{e.children}</ListItem>,
          a: (e) => (
            <Link href={e.href || '/'} style={{ color: theme.palette.text.primary }}>
              {e.children}
            </Link>
          ),
          br: () => <br />,
        }}
      >
        {props.markdownText.replace(/\n/gi, '\n&nbsp;\n\n')}
      </ReactMarkdown>
    </div>
  );
}
