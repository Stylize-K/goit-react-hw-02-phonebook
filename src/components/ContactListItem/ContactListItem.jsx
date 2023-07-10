import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape(
    { id: PropTypes.string.isRequired },
    { name: PropTypes.string.isRequired },
    { number: PropTypes.string.isRequired }
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
