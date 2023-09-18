import { Sentence } from '../../../types/Sentence';
import { SentenceGeneration } from '../general/SentenceGeneration';

const INTRODUCTION_SENTENCE: Sentence = {
  // eslint-disable-next-line sort/object-properties
  firstParagraph: {
    id: 'firstParagraph',
    lines: [
      '何の変哲も無いある日の授業のこと。',
      '「主人公を誰かに決める」はいつものように',
      '居眠りをしてしまう。',
    ],
  },
  fourthParagraph: {
    id: 'fourthParagraph',
    lines: [
      '体を揺さぶられ目を覚ますと、',
      'そこには銃を持った北園先生の姿と',
      '倒れているゾンビの姿が…!!',
    ],
  },
  secondParagraph: {
    id: 'secondParagraph',
    lines: ['訳の分からない状況に呆然としていると、', '先生が状況を説明してくれた。'],
  },
  thirdParagraph: {
    id: 'thirdParagraph',
    lines: ['ー'],
  },
  fifthParagraph: {
    id: 'fifthParagraph',
    lines: [
      'どうやら彼らはもともと高専生で、',
      '単位を落として留年した者の怨念によって',
      '進級した高専生や先生も襲い、',
      '感染によりゾンビになってしまったようだ。',
    ],
  },
  sixthParagraph: {
    id: 'sixthParagraph',
    lines: [
      'しかし、ゾンビになった彼らも',
      '高専の魔法(こうせんマジック)のこもった銃で',
      '撃つことで救済出来るとのこと。',
    ],
  },
  seventhParagraph: {
    id: 'seventhParagraph',
    lines: [
      '半ば信じがたい状況だが、',
      '先生から銃を受け取った「主人公を誰かに決め',
      'る」は',
      'ゾンビ達の救済に向かうのであった…',
    ],
  },
};

const Introduction = (): JSX.Element => {
  return (
    <div className='mx-auto mt-[10px] w-fit'>
      <div className='mb-[20px] ml-[-25px] w-fit border-b-[2px] border-accent-yellow font-menu-english text-[56px] leading-[40px] text-accent-yellow'>
        Story
        <span className='ml-[5px] font-menu-japanese text-[14px] leading-none'>ストーリー</span>
      </div>
      <SentenceGeneration
        sentence={INTRODUCTION_SENTENCE}
        gap='gap-y-[30px]'
        leading='leading-[30px]'
        textSize='text-[16px]'
      />
    </div>
  );
};

export default Introduction;
