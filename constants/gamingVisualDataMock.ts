import logo from '../public/logo.svg';
import { GamingVisual } from '../types/GamingVisual';

export const GAMING_VISUAL_MOCK: GamingVisual = {
  // eslint-disable-next-line sort/object-properties
  zombie: {
    description:
      'ゾンビ（英語: zombie）は、何らかの力で死体のまま蘇った人間の総称である。 多くはホラーやファンタジー作品などに登場し、「腐った死体が歩き回る」という描写が多くなされる架空の存在である。',
    id: 'zombie',
    source: 'zombie.mp4',
    title: 'ゾンビ',
    type: 'video',
  },
  gun: {
    description:
      'もともと鳥猟や小型の動物の狩猟用だが、大きな弾丸や一発弾なども使用でき、大型獣の狩猟にも用いられるようになった。 また、散弾銃を警備用として軍隊や警察で用いている国もある。',
    id: 'gun',
    source: logo,
    title: '散弾銃',
    type: 'picture',
  },
};
