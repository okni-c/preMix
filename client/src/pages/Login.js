import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import DarkWave from '../images/logo-wave-dark.png';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="container-fluid h-100">
        <div className="row">

          <div className="col-5 left-fp">
            <div className="row h-100 justify-content-center">

              <div className="col-12 d-flex justify-content-center align-items-center pt-5">
                <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
                  <img className="fp-logo" src={DarkWave} />
                  <h1 className="fp-head"> premix</h1>
                </Link>
              </div>

              
              
              <div className="col-12 pt-5">
                <h5 className="form-extra pb-3 d-flex justify-content-center">Don't have an account?</h5>
                <Link to="/signup" className="d-flex justify-content-center" style={{ textDecoration: 'none' }}><button className="form-btn">Sign up</button></Link>
              </div>

            </div>
          </div>

          <div className="col-7 right-fp">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-12">
                <h2 className="form-header pb-5">Log in</h2>
                <form className="pb-5" onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
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
                      Log in
                    </button>
                  </div>
                </form>
                {error && <div class="alert alert-danger" role="alert">
                  Login Error! Try Again.
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Login;
