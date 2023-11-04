import Image from "apps/website/components/Image.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Layout from "$store/components/LandingPage/Layout.tsx";
import { useState } from 'preact/hooks';
import { stringToBase64SHA256 } from "deco/deps.ts";

export interface BenefitButton {
  icon: LiveImage;
  text: string;
  image: LiveImage;
}

export interface Props {
  title: string;
  content: string;
  benefitButtons: BenefitButton[];
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function BenefitGallery({title, content, benefitButtons, backgroundColor, textColor}: Props) {
  const [selectedImage, setSeletctedImage] = useState(benefitButtons[0].image);
  const [selectedButton, setSelectedButton] = useState(0);
  const buttonClass = "block w-[100%] flex gap-4 p-4 rounded justify-between";
  const selectedButtonClass = "block w-[100%] flex gap-4 p-4 rounded justify-between shadow-md";
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-6">{content}</p>

      {/* Mobile version */}
      <details className="dropdown m-auto md:hidden">
        <summary className="m-1 btn">
        <Image 
          height={23}
          width={23}
          src={benefitButtons[0].icon}
        />
        <p className="cursor-pointer">{benefitButtons[0].text}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg);">
                  <path d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z" fill="#1E1E1E"/>
                </svg>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {benefitButtons.map(({icon, text, image}: BenefitButton, index) => (
            <li>
              <button 
                className={selectedButton == index ? selectedButtonClass : buttonClass}
                onClick={(e) => { 
                  setSeletctedImage(image);
                  setSelectedButton(index);
                  document.querySelector(".dropdown")?.removeAttribute("open");
                }}
              >
                <Image 
                  height={23}
                  width={23}
                  src={icon}
                />
                <label className="cursor-pointer">{text}</label>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg);">
                  <path d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z" fill="#1E1E1E"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </details>
      <div className="flex justify-between mt-16">
        {/* Pc version */}
        <div className="flex-col gap-4 hidden md:block">
          {benefitButtons.map(({icon, text, image}: BenefitButton, index) => (
            <button 
              className={selectedButton == index ? selectedButtonClass : buttonClass}
              onClick={(e) => { 
                setSeletctedImage(image);
                setSelectedButton(index);
              }}
            >
              <Image 
                height={23}
                width={23}
                src={icon}
              />
              <label className="cursor-pointer">{text}</label>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z" fill="#1E1E1E"/>
              </svg>
            </button>
          ))}
        </div>
        <div className="max-w-[50wd]">
          <Image 
            width={906}
            height={556}
            src={selectedImage}
          />
        </div>
      </div>
    </Layout>
  );
}