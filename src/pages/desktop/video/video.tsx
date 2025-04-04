import Layout from "@/layout/layout";
import { Page, Navbar, Block, BlockTitle } from "framework7-react";

const VideoPage = () => {
  return (
    <Page name="video">
      <Layout>
        <Navbar title="Video Player" />
        <BlockTitle>Watch Video</BlockTitle>
        <Block className="text-center">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Block>
      </Layout>
    </Page>
  );
};

export default VideoPage;
