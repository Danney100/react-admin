import React from 'react';
import Dashboard from './components/Dashboard.js';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/Users.js';
import { PostList, PostEdit, PostCreate } from './components/Posts.js';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './components/authProvider';
// import dataProvider from './components/dataProvider'
  
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <Admin
     dashboard={Dashboard}
     dataProvider={dataProvider}
     authProvider={authProvider}
    >
      <Resource name="users" list={UserList}  icon={UserIcon} />
      <Resource name="posts" list={PostList} edit={PostEdit} crate={PostCreate} icon={PostIcon} />
    </Admin>
  );
}

export default App;
