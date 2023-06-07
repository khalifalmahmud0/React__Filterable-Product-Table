import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products }) {
	return (
		<>
			<SearchBar />
			<ProductTable products={products} />
		</>
	);
}
export default FilterableProductTable;
