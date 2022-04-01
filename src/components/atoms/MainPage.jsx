import React from "react";
import Video from "../../assets/bg-video.mp4";

const MainPage = () => {
  return (
    <>
      <header class="relative flex items-center justify-center h-screen lg:mb-12 overflow-hidden">
        <div class="relative z-20 bg-black w-full h-2/3 lg:h-full items-center flex bg-opacity-50 lg:pt-4 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md lg:text-left lg:flex lg:items-center">
            <div className="rounded-xl lg:py-24">
              <h1 className="text-5xl text-center tracking-tight font-black text-white lg:mt-6 lg:text-8xl lg:text-left">
                <span className="block bg-clip-text text-transparent bg-realOrange">
                  Permissioned
                </span>
                <span className="pb-3 block lg:pb-0">Digital assets</span>
              </h1>
              <p
                className="mt-2 pb-5 px-16 text-center text-xl tracking-tight font-bold text-white
                   lg:text-4xl lg:pb-0 lg:px-0 lg:pt-4 lg:text-left"
              >
                Uma comunidade feita por e para{" "}
                <span className="text-realOrange">Market Makers</span>
              </p>
              <p className="text-sm text-white text-center mx-12 lg:font-normal lg:px-0 lg:text-left lg:text-xl lg:pt-4">
                Aproveite de todos os beneficios dos ativos
                <p> digitais de forma segura e controlada, com</p>
                <p>alto ganho e menos riscos.</p>
              </p>
              <div className="mt-4 justify-center flex lg:justify-start">
                <button
                  type="submit"
                  className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                        bg-origin-border px-12 py-1 border border-transparent rounded-full
                        text-base text-white hover:bg-orange-800"
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          </div>

          {/* Table right side */}
          <div className="mt-12 hidden lg:block lg:m-0 lg:flex lg:justify-center">
            <div className="lg:py-10 lg:px-20">
              <img
                src={require("../../assets/quadro.png")}
                alt="Customer profile user interface"
              />
              <div className="lg:flex lg:justify-center mt-10 lg:mt-5">
                <button
                  type="submit"
                  className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                        bg-origin-border px-12 py-1 border border-transparent rounded-full
                        text-base text-white hover:bg-orange-800"
                >
                  Compre Agora!
                </button>
              </div>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          class="absolute z-10 w-auto min-w-full max-w-none cover h-2/3 lg:h-full"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </header>
    </>
  );
};

export default MainPage;
