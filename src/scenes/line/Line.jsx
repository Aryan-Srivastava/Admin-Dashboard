import { Box } from "@mui/material";
import { LineChart } from "../../components";
import { Header } from "../../components";

const line = () => {
	return (
		<Box ml="20px">
			<Header title="Pie Chart" subTitle="Simple Pie Chart" />
			<Box height="75vh">
				<LineChart />
			</Box>
		</Box>
	);
};

export default line;
