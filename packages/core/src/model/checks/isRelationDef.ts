import { ModelRelation } from '@foscia/core/model/types';
import { SYMBOL_MODEL_PROP_RELATION } from '@foscia/core/symbols';
import { isFosciaType } from '@foscia/shared';

export default function isRelationDef(
  value: unknown,
): value is ModelRelation<any> {
  return isFosciaType(value, SYMBOL_MODEL_PROP_RELATION);
}
