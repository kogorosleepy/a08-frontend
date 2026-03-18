'use client'
import {DatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {Select, MenuItem} from "@mui/material"

export default function DateReserve() {
    return (
        <div>
            <LocalizationProvider dateAdapter = {AdapterDayjs}>
               <DatePicker/>
            </LocalizationProvider>
        </div>
    )
}
