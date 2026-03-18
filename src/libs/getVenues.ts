import { VenueJson } from "../../interface";

const getVenues = async (): Promise<VenueJson> => {
  try {
    const response = await fetch(
      "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
      { cache: "no-store" }
    );

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON");
    }

  } catch (error) {
    throw new Error("Invalid JSON response");
  }
};

export default getVenues;