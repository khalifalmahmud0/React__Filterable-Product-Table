import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState("");
	return (
		<>
			<SearchBar filterText={filterText} />
			<ProductTable products={products} />
		</>
	);
}
export default FilterableProductTable;
