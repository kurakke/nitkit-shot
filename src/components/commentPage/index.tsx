import React from 'react';

import {
  HARDWARE_COMMENT,
  PLUSALPHA_COMMENT,
  SENSOR_COMMENT,
  SOFTWARE_COMMENT,
  WEB_COMMENT,
} from '../../../constants/comments';

import CommentContents from './CommentContents';

const Comment = (): JSX.Element => {
  const commentContents = [
    {
      affiliation: 'ソフトウェア班',
      credit: SOFTWARE_COMMENT,
    },
    {
      affiliation: 'ハードウェア班',
      credit: HARDWARE_COMMENT,
    },
    {
      affiliation: 'センサ班',
      credit: SENSOR_COMMENT,
    },
    {
      affiliation: 'web班',
      credit: WEB_COMMENT,
    },
    {
      affiliation: '＋α班',
      credit: PLUSALPHA_COMMENT,
    },
  ];

  return (
    <>
      <div className='mt-[10px] grid gap-y-[20px]'>
        {commentContents.map((commentContent, index) => (
          <CommentContents
            affiliation={commentContent.affiliation}
            comments={commentContent.credit}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Comment;
