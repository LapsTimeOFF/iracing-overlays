import { WebContents } from 'electron';
import { require } from './require';

const irsdk = require('iracing-sdk-js');

let iracing;

export const initIRacing = (window: WebContents): void => {
  iracing =
    irsdk.getInstance() ??
    irsdk.init({
      telemetryUpdateInterval: 16,
      sessionInfoUpdateInterval: 1000
    });

  console.log('iRacing SDK initialized');

  iracing.once('Connected', () => {
    console.log('Connected to iRacing');

    iracing.once('Disconnected', () => {
      console.log('Disconnected from iRacing');
    });

    iracing.on('Telemetry', (data) => {
      // Send telemetry data to renderer process
      try {
        window.send('iracing:telemetry', data);
      } catch (e) {
        console.error(e);
        if (iracing?.IrSdkWrapper?.shutdown) iracing.IrSdkWrapper.shutdown();
        iracing = null;
        process.exit(0);
      }
    });

    iracing.on('SessionInfo', (data) => {
      try {
        // Send session info data to renderer process
        window.send('iracing:sessionInfo', data);
      } catch (e) {
        console.error(e);
        if (iracing?.IrSdkWrapper?.shutdown) iracing.IrSdkWrapper.shutdown();
        iracing = null;
        process.exit(0);
      }
    });
  });
};
