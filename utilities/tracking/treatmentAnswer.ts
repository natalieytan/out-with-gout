import {
  TREATMENT_ANSWER_PREFIX,
  TREATMENT_ANSWER_CATEGORY,
  TREAMENT_ANSWER_LABEL
} from '../../constants/tracking/treatmentAnswer';
import { gtagEvent } from '../../lib/gtag';

export function treatmentAnswerGtagEvent(event: string): void {
  gtagEvent({
    action: `${TREATMENT_ANSWER_PREFIX}${event}`,
    category: TREATMENT_ANSWER_CATEGORY,
    label: TREAMENT_ANSWER_LABEL
  });
}
