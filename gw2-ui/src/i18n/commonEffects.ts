import { Translation } from '.';
import { CommonEffectTypes } from '../data/commonEffects';

export const COMMON_EFFECTS: Record<CommonEffectTypes, Translation> = {
  Agony: {
    en: '아고니',
    de: 'Qual',
  },
  Barrier: {
    en: '배리어',
    de: 'Barriere',
  },
  Blight: {
    en: '블라이트',
    de: 'Verschandelung',
  },
  Exposed: {
    en: '익스포즈',
    de: 'Entblößt',
  },
  Invulnerability: {
    en: '인벌너러빌리티',
    de: 'Unverwundbarkeit',
  },
  Revealed: {
    en: '리빌',
    de: 'Enthüllt',
  },
  'Rigorous Certainty': {
    en: '리거러스 서튼티',
    de: 'Strikte Gewissheit',
  },
  Stealth: {
    en: '스텔스',
    de: 'Tarnung',
  },
  'Stun Break': {
    en: '스턴 브레이크',
    de: 'Betäubungsbrecher',
  },
  Superspeed: {
    en: '슈퍼스피드',
    de: 'Supergeschwindigkeit',
  },
  Unblockable: {
    en: '언블락커블',
    de: 'Kann nicht geblockt werden',
  },
};

export const COMMON_EFFECTS_DESCRIPTIONS: Record<
  CommonEffectTypes,
  Translation
> = {
  Agony: {
    // en: 'Deals damage every second; stacks intensity; reduces incoming healing and barrier application by 70% per stack; damage is reduced by agony resistance.',
    en: '매초 데미지를 준다; 강도가 중첩된다; 중첩마다 받는 힐량과 배리어가 70% 감소한다; 아고니 저항에 의해 데미지가 감소한다.',
    de: 'Richtet jede Sekunde Schaden an; Intensität summiert sich; reduziert erhaltene Heilung und Anwendung von Barriere um 70% pro Stapel; Schaden wird durch Qual-Widerstand reduziert.',
  },
  Barrier: {
    // en: 'Creates a health barrier that takes damage prior to the health bar.',
    en: '생명력보다 먼저 데미지를 받는 보호막을 생성한다.',
    de: 'Erschafft eine Lebensbarriere die vor der Lebensanzeige Schaden nimmt.',
  },
  Blight: {
    // en: 'Reduces your maximum health. Stacks intensity.',
    en: '최대 생명력이 감소한다. 강도가 중첩된다.',
    de: 'Verringert Eure maximalen lebenspunkte. Stapelt Intensität.',
  },
  Exposed: {
    // en: 'Takes additional damage.',
    en: '추가 데미지를 받는다.',
    de: 'Erleidet zusätzlichen Schaden.',
  },
  Invulnerability: {
    // en: 'Immune to conditions and damage.',
    en: '데미지를 받지 않는다.',
    de: 'Immun gegen Zustände und Schäden.',
  },
  Revealed: {
    // en: 'You cannot stealth',
    en: '은신할 수 없다.',
    de: 'Tarnung nicht möglich',
  },
  'Rigorous Certainty': {
    // en: '+5 Agony Resistance\nThe next time you would be downed, instead heal 25% of your total health.',
    en: '+5 아고니 저항\n다운 대신 최대 생명력의 25% 만큼 회복한다.',
    de: '+5 Qual-Widerstand\nWenn ihr das nächste Mal angeschlagen seid, werdet Ihr stattdessen um 25% Eurer maximalenLebenspunkte geheilt.',
  },
  Stealth: {
    // en: 'Currently invisible. Ends if you deal damage.',
    en: '보이지 않는다. 공격시 해제된다.',
    de: 'Derzeit unsichtbar. Endet, wenn Ihr Schaden zufügt.',
  },
  'Stun Break': {
    // en: 'Breaks stun.',
    en: '스턴을 해제한다.',
    de: 'Hebt Betäubung auf.',
  },
  Superspeed: {
    en: '이동속도가 대폭 증가한다.',
    // en: 'Movement speed is greatly increased.',
    de: 'Bewegungsgeschwindigkeit ist deutlich erhöht.',
  },
  Unblockable: {
    // en: 'Your attacks are unblockable',
    en: '공격을 막을 수 없다.',
    de: 'Eure Angriffe können nicht geblockt werden.',
  },
};
