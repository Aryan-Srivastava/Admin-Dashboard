import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { ResponsiveCalendar } from "@nivo/calendar";
import { mockConsistencyData as data } from "../data/mockData";

const ConsistencyChart = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<ResponsiveCalendar
			data={data}
			theme={{
				legends: {
					text: {
						fill: colors.grey[100],
					},
				},
				tooltip: {
					container: {
						color: colors.grey[400],
					},
				},
			}}
			from="2015-03-01"
			to="2016-07-12"
			emptyColor={colors.grey[700]}
			colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
			margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
			monthSpacing={25}
			yearSpacing={60}
			yearLegendOffset={18}
			monthBorderWidth={0}
			dayBorderWidth={2}
			dayBorderColor={colors.grey[900]}
			legends={[
				{
					anchor: "top-left",
					direction: "row",
					itemCount: 4,
					itemWidth: 45,
					itemHeight: 40,
					itemsSpacing: 20,
					itemDirection: "bottom-to-top",
				},
			]}
		/>
	);
};

export default ConsistencyChart;
