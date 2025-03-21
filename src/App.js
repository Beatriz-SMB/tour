import Main from "./pages/main";
import { TourProvider } from '@reactour/tour'
import { steps } from "./utils/steps";

function App() {
  return (
    <TourProvider steps={steps}>
      <Main />
    </TourProvider>
  );
}

export default App;
