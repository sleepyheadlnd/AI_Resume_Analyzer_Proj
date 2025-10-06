import {Link} from "react-router";


const Navbar= () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl text-gradient font-bold " >Home Page</p>
            </Link>
            <Link to="/auth" className=" primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
