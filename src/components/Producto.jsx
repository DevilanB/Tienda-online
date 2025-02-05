import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  FavImg  from '../images/corazonborde.png'
import NoFavImg from '../images/corazon.webp'

export default function Producto({producto,agregarAFavoritos,eliminarDeFavoritos}) {

const[favorito,setFavorito] = useState(false)
 
function handleClick(){
  console.log(producto)
 if(favorito){
   eliminarDeFavoritos(producto)
   setFavorito(false)
 }else{
   agregarAFavoritos(producto)
   setFavorito(true)
 }

}
  

return (
    <div className="producto">
        <Link to= {`/producto/${producto.id}`} ><img src={producto.image} alt=""/></Link>
        <div className="info">
            <p>{producto.title}</p>
            <mark>${producto.price}</mark>
        </div>
        { favorito ?
        <img className='fav-icon' onClick={handleClick} src={NoFavImg} alt=''/>
        :
        <img className='fav-icon' onClick={handleClick} src={FavImg} alt=''/>
         }
    </div>
  )
}
