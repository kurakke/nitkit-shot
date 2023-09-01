import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { NextPage } from 'next';
import React from 'react';

const RootPage: NextPage = () => {
  return (
    <>
      <div className='bg-base-secondary'>kurakke</div>
      <div className='text-[30px] font-main'>Text Preview</div>
      <div className='text-[30px] font-menu-english'>Text Preview</div>
      <div className='text-[30px] font-menu-japanese'>Text Preview</div>
      <div className='text-[30px] font-ranking'>Text Preview</div>
      <div className='text-[30px] font-sub'>Text Preview</div>
      <div className='text-[30px] font-title'>Text Preview</div>
    </>
  );
};
export default RootPage;
