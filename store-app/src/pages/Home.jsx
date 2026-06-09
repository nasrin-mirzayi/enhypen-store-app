import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";

import { fetchProducts } from "../services/productsApi";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <>

      <HeroBanner />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter />

      <ProductList searchTerm={searchTerm} />

    
      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
          padding: "1rem",
          borderTop: "1px solid #ddd",
        }}
      >
        <h2>React Query Demo (External API)</h2>

        <p style={{ opacity: 0.7 }}>
          This section is only for demonstrating API fetching.
        </p>

        {isLoading && (
          <p>Loading external products...</p>
        )}

        {isError && (
          <p style={{ color: "red" }}>
            Failed to load API data
          </p>
        )}

        {data && (
          <p>
            External API loaded:{" "}
            <b>{data.products.length}</b> products
          </p>
        )}
      </div>
    </>
  );
}