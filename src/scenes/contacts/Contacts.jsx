import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { Header } from "../../components";

const Contacts = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns = [
		{
			field: "id",
			headerName: "ID",
			flex: 0.5,
		},
		{ field: "registrarId", headerName: "Registrar ID" },
		{
			field: "name",
			headerName: "NAME",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "age",
			headerName: "AGE",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "address",
			headerName: "Address",
			flex: 1,
			headerAlign: "center",
		},
		{
			field: "city",
			headerName: "City",
			align: "center",
		},
		{
			field: "zipCode",
			headerName: "ZipCode",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
	];

	return (
		<Box ml="20px">
			<Header
				title="CONTACTS"
				subTitle="List of Contacts for Future Reference"
			/>
			<Box
				m="40px 0 0 0"
				height="70vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiCheckbox-root": {
						color: `${colors.greenAccent[200]} !important`,
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-root": {
						color: `${colors.grey[100]} !important`,
					},
				}}
			>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Contacts;
