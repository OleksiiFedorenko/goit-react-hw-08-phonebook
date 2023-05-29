import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik } from 'formik';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactValidationSchema } from 'common/validation';
import {
  ContactForm,
  Label,
  Input,
  FormError,
  Button,
} from './NewContactForm.styled';

const NewContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      toast.warn(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    toast.success(`${name} is added to contacts.`);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      <ContactForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" component="div" />
        </Label>

        <Label>
          Phone number
          <Input type="tel" name="number" />
          <FormError name="number" component="div" />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

export default NewContactForm;
