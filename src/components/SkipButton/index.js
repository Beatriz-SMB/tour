import { useTour } from '@reactour/tour';
import { Button } from './styles';

const SkipButton = ({ nextStepIndex }) => {
  const { setCurrentStep } = useTour();

  return (
    <Button onClick={() => setCurrentStep(nextStepIndex)} style={{ marginLeft: '10px' }}>
      Skip Step
    </Button>
  );
};

export default  SkipButton;