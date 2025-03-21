import { SkipButton } from "../components";

export const steps = [
    {
      selector: ".first-step",
      content: ({ setCurrentStep, currentStep }) => (
        <div>
          <h3>Welcome!</h3>
          <p>This is step one.</p>
          <SkipButton nextStepIndex={currentStep + 4} />
        </div>
      ),
    },
    {
      selector: ".second-step",
      content: "Here it's the site log",
    },
    {
      selector: ".third-step",
      content: "This is a Youtube video",
    },
    {
      selector: ".fourth-step",
      content: "Click it!",
    },
    {
      selector: ".fifth-step",
      content: "This is my fifth Step",
    },
    {
      selector: ".sixth-step",
      content: "This is my sixth Step",
    },
  ]