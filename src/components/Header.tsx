import { Logo } from "./Logo";
export function Header() {
  return (
    <header className="px-10 pt-16 flex justify-between items-center mb-4">
      <Logo />
      <nav>
        <ul className="flex gap-6">
          <li>
            <a className="text-white font-bold text-2xl hover:border-b-2 border-white" href="#consoles">
              Consoles
            </a>
          </li>
          <li>
            <a className="text-white font-bold text-2xl hover:border-b-2 border-white" href="#games">
              Games
            </a>
          </li>
          <li>
            <a className="text-white font-bold text-2xl  hover:border-b-2 border-white" href="#bestSellers">
              Mais vendidos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
