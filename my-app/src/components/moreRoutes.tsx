import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRoutes } from "../api/api";
import { IRoute } from "../interfaces/apiTypes";
import { StyledMoreRoutes } from "../styles/moreRoutes.styled";


const MoreRoutes = () => {
    const [routes, setRoutes] = useState<IRoute[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await fetchRoutes()
            setRoutes(result)
        }
       fetch()
    },[])
    return ( 
        <StyledMoreRoutes>
            <li>
                Other available routes
            </li>
            <>
                {routes && routes.map((route: any) => (<li key={route._id}><Link to={`/user/trip-details/${route._id}`}>{route.destination} - { route.pickup}</Link></li>))}
            </>
        </StyledMoreRoutes>
     );
}

export default MoreRoutes;