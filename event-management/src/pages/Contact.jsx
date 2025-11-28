import "./CSS/Contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };


  return (
    <div className="contact-page">
      <div className="contact-card">
        {/* LEFT FORM SECTION */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Get In Touch</h1>

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us what's on your mind..."
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message <Send size={18} />
          </button>
        </form>

        {/* RIGHT ILLUSTRATION */}
        <div className="contact-illustration">
          <img
            src="https://images.unsplash.com/photo-1516534775068-bb8534e9a4b9?w=400&h=400&fit=crop"
            alt="Contact Illustration"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
};
