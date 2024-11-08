import ContactBtn from "./ContactBtn"
import DocsBtn from "./DocsBtn"

const Hero = () => {
    return (
        <div className="my-hero my-20 md:my-32 flex flex-col items-center justify-center px-6">
            <h1 className="text-4xl sm:text-[56px] sm:leading-[68px] font-bold text-center">The Most Free Logo API</h1>
            <div className="text-center my-6">
                <p className="text-base sm:text-lg font-light text-neutral-300">Free, unlimited access to brand logos and icons.<br className="hidden sm:block" /> Flexible, fast and always up-to-date.</p>
            </div >
            <div>
                <ContactBtn />
                <DocsBtn /></div>
        </div >
    )
}

export default Hero