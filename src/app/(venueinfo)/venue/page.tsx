import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
export default function VenuePage(){
    const venues = getVenues();
    return (
        <main>
            <h1 className = "text-2xl font-bold m-5 text-center">Venue List</h1>
            <VenueCatalog venuesJson={venues}/>
        </main>
    );
}

export const dynamic = 'force-dynamic';