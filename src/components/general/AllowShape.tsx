const AllowShape = (): JSX.Element => {
  return (
    <div className='relative flex h-[15px] w-[15px] rotate-45 justify-center [&>div]:absolute [&>div]:h-[3px] [&>div]:w-[15px] [&>div]:rounded-[2px] [&>div]:bg-main'>
      <div />
      <div className='right-[3px] origin-top-right rotate-[-90deg]' />
    </div>
  );
};

export default AllowShape;
