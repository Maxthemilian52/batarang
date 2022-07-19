import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations/mutations';

const CommentForm = ({ postId }) => {
  const [commentBody, setcommentBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { postId, commentBody },
      });

      setcommentBody('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentBody' && value.length <= 280) {
      setcommentBody(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center w-100'>
      <h4>What are your thoughts on this thought?</h4>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="w-100"
        onSubmit={handleFormSubmit}
      >
        <div className=" w-100">
          <textarea
            name="commentBody"
            placeholder="Add your comment..."
            value={commentBody}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-light py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
