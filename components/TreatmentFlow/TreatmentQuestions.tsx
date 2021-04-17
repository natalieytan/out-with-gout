import React from 'react';

import CurrentFlareQuestion from './Questions/CurrentFlareQuestion';
import JointsAffectedQuestion from './Questions/JointsAffectedQuestion';
import InjectionPreferredQuestion from './Questions/InjectionPreferredQuestion';
import RenalImpairmentQuestion from './Questions/RenalImpairmentQuestion';
import ColchicineIntoleranceQuestion from './Questions/ColchicineIntoleranceQuestion';
import NSAIDIntoleranceQuestion from './Questions/NSAIDIntoleranceQuestion';
import PrednisoloneIntoleranceQuestion from './Questions/PrednisoloneIntoleranceQuestion';
import OnUALQuestion from './Questions/OnUALQuestion';
import UALIndicationQuestion from './Questions/UALIndicationQuestion';
import UALPlannedQuestion from './Questions/UALPlannedQuestion';
import WhichUALTreatmentQuestion from './Questions/WhichUALTreatmentQuestion';
import DiganosedOrNotQuestion from './Questions/DiagnosedOrNotQuestion';
import { TreatmentOption, TreatmentQuestion } from './types';
import { treatmentAnswerGtagEvent } from '../../utilities/tracking/treatmentAnswer';

type Props = {
  setTreatment: (treatment: TreatmentOption) => void;
};

export default function TreatmentQuestions({ setTreatment }: Props): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = React.useState(TreatmentQuestion.DiganosedOrNot);

  const trackAndSetQuestion = (question: TreatmentQuestion) => (eventName: string): void => {
    treatmentAnswerGtagEvent(eventName);
    setCurrentQuestion(question);
  };

  switch (currentQuestion) {
    case TreatmentQuestion.DiganosedOrNot:
      return (
        <DiganosedOrNotQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.CurrentFlareOrNot)}
          noHandler={() => setTreatment(TreatmentOption.GetDiagnosed)}
        />
      );
    case TreatmentQuestion.CurrentFlareOrNot:
      return (
        <CurrentFlareQuestion
          yesHandler={trackAndSetQuestion(TreatmentQuestion.NumberOfJointsAffected)}
          noHandler={trackAndSetQuestion(TreatmentQuestion.OnUAL)}
        />
      );
    case TreatmentQuestion.NumberOfJointsAffected:
      return (
        <JointsAffectedQuestion
          oneJointHandler={() => setCurrentQuestion(TreatmentQuestion.IsInjectionPreferred)}
          multiJointHandler={() => setCurrentQuestion(TreatmentQuestion.FlareAnyRenalImpairment)}
        />
      );
    case TreatmentQuestion.IsInjectionPreferred:
      return (
        <InjectionPreferredQuestion
          yesHandler={() => setTreatment(TreatmentOption.FlareInjection)}
          noHandler={() => setCurrentQuestion(TreatmentQuestion.FlareAnyRenalImpairment)}
        />
      );
    case TreatmentQuestion.FlareAnyRenalImpairment:
      return (
        <RenalImpairmentQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.FlareAnyPrednisoloneIntolerance)}
          noHandler={() => setCurrentQuestion(TreatmentQuestion.FlareAnyColchicineIntolerance)}
        />
      );
    case TreatmentQuestion.FlareAnyColchicineIntolerance:
      return (
        <ColchicineIntoleranceQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.FlareAnyNSAIDIntolerance)}
          noHandler={() => setTreatment(TreatmentOption.FlareColchicine)}
        />
      );
    case TreatmentQuestion.FlareAnyNSAIDIntolerance:
      return (
        <NSAIDIntoleranceQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.FlareAnyPrednisoloneIntolerance)}
          noHandler={() => setTreatment(TreatmentOption.FlareNSAID)}
        />
      );
    case TreatmentQuestion.FlareAnyPrednisoloneIntolerance:
      return (
        <PrednisoloneIntoleranceQuestion
          yesHandler={() => setTreatment(TreatmentOption.FlareMultipleContraindication)}
          noHandler={() => setTreatment(TreatmentOption.FlarePrednisolone)}
        />
      );
    case TreatmentQuestion.OnUAL:
      return (
        <OnUALQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.WhichUAL)}
          noHandler={() => setCurrentQuestion(TreatmentQuestion.IsUALPlanned)}
        />
      );
    case TreatmentQuestion.WhichUAL:
      return (
        <WhichUALTreatmentQuestion handler={() => setTreatment(TreatmentOption.UALAlreadyOn)} />
      );
    case TreatmentQuestion.IsUALPlanned:
      return (
        <UALPlannedQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.UALAnyRenalImpairment)}
          noHandler={() => setCurrentQuestion(TreatmentQuestion.IsUALIndicated)}
        />
      );
    case TreatmentQuestion.IsUALIndicated:
      return (
        <UALIndicationQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.UALAnyRenalImpairment)}
          noHandler={() => setTreatment(TreatmentOption.UALNoIndication)}
        />
      );
    case TreatmentQuestion.UALAnyRenalImpairment:
      return (
        <RenalImpairmentQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.UALAnyPrednisoloneIntolerance)}
          noHandler={() => setCurrentQuestion(TreatmentQuestion.UALAnyColchicineIntolerance)}
        />
      );
    case TreatmentQuestion.UALAnyColchicineIntolerance:
      return (
        <ColchicineIntoleranceQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.UALAnyNSAIDIntolerance)}
          noHandler={() => setTreatment(TreatmentOption.UALStartColchicine)}
        />
      );
    case TreatmentQuestion.UALAnyNSAIDIntolerance:
      return (
        <NSAIDIntoleranceQuestion
          yesHandler={() => setCurrentQuestion(TreatmentQuestion.UALAnyPrednisoloneIntolerance)}
          noHandler={() => setTreatment(TreatmentOption.UALStartNSAID)}
        />
      );
    case TreatmentQuestion.UALAnyPrednisoloneIntolerance:
      return (
        <PrednisoloneIntoleranceQuestion
          yesHandler={() => setTreatment(TreatmentOption.UALStartMultipleContraindication)}
          noHandler={() => setTreatment(TreatmentOption.UALStartPrednisolone)}
        />
      );
    default:
      return <></>;
  }
}
