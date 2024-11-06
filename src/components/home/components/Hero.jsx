import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hero = () => {
    return (
        <div className="my-hero my-20 md:my-32 flex flex-col items-center justify-center px-6">
            <h1 className="text-4xl sm:text-[56px] sm:leading-[68px] font-bold text-center">The Most Free Logo API</h1>
            <div className="text-center my-6">
                <p className="text-base sm:text-lg font-light text-neutral-300">Free, unlimited access to brand logos and icons.<br className="hidden sm:block"/> Flexible, fast and always up-to-date.</p>
            </div >
            <div>
                <Link className="btn btn-outline-white h-10 max-h-10 min-h-10 text-sm font-normal mr-2 glow-white">Get In Touch</Link>
                <Link className="btn btn-white h-10 max-h-10 min-h-10 text-sm font-normal glow-white">Go to docs <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></Link>
            </div>
        </div >
    )
}

export default Hero