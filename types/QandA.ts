interface QAndAProps {
  id: string;
  question: string;
  answer: string;
  // 写真や動画を追加する場合、以下の変数を使用します。
  // type?: 'video' | 'picture';
  // source?: string;
  // title?: string;
}

export type QAndA = Record<string, QAndAProps>;
