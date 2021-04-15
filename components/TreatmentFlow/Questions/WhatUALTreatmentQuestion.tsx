import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  handler: () => void;
};

export default function WhatUALTreatmentQuestion({ handler }: Props): JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const nextHandler = () => {
    handler();
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
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gout medication"
          name="gout-medication"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="allopurinol"
            control={<Radio color="primary" />}
            label="Allopurinol (Progout, Zyloprim)"
          />
          <FormControlLabel
            value="febuxostat"
            control={<Radio color="primary" />}
            label="Febuxostat (Adenuric)"
          />
          <FormControlLabel
            value="preobenecid"
            control={<Radio color="primary" />}
            label="Probenecid (Pro-Cid)"
          />
          <FormControlLabel value="not-sure" control={<Radio color="primary" />} label="Not sure" />
          <FormHelperText>{value === null ? 'Select an option to continue' : ' '}</FormHelperText>
        </RadioGroup>
      </FormControl>
      <AnswerBox answers={answers} />
    </Question>
  );
}
