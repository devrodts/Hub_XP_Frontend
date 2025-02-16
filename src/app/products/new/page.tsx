import AddModal from "@/app/components/AddModal/AddModal";
import { useState } from "react";


export default function NewProduct(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <AddModal 
                open={open} 
                handleClose={handleClose}  
            />    
        </>
    )
}