export function printLog(message: string | Record<string, unknown>) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(message, null, 2));
}
