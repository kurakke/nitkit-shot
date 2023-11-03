import { NextPage } from 'next';
import React from 'react';

import ScrollRevealOnce from '../../../components/animation/ui/ScrollRevealOnce';
import Comment from '../../../components/commentPage';
import { TitleText } from '../../../components/general/TitleText';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';


const CommentPage: NextPage = () => {
    return (
        <DefaultLayout
            metaDescription='nit-kit-shotの制作者たちのコメント'
            isTopPage={false}
        >
            <ScrollRevealOnce>
                <TitleText title='comment' />
                <Comment />
            </ScrollRevealOnce>
        </DefaultLayout>
    );
};

export default CommentPage;
