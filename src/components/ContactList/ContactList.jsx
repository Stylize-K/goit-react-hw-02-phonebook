import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
