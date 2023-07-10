export const ContactListItem = ({ contact }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
    </li>
  );
};
