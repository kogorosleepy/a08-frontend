'use client'
import { TextField } from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {Select, MenuItem} from "@mui/material"
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
    return (
        <div className = "min-h-screen flex flex-col items-center p-10 gap-8">
            <h1 className = "text-4xl text-center">Venue Booking</h1>
            <form className = "flex flex-col space-y-5 w-[400px] gap-5 items-center">
                <TextField name="Name-Lastname" label="Name-Lastname" variant = "standard" className="bg-[#ffe3b3] rounded-2xl shadow-md w-100 h-12"/>
                <TextField name="Contact-Number" label="Contact-Number" variant = "standard" className="bg-[#ffe3b3] rounded-2xl shadow-md w-100 h-12"/>
                    <Select variant = "standard" name = "venue" id = "venue" className = "bg-[#ffe3b3] rounded-2xl w-100 h-12">
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                <DateReserve/>
                <button name="Book Venue" className="rounded-2xl bg-amber-600 px-3 py-2 shadow-sm text-white font-bold text-2xl">Book Venue</button>
            </form>

        </div>
    );
}