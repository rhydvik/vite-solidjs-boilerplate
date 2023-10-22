export function printLog(message: string | Record<string, unknown>) {
  if (process.env.NODE_ENV === 'production') return;
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(message, null, 2));
}
