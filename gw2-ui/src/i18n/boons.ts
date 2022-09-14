import { Translation } from '.';
import { BoonsTypes } from '../data/boons';

export const TRANSLATIONS_BOONS: Record<BoonsTypes, Translation> = {
  Aegis: {
    de: 'Aegis',
  },
  Alacrity: {
    de: 'Tatendrang',
  },
  Fury: {
    de: 'Wut',
  },
  Might: {
    de: 'Macht',
  },
  Protection: {
    de: 'Schutz',
  },
  Quickness: {
    de: 'Schnelligkeit',
  },
  Regeneration: {
    de: 'Regeneration',
  },
  Resistance: {
    de: 'Widerstand',
  },
  Resolution: {
    de: 'Entschlossenheit',
  },
  Stability: {
    de: 'Stabilität',
  },
  Swiftness: {
    de: 'Eile',
  },
  Vigor: {
    de: 'Elan',
  },
};

export const TRANSLATIONS_BOON_DESCRIPTIONS: Record<BoonsTypes, Translation> = {
  Aegis: {
    // en: 'Block the next incoming attack; stacks duration.',
    en: '공격을 1회 막는다; 지속시간이 중첩된다.',
    de: 'Blockt den nächsten Angriff; Dauer summiert sich.',
  },
  Alacrity: {
    // en: 'Skills recharge faster.',
    en: '스킬 재사용 대기시간이 감소한다.',
    de: 'Fertigkeiten laden sich schneller wieder auf.',
  },
  Fury: {
    // en: 'Critical Chance increased by 25%; stacks duration.',
    en: '크리티컬 확률이 증가한다; 지속시간이 중첩된다.',
    de: 'Erhöht die Chance auf kritischen Treffer um 25%; Dauer summiert sich.',
  },
  Might: {
    // en: 'Increased outgoing damage; stacks intensity.',
    en: '데미지가 증가한다; 강도가 중첩된다.',
    de: 'Erhöht zugefügten Schaden; Intensität summiert sich.',
  },
  Protection: {
    // en: 'Incoming damage decreased by 33%; stacks duration.',
    en: '받는 타격 데미지가 33% 감소한다; 지속시간이 중첩된다.',
    de: 'Reduziert erlittenen Schlagschaden um 33%; Dauer summiert sich.',
  },
  Quickness: {
    // en: 'Skills and actions are faster.',
    en: '스킬과 행동이 빨라진다.',
    de: 'Fertigkeiten und Aktionen sind schneller.',
  },
  Regeneration: {
    // en: 'Gain health every second; stacks duration.',
    en: '매 초마다 생명력을 회복한다; 지속시간이 중첩된다.',
    de: 'Erhaltet jede Sekunde Lebenspunkte; Dauer summiert sich.',
  },
  Resistance: {
    // en: 'Nondamaging conditions currently on you are ineffective; stacks duration.',
    en: '데미지를 주지 않는 컨디션의 영향을 받지 않는다; 지속시간이 중첩된다.',
    de: 'Zustände, die Euch zum gegenwärtigen Zeitpunkt betreffen und die keinen Schaden verursachen, haben keine Wirkung; Dauer summiert sich.',
  },
  Resolution: {
    // en: 'Incoming condition damage decreased by 33%; stacks duration.',
    en: '받는 컨디션 데미지가 33% 감소한다; 지속시간이 중첩된다.',
    de: 'Reduziert erlittenen Zustandsschaden um 33%; Dauer summiert sich.',
  },
  Stability: {
    // en: 'Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared or taunted.',
    en: '넉다운, 넉백, 당겨짐, 날아감, 스턴, 데이즈, 떠오름, 가라앉음, 공포, 도발에 면역된다.',
    de: 'Immun gegen Niederschlag, Hoch- und Zurückschleudern, Ziehen, Betäubung, Benommenheit, Schweben, Sinken, Furcht oder Provozieren.',
  },
  Swiftness: {
    // en: 'Movement speed increased by 33%; stacks duration.',
    en: '이동속도가 33% 증가한다; 지속시간이 중첩된다.',
    de: 'Erhöht Bewegungsgeschwindigkeit um 33%; Dauer summiert sich.',
  },
  Vigor: {
    // en: 'Endurance regeneration increased by 50%; stacks duration.',
    en: '지구력 회복이 50% 증가한다; 지속시간이 중첩된다.',
    de: 'Erhöht Ausdauerregeneration um 50%; Dauer summiert sich.',
  },
};
