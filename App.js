import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { BlogProvider } from './src/Context/BlogContext';
import BlogList from './src/Screens/BlogList/BlogList';
import EditBlog from './src/Screens/EditBlog/EditBlog';
import NewBlog from './src/Screens/NewBlog/NewBlog';

const navigator = createStackNavigator({
  BlogList,
  EditBlog,
  NewBlog
}, {
  initialRouteName: 'BlogList',
  defaultNavigationOptions: {
    title: 'Blog List',
    theme: 'dark'
  }
});

const App = createAppContainer(navigator);


export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}