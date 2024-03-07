import { useState, useMemo, useEffect } from "react";

const ItemList = () => {
	const [items, setItems] = useState(["Banana", "Mamão", "Morango", "Uva"]);
	const [newItem, setNewItem] = useState("");

	// useMemo para memoizar a lista
	const memoizedItems = useMemo(() => items, [items]);

	// useEffect para exibir no console sempre que a lista for recalculada
	useEffect(() => {
		console.log("Lista recalculada:", memoizedItems);
	}, [memoizedItems]);
	const handleAddItem = () => {
		if (newItem.trim() !== "") {
			setItems([...items, newItem]);
			setNewItem("");
		}
	};
	return (
		<div>
			<h2>Lista de Itens</h2>
			<ul>
				{memoizedItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<div>
				<input
					type="text"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
				<button onClick={handleAddItem}>Adicionar Item</button>
			</div>
		</div>
	);
};

export default ItemList;
