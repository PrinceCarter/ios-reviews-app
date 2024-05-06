import fetch from "node-fetch";

// Define the App Store application ID (we use Snapchat here) and URL for the RSS feed
const appId = "447188370";
const url = `https://itunes.apple.com/us/rss/customerreviews/id=${appId}/sortBy=mostRecent/page=1/json`;

/**
 * Fetches the most recent reviews for the specified app from the App Store.
 * @returns {Array} An array of review entries, or an empty array in case of errors.
 */
async function fetchReviews() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.feed.entry || [];
  } catch (error) {
    console.error("Failed to fetch reviews:", error.message);
    return [];
  }
}

export default fetchReviews;
