import Main from "./pages/main";
import { TourProvider } from '@reactour/tour'
import { steps } from "./utils/steps";

function App() {
  return (
    <TourProvider 
      steps={steps}
      styles={{
        popover: (base) => ({
          ...base,
          '--reactour-accent': '#ef5a3d',
          maxWidth: '250px',
          left: '14px', 
          right: '14px', 
        }),

        badge: (base) => ({ ...base, left: 'auto', right: '-0.8125em' }),
        controls: (base) => ({ ...base, marginTop: 100 }),
        close: (base) => ({ ...base, right: 'auto', left: 8, top: 8 }),
      }}
      >
      <Main />
    </TourProvider>
  );
}

export default App;
