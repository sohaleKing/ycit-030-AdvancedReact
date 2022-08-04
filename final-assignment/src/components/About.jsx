import { Outlet } from "react-router"
import { NavbarItemsAbout } from "../states/NavItemsAbout"
import { Link } from "react-router-dom"

export function About() {
    //about child navbar items
    const NavbarItemsAboutSubItems = NavbarItemsAbout.map((el) => {
        return (
            <li key={el.key}>
                <Link to={el.name}>{el.label}</Link>
            </li>
        )
    })
    return (
        <div>
            <h1>About</h1>
            <ul>{NavbarItemsAboutSubItems}</ul>
            {/* This element will render either <AboutCarrier> when the URL is
            "/carrier", <AboutContact> at "/contact", <AboutTeam> at "/team",or null if it is "/"
        */}
            <Outlet />
        </div>
    )
}
