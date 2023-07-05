import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";

interface cardProps {
  tour: {
    id: number;
    name: string;
    image: string;
    price: number;
    numberOfReviews: number;
    duration: number;
    rating: number;
  };
}

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard: React.FC<cardProps> = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Link to={`/${tour.id}`}>
          <Paper elevation={2}>
            <img src={tour.image} alt="destination" className="img" />
            <Box paddingX={1}>
              <Typography variant="subtitle2" component="h2">
                {tour.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body1" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }} marginTop={2}>
                <Rating
                  name="read-only"
                  value={4.8}
                  precision={0.2}
                  size="small"
                  readOnly
                />
                <Typography variant="body1" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body2" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  {" "}
                  From ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
