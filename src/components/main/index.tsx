import { Container } from "../Container";
import { BestSellers } from "./sections/BestSellers";
import { Consoles } from "./sections/Consoles";
import { Games } from "./sections/Games";

export function Main() {
  return (
    <main>
      <Container>
        <Consoles />
        <Games />
        <BestSellers />
      </Container>    
    </main>
  );
}
