import Pointssection from "./Points";


export const Vision = () => {
    return (
        <section className="w-full">
            <div className="bg-black text-white py-8">
                <h2 className="text-center text-5xl  pattaya-regular">Our Vision</h2>
            </div>
            <div className="bg-white text-black py-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg leading-relaxed">
                        We aim to revolutionize the way people interact with technology, creating a seamless blend of innovation and user experience that empowers individuals and communities.
                    </p>
                    <Pointssection />
                </div>
            </div>
        </section>
    );
};
