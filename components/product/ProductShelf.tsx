import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import Layout from "$store/components/LandingPage/Layout.tsx";
import { usePlatform } from "deco-sites/black-friday-lp/sdk/usePlatform.tsx";

export interface Props {
  products: Product[] | null;
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large";
  };
  cardLayout?: cardLayout;
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
  link?: string;
}

function ProductShelf({
  products = null,
  title,
  description,
  layout,
  cardLayout,
  backgroundColor,
  textColor,
  link,
}: Props) {
  const platform = usePlatform();
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="w-full" style={{ backgroundColor }}>
      <Layout backgroundColor={backgroundColor} textColor={textColor}>
        <div
          id={id}
          class="flex flex-col justify-between gap-4"
        >
          <div class="flex justify-between items-center">
            <Header
              title={title || ""}
              description={description || ""}
              fontSize={layout?.headerfontSize || "Large"}
              alignment={layout?.headerAlignment || "center"}
              color={textColor}
            />

            <div class="flex justify-start gap-4 items-center">
              <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
                <Slider.PrevButton class="btn btn-circle btn-outline text-white bg-transparent border-white">
                  <Icon size={24} id="ChevronLeft" strokeWidth={3} />
                </Slider.PrevButton>
              </div>
              <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
                <Slider.NextButton class="btn btn-circle btn-outline text-white bg-transparent border-white">
                  <Icon size={24} id="ChevronRight" strokeWidth={3} />
                </Slider.NextButton>
              </div>
            </div>
          </div>

          <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5 w-full">
            {products?.map((product, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-[270px] sm:w-[292px] first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
              >
                <ProductCard
                  product={product}
                  itemListName={title}
                  layout={cardLayout}
                  platform={platform}
                />
              </Slider.Item>
            ))}
          </Slider>
          <SliderJS rootId={id} />
          <SendEventOnLoad
            event={{
              name: "view_item_list",
              params: {
                item_list_name: title,
                items: products.map((product) =>
                  mapProductToAnalyticsItem({
                    product,
                    ...(useOffer(product.offers)),
                  })
                ),
              },
            }}
          />
          {link && (
            <button class="w-fit flex m-auto btn btn-outline border-white text-white">
              <a href={link}>
                {"ver tudo"}
              </a>
            </button>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default ProductShelf;
