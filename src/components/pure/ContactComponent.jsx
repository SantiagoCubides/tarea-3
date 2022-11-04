import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact, conect, remove }) => {
  const contactConected = () => {
    if (contact.conected) {
      return <p className="text-success m-0">Conected</p>;
    } else {
      return <p className="text-secondary m-0">Disconected</p>;
    }
  };

  const btnConect = () => {
    if (contact.conected) {
      return <i className="bi bi-lightbulb-off"></i>;
    } else {
      return <i className="bi bi-lightbulb"></i>;
    }
  };

  const classConect = () => {
    if (contact.conected) {
      return "btn btn-secondary";
    } else {
      return "btn btn-success";
    }
  };

  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">
              {contact.name} {contact.lastname}
            </h5>
            <ul className="list-group">
              <li className="list-group-item">Email: {contact.email}</li>
              <li className="list-group-item">{contactConected()}</li>
            </ul>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className={classConect()}
              onClick={() => conect(contact)}
            >
              {btnConect()}
            </button>
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={() => remove(contact)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  conect: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactComponent;
