import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";
import TourCard from "./components/TourCard";

describe("Home - Tesing", () => {
  test("Title of the home should be rendered", () => {
    render(<Home />);
    const titleText = screen.getAllByText(/top/i);
    expect(titleText).toBeInTheDocument;
  });
});

describe("TourCard - Tesing", () => {
  test("props should work", () => {
    render(
      <TourCard
        tour={{
          id: 5,
          name: "The Falls at Night",
          duration: 2,
          rating: 4.5,
          numberOfReviews: 133,
          price: 144,
          image:
            "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
        }}
      />
    );

    //tour image
    const imageProp = screen.getByAltText(/destination/i);
    expect(imageProp).toBeInTheDocument;

    //tour name
    const nameProp = screen.getByText(/The Falls at Night/i);
    expect(nameProp).toBeInTheDocument;
  });
});
