import * as React from "react"
import { FaReact, FaJava } from 'react-icons/fa'

import '../styles/projects.css';
import { Topbar } from '../components';

const ICON_SIZE = "300px"

const ProjectsPage = () => {
  return (
    <div>
      <Topbar />
      <div className="projectsCategoriesContainer">
        <div className="projectCategory">        
          <FaReact size={ICON_SIZE} />
        </div>
        <div className="projectCategory">        
          <FaJava size={ICON_SIZE} />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
