import Layout from "$store/components/LandingPage/Layout.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import GradientButton from "$store/components/LandingPage/GradientButton.tsx";

export interface Props {
  title: string;
  caption?: string;
  content?: string;
  buttonText: string;
  buttonLink: string;
  image: LiveImage;
  alt?: string;
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function MainBanner({backgroundColor, textColor, title, caption, content, buttonText, buttonLink, image, alt}: Props) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center space-y-7">
          <h2 className="text-base font-bold h-5 text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to bg-purple-600">
            {caption}
          </h2>
          <h1 className="text-5xl font-semibold">
            {title}
          </h1>
          <p className="text-lg mt-[25px]">
            {content}
          </p>
          <div>
            <GradientButton text={buttonText} href={buttonLink} backgroundColor={backgroundColor}/>
          </div>
        </div>
          <Image
            width={486} 
            height={423}
            src={image}
            alt={alt}
            className="m-auto mt-6 md:mt-0"
          />
      </div>
    </Layout>
  );
}