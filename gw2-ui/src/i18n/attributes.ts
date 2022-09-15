import { Translation } from '.';
import { AttributeTypes } from '../data/attributes';

export const TRANSLATIONS_ATTRIBUTES: Record<AttributeTypes, Translation> = {
  Power: {
    en: '파워',
    de: 'Kraft',
  },
  Precision: {
    en: '프리시전',
    de: 'Präzision',
  },
  Toughness: {
    en: '터프니스',
    de: 'Zähigkeit',
  },
  Vitality: {
    en: '바이탈리티',
    de: 'Vitalität',
  },
  Concentration: {
    en: '컨센트레이션',
    de: 'Konzentration',
  },
  'Condition Damage': {
    en: '컨디션 데미지',
    de: 'Zustandsschaden',
  },
  Expertise: {
    en: '엑스퍼티즈',
    de: 'Fachkenntnis',
  },
  Ferocity: {
    en: '페로시티',
    de: 'Wildheit',
  },
  'Healing Power': {
    en: '힐링 파워',
    de: 'Heilkraft',
  },
  Armor: {
    en: '아머',
    de: 'Rüstung',
  },
  'Boon Duration': {
    en: '분 지속시간',
    de: 'Segensdauer',
  },
  'Critical Chance': {
    en: '크리티컬 확률',
    de: 'Kritische Trefferchance',
  },
  'Critical Damage': {
    en: '크리티컬 데미지',
    de: 'Kritischer Schaden',
  },
  'Condition Duration': {
    en: '컨디션 지속시간',
    de: 'Zustandsdauer',
  },
  Health: {
    en: '생명력',
    de: 'Lebenspunkte',
  },
  'Agony Resistance': {
    en: '아고니 저항',
    de: 'Qual-Widerstand',
  },
  'Gold Find': {
    en: '골드 파인드',
    de: 'Goldgespür',
  },
  'Karma Gain': {
    en: '카르마 획득',
    de: 'Karmazuwachs',
  },
  'Magic Find': {
    en: '매직 파인드',
    de: 'Magisches Gespür',
  },
  'XP Gain': {
    en: '경험치 획득',
    de: 'EP-Zuwachs',
  },
};

export const TRANSLATIONS_ATTRIBUTE_DESCRIPTIONS: Record<
  AttributeTypes,
  Translation
> = {
  Power: {
    // en: 'Increases attack',
    en: '공격력이 증가한다.',
    de: 'Erhöht den Angriff',
  },
  Precision: {
    // en: 'Increases critical-hit chance',
    en: '크리티컬 확률이 증가한다.',
    de: 'Erhöht die Chance auf kritische Treffer',
  },
  Toughness: {
    // en: 'Increases armor',
    en: '아머가 증가한다.',
    de: 'Erhöht die Rüstung',
  },
  Vitality: {
    // en: 'Increases maximum health',
    en: '최대 생명력이 증가한다.',
    de: 'Erhöht die maximalen Lebenspunkte',
  },
  Concentration: {
    // en: 'Increases Your Boon Duration',
    en: '분 지속시간이 증가한다.',
    de: 'Erhöht Eure Segensdauer',
  },
  'Condition Damage': {
    // en: 'Increases condition damage',
    en: '상태이상 데미지가 증가한다.',
    de: 'Erhöht Zustandsschaden',
  },
  Expertise: {
    // en: 'Increases Your Condition Duration',
    en: '컨디션 지속시간이 증가한다.',
    de: 'Erhöht Eure Zustandsdauer',
  },
  Ferocity: {
    // en: 'Increases critical damage.',
    en: '크리티컬 데미지가 증가한다.',
    de: 'Erhöht den kritischen Schaden',
  },
  'Healing Power': {
    // en: 'Increases healing power',
    en: '회복력이 증가한다.',
    de: 'Erhöht Heilfähigkeiten',
  },
  Armor: {
    // en: 'Combines item defense and toughness; reduces incoming damage',
    en: '아이템 방어력과 터프니스를 종합한다; 받는 데미지를 감소시킨다.',
    de: 'Fasst Ausrüstungsverteidigung und Zähigkeit zusammen; reduziert erlittenen Schaden',
  },
  'Boon Duration': {
    // en: 'Increases duration of your applied boons',
    en: '부여하는 분의 지속시간이 증가한다.',
    de: 'Erhöht die Dauer Eurer verwendeten Segen',
  },
  'Critical Chance': {
    // en: 'Chance to deal critical-hit damage',
    en: '치명타 적중률',
    de: 'Chance, kritischen Trefferschaden zu verursachen',
  },
  'Critical Damage': {
    // en: 'Percentage of additional damage inflicted by dealing a critical hit.'
    en: '치명타 적중시 증가하는 데미지 비율',
    de: 'Prozentsatz des zusätzlichen Schadens, der bei einem kritischen Treffer zugefügt wird',
  },
  'Condition Duration': {
    // en: 'Increases duration of your applied conditions',
    en: '유발하는 컨디션의 지속시간이 증가한다.',
    de: 'Erhöht die Dauer Eurer verwendeten Zustände',
  },
  Health: {
    // en: 'Increased by vitality',
    en: '바이탈리티에 의해 증가한다.',
    de: 'Werden durch Vitalität erhöht',
  },
  'Agony Resistance': {
    // en: 'Reduces agony damage',
    en: '아고니 데미지를 감소시킨다.',
    de: 'Reduziert Qual-Schaden',
  },
  'Gold Find': {
    // en: 'Increases the amount of gold gained from killing enemies.',
    en: '적을 처치하여 얻는 골드 획득량이 증가한다.',
    de: 'Erhöht die Menge an Gold, die Ihr für das Besiegen von Feinden erhaltet.',
  },
  'Karma Gain': {
    // en: 'Increases the amount of karma gained from completing events.',
    en: '이벤트를 완료하여 받는 카르마 획득량이 증가한다.',
    de: 'Erhöht die Menge an Karma, die Ihr für das Abschließen von Events erhaltet.',
  },
  'Magic Find': {
    // en: 'Increases chance to find rare items',
    en: '레어 아이템 획득률이 증가한다.',
    de: 'Erhöht die Chance, seltene Gegenstände zu finden',
  },
  'XP Gain': {
    // en: 'Increases the amount of experience gained from killing enemies.',
    en: '적을 처치하여 얻는 경험치 획득량이 증가한다.',
    de: 'Erhöht die Menge an Erfahrungspunkten, die Ihr für das Besiegen von Feinden erhaltet.',
  },
};
