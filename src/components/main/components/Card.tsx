import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

function CardRoot({ children }: CardRootProps) {
  return <div className="w-fit">{children}</div>;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className="w-fit bg-[#F28705] p-2">
      <img src={src} alt={alt} className={`h-64 w-64 ${className}`} />
    </div>
  );
}

interface CardBodyProps {
  price: string;
  type: "consoleCard" | "gameCard"
  title?: string
}

function CardBody({ price, type, title }: CardBodyProps) {
  const bodySectionBgColor = type == "consoleCard" ? "bg-[#F28705]" : "bg-[#038C8C]";
  const bodyFooterBgColor = type == "consoleCard" ? "bg-[#038C8C] hover:bg-teal-600" : "bg-[#012E40] hover:bg-cyan-900";
  const bodyFooterTextColor = type == "consoleCard" ? "text-slate-200 group-hover:text-white" : "text-[#F28705] group-hover:text-red-500"
  const titleComp = title ? <h2 className="text-2xl font-bold text-white mb-3">{title}</h2> : null;
  const descountComp = type == "gameCard" ? <span>Pagando com pix desconto de R$ 39,90</span> : null
  return (
    <>
      <section className={`w-full ${bodySectionBgColor} px-3 py-2 font-montserrat font-bold text-white`}>
        <div className="max-w-[180px] bg-">
          {titleComp}
          <h3 className="text-2xl">R$ {price}</h3>
          {descountComp}
        </div>
      </section>
      <footer className={`group text-center py-2  transition-colors cursor-pointer ${bodyFooterBgColor}`}>
        <span className={`uppercase font-bold text-2xl ${bodyFooterTextColor}`}>Comprar</span>
      </footer>
    </>
  );
}

const Root = CardRoot;
const Image = CardImage;
const Body = CardBody;
export {
  Root,
  Image,
  Body
}