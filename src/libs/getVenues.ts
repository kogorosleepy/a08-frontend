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
    //   throw new Error("Invalid JSON");
    }

  } catch (error) {
    // throw new Error("Invalid JSON response");
  }
    return {
    success: true,
    count: 3,
    pagination: {},
    data: [
      {
        _id: "1",
        name: "Mock Venue 1",
        address: "Mock",
        district: "Mock",
        province: "Mock",
        postalcode: "00000",
        tel: "0000000000",
        picture: "/img1.jpg",
        dailyrate: 1000,
        __v: 0,
        id: "1",
      },
      {
        _id: "2",
        name: "Mock Venue 2",
        address: "Mock",
        district: "Mock",
        province: "Mock",
        postalcode: "00000",
        tel: "0000000000",
        picture: "/img2.jpg",
        dailyrate: 2000,
        __v: 0,
        id: "2",
      },
      {
        _id: "3",
        name: "Mock Venue 3",
        address: "Mock",
        district: "Mock",
        province: "Mock",
        postalcode: "00000",
        tel: "0000000000",
        picture: "/img3.jpg",
        dailyrate: 3000,
        __v: 0,
        id: "3",
      },
    ],
  };
};


export default getVenues;