import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../../assets/images/menu.svg';

import { Navbar, Sidebar } from './styles';
import Backdrop from '../Backdrop/Backdrop';

import logo from '../../assets/images/logo.svg';

export default function NavBar() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {}, [opened]);

  const openSidebar = () => {
    setOpened(true);
  };

  const closeSidebar = () => {
    setOpened(false);
  };

  return (
    <Fragment>
      <Navbar>
        <div id='navbar-container'>
          <div id='imageContent'>
            <NavLink to='/'>
              <img src={logo} alt='logo' id='image' />
              <div onClick={openSidebar}>
                <img src={menu} alt='menu' id='menu' />
              </div>
            </NavLink>
          </div>

          <div id='routeContent'>
            <NavLink id='navTitle' to='/team'>
              Equipe
            </NavLink>
            <NavLink id='navTitle' to='/contact'>
              Contato
            </NavLink>
            <NavLink id='navTitle' to='/support'>
              Apoio
            </NavLink>
          </div>
        </div>
      </Navbar>
      <Sidebar>
        <div
          id='content'
          style={{
            transform: opened ? 'translateX(0)' : 'translateX(-100vh)',
          }}
        >
          <div
            id='imageContent'
            style={{ marginBottom: '1.5rem' }}
            onClick={closeSidebar}
          >
            <NavLink to='/'>
              <img src={logo} alt='logo' id='image' />
            </NavLink>
          </div>
          <NavLink id='navTitle' to='/team' onClick={closeSidebar}>
            Equipe
          </NavLink>
          <NavLink id='navTitle' to='/contact' onClick={closeSidebar}>
            Contato
          </NavLink>
          <NavLink id='navTitle' to='/support' onClick={closeSidebar}>
            Apoio
          </NavLink>
        </div>
        <Backdrop show={opened} clicked={closeSidebar} />
      </Sidebar>
    </Fragment>
  );
}
