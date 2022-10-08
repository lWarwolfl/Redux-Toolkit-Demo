import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

export const slice = createSlice({
	name: "icecream",
	initialState: { icecreamNum: 0 },
	reducers: {
		order: (state, action) => {
			if (state.icecreamNum > 0) {
				state.icecreamNum--;
			}
		},
		restock: (state, action) => {
			state.icecreamNum += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(cakeActions.order, (state) => {
			if (state.icecreamNum > 0) {
				state.icecreamNum--;
			}
		});
	},
});

export default slice.reducer;
export const icecreamActions = slice.actions;
