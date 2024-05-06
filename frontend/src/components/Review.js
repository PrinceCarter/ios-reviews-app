import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Review({ review }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {review.title.label}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          by: {review.author.name.label}
        </Typography>
        <Typography variant="body2">{review.content.label}</Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Rating: {review["im:rating"].label}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Reviewed on {new Date(review.updated.label).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Review;
