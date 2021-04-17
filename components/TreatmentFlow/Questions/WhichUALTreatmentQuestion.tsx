import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';
import {
  WHICH_UAL_ALLOPURINOL,
  WHICH_UAL_FEBUXOSTAT,
  WHICH_UAL_NOT_SURE,
  WHICH_UAL_PROBENECID
} from '../../../constants/tracking/treatmentAnswer';

type Props = {
  handler: (eventName: string) => void;
};

enum UAL {
  ALLOPURINOL = 'allopurinol',
  FEBUXOSTAT = 'febuxostat',
  PROBENECID = 'probenecid',
  NOT_SURE = 'not-sure'
}

const getTrackingEvent = (value: string | null): string => {
  switch (value) {
    case UAL.ALLOPURINOL:
      return WHICH_UAL_ALLOPURINOL;
    case UAL.FEBUXOSTAT:
      return WHICH_UAL_FEBUXOSTAT;
    case UAL.PROBENECID:
      return WHICH_UAL_PROBENECID;
    default:
      return WHICH_UAL_NOT_SURE;
  }
};

export default function WhichUALTreatmentQuestion({ handler }: Props): JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const nextHandler = () => {
    handler(getTrackingEvent(value));
  };

  const answers = [
    {
      text: 'Next',
      handler: nextHandler,
      disabled: value === null
    }
  ];

  return (
    <Question title="Which gout prevention medication are you on?">
      <div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gout medication"
            name="gout-medication"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={UAL.ALLOPURINOL}
              control={<Radio color="primary" />}
              label="Allopurinol (Progout, Zyloprim)"
            />
            <FormControlLabel
              value={UAL.FEBUXOSTAT}
              control={<Radio color="primary" />}
              label="Febuxostat (Adenuric)"
            />
            <FormControlLabel
              value={UAL.PROBENECID}
              control={<Radio color="primary" />}
              label="Probenecid (Pro-Cid)"
            />
            <FormControlLabel
              value={UAL.NOT_SURE}
              control={<Radio color="primary" />}
              label="Not sure"
            />
            <FormHelperText>{value === null ? 'Select an option to continue' : ' '}</FormHelperText>
          </RadioGroup>
        </FormControl>
      </div>
      <AnswerBox answers={answers} />
    </Question>
  );
}
