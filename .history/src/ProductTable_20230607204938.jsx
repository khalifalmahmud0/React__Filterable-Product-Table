function ProductTable({ products }) {
	const rows = [];
	let lastCategory = null;
	products.forEach((product) => {
		// if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
		// 	return;
		// }
		// if (inStockOnly && !product.stocked) {
		// 	return;
		// }
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>
			);
		}
		rows.push(<ProductRow product={product} key={product.name} />);
		lastCategory = product.category;
	});
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>a</th>
						<th>1</th>
					</tr>
				</tbody>
			</table>
		</>
	);
}
export default ProductTable;
