import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icecreamActions } from "./icecreamSlice";

const IcecreamView = () => {
	const dispatch = useDispatch();
	const icecreams = useSelector((state) => state.icecream.icecreamNum);

	const [restockCount, setRestockCount] = useState(1);

	const handleCountChange = (event) => {
		if (event.target.value < 1) {
			setRestockCount(1);
		} else {
			setRestockCount(parseInt(event.target.value));
		}
	}

	const orderIcecream = () => {
		dispatch(icecreamActions.order());
	};

	const restockIcecream = (num = 1) => {
		dispatch(icecreamActions.restock(num));
	};

	return (
		<div className="view">
			<p>Number of icecreams: {icecreams}</p>
			<div className="flex-row">
				<Button
					className="view-item"
					variant="text"
					color="success"
					onClick={(event) => orderIcecream()}
				>
					Order icecream
				</Button>
				<Button
					className="view-item"
					variant="text"
					color="info"
					onClick={(event) => restockIcecream(restockCount)}
				>
					Restock icecream ({restockCount})
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

export default IcecreamView;
