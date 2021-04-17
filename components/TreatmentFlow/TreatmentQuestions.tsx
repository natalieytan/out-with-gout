import React from 'react';

import UALIndicationQuestion from './Questions/UALIndicationQuestion';
import WhichUALTreatmentQuestion from './Questions/WhichUALTreatmentQuestion';
import { TreatmentOption, TreatmentQuestion } from './types';
import { treatmentAnswerGtagEvent } from '../../utilities/tracking/treatmentAnswer';
import YesNoQuestion from './Question/YesNoQuestion';
import { colchicineIntoleranceContent } from '../../content/managementQuestions/colchicineIntolerance';
import { diagnosedOrNotContent } from '../../content/managementQuestions/diagnosedOrNot';
import { currentFlareContent } from '../../content/managementQuestions/currentFlare';
import { oneJointOrMoreContent } from '../../content/managementQuestions/oneJointOrMore';
import { nsaidIntoleranceContent } from '../../content/managementQuestions/nsaidIntolerance';
import { prednisoloneIntoleranceContent } from '../../content/managementQuestions/prednisoloneIntolerance';
import { renalImpairmentContent } from '../../content/managementQuestions/renalImpairment';
import { injectionPreferredContent } from '../../content/managementQuestions/injectionPreferred';
import { onUALContent } from '../../content/managementQuestions/onUAL';
import { isUALPlannedContent } from '../../content/managementQuestions/isUALPlanned';

type Props = {
  setTreatment: (treatment: TreatmentOption) => void;
};

export default function TreatmentQuestions({ setTreatment }: Props): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = React.useState(TreatmentQuestion.DiganosedOrNot);

  const trackAndSetQuestion = (question: TreatmentQuestion) => (eventName: string): void => {
    treatmentAnswerGtagEvent(eventName);
    setCurrentQuestion(question);
  };

  const trackAndSetTreatment = (treatment: TreatmentOption) => (eventName: string): void => {
    treatmentAnswerGtagEvent(eventName);
    setTreatment(treatment);
  };

  switch (currentQuestion) {
    case TreatmentQuestion.DiganosedOrNot:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.CurrentFlareOrNot)}
          noHandler={trackAndSetTreatment(TreatmentOption.GetDiagnosed)}
          content={diagnosedOrNotContent}
        />
      );
    case TreatmentQuestion.CurrentFlareOrNot:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.NumberOfJointsAffected)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.OnUAL)}
          content={currentFlareContent}
        />
      );
    case TreatmentQuestion.NumberOfJointsAffected:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.IsInjectionPreferred)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.FlareAnyRenalImpairment)}
          content={oneJointOrMoreContent}
        />
      );
    case TreatmentQuestion.IsInjectionPreferred:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetTreatment(TreatmentOption.FlareInjection)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.FlareAnyRenalImpairment)}
          content={injectionPreferredContent}
        />
      );
    case TreatmentQuestion.FlareAnyRenalImpairment:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.FlareAnyPrednisoloneIntolerance)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.FlareAnyColchicineIntolerance)}
          content={renalImpairmentContent}
        />
      );
    case TreatmentQuestion.FlareAnyColchicineIntolerance:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.FlareAnyNSAIDIntolerance)}
          noHandler={trackAndSetTreatment(TreatmentOption.FlareColchicine)}
          content={colchicineIntoleranceContent}
        />
      );
    case TreatmentQuestion.FlareAnyNSAIDIntolerance:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.FlareAnyPrednisoloneIntolerance)}
          noHandler={trackAndSetTreatment(TreatmentOption.FlareNSAID)}
          content={nsaidIntoleranceContent}
        />
      );
    case TreatmentQuestion.FlareAnyPrednisoloneIntolerance:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetTreatment(TreatmentOption.FlareMultipleContraindication)}
          noHandler={trackAndSetTreatment(TreatmentOption.FlarePrednisolone)}
          content={prednisoloneIntoleranceContent}
        />
      );
    case TreatmentQuestion.OnUAL:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.WhichUAL)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.IsUALPlanned)}
          content={onUALContent}
        />
      );
    case TreatmentQuestion.WhichUAL:
      return (
        <WhichUALTreatmentQuestion handler={trackAndSetTreatment(TreatmentOption.UALAlreadyOn)} />
      );
    case TreatmentQuestion.IsUALPlanned:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.UALAnyRenalImpairment)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.IsUALIndicated)}
          content={isUALPlannedContent}
        />
      );
    case TreatmentQuestion.IsUALIndicated:
      return (
        <UALIndicationQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.UALAnyRenalImpairment)}
          noHandler={trackAndSetTreatment(TreatmentOption.UALNoIndication)}
        />
      );
    case TreatmentQuestion.UALAnyRenalImpairment:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.UALAnyPrednisoloneIntolerance)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.UALAnyColchicineIntolerance)}
          content={renalImpairmentContent}
        />
      );
    case TreatmentQuestion.UALAnyColchicineIntolerance:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.UALAnyNSAIDIntolerance)}
          noHandler={trackAndSetTreatment(TreatmentOption.UALStartColchicine)}
          content={colchicineIntoleranceContent}
        />
      );
    case TreatmentQuestion.UALAnyNSAIDIntolerance:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.UALAnyPrednisoloneIntolerance)}
          noHandler={trackAndSetTreatment(TreatmentOption.UALStartNSAID)}
          content={nsaidIntoleranceContent}
        />
      );
    case TreatmentQuestion.UALAnyPrednisoloneIntolerance:
      return (
        <YesNoQuestion
          yesHandler={trackAndSetTreatment(TreatmentOption.UALStartMultipleContraindication)}
          noHandler={trackAndSetTreatment(TreatmentOption.UALStartPrednisolone)}
          content={prednisoloneIntoleranceContent}
        />
      );
    default:
      return <></>;
  }
}
