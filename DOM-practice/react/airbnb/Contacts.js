import React from "react";

export default function Contacts(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.cName}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
