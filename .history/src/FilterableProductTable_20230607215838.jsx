import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products, onFilterTextChange }) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<>
			<SearchBar
				filterText={filterText}
				onFilterTextChange={setFilterText}
				inStockOnly={inStockOnly}
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable products={products} />
		</>
	);
}
export default FilterableProductTable;
