import React, { useReducer } from 'react';

const blogContext = React.createContext();
let counter = 0;

const defaultBlogs = [
];

const blogReducer = ( state, action ) => {
    switch (action.type) {
        case "addAutoBlog":
            counter += 1;
            const newBlog = {
                title: `Blog #${counter}`,
                content: 'No content for now.',
                id: `blog#${counter}`
            }
            return [ ...state, newBlog];
        case "addBlog":
            counter += 1;
            const customBlog = { ...action.newBlog, id: `blog#${counter}`};
            return [...state, customBlog];
        case 'editBlog':
            const editList = [...state];
            const editThisList = editList.find(blog => blog.id === action.newBlog.id);
            editThisList.title = action.newBlog.title;
            editThisList.content = action.newBlog.content;
            return editList;
        case "deleteItem":
            return state.filter(blog => blog.id !== action.id)
        default:
            return state;
    }
}

export const BlogProvider = (props) => {
    const [ state, dispatch ] = useReducer(blogReducer, defaultBlogs);
    return (
        <blogContext.Provider value={{ state, dispatch }}>
            {props.children}
        </blogContext.Provider>
    )
}

export default blogContext;