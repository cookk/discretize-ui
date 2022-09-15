import { Translation } from '.';
import { ControlEffectTypes } from '../data/controlEffects';

export const CONTROL_EFFECTS: Record<ControlEffectTypes, Translation> = {
  Daze: {
    en: '데이즈',
    de: 'Benommenheit',
  },
  Float: {
    en: '플로트',
    de: 'Float',
  },
  Knockback: {
    en: '넉백',
    de: 'Rückschlag',
  },
  Knockdown: {
    en: '넉다운',
    de: 'Niederschlag',
  },
  Launch: {
    en: '런치',
    de: 'Hochschleudern',
  },
  Pull: {
    en: '풀',
    de: 'Ziehen',
  },
  Sink: {
    en: '싱크',
    de: 'Sinken',
  },
  Stun: {
    en: '스턴',
    de: 'Betäubung',
  },
};

export const CONTROL_EFFECTS_DESCRIPTIONS: Record<
  ControlEffectTypes,
  Translation
> = {
  Daze: {
    // en: 'Disables all skills for a short duration.',
    en: '스킬 사용을 억제한다.',
    de: 'Fertigkeiten können nicht aktiviert werden; Dauer summiert sich.',
  },
  Float: {
    // en: 'Causes the underwater target to move upwards.',
    en: '수중에 있는 적을 위로 띄운다.',
    de: 'Schweben ist ein Unterwasser-Effekt, der das Ziel oder sich selbst in Richtung Wasseroberfläche bewegt.',
  },
  Knockback: {
    // en: 'Knocks back the target away and on the ground, preventing movement and actions for a short duration.',
    en: '적을 밀어내고, 잠시 동안 이동 및 행동불가 상태로 만든다.',
    de: 'Rückschlag ist ein Status-Effekt, der zu Folge hat, dass man vom Verursacher weggestoßen wird',
  },
  Knockdown: {
    // en: 'Knocks the target on ground, preventing movement and actions for a short duration.',
    en: '적을 바닥에 때려눕혀 잠시 동안 이동 및 행동불가 상태로 만든다.',
    de: 'Niederschlag wirft den Gegner zu Boden, wodurch er für kurze Zeit bewegungsunfähig ist und keine Fertigkeiten verwenden kann.',
  },
  Launch: {
    // en: 'Throws the target in the air over a short distance, preventing movement and actions for a short duration. Can move Downed targets.',
    en: '적을 공중으로 날려보내며 잠시 동안 이동 및 행동불가 상태로 만든다. 다운된 적을 이동시킬 수 있다.',
    de: 'Durch Hochschleudern wird das Ziel unterbrochen und in die Luft geworfen.',
  },
  Pull: {
    // en: 'Pulls the caster to the target or the target to a specific location and disables them for a short duration.',
    en: '시전자를 적에게 끌어당기거나, 적을 특정 지점으로 끌어당기며 잠시 동안 이동 및 행동불가 상태로 만든다.',
    de: 'Ziehen unterbricht Fertigkeiten mit Wirkzeit. Ziehen reduziert die Trotzleiste von Kreaturen abhängig von der aufgerundeten angewendeten Dauer.',
  },
  Sink: {
    // en: 'Causes the underwater target to move downwards.',
    en: '수중에 있는 적을 아래로 끌어내린다.',
    de: 'Sinken verhindert Bewegung und Fertigkeitsaktivierung und lässt Betroffene sinken.',
  },
  Stun: {
    // en: 'Prevents movement and actions for a short duration.',
    en: '이동 및 행동불가 상태로 만든다.',
    de: 'Handlungsunfähig; Dauer summiert sich.',
  },
};
