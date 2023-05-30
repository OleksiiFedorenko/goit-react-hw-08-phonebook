import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        value={filter}
        onChange={handleFilterChange}
        type="text"
        placeholder="Find contacts by name"
        variant="filled"
        mb="12px"
      />
    </InputGroup>
  );
};

export default Filter;
