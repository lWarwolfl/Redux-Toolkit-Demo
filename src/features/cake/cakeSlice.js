import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "cake",
	initialState: { cakeNum: 0 },
	reducers: {
		order: (state, action) => {
			if (state.cakeNum > 0) {
				state.cakeNum--;
			}
		},
		restock: (state, action) => {
			state.cakeNum += action.payload;
		},
	},
});

export default slice.reducer;
export const cakeActions = slice.actions;
