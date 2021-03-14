import * as React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";
import { Link } from 'gatsby';
import { Helmet } from "react-helmet";
import favicon from '../images/favicon.ico'

import '../styles/main.css';
import { Topbar, Button } from '../components';

// markup
const IndexPage = ({ intl }) => {
  return (
    <div className="mainContainer">
      <Helmet>
        <title>{intl.formatMessage({ id: "IndexPage.title" })}</title>
        <link rel="icon" href={favicon} />
        </Helmet>
      <Topbar />
      <div className="titleWrapper">
        <div className="titleContainer">
          <h1 className="title">
            <FormattedMessage id="IndexPage.greeting" />
          </h1>
          <h2>
            <FormattedMessage id="IndexPage.personalInformation" />
          </h2>
          <div className="buttonContainer">
            <Link to="/projects">
            <Button >
              <FormattedMessage id="IndexPage.goToProjects" />
            </Button>
            </Link>
            <Link to="/about">
            <Button>
              <FormattedMessage id="IndexPage.goToAbout" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(IndexPage)