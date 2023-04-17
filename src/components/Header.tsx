import { Container } from "./Container";
import { Logo } from "./Logo";
export function Header() {
  return (
    <header className="px-10 pt-16  mb-4">
      <Container className="flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                className="text-white font-bold text-2xl hover:border-b-2 border-white"
                href="#consoles"
              >
                Consoles
              </a>
            </li>
            <li>
              <a
                className="text-white font-bold text-2xl hover:border-b-2 border-white"
                href="#games"
              >
                Games
              </a>
            </li>
            <li>
              <a
                className="text-white font-bold text-2xl  hover:border-b-2 border-white"
                href="#bestSellers"
              >
                Mais vendidos
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
