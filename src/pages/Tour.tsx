import { Paper, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageGallery from "../components/ImageGallery";
import FAQ from "../components/FAQ";
import ModalDialogue from "../components/ModalDialogue";
const Tour = () => {
  return (
    <Container sx={{ width: 1200 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Live as Anne Shirley for one beautiful day
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://static01.nyt.com/images/2014/08/24/travel/20140824-PEDWARDISLAND-slide-QC30/20140824-PEDWARDISLAND-slide-QC30-superJumbo.jpg"
          alt=""
          height={325}
        />
        <ImageGallery />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="body1" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
          accusantium doloribus autem nostrum repellendus repellat illum ullam,
          laudantium molestiae error dolore explicabo provident, hic excepturi
          praesentium dignissimos fugit cupiditate! Temporibus nulla quo
          molestiae saepe, voluptatem consequatur. Ad odio similique eveniet!
        </Typography>
      </Box>
      <Box marginBottom={9}>
        <Typography variant="h6" component="h4" marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <FAQ />
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={2}
      >
        <BottomNavigation showLabels color="secondary">
          <ModalDialogue />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};
export default Tour;
