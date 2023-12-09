import { useState } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });


  return (
    <div>
      <input
        value={filterText}
        placeholder="Filter Contact"
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {
          filtered.map((contact, index) => (
            <li key={index}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          ))
        }
      </ul>

      <p>Total Contacts({filtered.lenght})</p>

    </div>
  );
}

export default List;