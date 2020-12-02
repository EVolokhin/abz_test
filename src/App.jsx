import React, { useState, useEffect } from 'react';

import { Header } from './Components/Header/Header';
import { Assignment } from './Components/Assignment/Assignment';
import { Acquaintment } from './Components/Acquaintment/Acquaintment';
import { requestUsers } from './Components/api';
import { Users } from './Components/Users/Users';
import { Menu } from './Components/Menu/Menu';
import { SignUp } from './Components/SignUp/SignUp';

import './App.scss';

// import { Switch, Link, Route } from 'react-router-dom';

const fetchUsers = async(usersPage, setUsers, setTotalPages) => {
  const response = await requestUsers(usersPage);
  const data = response.users;
  const totalPages = response.total_pages;

  // eslint-disable-next-line no-console
  console.log(data);

  // setUsers(data);
  // setUsers([...currentUsers, ...data]);
  setUsers(prev => [...prev, ...data]);
  setTotalPages(totalPages);
};

export const App = () => {
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isHideMenu, setIsHideMenu] = useState(true);

  useEffect(() => {
    fetchUsers(usersPage, setUsers, setTotalPages);
  }, [usersPage]);

  const handlePage = () => {
    setUsersPage(prevPage => prevPage + 1);
  };

  const toggleOpen = () => {
    setIsHideMenu(!isHideMenu);
  };

  // console.log(users); // list of users
  // console.log(totalPages) // pages

  return (
    <>
      <Header toggleOpen={toggleOpen} />

      <Menu isHide={isHideMenu} />

      <Assignment />

      <Acquaintment />

      <Users
        users={users}
        usersPage={usersPage}
        totalPages={totalPages}
        handlePage={handlePage}
      />

      <SignUp setUsers={setUsers} />

      <footer>
        &copy; abz.agency specially for the test task
      </footer>
    </>
  );
};
