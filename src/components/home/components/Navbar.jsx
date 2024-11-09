import logo from '../../../public/logoapi_light.png'
import ContactBtn from "./ContactBtn"
import DocsBtnTheme from './DocsBtnTheme'

const Navbar = () => {
    return (
        <div className="navbar sticky top-0 left-0 w-full border-b border-b-neutral-700 bg-neutral-950 shadow z-50">
            <div className="container mx-auto flex justify-between max-w-4xl px-6">
                <div className="flex items-center">
                    <img className=' api-logo w-9 h-9 rounded-full' src={logo} alt="Logo API" />
                    <div className="divider divider-horizontal hidden sm:flex mx-2"></div>
                    <h1 className="hidden sm:block text-xl font-semibold">Logo API</h1>
                </div>

                <div>
                    <ContactBtn />
                    <DocsBtnTheme />
                </div>

            </div>
        </div>
    )
}

export default Navbar