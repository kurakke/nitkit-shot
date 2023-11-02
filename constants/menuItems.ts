/* eslint-disable sort/object-properties */
import { PageId } from '../types/PageId';

interface MenuItems {
  id: PageId;
  path: string;
  englishName: string;
  japaneseName: string;
}

export const MENUS_ITEMS: Record<PageId, MenuItems> = {
  top: {
    id: 'top',
    path: '/',
    englishName: 'Top',
    japaneseName: 'トップ',
  },
  introduction: {
    id: 'introduction',
    path: '/introduction',
    englishName: 'Introduction',
    japaneseName: 'ゲーム紹介',
  },
  forPlayer: {
    id: 'forPlayer',
    path: '/forplayer',
    englishName: 'For Player',
    japaneseName: 'プレイする人へ',
  },
  comment: {
    id: 'comment',
    path: '/comment',
    englishName: 'Comment',
    japaneseName: '開発者の声',
  },
  movie: {
    id: 'movie',
    path: '/movie',
    englishName: 'Movie',
    japaneseName: '動画',
  },
  qAndA: {
    id: 'qAndA',
    path: '/qanda',
    englishName: 'Q&A',
    japaneseName: 'よくある質問',
  },
  credit: {
    id: 'credit',
    path: '/credit',
    englishName: 'Credit',
    japaneseName: 'クレジット',
  },
  reservation: {
    id: 'reservation',
    path: '/preparingreservation',
    englishName: 'Reservation',
    japaneseName: '予約用LINEbotへ',
  },
};
