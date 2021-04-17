import React from 'react';

import TreatmentQuestions from './TreatmentQuestions';
import HeaderContrast from '../../componentsTemplated/HeaderContrast/HeaderContrast';
import TreatmentResult from './TreatmentResult/TreatmentResult';
import { TreatmentOption } from './types';
import { getDiagnosedContent } from '../../content/treatment/getDiagnosed';
import { flareInjectionContent } from '../../content/treatment/flareInjection';
import { flareColchicineContent } from '../../content/treatment/flareColchicine';
import { flareNSAIDsContent } from '../../content/treatment/flareNSAIDs';
import { flarePrednisoloneContent } from '../../content/treatment/flarePrednisolone';
import { flareMultipleContraIndicationContent } from '../../content/treatment/flareMultipleContraIndication';
import { UALMultipleContraindicationContent } from '../../content/treatment/UALMultipleContraindication';
import { UALWithNSAIDSContent } from '../../content/treatment/UALWithNSAID';
import { UALWithColchicineContent } from '../../content/treatment/UALWithColchicine';
import { UALNoIndicationContent } from '../../content/treatment/UALNoIndication';
import { UALALreadyOnContent } from '../../content/treatment/UALAlreadyOn';
import { UALWithPrednisoloneContent } from '../../content/treatment/UALWithPrednisolone';

export default function TreatmentFlow(): JSX.Element {
  const [treatment, setTreatment] = React.useState(TreatmentOption.Undecided);

  switch (treatment) {
    case TreatmentOption.GetDiagnosed:
      return <TreatmentResult content={getDiagnosedContent} />;
    case TreatmentOption.FlarePrednisolone:
      return <TreatmentResult content={flarePrednisoloneContent} />;
    case TreatmentOption.FlareColchicine:
      return <TreatmentResult content={flareColchicineContent} />;
    case TreatmentOption.FlareInjection:
      return <TreatmentResult content={flareInjectionContent} />;
    case TreatmentOption.FlareNSAID:
      return <TreatmentResult content={flareNSAIDsContent} />;
    case TreatmentOption.FlareMultipleContraindication:
      return <TreatmentResult content={flareMultipleContraIndicationContent} />;
    case TreatmentOption.UALAlreadyOn:
      return <TreatmentResult content={UALALreadyOnContent} />;
    case TreatmentOption.UALNoIndication:
      return <TreatmentResult content={UALNoIndicationContent} />;
    case TreatmentOption.UALStartPrednisolone:
      return <TreatmentResult content={UALWithPrednisoloneContent} />;
    case TreatmentOption.UALStartColchicine:
      return <TreatmentResult content={UALWithColchicineContent} />;
    case TreatmentOption.UALStartNSAID:
      return <TreatmentResult content={UALWithNSAIDSContent} />;
    case TreatmentOption.UALStartMultipleContraindication:
      return <TreatmentResult content={UALMultipleContraindicationContent} />;
    case TreatmentOption.Undecided:
      return (
        <>
          <HeaderContrast
            title="Managing gout"
            subtitle="Please answer a few questions to be able to give information directed to you"
          />
          <TreatmentQuestions setTreatment={setTreatment} />
        </>
      );
    default:
      return <></>;
  }
}
