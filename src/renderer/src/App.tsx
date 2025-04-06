import { useEffect, useState } from 'react';
import { JSONTree } from 'react-json-tree';

function App(): JSX.Element {
  const [telemetry, setTelemetry] = useState<unknown>(() => {});
  const [sessionInfo, setSessionInfo] = useState<unknown>(() => {});

  useEffect(() => {
    window.api.iracing.init();

    window.api.iracing.onTelemetry((data: unknown) => {
      setTelemetry(data);
    });

    window.api.iracing.onSessionInfo((data: unknown) => {
      setSessionInfo(data);
    });

    return (): void => {
      window.api.iracing.offTelemetry();
      window.api.iracing.offSessionInfo();
    };
  }, []);

  return (
    <>
      <JSONTree data={{ telemetry, sessionInfo }} />
      <button
        onClick={(): void => {
          window.api.openOverlay();
        }}
        className="overlay-button"
      >
        Open Overlay
      </button>
    </>
  );
}

export default App;
