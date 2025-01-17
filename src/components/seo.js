import React from 'react';
import Head from 'next/head';

export default function SEO({
  lang = `en`,
  description = 'Stemvision AI ',
  author = 'Stemvision, Inc',
  meta,
  title = 'Stemvision AI',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `description`,
      property: `og:title`,
      content: title,
    },
    { 
      name: `description`,
      property: `og:description`,
      content: description,
    },

    { 
      name: `description`,
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map((item, i) => {
        <meta key={i} name={item?.name} content={item?.content} />
      })}
    </Head>
  );
}

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// };
