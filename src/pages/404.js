import * as React from "react"
import { Topbar, Seo } from '../components';
import { injectIntl } from "gatsby-plugin-react-intl";

// markup
const NotFoundPage = ({ intl }) => {
  const pageTitle = intl.formatMessage({ id: "NotFoundPage.title" });
  const pageDescription = intl.formatMessage({ id: "NotFoundPage.description" });

  return (
    <div>
      <Seo
        title={pageTitle}
        description={pageDescription}
      />
      <Topbar />
    </div>
  )
}

export default injectIntl(NotFoundPage)
