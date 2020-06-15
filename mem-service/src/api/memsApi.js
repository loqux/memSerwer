const url = "http://localhost:3004/mems/";

export function getMems() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function postMem(mem) {
  return fetch(url, {
    method: "POST",
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
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
