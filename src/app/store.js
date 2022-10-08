import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import cakeSlice from "../features/cake/cakeSlice";
import icecreamSlice from "../features/icecream/icecreamSlice";
import userSlice from "../features/user/userSlice";

// const logger = createLogger();

export const store = configureStore({
	reducer: {
		cake: cakeSlice,
		icecream: icecreamSlice,
		user: userSlice,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
