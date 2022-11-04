import React from "react";
import { useRef } from "react";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ add }) => {
  const formRef = useRef();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const lastnameRef = useRef("");

  const addContact = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastnameRef.current.value,
      emailRef.current.value,
      true
    );

    add(newContact);
    formRef.current.reset();
  };

  return (
    <form className="text-start" onSubmit={addContact} ref={formRef}>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputname"
          ref={nameRef}
          placeholder="Contact Name"
          required
          autoFocus
        />
        <label htmlFor="inputName" className="form-label">
          Lastname
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastname"
          ref={lastnameRef}
          placeholder="Contact Lastname"
          required
        />
        <label htmlFor="inputLastname" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          ref={emailRef}
          placeholder="Contact Email"
          required
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
