/* eslint-disable sort/object-properties */
import { PageId } from '../types/PageId';

interface MenuItems {
  id: PageId;
  path: string;
  engkishName: string;
  japaneseName: string;
}

export const MENUS_ITEMS: Record<PageId, MenuItems> = {
  top: {
    id: 'top',
    path: '/',
    engkishName: 'Top',
    japaneseName: 'トップ',
  },
  instroduction: {
    id: 'instroduction',
    path: '/instroduction',
    engkishName: 'Instroduction',
    japaneseName: 'ゲーム紹介',
  },
  forPlayer: {
    id: 'forPlayer',
    path: '/forplayer',
    engkishName: 'For Player',
    japaneseName: 'プレイする人へ',
  },
  ranking: {
    id: 'ranking',
    path: '/ranking',
    engkishName: 'Ranking',
    japaneseName: 'ランキング',
  },
  movie: {
    id: 'movie',
    path: '/movie',
    engkishName: 'Movie',
    japaneseName: '動画',
  },
  qAndA: {
    id: 'qAndA',
    path: '/qanda',
    engkishName: 'Q&A',
    japaneseName: 'よくある質問',
  },
  credit: {
    id: 'credit',
    path: '/credit',
    engkishName: 'Credit',
    japaneseName: 'クレジット',
  },
};
