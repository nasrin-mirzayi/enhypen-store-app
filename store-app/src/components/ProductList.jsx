import ProductCard from "../components/ProductCard";
import { enhypenItems } from "../data/enhypenMapping";
import { useSettings } from "../context/SettingsContext";

export default function ProductList({ searchTerm }) {
  const { state } = useSettings();

  const filtered = enhypenItems.filter(item => {
    const matchCategory =
      state.category === "all"
        ? true
        : item.category === state.category;

    const matchSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    return (
      <h2 className="notfound">
        No products found 🔍
      </h2>
    );
  }

  return (
    <div className="product-grid">
      {filtered.map(item => (
        <ProductCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}