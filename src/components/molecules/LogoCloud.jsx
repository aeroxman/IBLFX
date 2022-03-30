import React from "react";

const LogoCloud = () => {
  return (
    <>
      <div className="bg-black pb-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
          <div className="grid grid-cols-3 gap-8">
            <p className="text-5xl px-4 tracking-tight font-bold text-realOrange italic ml-16">
              Nossos Parceiros
            </p>
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide relative col-span-2"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                  <div className="flex">
                    <img
                      src={require("../../assets/DERIBIT.png")}
                      class="block w-36 h-10 mt-8 mr-14"
                      alt="deribit"
                    />
                    <img
                      src={require("../../assets/bybitlogo.png")}
                      class="block w-36 h-10 mt-8 mr-14"
                      alt="bybitlogo"
                    />
                    <img
                      src={require("../../assets/greedylgo.png")}
                      class="block w-36 h-10 mt-8 mr-14"
                      alt="greedylogo"
                    />
                    <img
                      src={require("../../assets/TRANFERO.png")}
                      class="block w-36 h-7 mt-9"
                      alt="tranfero"
                    />
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                    src={require("../../assets/bybitlogo.png")}
                    class="block w-36 h-10 mt-8"
                    alt="bybitlogo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-realPurple to-black py-8" />
    </>
  );
};

export default LogoCloud;
