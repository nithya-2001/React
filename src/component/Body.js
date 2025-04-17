import Restaurant from "./Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body= () =>{

    const [res,setRes]= useState(resObj);
    return (
        <div className="body">
            <div className="filter">
                <button className="btn" onClick={()=> {
                    const fil= res.filter((list)=> list.rating>4);
                    setRes(fil);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {res.map((restau,index)=>( <Restaurant key={index} resData={restau}/>))}
            </div>
        </div>
    )
}

export default Body;