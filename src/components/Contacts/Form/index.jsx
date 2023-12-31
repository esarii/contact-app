import { useEffect, useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "", email: "" };

function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "" || form.email === "") {
            return false;
        }

        addContact([...contacts, form]);

    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="fullname"
                    value={form.fullname}
                    placeholder="Full Name"
                    onChange={onChangeInput} />
            </div>
            <div>
                <input
                    name="phone_number"
                    value={form.phone_number}
                    placeholder="Phone Number"
                    onChange={onChangeInput} />
            </div>
            <div>
                <input
                    name="email"
                    value={form.email}
                    placeholder="Email"
                    onChange={onChangeInput} />
            </div>
            <div className='btn'>
                <button>Add Contact</button>
            </div>
        </form>
    );
}

export default Form;