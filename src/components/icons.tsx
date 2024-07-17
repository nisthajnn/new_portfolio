import React from 'react';
import Image from 'next/image';

const iconUrls = [
    '/images/gmail.png',
    '/images/github.png',
    '/images/gfg.png',
    '/images/lc.png',
    '/images/twitter.png',
    '/images/linkedin.png',
];

const Icons = () => {
  return (
    <div>
        <br />
        <br />
    <div className="flex items-center justify-center bg-base-100 dark:bg-base-900 bg-grid-dark dark:bg-grid-light">
      <div className="flex space-x-8">
        {iconUrls.map((url, index) => (
          <Image key={index} src={url} alt={`icon-${index}`} width={50} height={50} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Icons;
