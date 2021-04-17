import { ON_UAL_NO, ON_UAL_YES } from '../../constants/tracking/treatmentAnswer';

export const onUALContent = {
  title: 'Are you on gout prevention medication?',
  body: (
    <>
      <p>
        Gout prevention medications are also known as uric acid lowering medications. These include
        allopurinol (Progout, Zyloprim), febuxostat (Adenuric) and probenacid (Pro-Cid)
      </p>
      <p>
        If you are not sure of any questions, it can be helpful to go through the questions with
        your doctor or health professional
      </p>
    </>
  ),
  yesText: 'I am already on gout prevention medication',
  yesTrackingString: ON_UAL_YES,
  noText: 'I am not on gout prevention medication',
  noTrackingString: ON_UAL_NO
};
