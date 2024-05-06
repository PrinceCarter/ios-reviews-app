import express from "express";
import cors from "cors";
import fetchReviews from "./fetchReviews.js";
import { saveReviews, readReviews } from "./storage.js";
import { filterRecentReviews } from "./utils.js";

const app = express();
const PORT = 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

/**
 * GET endpoint for fetching and serving filtered reviews.
 * It first tries to read existing reviews and, if none are found, fetches new reviews.
 */
app.get("/reviews", async (req, res) => {
  try {
    let reviews = await readReviews();
    if (reviews.length === 0) {
      const fetchedReviews = await fetchReviews();
      reviews = filterRecentReviews(fetchedReviews);
      await saveReviews(reviews);
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).send("Error processing your request");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
