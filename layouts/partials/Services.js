"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Services = ({
  services,
  bgColor = "bg-body",
  nextBgColor = "bg-theme-light",
}) => {
  return (
    <>
      {services.map((service, index) => {
        // Start with bg-theme-light, then alternate with bg-body
        const isOdd = index % 2 === 1;
        const sectionBg = isOdd ? "bg-body" : "bg-theme-light";
        const nextSectionBg = !isOdd ? "bg-body" : "bg-theme-light";
        return (
          <React.Fragment key={`service-${index}`}>
            <section className={`section ${sectionBg} pb-0 mb-[-64px]`}>
              <div className="container pt-12">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                  <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                    <div className="relative">
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                          el: `.swiper-pagination-${index}`,
                          bulletClass: 'swiper-pagination-bullet',
                          bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                      >
                        {/* Slides */}
                        {service?.images.map((slide, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="relative w-full h-[80vh] max-h-screen flex items-center justify-end">
                              <Image
                                src={slide}
                                fill
                                alt="service image"
                                className="object-contain h-full w-auto drop-shadow-xl service-blend"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                style={{
                                  maxHeight: '80vh',
                                  WebkitMaskImage: 'linear-gradient(to top, transparent 15%, black 30%, black 85%, transparent 100%), linear-gradient(to right, transparent 15%, black 30%, black 70%, transparent 85%)',
                                  maskImage: 'linear-gradient(to top, transparent 15%, black 30%, black 85%, transparent 100%), linear-gradient(to right, transparent 15%, black 30%, black 70%, transparent 85%)',
                                  WebkitMaskComposite: 'multiply',
                                  maskComposite: 'intersect',
                                  WebkitMaskRepeat: 'no-repeat',
                                  maskRepeat: 'no-repeat',
                                  WebkitMaskSize: '100% 100%',
                                  maskSize: '100% 100%',
                                }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {/* Pagination bullets container */}
                      <div className={`swiper-pagination swiper-pagination-${index}`} style={{ position: 'absolute', bottom: 16, left: 0, right: 0, zIndex: 10 }} />
                    </div>
                  </div>
                  <div
                    className={`service-content mt-5 md:mt-0 ${
                      !isOdd && "md:order-1"
                    }`}
                  >
                    <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                    <p className="mb-2 mt-4">{service?.content}</p>
                    {service.button.enable && (
                      <Link
                        href={service?.button.link}
                        className="cta-link inline-flex items-center text-button"
                      >
                        {service?.button.label}
                        <Image
                          className="ml-1"
                          src="/images/arrow-right.svg"
                          width={18}
                          height={14}
                          alt="arrow"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {/* Gradient divider between service sections, except after the last one */}
            {index < services.length - 1 && (
              <div
                className={`h-32 -mt-16 bg-gradient-to-b from-${sectionBg.replace(
                  "bg-",
                  ""
                )} to-${nextSectionBg.replace("bg-", "")} w-full`}
                style={{ position: "relative", zIndex: 1 }}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Services;
