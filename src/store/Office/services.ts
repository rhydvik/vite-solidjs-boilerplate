export async function fetchOffices() {
  try {
    const response = await fetch('/api/offices');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    /*eslint-disable*/
    const data = await response.json();
    return data.offices;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch offices: ${error.message}`);
    }
    throw new Error(`Failed to fetch offices: ${error}`);
  }
}
