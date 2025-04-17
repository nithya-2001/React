import { LOGO_URL } from "../utils/constants";

const Restaurant= (props) =>{
    const {resData}=props;
    const {name,cuisine,rating,ETA, URL}=resData
    return (
        <div className="restaurant" style={{backgroundColor: "f0f0f0"}}>
            <img className="res-logo" src={LOGO_URL+ URL}/>
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating}rating</h4>
            <h4>{ETA}ETA</h4>
        </div>
    )
}

export default Restaurant;