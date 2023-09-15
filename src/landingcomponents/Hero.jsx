import phone from "../assets/handholdingphone.png";
import "../styles/hero.css";
import Header from "./Header";

function Hero() {

    return (
        <>

            <section className="bg">
                <Header />

                <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 xl:px-16 max-w-6xl">
                    <div class="relative flex-col items-start m-auto align-middle">
                        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-24">
                            <div class="relative items-center gap-12 m-auto xl:inline-flex md:order-first">
                                <div class="text mt-[100] xl:mt-[-100px] max-w-xl text-center xl:text-left">
                                    <div>
                                        <p class="text-2xl font-bold text-white sm:text-3xl">
                                            Listen to AI generated songs🎶.
                                        </p>
                                        <p class="max-w-xl text-lg mt-4 text-base tracking-tight text-[#FDFDFD]">
                                            Listen to songs created by AI from AI <br /> Artiste all over the world 🎶.
                                        </p>
                                    </div>
                                    <div class="flex flex-col items-center justify-center gap-3 mt-5 xl:flex-row xl:justify-start">
                                        <a href="#" class="items-center justify-center  px-28 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-lg inline-flex  xl:px-16 hover:bg-transparent hover:border-white hover:text-white focus:outline-none xl:w-auto focus-visible:outline-white text-sm focus-visible:ring-white">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="order-first block w-full mt-12 aspect-square xl:mt-0 hidden xl:block">
                                <img class="object-cover object-center w-30 mx-auto border-2 border-[#151515] xl:ml-auto" alt="hero" src={phone} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};

export default Hero;
