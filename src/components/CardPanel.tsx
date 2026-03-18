"use client";
import Card from "../components/Card"
import {useReducer} from "react";
import Link from "next/link";

export default function CardPanel(){
    const initialRating = new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

    function ratingReducer(state: Map<string, number>, action: any) {
        switch (action.type) {
            case "SET_RATING" :
                const newState = new Map(state);
                newState.set(action.venue, action.rating);
                return newState;
            case "REMOVE_RATING" :
                const removeState = new Map(state);
                removeState.delete(action.venue);
                return removeState;
            default :
                return state;
        }
    }

    const [rating, dispatch] = useReducer(ratingReducer, initialRating);

    const mockVenueRepo = [{vid : "001", name : "The Bloom Pavilion", image : "/img/bloom.jpg"},
        {vid : "002", name : "Spark Space", image : "/img/sparkspace.jpg"},
        {vid : "003", name : "The Grand Table", image : "/img/grandtable.jpg"}];

    function handleRatingChange(venue: string, rating: number){
        dispatch({
            type : "SET_RATING",
            venue : venue,
            rating : rating
        });
    }

    function handleRemoveVenue(venue : string){
        dispatch({
            type : "REMOVE_RATING",
            venue : venue
        });
    }

    return (
        <>
        <div className="flex flex-wrap gap-12 px-8 py-10">
            {mockVenueRepo.map((venueItem) => (
                <Link key = {venueItem.vid} href = {`/venue/${venueItem.vid}`}>
                    <Card
                        venueName = {venueItem.name}
                        imgSrc = {venueItem.image}
                        onRatingChange={handleRatingChange}
                    />
                </Link>
            ))}
        </div>

        
        <div className="px-8 pb-10">
            <h2 className ="font-bold">Venue List with Ratings : {rating.size}</h2>
            {Array.from(rating.entries()).map(([venue, rating]) => (
                <div key = {venue} data-testid = {venue} onClick={() => handleRemoveVenue(venue)} className = "cursor-pointer">
                    {venue} : {rating}
                </div>
            ))}
        </div>
        </>
    );
}