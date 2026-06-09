const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(
      "Failed to fetch products"
    );
  }

  return response.json();
};

export const fetchProductById = async id => {
  const response = await fetch(
    `${BASE_URL}/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch product"
    );
  }

  return response.json();
};