import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Dashboard from './Dashboard';
import Books from './Books';
import Authors from './Authors';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <Router>
      {/* Navbar for navigation */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" className='mx-4'>Library Admin</Navbar.Brand>
        <Nav className="mr-auto">
          {/* Navigation links */}
          <Nav.Link href="/books">Books</Nav.Link>
          <Nav.Link href="/authors">Authors</Nav.Link>
        </Nav>
      </Navbar>
      
      {/* Container for the main content */}
      <Container className="mt-4">
        {/* Define routes for the application */}
        <Routes>
          {/* Route for the dashboard page */}
          <Route path="/" element={<Dashboard />} />
          {/* Route for the books management page */}
          <Route path="/books" element={<Books />} />
          {/* Route for the authors management page */}
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
