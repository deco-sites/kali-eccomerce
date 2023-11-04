import { ComponentChildren } from "preact";

export interface Props {
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;

  children: ComponentChildren;
}

function Layout({ children, backgroundColor, textColor }: Props) {
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div class=" flex gap-4 m-auto w-11/12 flex-col py-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
