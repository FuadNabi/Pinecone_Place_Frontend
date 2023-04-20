import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../home.css';

function Navigate() {
  const [isActive, setIsActive] = useState(false);
  function openNav() {
    setIsActive(true);
  }

  function closeNav() {
    setIsActive(false);
  }
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <>
      <div className="navbar">
        <button className="open" style={{ fontSize: '30px', cursor: 'pointer' }} type="button" onClick={openNav}>&#9776;</button>
        <nav
          id="mySidenav"
          className="sidenav"
          style={
          {
            width: isActive ? '250px' : '0px',
          }
        }
        >

          <ul className="nav-item">
            <li>
              <h1>Coco</h1>
            </li>
            <li>
              <button type="button" className="closebtn" onClick={closeNav}>&times;</button>
            </li>
            <li>
              <Link to="../add_room">Add Room</Link>
            </li>
            <li>
              <Link to="../delete">Delete Room</Link>
            </li>
            <li>
              <Link to="../reservations">Reservations</Link>
            </li>
            <li>
              <Link to="../reserve">Reserve Room</Link>
            </li>
            <li>
              <button onClick={signOut} type="button" className="signout">
                SignOut
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigate;
