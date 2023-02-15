import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "message") {
      setmessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    console.log(data);
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Submitted!");
        setname("");
        setemail("");
        setmessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className={styles.mb3} controlId="formBasicName">
            <Form.Label className={styles.formlabel}>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              className={styles.control}
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group className={styles.mb3} controlId="formBasicEmail">
            <Form.Label className={styles.formlabel}>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              className={styles.control}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className={styles.mb3} controlId="formBasicMessage">
            <Form.Label className={styles.formlabel}>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows={3}
              value={message}
              onChange={handleChange}
              className={styles.control}
              placeholder="Enter message"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" onChange={handleChange} className={styles.btn}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contact;
