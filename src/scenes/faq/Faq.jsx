import { tokens } from "../../theme";
import { Header } from "../../components";
import Accordion from "@mui/material/Accordion";
import { Box, useTheme, Typography } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header title="FAQ" subTitle="Frequently Asked Questions" />
			<Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400], marginBottom: "5px", borderRadius:"2px" }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						1. An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum est libero esse itaque iure iusto quisquam aperiam?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ backgroundColor: colors.primary[400], marginBottom: "5px", borderRadius:"2px" }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						2. Another Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum est libero esse itaque iure iusto quisquam aperiam?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ backgroundColor: colors.primary[400], marginBottom: "5px", borderRadius:"2px" }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						3. An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum est libero esse itaque iure iusto quisquam aperiam?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ backgroundColor: colors.primary[400], marginBottom: "5px", borderRadius:"2px" }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						4. An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum est libero esse itaque iure iusto quisquam aperiam?
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ backgroundColor: colors.primary[400], marginBottom: "5px", borderRadius:"2px" }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						5. An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum est libero esse itaque iure iusto quisquam aperiam?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Faq;
