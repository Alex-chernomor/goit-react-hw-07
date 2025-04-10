import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectFilteredContacts  } from '../../redux/contactsSlice';

export default function ContactList(){
  const contacts = useSelector(selectFilteredContacts );

    return (
    <ul className={css.contactLst}>      
       {
              contacts.map((contact)=>{
              return <Contact       
              id = {contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
              />
              }) 
        }
    </ul>
  )
}
