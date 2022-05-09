import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.authorName}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.authorPic.url}
      />
    </div>
    <h3 className="text-black mt-4 mb-4 text-xl font-bold">{author.authorName}</h3>
    <p className="text-black text-ls">{author.authorBio}</p>
  </div>
);

export default Author;
