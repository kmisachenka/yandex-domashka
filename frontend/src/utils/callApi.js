export default function callApi(endpoint, options, payload) {
  return new Promise((resolve, reject) => {
    fetch(`/api${endpoint}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      ...options,
    })
      .then(response => response.json())
      .then(json => {
        if (json.ok) {
          resolve(json);
        }
        reject(new Error(json.message));
      });
  });
}
