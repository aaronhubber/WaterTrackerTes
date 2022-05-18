import { useState } from "react";

export const useJeff =()=>{
    const [isThereJeff, setIsThereJeff] = useState(false)

    const toggleJeff = () => {
        setIsThereJeff(!isThereJeff);
    }
    return {toggleJeff, isThereJeff}
}