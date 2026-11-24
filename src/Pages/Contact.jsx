
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields!");
      return;
    }
    alert("Your message has been sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="container">

      <h1>Contact Us</h1>

      <p>Email: info@servicehub.com</p>

      <p>Phone: 0300-1234567</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
export default Contact;
