

function Hero({ title, description, imagePath, primaryAction, secondaryAction }) {
    return (
        <>
            <section className="py-6 my-14 mb-1 bg-neutral-50">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-green-500 mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-charcoalGrey mb-6">
                        {description}
                    </p>
                    <div className="flex space-x-4">
                    {primaryAction && (
                            <a 
                                href={primaryAction.href} 
                                className="bg-green-500 text-white px-6 py-3 rounded-md shadow hover:bg-white hover:text-green-500 hover:border-green-500 transition"
                            >
                                {primaryAction.text}
                            </a>
                        )}
                        {secondaryAction && (
                            <a 
                                href={secondaryAction.href} 
                                className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
                            >
                                {secondaryAction.text}
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex-1 mb-8 lg:mb-0">
                    <img 
                        src={imagePath} 
                        alt="ShambaFusion marketplace" 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                </div>
            </section>
        </>
    );
}

export default Hero;