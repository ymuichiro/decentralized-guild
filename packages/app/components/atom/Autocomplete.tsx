import MuiAutocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CSSProperties } from 'react';

interface Props {
  label?: string;
  name?: string;
  id?: string;
  options?: Item[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  style?: CSSProperties;
}

interface Item {
  title: string;
  value: string;
}

const filter = createFilterOptions<Item>();

export default function Autocomplete(props: Props): JSX.Element {
  return (
    <MuiAutocomplete
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      value={props.value}
      id={props.id}
      style={props.style}
      onChange={(_, newValue) => {
        if (props.onChange === undefined) {
          return null;
        }
        if (typeof newValue === 'string') {
          return props.onChange(newValue);
        }
        return props.onChange(newValue === null ? '' : newValue.value);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const isExisting = options.some((option) => params.inputValue === option.title);
        if (params.inputValue !== '' && !isExisting) {
          filtered.push({
            title: params.inputValue,
            value: params.inputValue,
          });
        }
        return filtered;
      }}
      options={props.options ?? []}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.title)}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      renderInput={(params) => (
        <TextField
          {...params}
          name={props.name}
          label={props.label}
          required={props.required}
          placeholder={props.placeholder}
          InputLabelProps={{ shrink: true, ...params.InputLabelProps }}
        />
      )}
    />
  );
}
