import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products, onFilterTextChange }) {
	const [filterText, setFilterText] = useState("");
	return (
		<>
			<SearchBar
				filterText={filterText}
				onFilterTextChange={setFilterText}
				inStockOnly={inStockOnly}
			/>
			<ProductTable products={products} />
		</>
	);
}
export default FilterableProductTable;
