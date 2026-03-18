export default async function getVenues() {
  const response = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }

  try{
    return await response.json();
  }catch(error){
    throw new Error("Invalid JSON response");
  }
}