import { useState } from "react";
import './index.css';

const pizzas = [
    {
        'id': 1,
        'sabor': 'Pepperoni',
        'valor': 40

    },
    {
        'id': 2,
        'sabor': 'Frango com Requeijão',
        'valor': 35
    },
    {
        'id': 3,
        'sabor': 'Brasileira',
        'valor': 45
    }
]
function Banco() {
    const [count,setCount] = useState(0)
    return(
        <>
        <div>
            {pizzas.map((pizza) =>
            <div key={pizza.id}>
                {pizza.sabor},{pizza.valor}
            </div>
            )}
        </div>

        </>
    )
}
export default Banco