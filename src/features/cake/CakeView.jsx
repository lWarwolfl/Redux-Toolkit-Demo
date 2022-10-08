import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
	const dispatch = useDispatch();
	const cakes = useSelector((state) => state.cake.cakeNum);

	const [restockCount, setRestockCount] = useState(1);

	const handleCountChange = (event) => {
		if (event.target.value < 1) {
			setRestockCount(1);
		} else {
			setRestockCount(parseInt(event.target.value));
		}
	};

	const orderCake = () => {
		dispatch(cakeActions.order());
	};

	const restockCake = (num = 1) => {
		dispatch(cakeActions.restock(num));
	};

	return (
		<div className="view">
			<p>Number of cakes: {cakes}</p>
			<div className="flex-row">
				<Button
					className="view-item"
					variant="text"
					color="success"
					onClick={(event) => orderCake()}
				>
					Order cake
				</Button>
				<Button
					className="view-item"
					variant="text"
					color="info"
					onClick={(event) => restockCake(restockCount)}
				>
					Restock cake ({restockCount})
				</Button>
				<TextField
					className="view-item"
					label="Restock count"
					variant="filled"
					color="info"
					name="restockCount"
					type="number"
					value={restockCount}
					onChange={handleCountChange}
				/>
			</div>
		</div>
	);
};

export default CakeView;
