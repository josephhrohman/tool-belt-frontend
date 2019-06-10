import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './createTool.css'

const CreateTool = ({ currentUser }) => {
  const [ newTool, setNewTool ] = useState({
          title: '',
          image_url: '',
          description: '',
          toolBelt: 'False',
          category: 'tool',
          user: currentUser,
        }),
        {title, image_url, description,} = newTool;

  const handleToolBelt = async (e) => {
        if (newTool.toolBelt == 'false'){
          setNewTool({...newTool, toolBelt: 'true'});
        } else {
          setNewTool({...newTool, toolBelt: 'false'});
        }
        console.log(newTool)
  };

  const handleChange = (e) => {
        setNewTool({
          ...newTool,
          [e.target.name]: e.target.value
        });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    // setNewTool({...newTool, user_id: {currentUser}});
    try {
      await axios.post('https://toolbelt-backend.herokuapp.com/api/v1/tools/', newTool, {withCredentials: true});
      console.log('success');
      console.log({newTool});
    } catch(err) {
      console.log('failed');
    };
  };

  return (
    <div className="create-tool-body">
      <h3>New Thing!</h3>
      <form className='form-boxes' onSubmit={handleCreate}>
        <input className="inputField" type="text" onChange={handleChange} value={title} name='title' placeholder="Title" />
        <input className="inputField" type="text" onChange={handleChange} value={image_url} name='image_url' placeholder="Image URL" />
        <input className="inputField" type="text" onChange={handleChange} value={description} name='description' placeholder="Description" />
        <div className="check-box" onClick={handleToolBelt}>target</div>
        <input className="inputField" type='submit' value='submit' />
      </form>
    </div>
  )
};

export default CreateTool;

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