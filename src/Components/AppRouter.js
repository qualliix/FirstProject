import { Route, Routes} from "react-router-dom";
import { auth_routes} from "../Routes";
import { Log } from "../pages/log";

export const AppRouter = () => {
    return(
        <Routes>
            {auth_routes.map(({path, Element}) =>
            <Route ket={path} path={path} element={Element}/>)}
            <Route path="/" element={<Log />} />
        </Routes>
    )
}
