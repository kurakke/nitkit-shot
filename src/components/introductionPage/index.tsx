import { STORY_SENTENCE_MOCK } from '../../../constants/storySentenceMock';
import SentenceGenerater from '../general/SentenceGenerater';

const Introduction = (): JSX.Element => {
  return (
    <div className='mx-auto mt-[10px] w-[370px]'>
      <div className='mb-[20px] w-fit border-b-[2px] border-accent-yellow font-menu-english text-[56px] leading-[40px] text-accent-yellow'>
        Story
        <span className='ml-[5px] font-menu-japanese text-[14px] leading-none'>ストーリー</span>
      </div>
      <div className='mx-auto w-fit'>
        <SentenceGenerater
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
