import React from 'react';

const AuthorList = ({ authors, deleteAuthor, startEditing }) => {
  return (
    <div>
      {/* Header */}
      <h2 className='text-center mt-3'>Authors</h2>
      {/* Author cards */}
      <div className='row'>
        {/* Map through the authors array and render each author as a card */}
        {authors.map(author => (
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 py-3' key={author.id}>
            <div className="card h-100">
              <div className='card-body'>
                {/* Author details */}
                <h5>Name: {author.name}</h5>
                <h6>Born on: {author.birthDate}</h6>
                <p>Biography: {author.biography}</p>
                {/* Buttons for deleting and editing */}
                <div className='d-flex justify-content-center gap-3 mt-3'>
                  {/* Delete button */}
                  <button className="btn btn-danger" onClick={() => deleteAuthor(author.id)}>Delete</button>
                  {/* Edit button */}
                  <button className="btn btn-primary" onClick={() => startEditing(author)}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
