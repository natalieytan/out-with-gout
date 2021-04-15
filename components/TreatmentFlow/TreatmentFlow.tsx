import React from 'react';

import TreatmentQuestions from './TreatmentQuestions';
import { TreatmentOption } from './types';

export default function TreatmentFlow(): JSX.Element {
  const [treatment, setTreatment] = React.useState(TreatmentOption.Undecided);

  switch (treatment) {
    case TreatmentOption.FlarePrednisolone:
      return <>Prednisolone</>;
    case TreatmentOption.FlareColchicine:
      return <>Colchicine</>;
    case TreatmentOption.FlareInjection:
      return <>Injection</>;
    case TreatmentOption.FlareNSAID:
      return <>NSAID</>;
    case TreatmentOption.FlareMultipleContraindication:
      return <>UAL Multi CI</>;
    case TreatmentOption.UALAlreadyOn:
      return <>Already on UAL</>;
    case TreatmentOption.UALNoIndication:
      return <>No indication for UAL</>;
    case TreatmentOption.UALStartPrednisolone:
      return <>UAL with Prednisolone</>;
    case TreatmentOption.UALStartColchicine:
      return <>UAL with Colchicine</>;
    case TreatmentOption.UALStartNSAID:
      return <>UAL with NSAID</>;
    case TreatmentOption.UALStartMultipleContraindication:
      return <>UAL with multi CI</>;
    case TreatmentOption.Undecided:
      return <TreatmentQuestions setTreatment={setTreatment} />;
    default:
      return <TreatmentQuestions setTreatment={setTreatment} />;
  }
}
