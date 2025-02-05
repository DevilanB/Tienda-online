import React from 'react'
import Producto from './Producto'
import useProducto from '../hooks/useProducto'


export default function Productos({productos,agregarAFavoritos,eliminarDeFavoritos}) {

 

  return (
    <div className='productos'>
      {
      productos.length > 0 ? productos.map(producto => <Producto key={producto.id} producto={producto} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>)
      : <p>No hay productos en la lista</p>
    }
    </div>
  )
}
