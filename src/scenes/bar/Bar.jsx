import { Box } from "@mui/material";
import { BarChart } from "../../components";
import { Header } from "../../components";

const Bar = () => {
	return (
		<Box ml="20px">
			<Header title="Bar Chart" subTitle="Simple Bar Chart" />
			<Box height="73vh">
				<BarChart />
			</Box>
		</Box>
	);
};

export default Bar;
