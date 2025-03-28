import { Block, Page } from "framework7-react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/components/LoginModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Layout from "@/layout/layout";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
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
