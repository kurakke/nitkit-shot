import { NextPage } from 'next';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

const RootPage: NextPage = () => {
  return (
    <>
      <div className='bg-orange-300'>kurakke</div>
      <Card className='max-w-sm mx-auto'>
        <CardHeader className='flex items-center justify-center'>
          <div className='text-lg font-medium'>Sign up</div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className='flex flex-col gap-3'>
            <Input type='text' label='Name' size='sm' />
            <Input type='email' label='Email' size='sm' />
            <Input type='password' label='Password' size='sm' />
          </div>
        </CardBody>
        <CardFooter>
          <Button className='w-full' color='primary'>
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
export default RootPage;
