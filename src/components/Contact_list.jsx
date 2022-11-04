import React, { useState } from "react";
import { Contact } from "../models/contact.class";
import ContactComponent from "./pure/ContactComponent.jsx";
import ContactForm from "./pure/forms/ContactForm";

const ContactList = () => {
  //Creamos la lista de contactos
  const Contact1 = new Contact(
    "Santiago",
    "Cubides",
    "scubides@contactapp.com",
    true
  );

  const Contact2 = new Contact(
    "Alejandro",
    "Cubides",
    "acubides@contactapp.com",
    true
  );

  const Contact3 = new Contact(
    "María Camila",
    "Ariza",
    "mariza@contactapp.com",
    true
  );

  const Contact4 = new Contact(
    "Valeria",
    "Pérez",
    "scubides@contactapp.com",
    true
  );

  const [contacts, setcontacts] = useState([
    Contact1,
    Contact2,
    Contact3,
    Contact4,
  ]);

  const contactConect = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].conected = !tempContacts[index].conected;
    setcontacts(tempContacts);
  };

  const contactRemove = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setcontacts(tempContacts);
  };

  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setcontacts(tempContacts);
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div>
          <h3 className="my-4">My Contacts</h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {contacts.map((contact, index) => {
              return (
                <ContactComponent
                  contact={contact}
                  remove={contactRemove}
                  conect={contactConect}
                  key={index}
                ></ContactComponent>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="my-4">New Contact</h3>
          <ContactForm add={addContact}></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
