import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";
import React, {useState} from 'react';

import * as css from './EducationItem.module.css';

const WorkItem = props => {
    const { faculty } = props;
    const { name, school, timeline, image, url, degree } = faculty;

    const [showMore, setShowMore] = useState(false);

    return <div className={css.educationItem}>
      <div>
        <div className={css.educationPoint} />
        <div className={css.educationBorder} />
      </div>
      <div className={css.educationContent}>
      <div><FormattedMessage id={name}/> <span><FormattedMessage id={degree}/></span></div>
      <span onClick={() => setShowMore(!showMore)} onKeyDown={() => setShowMore(!showMore)} role="presentation" className={css.showMoreLink}>
        <FormattedMessage id={showMore ? "AboutPage.showLess" : "AboutPage.showMore"} />
      </span>
        {showMore && <div><FormattedMessage id={school}/></div>}
      </div>
      
      {showMore && <div className={css.educationImageContainer}>
      <p className={css.educationTimeline}><FormattedMessage id={timeline}/></p>
        <a rel="noreferrer" target="_blank" href={url}>
          <img className={css.educationImage} src={image} alt={name} />
        </a>
      </div>}
    </div>
  }

  export default injectIntl(WorkItem);