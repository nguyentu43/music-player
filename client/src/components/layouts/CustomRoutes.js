import { useRoutes } from "react-router-dom";
import Main from "../pages/Main";
import Playlist from "../pages/Playlist";

export default function CustomRoutes(){
    
    const routes = useRoutes([
        {path: '/', element: <Main />},
        {path: 'main', element: <Main />},
        {path: 'playlist', element: <Playlist/>},
    ]);

    return routes;
}