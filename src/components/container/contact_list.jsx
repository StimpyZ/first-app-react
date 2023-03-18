import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponents from '../pure/contact';


const ContactListComponent = () => {

    const defaultUser = new Contact('Jole24', 'stimp', 'example@hotmail.com', true)
    return (
        <div>
            <h1>
                Default user
            </h1>
            <ContactComponents props={defaultUser} ></ContactComponents>
        </div>
    );
};





export default ContactListComponent;
