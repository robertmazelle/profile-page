import React from 'react';
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";
import { Link } from 'gatsby';

import '../styles/topbar.css';

const TopbarDesktop = props => {

  return (
    <div className="root">
      <nav className="navigation">
        <Link
          to="/"
          className="pageLogoNavigation"
        >
          <div className="logoMain"><div className="initials">RM</div><div className="name">robertmazelle.</div></div>
        </Link>
        <Link
          to="/"
          activeClassName="navButtonSelected"
          className="navButton"
        >
          <FormattedMessage id="Topbar.mainPage" />
        </Link>
        <Link
          to="/projects"
          activeClassName="navButtonSelected"
          className="navButton"
        >
          <FormattedMessage id="Topbar.projectsPage" />
        </Link>
      </nav>
    </div >
  );
};


export default injectIntl(TopbarDesktop);