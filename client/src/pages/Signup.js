import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

import DarkWave from '../images/logo-wave-dark.png';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="container-fluid h-100">
        <div className="row">

          <div className="col-5 left-fp">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-12 d-flex justify-content-center">
                <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
                  <img className="fp-logo" src={DarkWave} />
                  <h1 className="fp-head"> premix</h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-7 right-fp">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-12">
                <h2 className="form-header pb-5">Sign up</h2>
                <form className="pb-5" onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input
                      className='form-control'
                      name='username'
                      type='username'
                      id='username'
                      value={formState.username}
                      onChange={handleChange}
                    />
                    <label for="email" className="form-label pt-4">Email</label>
                    <input
                      className='form-control'
                      name='email'
                      type='email'
                      id='email'
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3 pb-5">
                    <label for="password" className="form-label">Password</label>
                    <input
                      className="form-control"
                      name='password'
                      type='password'
                      id='password'
                      value={formState.password}
                      onChange={handleChange} />
                  </div>
                  <div class="d-flex justify-content-center">
                    <button className='form-btn' type='submit'>
                      Sign up
                    </button>
                  </div>
                </form>
                {error && <div class="alert alert-danger" role="alert">
                  Sign up Error! Try Again.
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
    // <main className='flex-row justify-center mb-4'>
    //   <div className='col-12 col-md-6'>
    //     <div className='card'>
    //       <h4 className='card-header'>Sign Up</h4>
    //       <div className='card-body'>
    //         <form onSubmit={handleFormSubmit}>
    //           <input
    //             className='form-input'
    //             placeholder='Your username'
    //             name='username'
    //             type='username'
    //             id='username'
    //             value={formState.username}
    //             onChange={handleChange}
    //           />
    //           <input
    //             className='form-input'
    //             placeholder='Your email'
    //             name='email'
    //             type='email'
    //             id='email'
    //             value={formState.email}
    //             onChange={handleChange}
    //           />
    //           <input
    //             className='form-input'
    //             placeholder='Password'
    //             name='password'
    //             type='password'
    //             id='password'
    //             value={formState.password}
    //             onChange={handleChange}
    //           />
    //           <button className='btn d-block w-100' type='submit'>
    //             Submit
    //           </button>
    //         </form>
    //         {error && <div>Sign up failed</div>}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Signup;
