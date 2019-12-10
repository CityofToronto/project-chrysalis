function fetchApi<T>(url: string, opts = {}): Promise<T> {
  return fetch(url, opts)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .then((data) => {
      return data;
    });
}

export function getAllForms(): Promise<object> {
  return fetchApi<{ data: object }>("./forms.json").then(({ data }) => data);
}

export function saveFormData(
  clientId: number,
  schemaId: number,
  formData: object
) {
  return fetchApi("/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId, schemaId, formData })
  });
}
