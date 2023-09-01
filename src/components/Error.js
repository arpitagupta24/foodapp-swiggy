import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Ooops!!</h1>
            <h1>This Page is Not Found</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    );
};

export default Error;