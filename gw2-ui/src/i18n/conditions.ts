import { Translation } from '.';
import { ConditionTypes } from '../data/conditions';

export const CONDITIONS: Record<ConditionTypes, Translation> = {
  Bleeding: { de: 'Blutung' },
  Blinded: { de: 'Geblendet' },
  Burning: { de: 'Brennen' },
  Chilled: { de: 'Kühle' },
  Confusion: { de: 'Konfusion' },
  Crippled: { de: 'Verkrüppelung' },
  Fear: { de: 'Furcht einflößen' },
  Immobile: { de: 'Immobilisiert' },
  Poisoned: { de: 'Vergiftet' },
  Slow: { de: 'Langsam' },
  Taunt: { de: 'Provozieren' },
  Torment: { de: 'Pein' },
  Vulnerability: { de: 'Verwundbarkeit' },
  Weakness: { de: 'Schwäche' },
};

export const CONDITIONS_DESCRIPTIONS: Record<ConditionTypes, Translation> = {
  Bleeding: {
    // en: 'Deals damage every second; stacks intensity.',
    en: '매초 데미지를 준다; 강도가 중첩된다.',
    de: 'Bewirkt jede Sekunde Schaden; Intensität summiert sich.',
  },
  Blinded: {
    // en: 'Next outgoing attack misses; stacks duration.',
    en: '다음 공격이 빗나간다; 지속시간이 중첩된다.',
    de: 'Der nächste Angriff schlägt fehl; Dauer summiert sich.',
  },
  Burning: {
    // en: 'Deals damage every second; stacks intensity.',
    en: '매초 데미지를 준다; 강도가 중첩된다.',
    de: 'Bewirkt jede Sekunde Schaden; Intensität summiert sich.',
  },
  Chilled: {
    // en: 'Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.',
    en: '이동속도가 66% 감소한다; 스킬 재사용 대기시간이 66% 증가한다; 지속시간이 중첩된다.',
    de: 'Reduziert Bewegungsgeschwindigkeit um 66%; erhöht Erholzeit von Fertigkeiten um 66%; Dauer summiert sich.',
  },
  Confusion: {
    // en: 'Damage received on skill activation; stacks intensity.',
    en: '스킬 시전시 데미지를 받는다; 강도가 중첩된다.',
    de: 'Erleidet Schaden bei Aktivieren von Fertigkeiten; Intensität summiert sich.',
  },
  Crippled: {
    // en: 'Movement speed decreased by 50%; stacks duration.',
    en: '이동속도가 50% 감소한다; 지속시간이 중첩된다.',
    de: 'Bewegungsgeschwindigkeit um 50% verringert; Dauer summiert sich.',
  },
  Fear: {
    // en: 'Involuntary retreat; unable to act; stacks duration.',
    en: '공포에 질려 도망가며, 행동할 수 없다; 지속시간이 중첩된다.',
    de: 'Unfreiwilliger Rückzug; handlungsunfähig; Dauer summiert sich.',
  },
  Immobile: {
    // en: 'Unable to move; stacks duration.',
    en: '이동할 수 없다; 지속시간이 중첩된다.',
    de: 'Bewegungsunfähig; Dauer summiert sich.',
  },
  Poisoned: {
    // en: 'Deals damage every second; decreases healing effectiveness 33%; damage stacks intensity.',
    en: '매초 데미지를 준다; 힐링 효과가 33% 감소한다; 강도가 중첩된다.',
    de: 'Bewirkt jede Sekunde Schaden; verringert Heilungswirksamkeit um 33%; Intensität summiert sich durch Schaden.',
  },
  Slow: {
    // en: 'Skills and actions are slower.',
    en: '스킬 및 행동이 느려진다.',
    de: 'Fertigkeiten und Aktionen sind langsamer.',
  },
  Taunt: {
    // en: 'Involuntarily attack foes.',
    en: '강제로 적을 공격한다.',
    de: 'Greift unfreiwillig Gegner an.',
  },
  Torment: {
    // en: "Deals damage every second. Deals additional damage to foes that aren't moving. Stacks intensity.",
    en: '매초 데미지를 준다. 움직이지 않는 적에게 추가 피해를 준다. 강도가 중첩된다.',
    de: 'Bewirkt jede Sekunde Schaden. Bewirkt zusätzlichen Schaden bei Gegnern, die sich nicht bewegen. Die Intensität stapelt sich.',
  },
  Vulnerability: {
    // en: 'Damage and condition damage taken are increased; stacks intensity.',
    en: '받는 데미지가 증가한다; 강도가 중첩된다.',
    de: 'Schaden und erlittener Zustandsschaden sind erhöht; Intensität summiert sich.',
  },
  Weakness: {
    // en: 'Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.',
    en: '지구력 재생력이 50% 감소한다. 50%의 공격이 빗나간다(50% 데미지). 지속시간이 중첩된다.',
    de: 'Verringert Ausdauerregeneration um 50%. 50% aller Treffer sind Streiftreffer (50% Schaden). Dauer summiert sich.',
  },
};
