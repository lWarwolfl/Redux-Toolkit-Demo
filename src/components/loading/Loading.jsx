import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loading.css";

const Loading = (props) => {
	return (
		<>
			{props.error !== "" ? (
				<div style={{ color: "red" }}>{props.error}</div>
			) : (
				<div className="loadBody">
					<CircularProgress />
				</div>
			)}
		</>
	);
};

export default Loading;
