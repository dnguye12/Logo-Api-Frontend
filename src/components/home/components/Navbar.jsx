import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from '../../../public/logoapi_light.png'

const Navbar = () => {
    return (
        <div className="navbar sticky top-0 left-0 w-full border-b border-b-neutral-700 bg-neutral-950 shadow z-50 px-6">
            <div className="container mx-auto flex justify-between max-w-4xl">
                <div className="flex items-center">
                    <img className=' api-logo w-9 h-9 rounded-full' src={logo} alt="Logo API" />
                    <div className="divider divider-horizontal hidden sm:flex mx-2"></div>
                    <h1 className="hidden sm:block text-xl font-semibold">Logo API</h1>
                </div>

                <div>
                    <Link className="btn btn-outline-white h-10 max-h-10 min-h-10 text-sm font-normal mr-2 glow-white">Get In Touch</Link>
                    <Link className="btn btn-theme h-10 max-h-10 min-h-10 text-sm font-normal glow-white">Go to docs <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar