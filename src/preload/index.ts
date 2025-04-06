import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

// Custom APIs for renderer
export const api = {
  iracing: {
    init: async (): Promise<void> => ipcRenderer.invoke('iracing:init'),
    onTelemetry: (callback: (data: unknown) => void): unknown =>
      ipcRenderer.on('iracing:telemetry', (_, data) => {
        callback(data);
      }),
    onSessionInfo: (callback: (data: unknown) => void): unknown =>
      ipcRenderer.on('iracing:sessionInfo', (_, data) => {
        callback(data);
      }),
    offTelemetry: (): void => {
      ipcRenderer.removeAllListeners('iracing:telemetry');
    },
    offSessionInfo: (): void => {
      ipcRenderer.removeAllListeners('iracing:sessionInfo');
    }
  },
  openOverlay: (): void => {
    ipcRenderer.invoke('overlay:open');
  }
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
