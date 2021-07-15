import React, {createContext, useReducer, useMemo} from 'react';

export const BlogContext = createContext();

const addBlog = (blog, state) => {
  const newBlog = {id: new Date().toISOString(), ...blog};
  return {...state, blogList: [...state.blogList, newBlog]};
};

const deleteBlog = (blog, state) => {
  return {
    ...state,
    blogList: state.blogList.filter(item => item.id !== blog.id),
  };
};

const editBlog = (blog, state) => {
  return {
    ...state,
    blogList: state.blogList.map(item =>
      item.id === blog.id ? {...item, ...blog} : item,
    ),
  };
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'create':
      return addBlog(action.payload, state);
    case 'delete':
      return deleteBlog(action.payload, state);
    case 'edit':
      return editBlog(action.payload, state);
    default:
      return state;
  }
};

const BlogProvider = ({children}) => {
  const [state, dispatch] = useReducer(blogReducer, {blogList: []});

  const blogValue = useMemo(
    () => ({
      createBlog: blog => dispatch({type: 'create', payload: blog}),
      editBlog: blog => dispatch({type: 'edit', payload: blog}),
      deleteBlog: blog => dispatch({type: 'delete', payload: blog}),
    }),
    [],
  );

  return (
    <BlogContext.Provider value={{...blogValue, blogList: state.blogList}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
