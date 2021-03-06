import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    team: '',
    position: '',
    gradYear: '',
    password: '',

  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data }  = await addProfile({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="signupPage mb-4">
      <div className="signupCenter">
        <div className="card">
          <h4 className="signupHeader card-header p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className='signupForm' onSubmit={handleFormSubmit}>
                <div className='signupForm'>
                  <h6>First Name:</h6>
                <input
                  className="form-input"
                  placeholder="*First Name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <br></br>
                <h6>Last Name:</h6>
                <input
                  className="form-input"
                  placeholder="*Last Name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <h6>Email:</h6>
                <input
                  className="form-input"
                  placeholder="*Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <h6>Phone #:</h6>
                <input
                  className="form-input"
                  placeholder="*Phone #"
                  name="phone"
                  type="text"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <h6>Address:</h6>
                <input
                  className="form-input"
                  placeholder="*Address"
                  name="address"
                  type="text"
                  value={formState.address}
                  onChange={handleChange}
                />
                <h6>Team:</h6>
                <input
                  className="form-input"
                  placeholder="*Team"
                  name="team"
                  type="text"
                  value={formState.team}
                  onChange={handleChange}
                />
                <h6>Position:</h6>
                <input
                  className="form-input"
                  placeholder="*Position"
                  name="position"
                  type="text"
                  value={formState.position}
                  onChange={handleChange}
                />
                <h6>Grad Year:</h6>
                <input
                  className="form-input"
                  placeholder="*gradYear"
                  name="gradYear"
                  type="text"
                  value={formState.gradYear}
                  onChange={handleChange}
                />
                <h6>Password:</h6>
                <input
                  className="form-input"
                  placeholder="*password*"
                  name="password"
                  type="password"
                  value={formState.password}
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
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
