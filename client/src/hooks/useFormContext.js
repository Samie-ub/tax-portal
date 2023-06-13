import { useContext } from "react";
import { FormsContext } from "../context/formContext";


export  const useFormContext = ()=>{

    const context = useContext(FormsContext)

    if(!context){
        throw Error('useFormContext must be used inside an FormContextProvider');
    }

    return context
} 

