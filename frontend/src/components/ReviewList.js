import React, { useState } from "react";
import Review from "./Review";
import { Container, Pagination, Stack } from "@mui/material";

function ReviewList({ reviews }) {
  // State to track the current page number.
  const [currentPage, setCurrentPage] = useState(1);
  // Define the number of reviews to show per page.
  const reviewsPerPage = 5;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the index of the last review in the current page.
  const indexOfLastReview = currentPage * reviewsPerPage;
  // Calculate the index of the first review in the current page.
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  // Slice out the reviews to display for the current page.
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Container>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        App Store Reviews
      </h1>
      {currentReviews.map((review) => (
        <Review key={review.id.label} review={review} />
      ))}
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(reviews.length / reviewsPerPage)}
          page={currentPage}
          onChange={handleChange}
          color="primary"
          showFirstButton
          showLastButton
          sx={{ display: "flex", justifyContent: "center", padding: "20px 0" }}
        />
      </Stack>
    </Container>
  );
}

export default ReviewList;
