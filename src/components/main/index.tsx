import { BestSellers } from "./sections/BestSellers";
import { Consoles } from "./sections/Consoles";
import { Games } from "./sections/Games";

export function Main() {
  return (
    <main>
      <Consoles />
      <Games />
      <BestSellers />
    </main>
  );
}
