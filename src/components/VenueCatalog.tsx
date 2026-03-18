import Card from "./Card";
import { VenueJson } from "../../interface"

export default async function VenueCatalog({venuesJson,} : {venuesJson : Promise<VenueJson>;}){
    const venueData = await venuesJson;
    return (
        <div className = "flex gap-10 p-4">
            {venueData.data.map((venue) => (
                <Card
                    key={venue._id}
                    vid={venue._id}
                    venueName={venue.name}
                    imgSrc={venue.picture}
                />
            ))}
        </div>
    );
}