import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
function ParentComponent() {
	const [count, setCount] = useState(0);
	const [valorDeIncremento, setValorDeIncremento] = useState(1);
	// Use useCallback para memoizar a função increment
	const increment = useCallback(() => {
		setCount((prevCount) => prevCount + valorDeIncremento);
	}, [valorDeIncremento]); // Nenhuma dependência, pois não usa nenhuma variáv

	const aumentaIncrementador = useCallback(() =>
  setValorDeIncremento((valorAnterior) => valorAnterior + 1), [])

	return (
		<div>
			<p>Count: {count}</p>
			<MemoizedComponent
				onIncrement={increment}
				valorDeIncremento={valorDeIncremento}
				setAumentaIncrementador={aumentaIncrementador}
			/>
		</div>
	);
}
function ChildComponent({ onIncrement, valorDeIncremento, setAumentaIncrementador }) {
	return (
		<div>
			<button onClick={onIncrement}>Incrementar +{valorDeIncremento}</button>
			<button
				onClick={setAumentaIncrementador}>
				Mudar valor de incremento
			</button>
		</div>
	);
}

const MemoizedComponent = React.memo(ChildComponent);

ChildComponent.propTypes = {
	onIncrement: PropTypes.func.isRequired,
  valorDeIncremento: PropTypes.func.isRequired,
  setAumentaIncrementador: PropTypes.func.isRequired,
};

export default ParentComponent;

