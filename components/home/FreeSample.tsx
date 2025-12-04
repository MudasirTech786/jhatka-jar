import Reveal from "@/components/Reveal";

export default function FreeSample() {
    return (
        <Reveal effect="slide-up">
            <section
                className="
                    relative w-full 
                    py-8 sm:py-10 md:py-12 
                    text-white bg-cover bg-center bg-no-repeat
                "
                style={{ backgroundImage: "url('/images/free-sample-bg.png')" }}
            >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="
                    relative container mx-auto px-4 sm:px-6 
                    flex flex-col md:flex-row 
                    justify-between items-center 
                    text-center md:text-left 
                    gap-4 sm:gap-6
                ">
                    {/* LEFT TEXT */}
                    <div className="max-w-xl">
                        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
                            CLAIM YOUR <span className="text-[#ffcf61]">FREE SAMPLE</span> NOW!
                        </p>

                        <p className="text-xs sm:text-sm md:text-base text-white/95 mt-2">
                            Limited-time offer. Taste the tradition, risk-free.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <a
                        href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="
                                bg-[#f7c868] text-black 
                                px-5 sm:px-6 md:px-7 
                                py-2.5 sm:py-3 md:py-3.5 
                                rounded-xl font-bold 
                                text-base sm:text-lg md:text-xl 
                                shadow-lg 
                                hover:bg-[#ffdd88] active:scale-95 
                                transition-all duration-200
                            "
                        >
                            GET MY FREE JAR
                        </button>
                    </a>
                </div>
            </section>
        </Reveal>
    );
}
