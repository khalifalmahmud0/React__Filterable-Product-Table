import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState("");
	return (
		<>
			<SearchBar />
			<ProductTable products={products} />
		</>
	);
}
export default FilterableProductTable;
