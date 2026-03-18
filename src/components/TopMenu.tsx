import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
export default function TopMenu(){
    return (
        <div className="h-15 bg-amber-600 px-6  flex justify-end items-center">
            <TopMenuItem title = "Booking" pageRef = "/booking"/>
            <Image src = {'/img/logo.png'} className = "h-10 w-auto" 
            alt = 'logo' width = {40} height = {40}/>
        </div>
    );
}