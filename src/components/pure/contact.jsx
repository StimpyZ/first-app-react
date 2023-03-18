import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponents = ({props}) => {
    return (
        <div>
            <p>
                Tu nombre es: {props.name}
            </p>

            <p>
                Tu apellido es: {props.lastName}
            </p>

            <p>
                Tu e-mail es: {props.eMail}
            </p>

            <p>
                Estado: {props.conected ? 'Contacto en Linea' : 'Contacto no disponible'}
            </p>
        </div>
    );
};


ContactComponents.propTypes = {
    props: PropTypes.instanceOf = Contact
};


export default ContactComponents;
