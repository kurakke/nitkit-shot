import React from 'react';

import { SOFTWARE_COMMENT } from '../../../constants/commentData';

import CommentContents from './CommentContents';

const Comment = (): JSX.Element => {
    return (
        <>
            <div className='mt-[10px] grid gap-y-[10px]'>
                <CommentContents affiliation='ソフトウェア班' comments={SOFTWARE_COMMENT} />
            </div>
        </>
    )
}

export default Comment;