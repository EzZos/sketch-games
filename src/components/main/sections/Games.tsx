import { HogwartsLegacy } from "../../../assets/img";
import { SectionTitle } from "../components/SectionTitle";
export function Games() {
  return (
    <section id="games" className="mb-16 pt-6">
      <SectionTitle>Games</SectionTitle>
      <div className="relative">
        <img src={HogwartsLegacy} alt="Hogwarts Legacy game banner" />
        <a
          href=""
          className="bg-[#038C8C] py-9 px-16 font-bold text-2xl text-white absolute bottom-8 right-8 hover:scale-105 transition-transform duration-300"
        >
          Veja aqui as novidades
        </a>
      </div>
    </section>
  );
}
