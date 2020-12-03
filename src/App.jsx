import React, { useState, useEffect } from 'react';

import { Header } from './Components/Header/Header';
import { Assignment } from './Components/Assignment/Assignment';
import { Acquaintment } from './Components/Acquaintment/Acquaintment';
import { requestUsers } from './Components/api';
import { Users } from './Components/Users/Users';
import { Menu } from './Components/Menu/Menu';
import { SignUp } from './Components/SignUp/SignUp';

import './App.scss';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isHideMenu, setIsHideMenu] = useState(true);
  const [usersOnPage, setUsersOnPage] = useState(6);

  window.addEventListener('resize', () => {
    const contorlWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (contorlWidth < 400) {
      setUsersOnPage(3);
    }

    if (contorlWidth > 410) {
      setUsersOnPage(6);
    }
  });

  useEffect(() => {
    fetchUsers(usersPage, setUsers, setTotalPages, usersOnPage, setUsersOnPage);
  }, [usersPage]);

  useEffect(async() => {
    const response = await requestUsers(usersPage, usersOnPage);
    const data = response.users;
    const Pages = response.total_pages;

    setUsers(data);
    setTotalPages(Pages);
  }, [usersOnPage]);

  const handlePage = () => {
    setUsersPage(prevPage => prevPage + 1);
  };

  const toggleOpen = () => {
    setIsHideMenu(!isHideMenu);
  };

  return (
    <>
      <Header toggleOpen={toggleOpen} />

      <Menu isHide={isHideMenu} toggleOpen={toggleOpen} />

      <Assignment />

      <Acquaintment />

      <Users
        users={users}
        usersPage={usersPage}
        totalPages={totalPages}
        handlePage={handlePage}
      />

      <SignUp setUsers={setUsers} />

      <footer className="footer">
        &copy; abz.agency specially for the test task
      </footer>
    </>
  );
};

const fetchUsers = async(
  usersPage,
  setUsers,
  setTotalPages,
  usersOnPage,
) => {
  const response = await requestUsers(usersPage, usersOnPage);
  const data = response.users;
  const totalPages = response.total_pages;

  setUsers(prev => [...prev, ...data]);
  setTotalPages(totalPages);
};
