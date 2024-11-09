const Hero = () => {
    return (
        <div className="my-hero mt-20 md:mt-24 mb-20 flex flex-col items-center justify-center px-10 sm:px-8 md:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"><span className="hidden sm:inline">The Fully</span> Free Logo API</h1>
            <div className="text-center mt-4 sm:mt-8 md:mt-10">
                <p className="text-base sm:text-xl md:text-2xl font-light text-neutral-300">Free and unlimited access to brand logos and icons.<br className="hidden sm:block" /> Flexible, fast and always up-to-date.</p>
            </div >
        </div >
    )
}

export default Hero