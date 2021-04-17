import styled from 'styled-components';

import {
  PREDNISOLONE_INTOLERANCE_NO,
  PREDNISOLONE_INTOLERANCE_YES
} from '../../constants/tracking/treatmentAnswer';

const ListBox = styled.div`
  text-align: left;
  margin: 0 auto;
  display: inline-block;
`;

export const prednisoloneIntoleranceContent = {
  title: 'Do you have any of the following?',
  body: (
    <ListBox>
      <ul>
        <li>Difficult to control diabetes mellitus</li>
        <li>Recent surgery (surgical wound still healing for example)</li>
        <li>Previous intolerance to prednisolone or another corticosteroid</li>
      </ul>
    </ListBox>
  ),
  yesText: 'Yes',
  yesTrackingString: PREDNISOLONE_INTOLERANCE_YES,
  noText: 'No',
  noTrackingString: PREDNISOLONE_INTOLERANCE_NO
};
