import { Link, useMatch, useResolvedPath } from "react-router-dom"

export function NavLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link
                style={{
                    textDecoration: match ? "underline" : "none",
                    fontWeight: match ? "bold" : "normal",
                    color: match ? "orange" : "white",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}
