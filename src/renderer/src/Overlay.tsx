import React, { useEffect, useState } from 'react';
import background from './assets/Background.png';

import './assets/overlay.css';

const Overlay = (): JSX.Element => {
  return (
    <div>
      <div className="rpm">
        <p className="rpm-value">99999</p>

        <div className="rpm-led-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="15"
            viewBox="0 0 135 15"
            fill="none"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#666666" />
            <circle cx="36.5" cy="7.5" r="7.5" fill="#50FF50" />
            <circle cx="65.5" cy="7.5" r="7.5" fill="#666666" />
            <circle cx="94.5" cy="7.5" r="7.5" fill="#FFFF59" />
            <circle cx="127.5" cy="7.5" r="7.5" fill="#FF5959" />
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
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FF5959" />
            <circle cx="42.5" cy="7.5" r="7.5" fill="#FFFF59" />
            <circle cx="71.5" cy="7.5" r="7.5" fill="#666666" />
            <circle cx="100.5" cy="7.5" r="7.5" fill="#50FF50" />
            <circle cx="129.5" cy="7.5" r="7.5" fill="#666666" />
          </svg>
        </div>
      </div>
      <p className="gear-value">1</p>

      <div className="tyres">
        <p className="fl-value tyre-temp">999°C</p>
        <p className="fr-value tyre-temp">999°C</p>

        <p className="rl-value tyre-temp">999°C</p>
        <p className="rr-value tyre-temp">999°C</p>
      </div>

      <p className="speed-value">192</p>

      <p className="relative-value negative">- 0.31</p>

      <div className="tc">
        <p className="tc-value tc1-value">6</p>
        <p className="tc-label tc1-label">TC1</p>
        <p className="tc-value tc2-value">4</p>
        <p className="tc-label tc2-label">TC2</p>
      </div>

      <div className="bbal">
        <p className="bbal-value">48.8</p>
        <p className="bbal-label">BBAL</p>
      </div>

      <div className="ers">
        <p className="ers-label">ERS</p>
        <p className="ers-value">52.5</p>
        <p className="ers-mode">BALANCED</p>
      </div>

      <div className="brake">
        <div className="brake-bg"></div>
        <div
          className="brake-progress"
          style={{
            width: '96px' // math: brake * 137 / 100 + 'px',
          }}
        ></div>
        <p className="brake-label">BRAKE</p>
      </div>

      <div className="throttle">
        <div className="throttle-bg"></div>
        <div
          className="throttle-progress"
          style={{
            width: '96px' // math: throttle * 137 / 100 + 'px',
          }}
        ></div>
        <p className="throttle-label">THROTTLE</p>
      </div>

      <img src={background} alt="Background" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Overlay;
