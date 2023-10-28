export function printLog(
  message: string | Record<string, unknown>,
  other: Record<string, unknown> = {},
  ...rest: Record<string, unknown>[]
) {
  if (process.env.NODE_ENV === 'production') return;
  // eslint-disable-next-line no-console
  console.log(message, JSON.stringify(other, null, 2), ...rest);
}
