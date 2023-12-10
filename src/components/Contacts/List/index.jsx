import { useState } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log(filtered);


  return (
    <div>
      <input
        value={filterText}
        placeholder="Filter Contact"
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        <li>
          <h4>Full Name</h4>
          <h4>Phone Number</h4>
          <h4>Email Address</h4>
        </li>
        {
          filtered.map((contact, index) => (
            <li key={index}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
              <span>{contact.email}</span>
            </li>
          ))
        }
      </ul>

      <p>Total Contacts
        <strong className='count'>
          {filtered.length}
        </strong>
      </p>

    </div>
  );
}

export default List;