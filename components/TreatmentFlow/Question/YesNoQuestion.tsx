import Question from '../../../componentsTemplated/Question/Question';
import AnswerBox from '../../../componentsTemplated/AnswerBox/AnswerBox';

type Props = {
  yesHandler: (eventName: string) => void;
  noHandler: (eventName: string) => void;
  content: {
    title: string;
    body: JSX.Element;
    yesText: string;
    yesTrackingString: string;
    noText: string;
    noTrackingString: string;
  };
};

export default function YesNoQuestion({ yesHandler, noHandler, content }: Props): JSX.Element {
  const answers = [
    {
      text: content.yesText,
      handler: () => yesHandler(content.yesTrackingString)
    },
    {
      text: content.noText,
      handler: () => noHandler(content.noTrackingString)
    }
  ];

  return (
    <Question title={content.title}>
      <>{content.body}</>
      <AnswerBox answers={answers} />
    </Question>
  );
}
