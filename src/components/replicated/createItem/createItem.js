import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './createItem.css'

const CreateItem = ({ currentUser }) => {
  const [ newItem, setNewItem ] = useState({
          title: '',
          image_url: '',
          description: '',
          user_id: currentUser
        }),
        {title, image_url, description,} = newItem;

  const handleChange = (e) => {
        setNewItem({
          ...newItem,
          [e.target.name]: e.target.value
        });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(newItem);
    try {
      await axios.post('http://localhost:4000/api/v1/projects/', newItem, {withCredentials: true});
      console.log('success');
      console.log(newItem);
    } catch(err) {
      console.log('failed')
    };
  };

  return (
    <div className="create-item-body">
      <h3>New Thing!</h3>
      <form className='form-boxes' onSubmit={handleCreate}>
        <input className="inputField" type="text" onChange={handleChange} value={title} name='title' placeholder="Title" />
        <input className="inputField" type="text" onChange={handleChange} value={image_url} name='image_url' placeholder="Image URL" />
        <input className="inputField" type="text" onChange={handleChange} value={description} name='description' placeholder="Description" />
        <input className="inputField" type='submit' value='submit' />
      </form>
    </div>
  )
};

export default CreateItem;

// onSubmit={handleSignUp}


  // useEffect(() => {
  //   console.table(allProjects);
  //   getProjects();
  //   console.table(allProjects);
  // }, []);

  // const getProjects = async () => {
  //   const response = await axios.get(`http://localhost:4000/api/v1/projects`);
  //   console.table(response.data);
  //   setAllProjects(response.data);
  //   console.table({allProjects});
  // }