function ProductRow({ product }) {
	return (
        {
                const name = product.stocked ? ( product.name ) : (
			<span style={{ color: "red" }}>{product.name}</span>
			); return (
			<tr>
				<td>{product.name}</td>
				<td>{product.price}</td>
			</tr>
			)
            };
	);
}
export default ProductRow;
