import Card from './Card';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../redux/action/action';
import { addFavorite, deleteFavorite } from '../redux/action/action';
import Lottie from 'react-lottie'
import searching from '../assets/lottie/78631-searching.json'


const defaultOption = {
  loop: true,
  autoplay: true,
  renderSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}


const ContenedorCartas = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const DivIngreso = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

`

const TextoIngreso = styled.h1`
   color: white;
   font-family: 'Indie Flower', cursive;
   position: relative;
   top: -100px;
   background-color: #252422;
   border-radius: 20px;
   backdrop-filter: blur(10px);
   opacity: 75%;
   padding: 15px;
`

export default function Cards(props) {
   const character = useSelector( state => state.character) 
   const favorites = useSelector( state => state.favorites)
   const dispatch = useDispatch()

   
   return (
      <ContenedorCartas>
         <DivIngreso>
         {
            character[0]?null:<Lottie options={{animationData: searching, ...defaultOption}} width={500} onClick={null}/>
         }
         {
            character[0]?null:<TextoIngreso>Ingrese un número para mostrar un Personaje de Rick&Morty o un nombre para mostrar un Jugador de Fútbol</TextoIngreso>
         }
         </DivIngreso>
         {
            character?.map(elemento => {
               return <Card key={elemento.name} 
               name={elemento.name} 
               species={elemento.species}
               gender={elemento.gender}
               image={elemento.image}
               CerrarCarta={()=> {dispatch(deleteCard(elemento.name))}}
               detailId={elemento.id || elemento.name}
               />
            })
         }
      </ContenedorCartas>
   )
}
