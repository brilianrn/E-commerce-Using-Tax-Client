import React, { useState } from 'react';
import { Loading } from '../components';
import baseUrl from '../api';
import { loginAsync } from '../store/actions/userAction';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const url = baseUrl + '/user/login';
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });

  function handleOnChange(event) {
    if (event.target.id === 'email') {
      setUserLogin({ ...userLogin, email: event.target.value });
    } else if (event.target.id === 'password') {
      setUserLogin({ ...userLogin, password: event.target.value });
    }
  }

  function login(event) {
    setLoading(true);
    event.preventDefault();
    loginAsync({
      payload: userLogin,
      url,
      setLoading,
      history
    })
  }

  function toRegister(params) {

  }
  return (
    <div className='container h-100'>
      <div className="card mb-3 shadow" style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto', marginTop: '3cm' }}>
        <div className="row g-0">
          <div className="col-md-4" style={{ display: 'flex', margin: 'auto' }}>
            <img src="https://us.123rf.com/450wm/aquir/aquir1507/aquir150702016/42252019-challenge-round-orange-grungy-vintage-isolated-stamp.jpg?ver=6" alt="login-logo" style={{ width: '20em', display: 'flex', margin: 'auto' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <form className='ml-5'>
                <p className='h2 text-center mt-2'>Sign In</p>
                {loading ? <Loading /> :
                  <>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" onChange={handleOnChange} aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text">
                        <span>
                          <i>
                            We'll never share your email with anyone else.
                      </i>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" onChange={handleOnChange} />
                    </div>
                    <button type="submit" className="btn btn-primary form-control" onClick={(event) => { login(event) }}>Sign In</button>
                    <div id="emailHelp" className="form-text">
                      <span>
                        <i>
                          You don't have an account? <a href="#" onClick={(event) => { toRegister(event) }}>Sign Up?</a>
                        </i>
                      </span>
                    </div>
                  </>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
