import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl";
import { IoMdSchool } from "react-icons/io"
import { MdPerson } from "react-icons/md";
import { GiGamepad } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { Topbar, Seo, WorkItem, EducationItem, HobbiesPanel } from '../components';
import image from '../images/robert-mazelle.jpg';
import { COMPANIES, FACULTIES } from '../util/custom-configuations';

import * as css from '../styles/about.module.css';

const ICON_SIZE = 70;

const scrollTo = id => {
  const scrollElement = document.getElementById(id);
  const offset = 60;
  const elementPosition = scrollElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition - offset + document.documentElement.scrollTop;

  window.scrollTo({
    top: elementPosition === 0 ? elementPosition : offsetPosition,
    behavior: "smooth"
  });
}

const AboutPage = ({ intl }) => {
  const pageTitle = intl.formatMessage({ id: "AboutPage.title" });
  const pageDescription = intl.formatMessage({ id: "AboutPage.description" });

  const [showMoreMain, setShowMoreMain] = useState(false);

  const pageNavigation = <nav className={css.aboutNav}>
    <MdPerson className={css.aboutNavItem} size={ICON_SIZE} onClick={() => scrollTo("main")} />
    <MdWork className={css.aboutNavItem} size={ICON_SIZE} onClick={() => scrollTo("work")} />
    <IoMdSchool className={css.aboutNavItem} size={ICON_SIZE} onClick={() => scrollTo("education")} />
    <GiGamepad className={css.aboutNavItem} size={ICON_SIZE} onClick={() => scrollTo("hobbies")} />
  </nav>

  const mainContent = <div className={css.aboutItem} id="main">
    <img className={css.aboutImage} src={image} alt="Robert Mazelle" />
    <div className={css.aboutItemMain}>
      <h2><FormattedMessage id="AboutPage.mainSectionTitle" /></h2>
      <p className={css.aboutSectionContent}>
        <FormattedMessage id="AboutPage.mainSectionContent" />
      </p>
      {showMoreMain
        ? <>
          <p className={css.aboutSectionContent}>
            <FormattedMessage id="AboutPage.mainSectionProgrammingContent" />
          </p>
          <p className={css.aboutSectionContent}>
            <FormattedMessage id="AboutPage.mainSectionCharacterContent" />
          </p>
        </>
        : null}
      <p onClick={() => setShowMoreMain(!showMoreMain)} onKeyDown={() => setShowMoreMain(!showMoreMain)} role="presentation" className={css.showMoreLink}>
        <FormattedMessage id={showMoreMain ? "AboutPage.showLess" : "AboutPage.showMore"} />
      </p>
    </div>
  </div>

  const workContent = <div className={css.aboutItem} id="work">
    <div className={css.workItemsWrapper}>
      <h2><FormattedMessage id="AboutPage.workSectionTitle" /></h2>
      {COMPANIES.map((company, id) =>
        <WorkItem key={id + company.name} company={company} />
      )}
    </div>
  </div>

  const educationContent = <div className={css.aboutItem} id="education">
    <div className={css.educationItemsWrapper}>
      <h2><FormattedMessage id="AboutPage.educationSectionTitle" /></h2>
      {FACULTIES.map((faculty, id) =>
        <EducationItem key={id + faculty.name} faculty={faculty} />
      )}
    </div>
  </div>

  const hobbiesContent = <div className={css.aboutItem} id="hobbies">
    <div className={css.hobbiesItemsWrapper}>
      <h2><FormattedMessage id="AboutPage.hobbiesSectionTitle" /></h2>
      <HobbiesPanel />
    </div>
  </div>

  return (
    <main>
      <Seo
        title={pageTitle}
        description={pageDescription}
      />
      <Topbar />

      <div className={css.aboutContainer}>
        {pageNavigation}
        <div className={css.aboutContent}>
          {mainContent}
          {workContent}
          {educationContent}
          {hobbiesContent}
        </div>
      </div>

    </main>
  )
}

export default injectIntl(AboutPage)