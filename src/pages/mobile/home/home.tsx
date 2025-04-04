import { Block, Icon, Link, Page, Navbar, NavLeft, Button } from "framework7-react";
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

const HomePage = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = getDevice().ios || getDevice().android || window.matchMedia("(max-width: 1024px)").matches;;

  return (
    <Page>
      {/* Mobile Banner Layout */}
      {isMobile && (
        <Navbar innerClassName="p-5 bg-gradient-to-r from-secondary/0 to-secondary/20">
          <NavLeft>
            <Link tabLink="#view-home" className="flex flex-col">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold text-transparent">
                U8.COM
              </span>
              <span className={`text-xs font-light ${getDevice().ios && "text-black"}`}>Chinese Gaming</span>
            </Link>
            <Link href="#">
              <Icon f7="logo_telegram" className="text-blue-500" />
              <span className="ml-1 text-xs">@t.u2support</span>
            </Link>
          </NavLeft>
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
          className="w-full"
        >
          <SwiperSlide>
            <img
              src="./assets/image/carousel1.jpg"
              alt="Promotional Banner 1"
              className="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/image/carousel2.jpg"
              alt="Promotional Banner 2"
              className="h-auto w-full"
            />
          </SwiperSlide>
        </Swiper>

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
