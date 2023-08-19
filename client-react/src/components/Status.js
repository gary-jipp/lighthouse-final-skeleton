import useAxios from 'hooks/useAxios';

export default function Status() {
  const [status, error] = useAxios('/api/status');

  return (
    <>
      {!!error &&
        <>Error: <code>{error}</code></>}
      {!!status &&
        <>
          <div>Name: <code>{status.name}</code></div>
          <div>Version: <code>{status.version}</code></div>
        </>
      }
    </>
  );
}