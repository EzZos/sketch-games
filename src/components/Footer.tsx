import {
  Code,
  Copyright,
  Crop,
  InstagramLogo,
  MapPin,
} from "@phosphor-icons/react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#03A696] px-52 pt-8 pb-16">
      <Logo className="w-fit m-auto mb-5" />
      <div className="m-auto h-1 bg-[#012E40] "></div>
      <div className="flex justify-between mt-5">
        <div>
          <ul>
            <li className="flex gap-3 items-center mb-6">
              <MapPin size={28} color="#F28705" />
              <address className="text-white font-bold">
                Avenida Crzayness, 4002 - Salvador BA
              </address>
            </li>
            <li className="flex gap-3 items-center">
              <Copyright size={28} color="#F28705" />
              <span className="text-white font-bold">
                2023 - Sketch games. Todos os direitos reservados
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="flex gap-3 items-center mb-6">
              <InstagramLogo size={28} color="#F28705" />
              <a
                className="text-white font-bold"
                href="https://www.instagram.com"
                target="_blank"
              >
                @sketch_games
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Crop size={28} color="#F28705" />
              <span className="text-white font-bold">
                Designed by{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://github.com/Leofrancaa"
                  target="_blank"
                >
                  Leonardo Franca
                </a>{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 items-center m-auto w-fit mt-3">
        <Code size={28} color="#F28705" />
        <h2 className="text-white font-bold">
          Coded by{" "}
          <a
            href="https://github.com/EzZos"
            target="_blank"
            className="underline underline-offset-2"
          >
            João Zumaêta
          </a>
        </h2>
      </div>
    </footer>
  );
}
