const url = "http://localhost:3004/mems/";

export function getMems() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function addMem(mem) {
  return fetch(url, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mem),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateMem(mem) {
  return fetch(url + mem.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mem),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
