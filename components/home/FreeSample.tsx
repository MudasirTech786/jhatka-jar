export default function FreeSample() {
    return (
        <section
            className="relative w-full py-8 text-white bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/free-sample-bg.png')",
            }}
        >
            {/* Overlay for slight darkening */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">

                {/* LEFT TEXT */}
                <div>
                    <p className="text-2xl md:text-3xl font-extrabold">
                        CLAIM YOUR <span className="text-[#ffcf61]">FREE SAMPLE</span> NOW!
                    </p>
                    <p className="text-sm md:text-base text-white/90 mt-1">
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
      px-6 md:px-8 py-3 
      rounded-xl 
      font-bold text-lg 
      shadow-lg
      hover:bg-[#ffdd88] transition
    "
                    >
                        GET MY FREE JAR
                    </button>
                </a>

            </div>
        </section>
    );
}
