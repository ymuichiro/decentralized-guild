import { CloseIcon } from '@/components/atom/AppIconButton';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormEvent } from 'react';

interface Props {
  questId: string;
  onSubmit: (data: { proposal: string; questId: string }) => void;
  onClose: () => void;
}
export default function QuestProposalCard(props: Props): JSX.Element {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data: FormData = new FormData(event.currentTarget);
      const proposal: string | undefined = data.get('proposal')?.toString();
      if (!proposal) return alert('Please enter your proposal.');
      props.onSubmit({ proposal, questId: props.questId });
    } catch {
      alert('An error has occurred.');
    }
  };

  return (
    <Card style={{ height: '90svh' }}>
      <CardContent className='scroll-bar-off' style={{ height: '100%', overflowY: 'auto' }}>
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon onClick={props.onClose} />
        </div>
        <Typography gutterBottom variant='h5'>
          Input your proposal
        </Typography>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Typography color='textSecondary'>
              Please describe your proposal in detail. This content is sent to the creator of the quest.
            </Typography>
            <TextField
              required
              name='proposal'
              label='proposal'
              placeholder='Please describe your proposal in detail'
              defaultValue={''}
              multiline
              minRows={8}
              maxRows={20}
            />
            <Button type='submit'>SUBMIT</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
