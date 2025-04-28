import React, { useState, useRef } from "react";
import "../assets/styles/contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!email.includes("@")) {
      setEmailError('ემაილი უნდა შეიცავდეს "@"');
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.length === 0) {
      setMessageError("შეტყობინება ცარიელია !");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      setLoading(true);
      setSuccessMessage("");

      emailjs
        .sendForm(
          "service_or73v95",
          "template_dffqf45",
          form.current,
          "6aq9ar3cBe44qnoqn"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setSuccessMessage("შეტყობინება წარმატებით გაიგზავნა ✅");
            setEmail("");
            setMessage("");
            setTimeout(() => {
              setSuccessMessage("");
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            setSuccessMessage("შეცდომა მოხდა, სცადეთ ხელახლა ❌");
          }
        );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setEmailError("");
      return;
    }
  };
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setMessageError("");
    }
  };
  return (
    <section className="contact">
      <form ref={form} className="form" onSubmit={submit}>
        {loading && <p className="loading-message">იტვირთება...</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="flex">
          {emailError && <p className="email-error">{emailError}</p>}
          <label htmlFor="Email">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            placeholder="Email"
            name="Email"
            id="Email"
          />
        </div>
        <div className="flex">
          {messageError && <p>{messageError}</p>}
          <label htmlFor="textarea">შეტყობინება</label>
          <textarea
            value={message}
            onChange={handleTextareaChange}
            name="message"
            id="textarea"
          ></textarea>
        </div>
        <button id="btn" type="submit">
          გაგზავნა
        </button>
      </form>
    </section>
  );
}
