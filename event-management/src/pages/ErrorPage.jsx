import { use } from "react";
import { useRouteError, NavLink} from "react-router-dom";

export const ErrorPage = () => {
 
    const error = useRouteError();
        console.log(error);

    return (

        <div>
            <h1>Oops! An error occured.</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"> <button> Go to Home Page </button></NavLink>
            </div>
    );
    
};