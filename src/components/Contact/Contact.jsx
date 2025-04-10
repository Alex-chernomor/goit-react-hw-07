import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({id, name, number}) {
  const dispatch = useDispatch();

    return (
    <li key={id} className={css.contact}>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
        <button onClick={()=>dispatch(deleteContact(id))}>Delete</button>
    </li>
  )
}
