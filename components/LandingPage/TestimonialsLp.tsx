import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Layout from "$store/components/LandingPage/Layout.tsx";
import { useId } from "$store/sdk/useId.ts";
import TestimonialCard from "$store/components/LandingPage/TestimonialCard.tsx";

export interface Testimonial {
  text: string;
  customerPic: LiveImage;
  customerName: string;
}

export interface Props {
  title: string;
  testimonials: Testimonial[];
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function TestimonialsLp ({title, testimonials, backgroundColor, textColor} :Props) {
  const id = useId();
  return (
    <div className="relative wd-full z-10">
      <div id={id}>
        <Layout backgroundColor={backgroundColor} textColor={textColor}>
          <div className="flex justify-between mt-8">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="w-32 h-12 flex justify-between">
              <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
                <Slider.PrevButton class="btn btn-circle btn-outline absolute right-2/2 bg-base-100">
                  <Icon size={24} id="ChevronLeftLp" strokeWidth={3} />
                </Slider.PrevButton>
              </div>
              <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
                <Slider.NextButton class="btn btn-circle btn-outline absolute left-[-48px] bg-base-100">
                  <Icon size={24} id="ChevronRightLp" strokeWidth={3} />
                </Slider.NextButton>
              </div>
            </div>
          </div>
        </Layout>
        <SliderJS rootId={id} />
        <Slider className="carousel w-full" >
          {testimonials.map(({text, customerPic, customerName}: Testimonial, index) => (
            <Slider.Item 
              index={index}
              className="carousel-item"
            >
              <TestimonialCard 
                text={text}
                customerPic={customerPic}
                customerName={customerName}
              />
            </Slider.Item>
          ))}
        <div className="w-full h-[362px] absolute z-[-30]">
          <div className="w-[95%] bg-gradient-to-b  from-pink-600 to-purple-600 h-[362px] m-auto rounded-2xl">
          </div>
        </div>
        </Slider>
      </div>
    </div>
    
  );
}