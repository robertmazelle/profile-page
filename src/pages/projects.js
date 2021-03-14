import * as React from "react"
import { FaReact, FaJava } from 'react-icons/fa';
import { injectIntl } from "gatsby-plugin-react-intl";
import { Helmet } from "react-helmet";

import '../styles/projects.css';
import { Topbar } from '../components';

const ICON_SIZE = "300px"

const ProjectsPage = ({intl}) => {
  return (
    <div>
         <Helmet>
        <title>{intl.formatMessage({ id: "ProjectsPage.title" })}</title>
        </Helmet>
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

export default injectIntl(ProjectsPage)
