import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div
      style={{
        backgroundColor: 'lavender',
        padding: '30px',
        borderRadius: '10px',
        margin: '20px',
      }}
    >
      <h1 style={{ color: 'purple' }}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            height: '120px',
          }}
        />

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
