import Autocomplete from '@/components/atom/Autocomplete';
import Select from '@/components/atom/Select';
import { type SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import type { ChainTypeEnum, Reward } from 'oas/types';

interface Props {
  items: Reward[];
  chainTypes: ChainTypeEnum[];
  tokenIdList: { title: string; value: string }[];
  onChangeChainType: (index: number, value: ChainTypeEnum) => void;
  onChangeTokenId: (index: number, value: string) => void;
  onChangeAmount: (index: number, value: number) => void;
  // 今後 Token を2つ以上送信する場合に利用
  // onAddRow: MouseEventHandler<HTMLButtonElement>;
  // onRemoveRow: MouseEventHandler<HTMLButtonElement>;
}

interface ItemProps extends Omit<Props, 'items' | 'onAddRow' | 'onRemoveRow'> {
  item: Reward;
  index: number;
}

function Item(props: ItemProps) {
  const handleOnChangeChainType = (e: SelectChangeEvent) => {
    props.onChangeChainType(props.index, e.target.value as ChainTypeEnum);
  };

  const handleOnChangeTokenId = (tokenId: string) => {
    props.onChangeTokenId(props.index, tokenId);
  };

  const handleOnChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = Number(e.currentTarget.value);
    if (num.toString() === 'NaN') {
      num = 0;
    }
    props.onChangeAmount(props.index, num);
  };

  return (
    <div style={{ display: 'flex', gap: '15px', justifyContent: 'stretch', flexWrap: 'wrap' }}>
      <Select
        value={props.item.chain}
        label='chain'
        items={props.chainTypes.map((item) => ({ title: item, value: item }))}
        required={true}
        style={{ flexBasis: '20%', minWidth: '180px', flexGrow: 1 }}
        onChange={handleOnChangeChainType}
      />
      <Autocomplete
        label='token'
        required={true}
        value={props.item.currencyId}
        placeholder='select a token'
        style={{ flexBasis: '20%', minWidth: '180px', flexGrow: 1 }}
        onChange={handleOnChangeTokenId}
        options={props.tokenIdList}
      />
      <TextField
        type='text'
        required={true}
        placeholder='input a amount'
        label='amount'
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        style={{ flexBasis: '30%', minWidth: '200px', flexGrow: 1 }}
        value={props.item.amount}
        onChange={handleOnChangeAmount}
      />
    </div>
  );
}

export default function DynamicForm(props: Props): JSX.Element {
  return (
    <div style={{ width: '100%' }}>
      {props.items.map((item, index) => (
        <Item
          item={item}
          key={index}
          index={index}
          chainTypes={props.chainTypes}
          tokenIdList={props.tokenIdList}
          onChangeAmount={props.onChangeAmount}
          onChangeChainType={props.onChangeChainType}
          onChangeTokenId={props.onChangeTokenId}
        />
      ))}
      {/*
      
      今後 Token を2つ以上送信する場合に利用
      
      <div style={{ textAlign: 'right', marginTop: '15px' }}>
        <ButtonGroup variant='outlined' size='large'>
          {props.items.length < 2 && (
            <Button color='inherit' onClick={props.onAddRow}>
              <MdAdd />
            </Button>
          )}
          {props.items.length > 1 && (
            <Button color='inherit' onClick={props.onRemoveRow}>
              <MdRemove />
            </Button>
          )}
        </ButtonGroup>
      </div> 
      */}
    </div>
  );
}
