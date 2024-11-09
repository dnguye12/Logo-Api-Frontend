import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from '../../../public/logoapi_light.png'
import logo_x from '../../../public/icons/x.png'
import logo_google from '../../../public/icons/goog.png'

const url = import.meta.env.VITE_API_URL

const Main = () => {

    return (
        <div className="my-main px-6 container mx-auto max-w-4xl" >
            <div className='mb-12'>
                <p className=" inline-block text-lg md:text-xl font-semibold text-theme mb-1 md:mb-3">EASY SETUP!</p>
                <h2 className="text-2xl md:text-4xl font-semibold">Get Started In 3 Seconds.</h2>
            </div>
            <div className='max-w-xl mx-auto mb-20 md:mb-24'>
                <div>
                    <img className=' api-logo' src={logo} alt="Logo API" />
                    <div className='api-code'>
                        <p>{url}<span>?url=logoapi.com</span></p>
                    </div>
                </div>

                <div>
                    <img className=' api-logo' src={logo_x} alt="X Logo Twitter Logo" />
                    <div className='api-code'>
                        <p>{url}<span>?name=x</span></p>
                    </div>
                </div>

                <div>
                    <img className=' api-logo' src={logo_google} alt="X Logo Twitter Logo" />
                    <div className='api-code'>
                        <p>{url}<span>?ticker=GOOG</span></p>
                    </div>
                </div>
            </div>

            <div className='mb-12'>
                <p className=" inline-block text-lg md:text-xl font-semibold text-theme mb-1 md:mb-3">OUR ADVANTAGES!</p>
                <h3 className='text-2xl md:text-4xl font-semibold'>An easy, reliable method<br className="hidden sm:block" /> to add logos to your projects.</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 md:mb-24'>
                <div className='my-card'>
                    <div className="my-card-icon">
                        <FontAwesomeIcon className=" text-xl" icon="fa-solid fa-coins" />
                    </div>
                    <div className="my-card-text">
                        <h5>100% Free</h5>
                        <p className="mb-2">100% Free for all users, no plus plans.</p>
                        <p>No rate limiting whatsoever.</p>
                    </div>
                </div>


                <div className='my-card'>
                    <div className="my-card-icon">
                        <FontAwesomeIcon className=" text-xl" icon="fa-solid fa-bolt" />
                    </div>
                    <div className="my-card-text">
                        <h5>Easy integration</h5>
                        <p className="mb-2">Integrating a logo with a quick link.</p>
                        <p>No API key, no complex parameters.</p>
                    </div>
                </div>

                <div className='my-card'>
                    <div className="my-card-icon">
                        <FontAwesomeIcon className=" text-xl" icon="fa-solid fa-plug" />
                    </div>
                    <div className="my-card-text">
                        <h5>Reliable</h5>
                        <p className="mb-2">Dynamically update logos</p>
                        <p>according to the latest branding.</p>
                    </div>
                </div>

                <div className='my-card'>
                    <div className="my-card-icon">
                        <FontAwesomeIcon className=" text-xl" icon="fa-solid fa-layer-group" />
                    </div>
                    <div className="my-card-text">
                        <h5>Expandable</h5>
                        <p className="mb-2">LogoAPI adjusts automatically</p>
                        <p>to handle any level of demand.</p>
                    </div>
                </div>

            </div>

            <div className='mb-20 md:mb-24'>
                <h3 className='text-center text-2xl sm:text-4xl font-semibold'>Adding Logo For Free Today</h3>
            </div>
        </div>
    )
}

export default Main