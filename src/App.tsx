import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/main";

export function App() {
  return (
    <>
      <Container>
        <Header />
        <Main />
      </Container>
      <Footer />
    </>
  )
}