import { useState, useEffect } from 'react'
import './styles.css'
import List from './List'
import Form from './Form';

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Ezgi",
      phone_number: "123123123",
      email: "ezgi@gmail.com"
    },
    {
      fullname: "Gizem",
      phone_number: "456456456",
      email: "gizem@gmail.com"
    },
    {
      fullname: "Ece",
      phone_number: "789789789",
      email: "ece@gmail.com"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <div id='container'>
      <h1 className='contact-header'>Contacts List App</h1>

        <Form addContact={setContacts} contacts={contacts} />
      </div>
      <div className='contact-list'>
        <List contacts={contacts} />
      </div>
    </>
  );
}

export default Contacts;