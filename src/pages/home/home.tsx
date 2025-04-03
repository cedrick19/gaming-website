import {
  Block,
  Icon,
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
      {/* Mobile Banner Layout */}
      {isMobile && (
        <Navbar innerClassName="p-5 bg-gradient-to-r from-secondary/0 to-secondary/20">
          <NavLeft>
            <Link tabLink="#view-home">
              <img
                src="/assets/image/U8logo.png" // Replace with your image URL
                alt="U8.COM Logo"
                className="h-7 w-auto" // Make the image fill the height of the navbar, width auto to maintain aspect ratio
              />
            </Link>
            <Link href="#">
              <img
                src="/assets/image/Telegram.png" // Replace with your image URL
                alt="Telegram Logo"
                className="h-full w-auto" // Make the image fill the height of the navbar, width auto to maintain aspect ratio
              />
            </Link>
          </NavLeft>

          {/* Add NavRight for the notification icon */}
          <NavRight className="flex items-center space-x-4">
            <Link href="#" className="flex items-center">
              <Icon f7="bell" className="text-xl text-white" />{" "}
            </Link>
          </NavRight>
        </Navbar>
      )}

      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Swiper Component */}
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="h- w-full sm:h-10 md:h-auto"
        >
          <SwiperSlide>
            <img
              src="./assets/image/carousel1.jpg"
              alt="Promotional Banner 1"
              className="h-full w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/carousel2.jpg"
              alt="Promotional Banner 2"
              className="h-full w-full"
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

      <TextCarousel />
      <div className="flex w-full items-center justify-between rounded-b-[2rem] border-b-2 border-violet-500 p-5 shadow-[0_4px_10px_rgba(138,43,226,0.5)] shadow-lg">
        <div className="flex items-center">
          <img
            src="./assets/image/playeraccount.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-full border-2 border-gray-200"
          />
          <div className="ml-3">
            <div className="flex items-center">
              <span className="mr-2 text-gray-800">username</span>
              <div className="rounded-lg bg-yellow-400 px-2 py-0.5 text-xs font-bold">
                VIP 0
              </div>
              <Icon f7="eye" className="ml-2 h-5 w-5 text-gray-500" />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold">0.00</span>
              <div className="flex h-6 w-6 rounded-full bg-purple-500">
                <Icon f7="gobackward" className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
            <Icon f7="bubble_right" className="h-6 w-6 text-white" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
            <Icon f7="phone" className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

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
