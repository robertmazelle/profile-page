import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl";
// import { IoMdSchool } from "react-icons/io"
import { MdPerson } from "react-icons/md";
// import { GiGamepad } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { Topbar, Seo, WorkItem } from '../components';
import image from '../images/robert-mazelle.jpg';
import softwareSuppImage from '../images/softwaresupp.png';

import '../styles/about.css';

const ICON_SIZE = 70;

const scrollTo = id => {
  const scrollElement = document.getElementById(id);
  const offset = 50;
  const elementPosition = scrollElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

const AboutPage = ({ intl }) => {
  const pageTitle = intl.formatMessage({ id: "AboutPage.title" });
  const pageDescription = intl.formatMessage({ id: "AboutPage.description" });

  const COMPANIES = [
    {
      name: <FormattedMessage id="AboutPage.controltec" />,
      position: <FormattedMessage id="AboutPage.controltecPosition" />,
      timeline: <FormattedMessage id="AboutPage.controltecTimeline" />,
      responsibilities: [
        <FormattedMessage id="AboutPage.controltecPointFirst" />,
        <FormattedMessage id="AboutPage.controltecPointSecond" />,
        <FormattedMessage id="AboutPage.controltecPointThird" />
      ],
      image: "https://lh3.googleusercontent.com/proxy/kbiroFzKqEOzfCeyHgswYCJyv23EZgysH4NAjgVbOhfeKterPkPWBHWMRXSPOobeQqrIKP1e2scJE63AtZJTEc3tMQ1xiwfx3Qv2_lehtKBgjUG2fCFvVHpNXHmLSQvqg_qEkg",
      url: intl.formatMessage({id: "AboutPage.controltecUrl"})
    },
    {      
      name: <FormattedMessage id="AboutPage.softwaresupp" />,
    position: <FormattedMessage id="AboutPage.softwaresuppPosition" />,
    timeline: <FormattedMessage id="AboutPage.softwaresuppTimeline" />,
    responsibilities: [
      <FormattedMessage id="AboutPage.softwaresuppPointFirst" />,
      <FormattedMessage id="AboutPage.softwaresuppPointSecond" />,
      <FormattedMessage id="AboutPage.softwaresuppPointThird" />,
      <FormattedMessage id="AboutPage.softwaresuppPointFourth" />
    ],
    image: softwareSuppImage,
    url: intl.formatMessage({id: "AboutPage.softwaresuppUrl"}),
    technologiesUsed: <FormattedMessage id="AboutPage.softwaresuppTechnologies" />
    }
  ]

  const [showMoreMain, setShowMoreMain] = useState(false);

  const pageNavigation = <nav className="aboutNav">
    <MdPerson className="aboutNavItem" size={ICON_SIZE} onClick={() => scrollTo("main")} />
    <MdWork className="aboutNavItem" size={ICON_SIZE} onClick={() => scrollTo("work")} />
    {/* <IoMdSchool className="aboutNavItem" size={ICON_SIZE} onClick={() => scrollTo("education")} />
    <GiGamepad className="aboutNavItem" size={ICON_SIZE} onClick={() => scrollTo("hobbies")} /> */}
  </nav>

  const mainContent = <div className="aboutItem" id="main">
    <img className="aboutImage" src={image} alt="Robert Mazelle" />
    <div className="aboutItemMain">
      <h2><FormattedMessage id="AboutPage.mainSectionTitle" /></h2>
      <p className="aboutSectionContent">
        <FormattedMessage id="AboutPage.mainSectionContent" />
      </p>
      {showMoreMain
        ? <>
          <p className="aboutSectionContent">
            <FormattedMessage id="AboutPage.mainSectionProgrammingContent" />
          </p>
          <p className="aboutSectionContent">
            <FormattedMessage id="AboutPage.mainSectionCharacterContent" />
          </p>
        </>
        : null}
      <p onClick={() => setShowMoreMain(!showMoreMain)} onKeyDown={() => setShowMoreMain(!showMoreMain)} role="presentation" className="showMoreLink">
        <FormattedMessage id={showMoreMain ? "AboutPage.showLess" : "AboutPage.showMore"} />
      </p>
    </div>
  </div>

  const workContent = <div className="aboutItem" id="work">
    <div className="workItemsWrapper">
    <h2><FormattedMessage id="AboutPage.workSectionTitle" /></h2>
      {COMPANIES.map(company =>
        <WorkItem company={company} />
      )}
    </div>
  </div>

  // const educationContent = <div className="aboutItem" id="work">
  //   <div className="workItemsWrapper">
  //     <h2><FormattedMessage id="AboutPage.workSectionTitle" /></h2>
  //     {COMPANIES.map(company =>
  //       <WorkItem company={company} />
  //     )}
  //   </div>
  // </div>

  return (
    <main>
      <Seo
        title={pageTitle}
        description={pageDescription}
      />
      <Topbar />

      <div className="aboutContainer">
        {pageNavigation}
        <div className="aboutContent">
          {mainContent}
          {workContent}
        </div>
      </div>

    </main>
  )
}

export default injectIntl(AboutPage)