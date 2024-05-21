import React from 'react';

const BookList = ({ books, deleteBook, startEditing }) => {
  return (
    <div>
      {/* Header */}
      <h1 className='text-center mt-3'>Books</h1>
      {/* Book cards */}
      <div className='row'>
        {books.map(book => (
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 py-3' key={book.id}>
            <div className="card h-100">
              <div className="card-body">
                {/* Book details */}
                <h5 className="card-title">Book Name: {book.title}</h5>
                <h6>Author: {book.author}</h6>
                <h6>ISBN: {book.isbn}</h6>
                <h6>Published on: {book.publicationDate}</h6>
                {/* Buttons for deleting and editing */}
                <div className='d-flex justify-content-center gap-3 mt-3'>
                  {/* Delete button */}
                  <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>
                  {/* Edit button */}
                  <button className="btn btn-primary" onClick={() => startEditing(book)}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
