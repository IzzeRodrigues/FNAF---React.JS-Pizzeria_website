import { useState } from "react";

export const pizzas = [
    {
        'id': 1,
        'sabor': 'Frango e Requeijão',
        'descricao': 'pizza Frango e Requeijão mt boa!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'valor': 40,
        'quadro' : 'src/assets/images/frango-e-requeijao-v1.jpg'
    },
    {
        'id': 2,
        'sabor': 'Portuguesa',
        'descricao': 'pizza portuguesa mt boa!',
        'valor': 40,
        'quadro' : 'src/assets/images/brasileira.jpg'
    },
    {
        'id': 3,
        'sabor': 'Pepperoni',
        'descricao': 'pizza pepperoni mt boa!',
        'valor': 40,
        'quadro' : 'src/assets/images/pepper.jpg'
    },
    
]
// function Banco() {
//     const [count,setCount] = useState(0)
//     return(
//         <>
//         <div>
//             {pizzas.map((pizza) =>
//             <div key={pizza.id}>
//                 {pizza.sabor},{pizza.valor}
//             </div>
//             )}
//         </div>
//         </>
//     )
// }
// export default Banco