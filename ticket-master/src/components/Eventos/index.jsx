import { ItemEvento } from "./components/ItemEvento"
import data from "../../data/events.json"

console.log(data)
console.log(data._embedded)

const eventos = data._embedded.events;

const Eventos = () => {

    const eventosComponentes = eventos.map(evento => <ItemEvento key={evento.id} evento={evento}/>)
    return (
        <div>
            <h1>Eventos</h1>
            <ItemEvento/>
        </div>
    )
}
export {Eventos}