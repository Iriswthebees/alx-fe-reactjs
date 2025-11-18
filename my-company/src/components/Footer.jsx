import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "purple",
    color: "lilac",
    padding: "20px",
    textAlign: "center",
    marginTop: "40px",
  };

  const linkStyle = {
    color: "lilac",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "10px",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 My Company. All rights reserved.</p>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/services" style={linkStyle}>Services</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
