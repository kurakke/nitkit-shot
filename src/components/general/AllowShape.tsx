const AllowShape = (): JSX.Element => {
  return (
    <div className='relative h-[20px] w-[20px] [&>div]:absolute [&>div]:inline-block [&>div]:h-[3px] [&>div]:w-[15px] [&>div]:rounded-[2px] [&>div]:bg-main [&>div]:bg-main'>
      <div className='left-0 top-[4px] rotate-[45deg]' />
      <div className='bottom-[4px] left-0 rotate-[-45deg]' />
    </div>
  );
};

export default AllowShape;
