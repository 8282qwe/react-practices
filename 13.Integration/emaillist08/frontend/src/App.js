import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

import data from './assets/json/data.js';

function App() {
    const [emails, setEmails] = useState(data);

    const searchEmail = (keyword) => {
        setEmails(data.filter(({firstName, lastName, email}) =>
            firstName.toLowerCase().includes(keyword.toLowerCase()) ||
            lastName.toLowerCase().includes(keyword.toLowerCase()) ||
            email.toLowerCase().includes(keyword.toLowerCase())));
    }

    const addEmail = (firstName, lastName, email) => {
        setEmails((prevEmails) => {
            const newId = prevEmails.length > 0 ? Math.max(...prevEmails.map(e => e.id)) + 1 : 1;
            return [
                ...prevEmails,
                {id: newId, firstName, lastName, email}
            ];
        });
    }


    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail} />
            <SearchBar searchEmail={searchEmail}/>
            <Emaillist emails={emails}/>
        </div>
    );
}

export default App;