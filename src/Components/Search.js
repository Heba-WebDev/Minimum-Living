import { useLocation } from "react-router-dom"

export default function Search(props) {
    const location = useLocation();

    // get userId
    let type = location.state.type;
    let city = location.state.city;
    return (
        <div>
      {type} <br />
      {city}
        </div>
    )
}