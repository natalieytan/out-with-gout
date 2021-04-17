import { ON_UAL_NO, ON_UAL_YES } from '../../constants/tracking/treatmentAnswer';

export const isUALPlannedContent = {
  title: 'Has your doctor planned to start you on gout prevention medication?',
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
  yesText: 'Yes',
  yesTrackingString: ON_UAL_YES,
  noText: 'No',
  noTrackingString: ON_UAL_NO
};
