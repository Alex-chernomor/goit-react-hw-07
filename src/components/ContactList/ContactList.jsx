import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectFilteredContacts  } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList(){
  const contacts = useSelector(selectFilteredContacts );
  // const filter = useSelector(selectNameFilter);

  // const contactsList = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

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
