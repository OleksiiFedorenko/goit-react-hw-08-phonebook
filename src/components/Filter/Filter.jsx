import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input
      value={filter}
      onChange={handleFilterChange}
      type="text"
      placeholder="Find contacts by name"
      variant="filled"
      mb="12px"
    />
  );
};

export default Filter;
