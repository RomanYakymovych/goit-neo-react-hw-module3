import Contact from '../Contact/Contact.jsx'
import css from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          <Contact contact={contact} onDeleteContact={onDeleteContact}/>
        </li>
      ))}
    </ul>
  )
}

export default ContactList