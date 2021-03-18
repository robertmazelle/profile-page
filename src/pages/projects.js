import * as React from "react"
import { FaReact, FaJava } from 'react-icons/fa';
import { injectIntl } from "gatsby-plugin-react-intl";
import { Topbar, Seo } from '../components';

import '../styles/projects.css';

const ICON_SIZE = "300px"

const ProjectsPage = ({ intl }) => {
  const pageTitle = intl.formatMessage({ id: "ProjectsPage.title" });
  const pageDescription = intl.formatMessage({ id: "ProjectsPage.description" });
  return (
    <div>
      <Seo
        title={pageTitle}
        description={pageDescription}
      />
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
