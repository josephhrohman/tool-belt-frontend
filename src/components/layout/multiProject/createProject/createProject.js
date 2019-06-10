import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './createProject.css'

const CreateProject = ({ currentUser, history }) => {
  const [ newProject, setNewProject ] = useState({
          title: '',
          image_url: '',
          description: '',
          rating: '',
          category: 'project',
          user: currentUser
        }),
        {title, image_url, description, rating} = newProject;

  const handleChange = (e) => {
        setNewProject({
          ...newProject,
          [e.target.name]: e.target.value
        });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(newProject);
    try {
      await axios.post('http://localhost:4000/api/v1/projects/', newProject, {withCredentials: true});
      console.log('success');
      console.log({newProject});
    } catch(err) {
      console.log('failed')
    };
  };

  return (
    <div className="create-project-body">
      <h3>New Thing!</h3>
      <form className='form-boxes-project' onSubmit={handleCreate}>
        <input className="input-field-project" type="text" onChange={handleChange} value={title} name='title' placeholder="Title" />
        <input className="input-field-project" type="text" onChange={handleChange} value={image_url} name='image_url' placeholder="Image URL" />
        <input className="input-field-project" type="text" onChange={handleChange} value={description} name='description' placeholder="Description" />
        <input className="input-field-project" type="text" onChange={handleChange} value={rating} name='rating' placeholder="Ease of Build Rating (1 - 10)" />
        <input className="input-field-project" type='submit' value='submit' />
      </form>
    </div>
  )
};

export default CreateProject;

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