import styled from 'styled-components';

import {
  NSAID_INTOLERANCE_NO,
  NSAID_INTOLERANCE_YES
} from '../../constants/tracking/treatmentAnswer';

const ListBox = styled.div`
  text-align: left;
  margin: 0 auto;
  display: inline-block;
`;

export const nsaidIntoleranceContent = {
  title: 'Do you have any of the following?',
  body: (
    <ListBox>
      <ul>
        <li>A history of peptic ulcer</li>
        <li>Heart failure</li>
        <li>Difficult to control high blood pressure</li>
        <li>Chronic liver disease with scarring (Cirrhosis)</li>
        <li>Taking a blood thinning medication (anti-coagulants)</li>
        <li>Previous intolerance to non-steroidal anti-inflammatories (NSAIDs)</li>
      </ul>
    </ListBox>
  ),
  yesText: 'Yes',
  yesTrackingString: NSAID_INTOLERANCE_YES,
  noText: 'No',
  noTrackingString: NSAID_INTOLERANCE_NO
};
