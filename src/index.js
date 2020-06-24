import m from "mithril";
import Home from './components/Home/Home'
const root = document.body;

//Removes default prefix of !# at url
m.route.prefix = ''

//Routing
m.route(root, "/", {
    "/": Home,
})
