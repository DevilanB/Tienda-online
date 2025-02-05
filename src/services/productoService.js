export async function obtenerProductos(){
  const response = await fetch('https://fakestoreapi.com/products')
  const data = response.json()
  return data
}

export async function obtenerProductoPorId(id){
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = response.json()
  return data
}