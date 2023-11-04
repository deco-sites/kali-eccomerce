import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Divider from "$store/components/footer/Divider.tsx";
import Layout from "deco-sites/black-friday-lp/components/LandingPage/Layout.tsx";

export type ISection = {
  title?: string;
  items?: Array<{
    label: string;
    href?: string;
  }>;
};

export type SocialMedia = {
  image: LiveImage;
  href: string;
  description?: string;
};

export interface Props {
  section?: Array<ISection>;
  social?: {
    title?: string;
    description?: string;
    items?: Array<SocialMedia>;
  };
  payments?: {
    title?: string;
    items?: Array<{ image: LiveImage; description?: string }>;
  };
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;

  extraLinks: {
    owner: string;
    links: {
      label: string;
      href?: string;
    }[];
  };

  logos?: {
    alt: string;
    src: LiveImage;
    href: string;
  }[]
}

function Footer(
  { section, social, payments, backgroundColor, textColor, extraLinks, logos }: Props,
) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <Divider />
      <div class="flex flex-wrap justify-between flex-col md:flex-row gap-4">
        {section?.map(({ title, items }: ISection) => (
          <section class="flex flex-col">
            {title && <h2 class="text-xl uppercase">{title}</h2>}
            <>
              {items?.map(({ label, href }) => (
                <a class="mt-2" href={href}>{label}</a>
              ))}
            </>
          </section>
        ))}
        <section class="flex flex-col">
          {social && (
            <section class="flex flex-col items-start">
              {social.title && (
                <h2 class="text-xl uppercase">{social?.title}</h2>
              )}
              {social.description && <span>{social?.description}</span>}
              <div class="flex flex-wrap flex-row gap-2">
                {social?.items?.map(({ href, image, description }) => (
                  <a class="mt-2" href={href} target="_blank">
                    <img
                      class="flex align-middle justify-center"
                      src={image}
                      alt={description}
                      width="40px"
                      height="40px"
                    />
                  </a>
                ))}
              </div>
            </section>
          )}
          {payments && (
            <section class="flex flex-col">
              {payments.title && (
                <h2 class="text-xl uppercase">
                  {payments?.title}
                </h2>
              )}
              <div class="flex flex-wrap flex-row">
                {payments?.items?.map(({ image, description }) => (
                  <img
                    class="rounded-lg flex align-middle justify-center"
                    src={image}
                    alt={description}
                    width="50px"
                    height="30px"
                  />
                ))}
              </div>
            </section>
          )}
        </section>
      </div>
      <Divider />
      <div class="flex justify-between flex-wrap items-center">
        <span>{extraLinks.owner}</span>
        <div class="flex justify-start gap-4 flex-wrap">
          {extraLinks.links.map((e) => (
            <a class="link text-sm" href={e.href}>
              {e.label}
            </a>
          ))}
        </div>
      </div>
      <ul class="flex justify-start flex-wrap gap-4">
      {logos?.map((item) => (
          <li>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.alt} max-height="120px" />
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Footer;
