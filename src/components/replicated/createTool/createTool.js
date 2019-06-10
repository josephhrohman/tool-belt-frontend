import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './createTool.css'

const CreateTool = ({ currentUser }) => {
  const [ newTool, setNewTool ] = useState({
          title: '',
          image_url: '',
          description: '',
          rating: '',
          toolBelt: 'False',
          category: 'tool',
          user: currentUser,
        }),
        {title, image_url, description, rating} = newTool;

  const handleToolBelt = async (e) => {
        if (newTool.toolBelt == 'false'){
          setNewTool({...newTool, toolBelt: 'true'});
          document.getElementById("check-box").classList.add('check-box-on');
          console.log(newTool)
        } else {
          setNewTool({...newTool, toolBelt: 'false'});
          document.getElementById("check-box").classList.add('check-box-off');
          console.log(newTool)
        }
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
      await axios.post('http://localhost:4000/api/v1/tools/', newTool, {withCredentials: true});
      console.log('success');
      console.log({newTool});
    } catch(err) {
      console.log('failed');
    };
  };

  return (
    <div className="create-tool-body">
      <h3 className="create-tool-title">New Tool!</h3>
      <form className='form-boxes-tool' onSubmit={handleCreate}>
        <input className="input-field-tool" type="text" onChange={handleChange} value={title} name='title' placeholder="Title" />
        <input className="input-field-tool" type="text" onChange={handleChange} value={image_url} name='image_url' placeholder="Image URL" />
        <input className="input-field-tool" type="text" onChange={handleChange} value={description} name='description' placeholder="Description" />
        <input className="input-field-tool" type="text" onChange={handleChange} value={rating} name='rating' placeholder="Ease of Use Rating (1 - 10)" />
        <div className="check-box-off" id="check-box" onClick={handleToolBelt}>Tool Belt</div>
        <input className="input-field-tool" type='submit' value='submit' />
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