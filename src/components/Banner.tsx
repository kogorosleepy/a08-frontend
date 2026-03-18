'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from 'next/image';
export default function Banner(){
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    return(
        <div className="relative w-full h-[400px]" onClick={() => setIndex(index+1)}>
            <Image 
                src = {covers[index%4]}
                alt = "cover"
                fill = {true}
                objectFit = 'cover'
            />

            <div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className = "text-4xl font-bold">where every event finds its venue</h1>
                <p className = "text-xl font-semibold">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</p>
            </div>
            <button className = "bg-white text-yellow-600 border border-yellow-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-yellow-600 hover:text-white hover:border-transparent"
            onClick={(e) => {e.stopPropagation(); router.push('/venue')}}>Select Venue</button>
            
        </div>
    )
}