export function getAll(buscar) {
  return fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`
  ).then((res) => res.json());
}

export function getById(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}`).then((res) =>
    res.json()
  );
}

export function getDescription(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}/description`).then(
    (res) => res.json()
  );
}

function create() {}
