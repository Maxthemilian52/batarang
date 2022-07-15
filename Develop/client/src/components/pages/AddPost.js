import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations/mutations';

const AddPost = () => {
    const [formState, setFormState] = useState({
        title: '',
        postContent: '',
    });

    const [createPost, {error, data}] = useMutation(ADD_POST);
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await createPost({
                variable: { ...formState },
            })
            Auth.loggedIn();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="signupPage mb-4">
      <div className="signupCenter">
        <div className="card">
          <h4 className="signupHeader card-header p-2">Add Post</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/posts">back to posts.</Link>
              </p>
            ) : (
              <form className='postForm' onSubmit={handleFormSubmit}>
                <div className='postForm'>
                <h6>Title:</h6>
                <input
                  className="form-input"
                  placeholder="*Title"
                  name="title"
                  type="text"
                  value={formState.title}
                  onChange={handleChange}
                />
                <h6>Content:</h6>
                <textarea
                  
                  className="form-input"
                  placeholder="*Post Content"
                  name="postContent"
                  type="text"
                  value={formState.postContent}
                  onChange={handleChange}
                />
                </div>
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
            </form>
            )}
            {error && (
                <div className='my-3 p-3 bg-danger text-white'> 
                    {error.message}
                </div>
            )}
        </div>
    </div> 
    </div>
</main>   
    )
}

export default AddPost;