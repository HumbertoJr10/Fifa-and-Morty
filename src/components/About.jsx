import React from "react"
import styled from "styled-components"
import portada from "../img/Portada.png"
import logo from "../img/logoFifaMorty.png"

const Todo = styled.div`

`

const Header = styled.div`
    background-color: #252422;
    width: 90%;
    height: 50px;
    margin-left: 5%;
    border-left: gold 1px solid;
    border-top: gold 1px solid;
    border-right: gold 1px solid;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media (max-width:500px) {
        width: 100%;
        margin-left: 0;
    }
`
const TituloAbout = styled.h1`
    margin: 0;
    color: gold;
    font-family: 'Indie Flower', cursive;
    font-size: 42px;
    @media (max-width:500px) {
        font-size: 30px;
    }
`
const Contenido = styled.div`
    margin-left: 5%;
    width: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-left: 1px solid white;
    border-right: 1px solid white;
    padding-bottom: 20px;
    @media (max-width:500px) {
        width: 100%;
        margin: 0;
    }
`
const ImagenAbout = styled.img`
    width: 450px;
    margin-bottom: 5px;
    margin-top: 15px;
    @media (max-width:500px) {
        width: 300px;
    }
`

const ImagenLogo = styled.img`
width: 600px;
@media (max-width: 800px) {
    width: 400px;
}

@media (max-width:500px) {
        width: 300px;
    }

`

const TextoAbout = styled.h2`
    font-family: 'Indie Flower', cursive;
    margin: 40px;
    font-size: 25px;
    text-align: justify;
    @media (max-width:500px) {
        font-size: 15px;
        margin: 20px
    }
    @media (max-width: 700px) {
        font-size: 17px;
    }
`

const ContenedorRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1500px) {
        flex-direction: column;
    }
`

const IconSocial = styled.img`
width: 50px;
margin: 20px;


@media (max-width:500px) {
        width: 40px;
        margin: 15px;
    }

 &:hover {
    width: 55px;
 }
`
const SocialContainer = styled.div`
display: flex;
`


export default function About () {

    return (
            <Todo>
                <div>
                    <Header>
                        <TituloAbout>About of... me?</TituloAbout>
                    </Header>
                    <Contenido>
                        <ImagenAbout src={portada} />
                        <div>
                            <TextoAbout>
                                 Mi nombre es Humberto Jr, soy un apasionado de los video Juegos, los deportes y la Programaci??n, he participado y ganado varios campeonatos de videojuegos a nivel estadal, ahora me encuentro desarrollando mis habilidades para alcanzar una meta que siempre he tenido pero que por diferentes motivos no habia podido comenzar: La meta de convertirme en Programador Full Stack. Este es mi primer proyecto peque??o, el cual he desarrollado durante mi proceso de aprendizaje en el BootCamp de #SoyHenry, as?? que decid?? unir mis tres grandes pasiones en este mini proyecto.
                            </TextoAbout>
                            <TextoAbout>
                                 Pero... ??De que va todo esto? Bien, esta es una Single Page desarrollada con React y Redux para buscar y mostrar Cartas de jugadores de futbol. Originalmente la idea era otra, pero mis pasiones me llevaron a modificar un poco la tematica.
                            </TextoAbout>
                            <TextoAbout>
                                La idea original era consumir la Api gratuita de Rick & Morty (https://rickandmortyapi.com/). Y si bien era una idea emocionante yo quer??a incluirle mi toque personal con Jugadores de f??tbol pero sin perder la esencia de consumir la Api de Rick & Morty... As?? que encontr?? una forma divertida de juntar estos dos mundos, por un lado el universo de Rick & Morty y por otro el universo del f??tbol.
                            </TextoAbout>
                            
                        </div>
                        <ContenedorRow>
                            <ImagenLogo src={logo} alt="Logo Fifa & Morty"/>
                            <TextoAbout>
                            Es asi como nace "Fifa & Morty" mi primer mini Proyecto que une ambos mundos, permitiendonos hacer busquedas de los ic??nicos personajes de Rick & Morty pero tambi??n buscar entre un grupo de jugadores que almacen?? en una mini base de datos local. Para lograr esta mezcla la busqueda de personajes de Rick & Morty se hace mediante car??cteres num??ricos, as?? hacemos una petici??n a la Api y consumimos la informacion renderizandola satisfactoriamente. Por otro lado, tambi??n he creado una base de datos local manualmente, la cual no es mas que una estructura de datos que almacena la informacion de un grupo de jugadores. Para buscar jugadores en esta base de datos y al contrario que con nuestros personajes de Rick & Morty, usaremos simples cadenas de car??cteres.
                            </TextoAbout>
                        </ContenedorRow>
                            <TextoAbout>
                                Para lograr una mezcla entre estos mundos tenemos un fondo de pantalla que cambia dependiendo de si hay o no una Carta de Rick & Morty siendo visualizada en la pantalla principal, Cambiando a un fondo al puro estilo Halloween para crear un efecto muy divertido cuando estas cartas est??n presentes. Tambi??n se ha agregado la funci??n de para guardar las cartas que m??s te gusten como favoritas, no olvides consultarlas luego en la pesta??a Favorites. Como has podido notar, la p??gina es completamente Responsive, permitiendo ser visualizada tanto en dispositivos m??viles como en ordenadores de escritorio. 
                            </TextoAbout>
                            <TextoAbout>
                                Espero no haberte aburrido con mi discurso... ??No? Bueno, finalmente muchas gracias por tomarte el tiempo de visitar mi proyecto, puedes seguirme en mis redes sociales ????
                            </TextoAbout>
                            <SocialContainer>
                                <a href="https://www.linkedin.com/in/humbertojrguerra/" target="_blank">
                                    <IconSocial src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="Linkedin"/>
                                </a>
                                <a href="https://github.com/HumbertoJr10" target="_blank">
                                    <IconSocial src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/>
                                </a>
                                <a href="https://www.instagram.com/humberto_jr10/" target="_blank">
                                    <IconSocial src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram"/>
                                </a>
                                <a href="https://www.facebook.com/humberto.junior.733/" target="_blank">
                                    <IconSocial src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" />
                                </a>
                            </SocialContainer>
                    </Contenido>
                            
                </div>
            </Todo>
            )
        
}