import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./presentation/App";
import { StartReturnType } from "msw/lib/types/setupWorker/glossary";
import { SetupWorkerApi } from "msw";

function prepare(): StartReturnType | Promise<void> {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { worker }: {worker: SetupWorkerApi} = require('./__testing__/mocks/browser');
    return worker.start({
      onUnhandledRequest: 'warn',
    });
  }

  return Promise.resolve();
}

void prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,

    document.getElementById('root')
  );
})


