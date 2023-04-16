import { SectionTitle } from "../components/SectionTitle";
import gamesData from "../../../data/games";
import * as Card from "../components/Card";
export function BestSellers() {
  return (
    <section id="bestSellers" className="mb-36 pt-6">
      <SectionTitle>Mais vendidos</SectionTitle>
      <div className="bg-[#025159] grid place-items-center grid-cols-3 gap-y-24 gap-x-32 px-12 py-24">
        {gamesData.map((item, index) => {
          return (
            <Card.Root key={index}>
              <Card.Image src={item.img} alt={item.alt} />
              <Card.Body type="gameCard" price={item.price} />
            </Card.Root>
          );
        })}
      </div>
    </section>
  );
}
