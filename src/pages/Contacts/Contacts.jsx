import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import Title from 'components/Title/Title';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const [notFirstRender, setNotFirstRender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setNotFirstRender(true);
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title mainTitle="Phonebook" />
      <NewContactForm />

      <Title title="Contacts" />
      <Filter />
      {notFirstRender && <ContactList />}
    </>
  );
};

export default Contacts;
