import { useState } from "react";
import "/style.scss";

export function Clock(){
    const textOfToDay = "Aujourd'hui nous somme le ";
    const [date, setDate] = useState(new Date());
    const today = date.toLocaleDateString();
    setTimeout(()=>{
        setDate(new Date());
    },1000)

    return(
        
        
        <div className="Layout">
           

                <h2>{textOfToDay}{today}</h2>
                <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>        
                
            

        </div>
            
        
        
    )

}

