import React, { useState } from 'react';
import BookForm from './BookForm'; // Import the BookForm component
import BookList from './BookList'; // Import the BookList component

function Books() {
  // State to store the list of books
  const [books, setBooks] = useState([]);
  // State to store the book currently being edited
  const [editingBook, setEditingBook] = useState(null);

  // Function to add a new book to the list
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // Function to update an existing book in the list
  const editBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    setEditingBook(null); // Clear the editing state after updating
  };

  // Function to delete a book from the list
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Function to set a book for editing
  const startEditing = (book) => {
    setEditingBook(book);
  };

  return (
    <div className='container mb-3'>
      {/* Header */}
      <h1 className='text-center'>Book Details</h1>
      {/* Book form for adding or editing a book */}
      <BookForm addBook={addBook} editBook={editBook} editingBook={editingBook} />
      {/* Book list for displaying and managing books */}
      <BookList books={books} deleteBook={deleteBook} startEditing={startEditing} />
    </div>
  );
}

export default Books;
