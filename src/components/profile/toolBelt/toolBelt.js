import React from 'react';
import './toolBelt.css'

function ToolBelt({toolBelt}) {
  return(
    <div className="profile-block">
      <img src={toolBelt.image_url} alt="Profile Block Component" className="profile-block-img"/>
      <p className="profile-text">{toolBelt.title}</p>
      <p className="profile-text">{toolBelt.description}</p>
      <p className="profile-text">{toolBelt.user_id ? toolBelt.user_id.name : null}</p>
      <p className="profile-text">{toolBelt.tool_id}</p>
      <p className="profile-text">{toolBelt.creation_date}</p>
    </div>
  )
}

export default ToolBelt;