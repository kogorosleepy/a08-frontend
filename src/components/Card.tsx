
"use client";
import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";
import Link from "next/link"
import Image from "next/image";

export default function Card({
  vid,
  venueName,
  imgSrc,
  onRatingChange
}: {
  vid: string;
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venue: string, rating: number) => void;
}) {
  function handleRating(rating : number){
    if(onRatingChange){
      onRatingChange(venueName,rating);
    }
  }
  return (
    <Link href={`/venue/${vid}`}>
      <div className = "w-65 h-65 rounded-lg border border-gray-300 shadow-lg bg-white flex justify-center items-center">
        <InteractiveCard>
          <Image src = {imgSrc} alt="venue" width = {300} height = {200} className="w-full rounded-md"/>
          <h3 className="w-full h-[30%] p-2.5 text-lg text-black font-semibold">{venueName}</h3>

          {onRatingChange && (
            <Rating
              id = {`${venueName} Rating`}
              name = {`${venueName} Rating`}
              data-testid = {`${venueName} Rating`}
              onClick = {(e) => e.stopPropagation()}
              onChange = {(event, newValue) => {
                if(newValue !== null) {
                  handleRating(newValue);
                }
              }}
            />
          )}

        </InteractiveCard>
      </div>
    </Link>
  );
}
