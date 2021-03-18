import { Helmet } from 'react-helmet';
import React from 'react';
import favicon from '../images/favicon.ico'

const Seo = ({ title, description }) => {
    return (
        <Helmet title={title}
            meta={[
                {
                    name: 'description',
                    content: description,
                }
            ]}
            link={{ rel: 'canonical', href: favicon }}
        >
            <link rel="icon" href={favicon} />
        </Helmet>
    );
}

export default Seo;