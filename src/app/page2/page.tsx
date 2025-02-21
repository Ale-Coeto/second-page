"use client"

import { useState } from "react";
import Button from "../components/Button";

const Page2 = () => {
    const [index, setIndex] = useState(4);
    const colors = ["bg-green-500", "bg-blue-500", "bg-orange-500", "bg-rose-500", "bg-slate-600"]

    const handleButton = (index: number) => {
        setIndex(index);
    }

    return (
        <div className="flex flex-col items-center">
            <div className={`${colors[index]} h-72 w-96`}></div>
            <div className="flex flex-col gap-4 pt-10">
                <div className="flex flex-row gap-4">
                    <Button label="Button 1" color={colors[0]} onClick={() => handleButton(0)} />
                    <Button label="Button 2" color={colors[1]} onClick={() => handleButton(1)} />
                </div>
                <div className="flex flex-row gap-4">
                    <Button label="Button 3" color={colors[2]} onClick={() => handleButton(2)} />
                    <Button label="Button 4" color={colors[3]} onClick={() => handleButton(3)} />
                </div>
            </div>
        </div>
    )
}

export default Page2;