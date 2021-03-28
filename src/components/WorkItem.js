import { FormattedMessage } from "gatsby-plugin-react-intl";
import React, {useState} from 'react';

import '../styles/workItem.css';

const WorkItem = props => {
    const { name, position, timeline, responsibilities, image, url, technologiesUsed } = props?.company;

    const [showMore, setShowMore] = useState(false);

    return <div className="workItem">
      <div>
        <div className="workPoint" />
        <div className="workBorder" />
      </div>
      <div className="workContent">
        <div>{name}</div>
        <div>{position}</div>
        {showMore
          ? <>
            <FormattedMessage id="WorkItem.responsibilities" />
            <ul>
              {responsibilities?.map(responsibility =>
                <li>{responsibility}</li>
              )}
            </ul>
            {technologiesUsed}
          </>
          : null
        }
        <p onClick={() => setShowMore(!showMore)} onKeyDown={() => setShowMore(!showMore)} role="presentation" className="showMoreLink">
          <FormattedMessage id={showMore ? "AboutPage.showLess" : "AboutPage.showMore"} />
        </p>
      </div>
      
      <div className="workImageContainer">
      <p className="workTimeline">{timeline}</p>
        <a rel="noreferrer" target="_blank" href={url}>
          <img className="workImage" src={image} alt={name} />
        </a>
      </div>
    </div>
  }

  export default WorkItem;