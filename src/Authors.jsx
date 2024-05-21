import React, { useState } from 'react';
import AuthorForm from './AuthorForm'; // Import AuthorForm component
import AuthorList from './AuthorList'; // Import AuthorList component

function Authors() {
  // State variables to manage authors and editing state
  const [authors, setAuthors] = useState([]); // State for storing authors
  const [editingAuthor, setEditingAuthor] = useState(null); // State for editing author

  // Function to add a new author
  const addAuthor = (author) => {
    setAuthors([...authors, author]); // Add the new author to the authors array
  };

  // Function to edit an existing author
  const editAuthor = (updatedAuthor) => {
    // Map through the authors array and update the author with the matching id
    setAuthors(authors.map(author => author.id === updatedAuthor.id ? updatedAuthor : author));
    setEditingAuthor(null); // Reset editing state after editing
  };

  // Function to delete an author
  const deleteAuthor = (id) => {
    // Filter out the author with the given id and update the authors array
    setAuthors(authors.filter(author => author.id !== id));
  };

  // Function to start editing an author
  const startEditing = (author) => {
    setEditingAuthor(author); // Set the author to be edited
  };

  return (
    <div className='container mb-3'>
      <h1 className='text-center'>Author Details</h1>
      {/* Render the AuthorForm component */}
      <AuthorForm addAuthor={addAuthor} editAuthor={editAuthor} editingAuthor={editingAuthor} />
      {/* Render the AuthorList component */}
      <AuthorList authors={authors} deleteAuthor={deleteAuthor} startEditing={startEditing} />
    </div>
  );
}

export default Authors;
