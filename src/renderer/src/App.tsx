import Versions from './components/Versions';

function App(): JSX.Element {
  return (
    <>
      <button
        onClick={(): void => {
          window.api.openOverlay('ivy');
        }}
        className="overlay-button"
      >
        Open Overlay Ivy
      </button>
      <button
        onClick={(): void => {
          window.api.openOverlay('flip');
        }}
        className="overlay-button"
      >
        Open Overlay Flip
      </button>
      <Versions />
    </>
  );
}

export default App;
