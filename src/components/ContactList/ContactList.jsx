import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
