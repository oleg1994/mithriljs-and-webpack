import m from "mithril"
import './Home.css'
function Home() {
    return {
        view: () => m(".home", [
            m("h1",{ class: "home__title" }, "Mithril with webpack up and running!"),
            m("a",{ class: "home__link","href":"https://mithril.js.org/" }, "Mithril.js Official website"),
        ])
    }
}
export default Home