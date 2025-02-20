import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <div className="content"><h1>Welcome to My React Learning Project</h1>
<p>
  This webpage was developed as part of my Bachelor in <strong>Information Technology</strong> (BCT) program. 
  It showcases my journey of learning and applying modern web development technologies, 
  including <strong>React</strong>, HTML, and CSS. Explore the site to see how I've implemented 
  dynamic components, routing, and responsive design!
</p></div>;
const About = () => <div className="content"> <h2>About This Project</h2>
<p>
  This project was created during my BCT program as a hands-on learning experience. 
  It demonstrates my understanding of <strong>React</strong>, a JavaScript library for building user interfaces, 
  and its core concepts such as component-based architecture, state management, and routing. 
  The goal was to apply theoretical knowledge to a practical project, focusing on clean design, 
  functionality, and user experience.
</p>
<h3>What I Learned</h3>
<ul>
  <li>Building reusable components in React.</li>
  <li>Implementing dynamic routing with React Router.</li>
  <li>Styling with modern CSS for responsive design.</li>
  <li>Managing state and props effectively.</li>
</ul></div>;
const Contact = () => <div className="content">      <h2>Contact Us</h2>
<p>If you have any questions or want to reach out, feel free to contact us using the details below:</p>
<ul>
  <li>Email:  kushaljeet396.com</li>
  <li>Phone: +91 7439387967</li>
  <li>Address: Sodepur Dhankol. kol : 700114</li>
</ul></div>;
const Details = () => <div className="content">
        <p>    This webpage was developed as part of my Bachelor in Information Technology (BCT) program. 
        It showcases my journey of learning and applying modern web development technologies, 
        including <strong>React</strong>, HTML, and CSS. Explore the site to see how I've implemented 
        dynamic components, routing, and responsive design!
      </p>

</div>;

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
      <Link to="/details" className="nav-link">Details</Link>
    </nav>
  );
};

const Routeuse = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routeuse;
