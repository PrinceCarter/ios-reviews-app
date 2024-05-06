import fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const path = "./reviews.json";

/**
 * Saves reviews to a JSON file.
 * @param {Array} reviews - The reviews to save.
 */
async function saveReviews(reviews) {
  try {
    await writeFile(path, JSON.stringify(reviews, null, 2));
    console.log("Successfully wrote reviews to file");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

/**
 * Reads reviews from a JSON file.
 * @returns {Array} An array of reviews or an empty array if no file exists.
 */
async function readReviews() {
  try {
    if (fs.existsSync(path)) {
      const data = await readFile(path);
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading file:", err);
  }
  return [];
}

export { saveReviews, readReviews };
