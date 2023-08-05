import { list_route, post_route } from "./Context/types";
import { List } from "./pages/list";
import { Post } from "./pages/post";

export const auth_routes =[
    {
        path: post_route,
        Element: <Post /> 
    },
    {
       path: list_route,
       Element: <List />
    }
]