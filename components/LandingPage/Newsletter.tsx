import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";
import Layout from "deco-sites/black-friday-lp/components/LandingPage/Layout.tsx";
import Icon from "deco-sites/black-friday-lp/components/ui/Icon.tsx";

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  content: {
    title?: string;
    form?: Form;
  };
  layout?: {
    tiled?: boolean;
  };

  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

function Newsletter(
  { content, layout = {}, backgroundColor, textColor }: Props,
) {
  const { tiled = false } = layout;
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await Runtime.vtex.actions.newsletter.subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <div
        class={`flex ${
          tiled
            ? "flex-col gap-4 lg:flex-row lg:w-full lg:justify-start lg:items-center"
            : "flex-col gap-4"
        }`}
      >
        <div class="flex flex-col gap-4">
          {content?.title && (
            <h3 class={tiled ? "text-2xl lg:text-3xl" : "text-lg"}>
              {content?.title}
            </h3>
          )}
        </div>
        <div class="flex flex-col gap-4 flex-grow">
          <form
            class="form-control"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-wrap gap-3">
              <input
                name="email"
                class="flex-auto input flex-grow text-base-content bg-transparent border rounded-xl border-opacity-75"
                placeholder={content?.form?.placeholder || "Digite seu email"}
              />
              <button
                type="submit"
                class="btn disabled:loading border-none text-white"
                disabled={loading}
                style={{
                  background:
                    "var(--78350-f-2-paints, linear-gradient(180deg, #E61755 0%, #8454F4 100%), #78350F)",
                }}
              >
                <div class="flex justify-start gap-2 items-center">
                  {content?.form?.buttonText || "Inscrever"}
                  <Icon id="paper-plane-top" size={20} />
                </div>
              </button>
            </div>
          </form>
          {content?.form?.helpText && (
            <div
              class="text-sm"
              dangerouslySetInnerHTML={{ __html: content?.form?.helpText }}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Newsletter;
