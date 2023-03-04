import { SearchIcon } from '@/components/atom/AppIconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

interface Props {
  onSubmit?: (keyword: string) => void;
  onChange?: (keyword: string) => void;
  name: string;
  placeholder: string;
  label?: string;
  value?: string;
}

export default function QuestSearch(props: Props): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as any).elements[props.name].value;
    if (props.onSubmit) props.onSubmit(input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name={props.name}
        variant='outlined'
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
        label={props.label}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end' style={{ display: 'flex', gap: '10px' }}>
              <SearchIcon type='submit' size='large' title='search' />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
