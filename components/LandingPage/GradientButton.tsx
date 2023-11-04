export interface Props {
  text: string;
  href: string;
  backgroundColor?: string;
}

export default function GradientButton({ text, href, backgroundColor }: Props) {
  backgroundColor = backgroundColor ? backgroundColor : "white";
  return (
    <div className="p-[2px] bg-gradient-to-b from-pink-600 to-purple-600 rounded-[6px] inline-block">
      <div
        className="p-[9px] px-[24px] rounded-[4px] inline-block"
        style={{ backgroundColor }}
      >
        <a
          href={href}
          className="rounded-lg text-transparent font-semibold bg-clip-text bg-gradient-to-b from-pink-600 to bg-purple-600 inline-block"
        >
          {text}
        </a>
      </div>
    </div>
  );
}
