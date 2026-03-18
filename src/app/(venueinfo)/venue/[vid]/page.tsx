import getVenue from "@/libs/getVenue";
import Image from "next/image";
export default async function VenueDetailPage({params} : {params : { vid: string }}){
    const {vid} = await params;
    const venue = await getVenue(vid);
    const v = venue.data;



    return (
        <main className="text-center p-5">
            <div className = "flex gap-10">
                <div className="relative w-full max-w-md h-64">
                    <Image
                        src={v.picture}
                        alt={v.name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="w-1/2 text-left">
                    <h1 className="text-2xl font-bold mb-2">{v.name}</h1>
                    <p><span className="font-bold">Address:</span> {v.address}</p>
                    <p><span className="font-bold">District:</span> {v.district}</p>
                    <p><span className="font-bold">Province:</span> {v.province}</p>
                    <p><span className="font-bold">Postal Code:</span> {v.postalcode}</p>
                    <p><span className="font-bold">Tel:</span> {v.tel}</p>
                    <p><span className="font-bold">Daily Rate:</span> {v.dailyrate}</p>
                </div>
            </div>
        </main>
    );
}