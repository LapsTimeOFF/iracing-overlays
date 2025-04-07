import { useState, useEffect } from 'react';
import background from './assets/Background.png';

import './assets/overlay.css';
import { Telemetry } from './types/telemetry';
import { SessionInfo } from './types/sessiondata';
import { JSONTree } from 'react-json-tree';

const getBatteryModeName = (mode: number): string => {
  switch (mode) {
    case 0:
      return 'ND';
    case 1:
      return 'Qual';
    case 2:
      return 'Attack';
    case 3:
      return 'Balanced';
    case 4:
      return 'Build';
    default:
      return 'Unknown';
  }
};

const Overlay = (): JSX.Element => {
  const [blink, setBlink] = useState<boolean>(false);
  const [telemetry, setTelemetry] = useState<Telemetry>();
  const [sessionInfo, setSessionInfo] = useState<SessionInfo>();
  const [rpmLight, setRpmLight] = useState<string[]>([
    '#666666', // grey
    '#50FF50', // green
    '#8080FF', // blue
    '#FFFF59', // yellow
    '#FF5959', // red
    '#FF5959',
    '#FFFF59',
    '#8080FF',
    '#50FF50',
    '#666666'
  ]);

  useEffect(() => {
    window.api.iracing.init();

    window.api.iracing.onTelemetry((data: unknown) => {
      setTelemetry(data as Telemetry);
      console.log(JSON.stringify(data));

      const d = data as Telemetry;

      const rpm = Math.round(d.values.RPM);

      if (rpm >= 7250 && rpm < 7500) {
        setRpmLight([
          '#50FF50',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#50FF50'
        ]);
        setBlink(false);
      } else if (rpm >= 7500 && rpm < 7650) {
        setRpmLight([
          '#50FF50',
          '#50FF50',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#50FF50',
          '#50FF50'
        ]);
        setBlink(false);
      } else if (rpm >= 7650 && rpm < 7800) {
        setRpmLight([
          '#50FF50',
          '#50FF50',
          '#FFFF59',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#FFFF59',
          '#50FF50',
          '#50FF50'
        ]);
        setBlink(false);
      } else if (rpm >= 7800 && rpm < 7900) {
        setRpmLight([
          '#50FF50',
          '#50FF50',
          '#FFFF59',
          '#FFFF59',
          '#666666',
          '#666666',
          '#FFFF59',
          '#FFFF59',
          '#50FF50',
          '#50FF50'
        ]);
        setBlink(false);
      } else if (rpm >= 7900 && rpm < 8000) {
        setRpmLight([
          '#50FF50',
          '#50FF50',
          '#FFFF59',
          '#FFFF59',
          '#FF5959',
          '#FF5959',
          '#FFFF59',
          '#FFFF59',
          '#50FF50',
          '#50FF50'
        ]);
        setBlink(false);
      } else if (rpm >= 8000) {
        setRpmLight([
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF',
          '#8080FF'
        ]);
        setBlink(true);
      } else {
        setRpmLight([
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666',
          '#666666'
        ]);
        setBlink(false);
      }
    });

    window.api.iracing.onSessionInfo((data: unknown) => {
      setSessionInfo(data as SessionInfo);
    });

    return (): void => {
      window.api.iracing.offTelemetry();
      window.api.iracing.offSessionInfo();
    };
  }, []);

  if (!telemetry || !sessionInfo) {
    return <div className="loading">Awaiting data... Try restarting the app.</div>;
  }

  return (
    <div>
      <div className="rpm">
        <p className="rpm-value">{Math.round(telemetry.values.RPM)}</p>

        <div className="rpm-led-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="15"
            viewBox="0 0 135 15"
            fill="none"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[0]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="36.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[1]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="65.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[2]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="94.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[3]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="127.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[4]}
              className={blink ? 'blinking-led' : ''}
            />
          </svg>
        </div>

        <div className="rpm-led-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="15"
            viewBox="0 0 137 15"
            fill="none"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[5]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="42.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[6]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="71.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[7]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="100.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[8]}
              className={blink ? 'blinking-led' : ''}
            />
            <circle
              cx="129.5"
              cy="7.5"
              r="7.5"
              fill={rpmLight[9]}
              className={blink ? 'blinking-led' : ''}
            />
          </svg>
        </div>
      </div>
      <p className="gear-value">
        {telemetry.values.Gear === -1
          ? 'R'
          : telemetry.values.Gear === 0
            ? 'N'
            : telemetry.values.Gear}
      </p>

      <div className="tyres">
        <p className="fl-value tyre-temp">{Math.round(telemetry.values.LFtempCM)}°C</p>
        <p className="fr-value tyre-temp">{Math.round(telemetry.values.RFtempCM)}°C</p>

        <p className="rl-value tyre-temp">{Math.round(telemetry.values.LRtempCM)}°C</p>
        <p className="rr-value tyre-temp">{Math.round(telemetry.values.RRtempCM)}°C</p>
      </div>

      <p className="speed-value">{Math.round(telemetry.values.Speed * 3.6)}</p>

      <p
        className={`relative-value ${telemetry.values.LapDeltaToBestLap > 0 ? 'positive' : 'negative'}`}
      >
        {(telemetry.values.LapDeltaToBestLap < 0 ? '-' : '') +
          telemetry.values.LapDeltaToBestLap.toFixed(2)}
      </p>

      <div className="tc">
        <p className="tc-value tc1-value">{telemetry.values.dcTractionControl2}</p>
        <p className="tc-label tc1-label">TC1</p>
        <p className="tc-value tc2-value">{telemetry.values.dcTractionControl}</p>
        <p className="tc-label tc2-label">TC2</p>
      </div>

      <div className="bbal">
        <p className="bbal-value">{telemetry.values.dcBrakeBias}</p>
        <p className="bbal-label">BBAL</p>
      </div>

      <div className="ers">
        <p className="ers-label">ERS</p>
        <p className="ers-value">{Math.round(telemetry.values.EnergyERSBatteryPct * 100)}</p>
        <p className="ers-mode">{getBatteryModeName(telemetry.values.dcMGUKDeployMode)}</p>
      </div>

      <div className="brake">
        <div className="brake-bg"></div>
        <div
          className="brake-progress"
          style={{
            width: `${(telemetry.values.Brake * 100 * 137) / 100}px` // math: brake * 137 / 100 + 'px',
          }}
        ></div>
        <p className="brake-label">BRAKE</p>
      </div>

      <div className="throttle">
        <div className="throttle-bg"></div>
        <div
          className="throttle-progress"
          style={{
            width: `${(telemetry.values.Throttle * 100 * 137) / 100}px` // math: throttle * 137 / 100 + 'px',
          }}
        ></div>
        <p className="throttle-label">THROTTLE</p>
      </div>

      <img src={background} alt="Background" style={{ width: '100%', height: '100%' }} />

      <JSONTree data={{ telemetry, sessionInfo }} />
    </div>
  );
};

export default Overlay;
