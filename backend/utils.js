import moment from "moment";

/**
 * Filters reviews to include only those from the last 48 hours.
 * @param {Array} reviews - The reviews to filter.
 * @returns {Array} Filtered array of reviews.
 */
function filterRecentReviews(reviews) {
  const twoDaysAgo = moment().subtract(48, "hours");
  return reviews.filter((review) =>
    moment(review.updated.label).isAfter(twoDaysAgo)
  );
}

export { filterRecentReviews };
