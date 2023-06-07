import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products }) {
	return (
		<>
			<SearchBar />
			<ProductTable />
		</>
	);
}
export default FilterableProductTable;
