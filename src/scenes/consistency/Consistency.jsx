import { Box } from "@mui/material";
import { ConsistencyChart } from "../../components";
import { Header } from "../../components";

const Consistency = () => {
	return (
		<Box ml="20px">
			<Header
				title="Consistency Chart"
				subTitle="Simple Consistency Chart"
			/>
			<Box height="75vh">
				<ConsistencyChart />
			</Box>
		</Box>
	);
};

export default Consistency;
