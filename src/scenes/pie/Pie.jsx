import { Box } from "@mui/material";
import { PieChart } from "../../components";
import { Header } from "../../components";

const Pie = () => {
	return (
		<Box ml="20px">
			<Header title="Pie Chart" subTitle="Simple Pie Chart" />
			<Box height="75vh">
				<PieChart />
			</Box>
		</Box>
	);
};

export default Pie;
