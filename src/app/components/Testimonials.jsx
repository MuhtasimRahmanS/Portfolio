"use client";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "./slider.css";
import "swiper/css/pagination";
import img1 from "../../../public/images.jpg";
import img2 from "../../../public/images (1).jpg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className=" bg-[#fff2ff] py-20 ">
      <div className="container mx-auto lg:flex md:col-span-2 ">
        <div className="lg:w-1/2 w-full">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="md:text-5xl text-3xl font-bold text-center bg-gradient-to-r from-[#854FF3] to-[#31185F] bg-clip-text text-transparent"
          >
            My Client&apos;s Stories
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="w-2/3 py-5 text-center mx-auto"
          >
            Empowering people in new a digital journey with my super services
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400"
          className="lg:w-1/2 w-full"
        >
          <Swiper
            watchSlidesProgress={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="p-5 mb-5 md:mx-0 mx-5  rounded-xl bg-white m">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <h3 className="text-xl font-medium">Company Name</h3>
                  </div>

                  <div>
                    <Image
                      alt="img"
                      className=" round "
                      height={120}
                      src={img1}
                    />
                  </div>
                </div>
                <p className="pt-6 pb-10 font-medium">
                  Taylor is a professional Designer he really helps my business
                  by providing value to my business.
                </p>
                <h3 className="font-bold text-lg">Tim Bailey</h3>
                <p className="text-sm">SEO Specialist, Theme Junction</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mb-5 md:mx-0 mx-5 rounded-xl bg-white m">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <h3 className="text-xl font-medium">Company Name</h3>
                  </div>

                  <div>
                    <Image
                      alt="img"
                      className=" round "
                      height={120}
                      src={img2}
                    />
                  </div>
                </div>
                <p className="pt-6 pb-10 font-medium">
                  Taylor is a professional Designer he really helps my business
                  by providing value to my business.
                </p>
                <h3 className="font-bold text-lg">Tim Bailey</h3>
                <p className="text-sm">SEO Specialist, Theme Junction</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mb-5 md:mx-0 mx-5 rounded-xl bg-white m">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <h3 className="text-xl font-medium">Company Name</h3>
                  </div>

                  <div>
                    <Image
                      alt="img"
                      className=" round "
                      height={120}
                      src={img1}
                    />
                  </div>
                </div>
                <p className="pt-6 pb-10 font-medium">
                  Taylor is a professional Designer he really helps my business
                  by providing value to my business.
                </p>
                <h3 className="font-bold text-lg">Tim Bailey</h3>
                <p className="text-sm">SEO Specialist, Theme Junction</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mb-5 md:mx-0 mx-5 rounded-xl bg-white m">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <h3 className="text-xl font-medium">Company Name</h3>
                  </div>

                  <div>
                    <Image
                      alt="img"
                      className=" round "
                      height={120}
                      src={img2}
                    />
                  </div>
                </div>
                <p className="pt-6 pb-10 font-medium">
                  Taylor is a professional Designer he really helps my business
                  by providing value to my business.
                </p>
                <h3 className="font-bold text-lg">Tim Bailey</h3>
                <p className="text-sm">SEO Specialist, Theme Junction</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mb-5 md:mx-0 mx-5 rounded-xl bg-white m">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <h3 className="text-xl font-medium">Company Name</h3>
                  </div>

                  <div>
                    <Image
                      alt="img"
                      className=" round "
                      height={120}
                      src={img1}
                    />
                  </div>
                </div>
                <p className="pt-6 pb-10 font-medium">
                  Taylor is a professional Designer he really helps my business
                  by providing value to my business.
                </p>
                <h3 className="font-bold text-lg">Tim Bailey</h3>
                <p className="text-sm">SEO Specialist, Theme Junction</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mb-5 md:mx-0 mx-5 rounded-xl bg-white m">
                <div className="flex justify-between">
                  <div>
                    {" "}
                    <h3 className="text-xl font-medium">Company Name</h3>
                  </div>

                  <div>
                    <Image
                      alt="img"
                      className=" round "
                      height={120}
                      src={img2}
                    />
                  </div>
                </div>
                <p className="pt-6 pb-10 font-medium">
                  Taylor is a professional Designer he really helps my business
                  by providing value to my business.
                </p>
                <h3 className="font-bold text-lg">Tim Bailey</h3>
                <p className="text-sm">SEO Specialist, Theme Junction</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
