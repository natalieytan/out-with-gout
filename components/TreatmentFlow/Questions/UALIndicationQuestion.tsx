import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: () => void;
  noHandler: () => void;
};

export default function UALIndicationQuestion({ yesHandler, noHandler }: Props): JSX.Element {
  const [indicationsState, setIndicationsState] = React.useState({
    flare: false,
    tophi: false,
    imaging: false,
    ckd: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndicationsState({ ...indicationsState, [event.target.name]: event.target.checked });
  };

  const nextHandler = () => {
    if (Object.values(indicationsState).includes(true)) {
      yesHandler();
    } else {
      noHandler();
    }
  };

  const answers = [
    {
      text: 'Next',
      handler: nextHandler
    }
  ];

  return (
    <Question title="Do you have any of the following?">
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={indicationsState.flare}
                onChange={handleChange}
                name="flare"
                color="primary"
              />
            }
            label="More than 1 flare of gout within 12 months"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={indicationsState.tophi}
                onChange={handleChange}
                name="tophi"
                color="primary"
              />
            }
            label="Gouty tophi (uric acid deposits in your soft tissue) "
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={indicationsState.imaging}
                onChange={handleChange}
                name="imaging"
                color="primary"
              />
            }
            label="Joint damage due to gout on x-ray or other imaging"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={indicationsState.ckd}
                onChange={handleChange}
                name="ckd"
                color="primary"
              />
            }
            label="Joint damage due to gout on x-ray or other imaging"
          />
          <FormHelperText>Leave blank if none of the above apply</FormHelperText>
        </FormGroup>
      </FormControl>
      <AnswerBox answers={answers} />
    </Question>
  );
}
