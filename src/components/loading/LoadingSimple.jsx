import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loading.css";

const LoadingSimple = () => {
	return (
		<span style={{ marginLeft: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
			<CircularProgress size="1.5rem" />
		</span>
	);
};

export default LoadingSimple;
