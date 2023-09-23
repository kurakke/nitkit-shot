import { STORY_SENTENCE_MOCK } from '../../../constants/storySentenceMock';
import SentenceGenerator from '../general/SentenceGenerator';

const Introduction = (): JSX.Element => {
  return (
    <div className='mx-auto mt-[10px] w-[370px]'>
      <div className='mb-[20px] inline-flex w-fit items-end border-b-[2px] border-accent-yellow text-accent-yellow'>
        <p className='font-menu-english text-[56px] leading-[40px]'>Story</p>
        <p className='ml-[5px] font-menu-japanese text-[14px] leading-none'>ストーリー</p>
      </div>
      <div className='mx-auto w-fit'>
        <SentenceGenerator
          sentence={STORY_SENTENCE_MOCK}
          gap='gap-y-[30px]'
          leading='leading-[30px]'
          textSize='text-[16px]'
          point={false}
        />
      </div>
    </div>
  );
};

export default Introduction;
