import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  function changePage({ event, destination }) {
    event.preventDefault();
    history.push('/' + destination);
  }

  function logout(event) {
    event.preventDefault();
    localStorage.removeItem('name');
    localStorage.removeItem('access_token');
    history.push('/login');
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container-fluid">
        <a onClick={(event) => { changePage({ event, destination: '' }) }} class="navbar-brand" href="#">
          <img style={{ width: '100px' }} src="https://www.thegeographeronline.net/uploads/2/6/6/2/26629356/published/the-challenge.png?1530071546" alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="nav justify-content-center">
            <NavLink exact to='/' className='nav-item menu-list' activeClassName='up-navbar'>
              <a href='#' class="nav-link text text-dark">Home</a>
            </NavLink>
            {/* <NavLink to='/my-profile' className='nav-item menu-list' activeClassName='up-navbar'>
              <a href='#' class="nav-link text text-dark">MyProfile</a>
            </NavLink> */}
            <NavLink to='/my-cart' className='nav-item menu-list' activeClassName='up-navbar'>
              <a href='#' class="nav-link text text-dark">MyCart</a>
            </NavLink>
            <NavLink to='/checkout' className='nav-item menu-list' activeClassName='up-navbar'>
              <a href='#' class="nav-link text text-dark">Checkout</a>
            </NavLink>
          </ul>
        </div>
        <div>
          {!localStorage.name ? <></> :
            <>
              <i>Hi,</i>
              <a href="#" className='mr-2 ml-1 badge rounded-pill text-light' style={{ fontSize: '15px', backgroundColor: '#f94d49', textDecoration: 'none', marginRight: '10px', marginLeft: '5px' }} onClick={(event) => { changePage({ event, destination: 'my-profile' }) }}>{localStorage.name}</a>
            </>
          }
          {localStorage.access_token ? <button className="btn btn-outline-danger my-2 my-sm-0 mr-4" type="submit" onClick={(event) => { logout(event) }}>Logout</button> :
            <button className="btn btn-outline-info my-2 my-sm-0 mr-4" type="submit" onClick={(event) => { changePage({ event, destination: 'login' }) }}>Sign In</button>
          }
        </div>
      </div>
    </nav >
  )
}

{/* <nav class="navbar fixed-top navbar-light bg-light shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img style={{ width: '100px' }} src="https://www.thegeographeronline.net/uploads/2/6/6/2/26629356/published/the-challenge.png?1530071546" alt="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="nav justify-content-center">
        <NavLink exact to='/' className='nav-item menu-list' activeClassName='up-navbar'>
          <p class="nav-link">Home</p>
        </NavLink>
        <NavLink to='/my-profile' className='nav-item menu-list' activeClassName='up-navbar'>
          <p class="nav-link">MyProfile</p>
        </NavLink>
        <NavLink to='/my-cart' className='nav-item menu-list' activeClassName='up-navbar'>
          <p class="nav-link">MyCart</p>
        </NavLink>
        <NavLink to='/checkout' className='nav-item menu-list' activeClassName='up-navbar'>
          <p class="nav-link">Checkout</p>
        </NavLink>
      </ul>
    </div>
  </div>
</nav> */}
