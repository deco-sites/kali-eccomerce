import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  text: string;
  customerPic: LiveImage;
  customerName: string;
}

export default function({text, customerPic, customerName}: Props) {
  return(
    <div className="w-[80vw] sm:w-96 bg-white mx-3 min-h-[288px] my-9 rounded-2xl shadow-md p-8">
      <p className="min-h-[156px]">{text}</p>
      <div className="flex items-center gap-4">
        <div className="overflow-hidden rounded-full">
          <Image 
            height={64}
            width={64}
            src={customerPic}
          />
        </div>
        <label>{customerName}</label>
        </div>
      </div>
  );
}