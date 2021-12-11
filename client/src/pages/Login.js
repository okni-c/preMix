import React, { useState } from 'react';
import Auth from '../utils/auth';
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
      <div className="containter">
        <div className="row">

          <div className="col-5 left-fp">
            <div className="row justify-content-center fp-left-pt">
              <img className="col-2 fp-logo" src={DarkWave} />
              <h1 className="col-10 fp-head">premix</h1>
            </div>
          </div>

          <div className="col-7 right-fp">
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>

        </div>






        {/* <form onSubmit={handleFormSubmit}>
        <input
          className='form-input'
          placeholder='Your email'
          name='email'
          type='email'
          id='email'
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className='form-input'
          placeholder='Password'
          name='password'
          type='password'
          id='password'
          value={formState.password}
          onChange={handleChange}
        />
        <button className='btn d-block w-100' type='submit'>
          Submit
        </button>
      </form>
      {error && <div>Login failed</div>} */}
      </div>
    </main>
  );
};

export default Login;
