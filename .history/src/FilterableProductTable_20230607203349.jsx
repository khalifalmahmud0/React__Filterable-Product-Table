import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products }) {
	console.log("FilterablePage", products);
	return (
		<>
			<SearchBar />
			<ProductTable />
		</>
	);
}
export default FilterableProductTable;
