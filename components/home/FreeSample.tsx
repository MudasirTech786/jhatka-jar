import Reveal from "@/components/Reveal";
import { Instagram, CheckCircle } from "lucide-react";

export default function FreeSample() {
    return (
        <Reveal effect="slide-up">
            <section
                className="
                    relative w-full 
                    py-10 sm:py-12 
                    text-white bg-cover bg-center bg-no-repeat
                "
                style={{ backgroundImage: "url('/images/free-sample-bg.png')" }}
            >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/35"></div>

                <div className="
                    relative container mx-auto px-4 sm:px-6 
                    flex flex-col lg:flex-row
                    justify-between items-center 
                    gap-8
                ">
                    {/* LEFT CONTENT */}
                    <div className="max-w-xl w-full text-center lg:text-left">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                            Free Sample for the
                            <span className="text-[#ffcf61]"> First 100 Customers</span>
                        </p>

                        {/* RULES */}
                        <div className="mt-5 pl-4 border-l-2 border-[#ffcf61]/60 text-left mx-auto lg:mx-0 max-w-md">
                            <p className="text-sm sm:text-base text-white/90 mb-2">
                                Just 3 simple steps to qualify:
                            </p>

                            <ul className="space-y-2 text-sm sm:text-base text-white/95">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-[#ffcf61]" />
                                    Follow us on Instagram
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-[#ffcf61]" />
                                    Share our post on your story
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-[#ffcf61]" />
                                    Send screenshot on WhatsApp
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center">
                        {/* INSTAGRAM */}
                        <a
                            href="https://instagram.com/YOUR_INSTAGRAM_HANDLE"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="
                                    w-full sm:w-auto
                                    flex items-center justify-center gap-2
                                    bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]
                                    text-white
                                    px-6 py-3 rounded-xl 
                                    font-semibold
                                    shadow-md
                                    hover:opacity-90
                                    transition
                                "
                            >
                                <Instagram size={18} />
                                Instagram
                            </button>
                        </a>

                        {/* WHATSAPP */}
                        <a
                            href="https://wa.me/923029476438?text=I%20have%20followed%20you%20on%20Instagram%20and%20shared%20the%20story.%20Here%20is%20the%20screenshot."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="
                                    w-full sm:w-auto
                                    bg-[#f7c868] text-black
                                    px-6 py-3 rounded-xl 
                                    font-semibold
                                    hover:bg-[#ffdd88]
                                    transition
                                "
                            >
                                Claim Free Sample
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
