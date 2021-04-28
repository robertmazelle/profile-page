import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl";

import * as css from './WorkItem.module.css';

const WorkItem = props => {
  const { company, intl } = props;
  const { name, position, timeline, responsibilities, image, url, technologiesUsed } = company;

  const [showMore, setShowMore] = useState(false);

  return <div className={css.workItem}>
    <div>
      <div className={css.workPoint} />
      <div className={css.workBorder} />
    </div>
    <div className={css.workContent}>
      <span><FormattedMessage id={name} /></span>
      <span onClick={() => setShowMore(!showMore)} onKeyDown={() => setShowMore(!showMore)} role="presentation" className={css.showMoreLink}>
        <FormattedMessage id={showMore ? "AboutPage.showLess" : "AboutPage.showMore"} />
      </span>
      {showMore
        ? <>
          <div><FormattedMessage id={position} /></div>
          <FormattedMessage id="WorkItem.responsibilities" />
          <ul>
            {responsibilities?.map((responsibility, index) =>
              <li key={responsibility + index}>{<FormattedMessage id={responsibility} />}</li>
            )}
          </ul>
          {technologiesUsed && <FormattedMessage id={technologiesUsed} />}
        </>
        : null
      }

    </div>

    {showMore
      ? <div className={css.workImageContainer}>
        <p className={css.workTimeline}>{<FormattedMessage id={timeline} />}</p>
        <a rel="noreferrer" target="_blank" href={intl.formatMessage({ id: url })}>
          <img className={css.workImage} src={image} alt={name} />
        </a>
      </div>
      : null}
  </div>
}

export default injectIntl(WorkItem);