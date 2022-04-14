import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [userList, setUserList] = useState([]);
  const [filteredUsers, setFilterUsers] = useState(userList);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUserList(users));
  }, []);

  useEffect(() => {
    const newFilteredUsers = userList.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterUsers(newFilteredUsers);
  }, [userList, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  console.log(userList)

  return (
    <div className='container'>
    <div className='header col-md-12'>
      <h1 className=''>Users List</h1>

      <input
        className='border border-4'
        onChange={onSearchChange}
        placeholder='search users'
      />
      </div>
      <CardList userList={filteredUsers} />
    </div>
  );
};

export default App;
