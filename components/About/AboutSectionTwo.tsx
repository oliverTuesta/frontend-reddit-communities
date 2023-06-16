import Image from 'next/image'

const AboutSectionTwo = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp relative mx-auto mb-12 aspect-[16/9]  text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <Image
                                src="/images/about/about-image-2.png"
                                alt="about image"
                                fill
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="wow fadeInUp max-w-[470px]"
                            data-wow-delay=".2s"
                        >
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    Select the number of nodes
                                </h3>
                                <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                                    The user can select the number of nodes to
                                    be displayed in the graph from 50 to 5000.
                                    The default value is 50.
                                </p>
                            </div>
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    Set the image size
                                </h3>
                                <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                                    Select the size of the image to be generated
                                    easily from 600px to 4K.
                                </p>
                            </div>
                            <div className="mb-1">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    Zoom in
                                </h3>
                                <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                                    Zoom tool integrated to the graph to
                                    facilitate the visualization of the nodes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionTwo
