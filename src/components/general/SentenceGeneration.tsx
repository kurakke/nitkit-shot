import { Sentence } from '../../../types/Sentence';

interface Props {
  sentence: Sentence;
  leading: string;
  gap: string;
  text: string;
}

export const SentenceGeneration: ({ gap, leading, sentence, text }: Props) => JSX.Element = ({
  gap,
  leading,
  sentence,
  text,
}) => {
  return (
      <ul className={`grid font-main ${gap} ${text} ${leading} text-light`}>
        {Object.values(sentence).map((paragraphs) => (
          <li key={paragraphs.id}>
            {Object.values(paragraphs.lines).map((texts) => (
              <p key={texts}>{texts}</p>
            ))}
          </li>
        ))}
      </ul>
  );
};
