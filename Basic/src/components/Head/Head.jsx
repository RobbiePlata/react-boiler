import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({
  pageTitle = '',
  description = 'Welcome'
}) => (
  <Helmet>
    <title>React App {pageTitle ? ` - ${pageTitle}` : ''}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default Head;