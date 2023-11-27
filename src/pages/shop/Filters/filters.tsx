import { Filter } from "@mui/icons-material";
import { beige, black, blue, brown, green, grey, pattern, pink, purple, red, white, yellow } from "../../../assets/images/filterIcon/colors";
import { casual, cen, classic, minimal, modern, northernEU, plant, romantic } from "../../../assets/images/filterIcon/styles";
import { fabric, leather, marble, rattan, silver, wood } from "../../../assets/images/filterIcon/textures";
import { chinese_mahogany, ebony, etc, maple, solid, teak, walnut } from "../../../assets/images/filterIcon/woods";

export interface FilterOption {
  avatar: string;
  name: string;
};

const WoodTypes = [
  {avatar: etc, name: "기타수종"},
  {avatar: maple, name: "단풍나무"},
  {avatar: chinese_mahogany, name: "참죽나무"},
  {avatar: walnut, name: "월넛"},
  {avatar: ebony, name: "흑단"},
  {avatar: teak, name: "티크"},
  {avatar: solid, name: "원목/우드"},
  {avatar: beige, name: "베이지"},
];

const ColorTypes = [
  {avatar: black, name: '블랙'},
  {avatar: white, name: '화이트'},
  {avatar: grey, name: '그레이'},
  {avatar: pattern, name: '패턴, 그라데이션'},
  {avatar: red, name: '레드'},
  {avatar: yellow, name: '옐로우'},
  {avatar: green, name: '그린'},
  {avatar: blue, name: '블루'},
  {avatar: purple, name: '퍼플'},
  {avatar: brown, name: '브라운'},
  {avatar: beige, name: '베이지'},
  {avatar: pink, name: '핑크'},
];

const TextureTypes = [
  {avatar: fabric, name: "패브릭"},
  {avatar: marble, name: "대리석/세라믹"},
  {avatar: leather, name: "가죽/인조가죽"},
  {avatar: silver, name: "실버"},
  {avatar: wood, name: "원목, 우드"},
  {avatar: rattan, name: "라탄"},
];

export const StyleTypes = [
  {avatar: modern, name: "모던"},
  {avatar: northernEU, name: "북유럽"},
  {avatar: classic, name: "클래식"},
  {avatar: casual, name: "캐주얼"},
  {avatar: cen, name: "첸"},
  {avatar: plant, name: "플랜테리어"},
  {avatar: minimal, name: "미니멀"},
  {avatar: romantic, name: "로맨틱"},
];

export const FilterTypes: {[key: string]: Array<FilterOption> | undefined} = {
  '원목': WoodTypes,
  '컬러': ColorTypes,
  '재질': TextureTypes,
  '가격': undefined,
  '스타일': StyleTypes
};