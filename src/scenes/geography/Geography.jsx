import { Box } from "@mui/material";
import { GeographyChart } from "../../components";
import { Header } from "../../components";

const Geography = () => {
	return (
		<Box ml="20px">
			<Header title="Geography Chart" subTitle="Simple Geo Chart" />
			<Box height="75vh">
				<GeographyChart />
			</Box>
		</Box>
	);
};

export default Geography;
