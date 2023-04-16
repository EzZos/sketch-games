import { SectionTitle } from "../components/SectionTitle";
import consolesData from "../../../data/consoles";
import * as Card from "../components/Card";
export function Consoles() {
  return (
    <section id="consoles" className="mb-16 pt-6">
      <SectionTitle>Consoles</SectionTitle>
      <div className="flex gap-12">
        {
          consolesData.map((item, index) => {
            return (
              <Card.Root key={index}>
                <Card.Image src={item.img} alt={`${item.title} image`}/>
                <Card.Body type="consoleCard" price={item.price} title={item.title} />
              </Card.Root>
            )
          })
        }
      </div>
    </section>
  )
}