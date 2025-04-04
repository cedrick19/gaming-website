import {
  Block,
  Link,
  Page,
  Navbar,
  NavLeft,
  Button,
  NavRight,
} from "framework7-react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/components/LoginModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Layout from "@/layout/layout";
import { getDevice } from "framework7";
import { useState } from "react";
import TextCarousel from "./TextCarousel";

const HomePage = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = getDevice().ios || getDevice().android;

  return (
    <Page>
      {isMobile && (
        <Navbar innerClassName=" bg-gradient-to-r from-secondary/0 to-secondary/20">
          <NavLeft>
            <Link tabLink="#view-home">
              <img src="/assets/image/logo.svg" className="h-7 w-auto" />
            </Link>
            <Link href="#">
              <img
                src="/assets/image/Telegram.png"
                alt="Telegram Logo"
                className="h-full w-auto"
              />
            </Link>
          </NavLeft>

          <NavRight className="flex items-end justify-end">
            <Link href="#">
              <img
                src="./assets/image/bell.svg"
                alt="Promotional Banner 1"
                className="text-xl text-white"
              />
            </Link>
          </NavRight>
        </Navbar>
      )}

      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full sm:h-10 md:h-auto"
        >
          <SwiperSlide>
            <img
              src="./assets/image/carousel1.jpg"
              alt="Promotional Banner 1"
              className="h-[25vh] w-full sm:h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/carousel2.jpg"
              alt="Promotional Banner 2"
              className="h-[25vh] w-full sm:h-full"
            />
          </SwiperSlide>
        </Swiper>

        <div className="hidden md:block">
          <Button
            className={`swiper-button-prev absolute left-4 top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          <Button
            className={`swiper-button-next absolute right-4 top-1/2 hidden bg-opacity-60 p-4 text-white transition-opacity duration-300 md:flex ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {isMobile && (
        <div className="space-y-5 rounded-b-[2rem] border-violet-500 p-3 pt-3 shadow-[0_4px_10px_rgba(138,43,226,0.5),0_2px_5px_rgba(138,43,226,0.3)]">
          <TextCarousel />
          <div className="flex w-full items-center justify-between p-3">
            <div className="flex items-center">
              <img
                src="./assets/image/playeraccount.jpg"
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-gray-200"
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-800">username</span>
                  <img src="./assets/image/VIP.svg" alt="VIP" />
                  <img
                    src="./assets/image/eye-on.svg"
                    className="ml-2 h-5 w-5 text-gray-500"
                    alt="eye"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">0.00</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                    <img
                      src="./assets/image/refresh.svg"
                      className="h-3 w-3"
                      alt="refresh"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
                <img src="./assets/image/chat.svg" className="h-5 w-5" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
                <img
                  src="./assets/image/customer-service.svg"
                  className="h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Layout>
        this is home
        <Block>
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-gray-600">{t("description")}</p>
        </Block>
      </Layout>

      <LoginModal />
    </Page>
  );
};

export default HomePage;
