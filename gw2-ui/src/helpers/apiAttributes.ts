import GW2ApiAttribute from '../gw2api/types/common/attribute';

const apiAttributes: Record<GW2ApiAttribute | 'None', string> = {
  Power: '파워',
  Precision: '프리시전',
  Toughness: '터프니스',
  Vitality: '바이탈리티',
  BoonDuration: '컨센트레이션',
  ConditionDamage: '컨디션 데미지',
  ConditionDuration: '엑스퍼티즈',
  CritDamage: '페로시티',
  Healing: '힐링 파워',
  AgonyResistance: '아고니 저항',
  None: '속성 없음',
};
export default apiAttributes;
