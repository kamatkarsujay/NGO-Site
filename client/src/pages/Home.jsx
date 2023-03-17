import React from "react";
import { Carousel } from "flowbite-react";
import { Navbar } from "../components/Navbar";
import { Footers } from "../components/Footers";

function Home() {
  return (
    <>
      <Navbar />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img src={require("../assets/img/slider/slider-1.jpg")} alt="..." />
          <img src={require("../assets/img/slider/slider-2.jpg")} alt="..." />
          <img src={require("../assets/img/slider/slider-3.jpg")} alt="..." />
        </Carousel>
      </div>

      <section className="pb-20 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Livelihood</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Skill training and placement support for underprivileged
                    youth
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Education</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Education, nutrition and holistic development of children
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Women Empowerment</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Empowering adolescent girls & women through community
                    engagement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a href="tel:9404235423" className="sticky z-30 float">
            <i class="fa-solid fa-phone my-float"></i>
          </a>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                NGO Site
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam cumque laudantium quas. At quam, velit labore sapiente
                quis accusamus nisi sequi unde? Alias, reprehenderit! Distinctio
                voluptate recusandae molestiae quidem ipsam?
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                explicabo quam dicta blanditiis eveniet repellendus. Voluptatum
                atque, minima molestiae cumque voluptatibus dolores quod et
                dolorum quidem culpa ex enim exercitationem?
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src={require("../assets/img/indian-1.jpg")}
                  className="w-full align-middle rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-zinc-50 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src={require("../assets/img/childLabour.jpg")}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  A growing organisation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat pariatur nisi asperiores sit sint, ratione at est
                  neque ullam fuga perferendis nesciunt. Praesentium, voluptate
                  nobis laborum excepturi laboriosam rem cum.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Education</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Women Empowerment</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Stop Child Labour</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
          <div class="grid row-gap-8 sm:grid-cols-3">
            <div class="text-center py-2">
              <h6 class="text-5xl font-bold text-deep-purple-accent-400">20</h6>
              <p class="font-bold">Child Educated</p>
            </div>
            <div class="text-center py-2">
              <h6 class="text-5xl font-bold text-deep-purple-accent-400">40</h6>
              <p class="font-bold">Child Rescued</p>
            </div>
            <div class="text-center py-2">
              <h6 class="text-5xl font-bold text-deep-purple-accent-400">10</h6>
              <p class="font-bold">NGO</p>
            </div>
          </div>
        </div>
      </section>
      <Footers />
    </>
  );
}

export default Home;
