'use client'

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {MapPin} from 'lucide-react';

//! Motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

//! components
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";

const SearchBox = () => {
  return (
    <motion.div
    variants={fadeIn('up', 0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0}}
    className='w-full max-w-[488px] bg-white p-10 max-h-max flex flex-col gap-3 border border-outline rounded-[20px]'>
        {/* input, calendar, date picker */}
        <div className="flex flex-col gap-3 mb-[20px]">
            {/* label */}
            <Label htmlFor='destination'>Where are you going?</Label>
            {/* input & icon */}
            <div className="relative flex items-center mb-[20px]">
                <Input id="destination" placeholder='try "Singapure"' />
                <MapPin size={24} className="absolute right-6 text-black" />
            </div>
            {/* date pickers */}
            <div className="flex flex-col gap-3">
                {/* check in */}
                <div className="flex flex-col gap-1.5">
                    <Label>Check In</Label>
                    <DatePicker />
                </div>

                {/* check out */}
                <div className="flex flex-col gap-1.5">
                    <Label>Check Out</Label>
                    <DatePicker />
                </div>
            </div>
        </div>

        {/* select, checkbox, btn */}
        <div className="flex flex-col gap-3">
            {/* select */}
            <div>
                <Label>Guest</Label>
                <GuestSelect />
            </div>
            {/* checkbox */}
            <div className="flex gap-x-1.5">
                <Checkbox id="terms" />
                <Label className='mt-1' htmlFor="terms">
                    Pay when cheking in?
                </Label>
            </div>
            {/* btn */}
            <Button size='lg' variant='accent'>Search Hotel</Button>
        </div>
    </motion.div>
  )
}

export default SearchBox;