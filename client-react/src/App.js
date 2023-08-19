import 'App.css';
import axios from 'axios';
import useAxios from 'hooks/useAxios';
import {useEffect, useState} from 'react';

export default function App() {
  const [status, error] = useAxios('/api/status');

  return (
    <div className="App">
      <h1>React Express Demo</h1>

      <section>

        {!!error &&
          <>Error: <code>{error}</code></>}
        {!!status &&
          <>Version: <code>{status.version}</code></>}

      </section>
    </div>
  );
}