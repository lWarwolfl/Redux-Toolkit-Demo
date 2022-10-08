import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Loading from "../../components/loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const columns = [
	{ field: "id", headerName: "ID", flex: 1, maxWidth: 70 },
	{ field: "name", headerName: "Full name", flex: 1 },
	{ field: "username", headerName: "Username", flex: 1 },
	{ field: "email", headerName: "Email", flex: 1 },
];

const UserView = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.user.users);
	const loading = useSelector((state) => state.user.loading);
	const error = useSelector((state) => state.user.error);
	console.log(error);

	useEffect(() => {
		const testStore = async () => {
			dispatch(fetchUsers());
		};
		testStore();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className="view"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div>Users Table</div>
			<div
				style={{
					height: "375px",
					width: "calc(100% - 50px)",
					maxWidth: "1100px",
					marginTop: "20px",
				}}
			>
				{loading || error !== "" ? (
					<Loading error={error} />
				) : (
					<>
						<DataGrid
							rows={users}
							columns={columns}
							pageSize={5}
							rowsPerPageOptions={[5]}
							checkboxSelection
							disableSelectionOnClick
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default UserView;
