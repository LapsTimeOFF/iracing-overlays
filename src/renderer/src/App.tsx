import Versions from './components/Versions';

function App(): JSX.Element {
  return (
    <>
      <button
        onClick={(): void => {
          window.api.openOverlay();
        }}
        className="overlay-button"
      >
        Open Overlay
      </button>
      <Versions />
    </>
  );
}

export default App;
