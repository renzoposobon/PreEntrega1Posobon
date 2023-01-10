import { collection, addDoc, getFirestore } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutList from './CheckoutList'
import { useCart } from './context/CartContext'

const Checkout = () => {

  const { items } = useCart()

  const makeOrder = () => {
    const user = {name: "Renzo", phone: 2612054958, email: "renzop95@hotmail.com"}
    const order = {
      buyer: user,
      items: items,
    }
    console.log("Levantando orden:", order);
    saveOrder(order)
  }

  const saveOrder = async ( order ) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const { id } = await addDoc(orderCollection, order)
    const orden = `Nueva orden: ${id}`
    alert(orden);
    console.log(orden);
  }

  return (
    <div className='check ml-10 font h-auto'>
        <div className='box-1'>
            <h1 className="text-3xl font-bold m-10 max-w-28">Checkout</h1>
            <form className='w-5/6  mb-14 h-auto'>
              <label className='m-10'>Nombre</label>
              <input type="text" placeholder="Nombre" className="input input-bordered w-full max-w-xs ml-10 mb-5" />

              <label className='m-10'>Apellido</label>
              <input type="text" placeholder="Apellido" className="input input-bordered w-full max-w-xs ml-10 mb-5" />

              <label className='m-10'>Teléfono</label>
              <input type="text" placeholder="Teléfono" className="input input-bordered w-full max-w-xs ml-10 mb-5" />

              <label className='m-10'>Email</label>
              <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs ml-10 mb-5" />
              
              <div className="form-control ml-10 mt-3">
                  <div className="input-group">
                      <select className="select select-bordered">
                          <option value="0" disabled selected>--Tipo de envío--</option>
                          <option value="1">Retiro en local</option>
                          <option value="2">Envío a domocilio</option>
                      </select>
                  </div>
              </div>

              <button className="btn btn-block bg-black ml-10 mt-10" onClick={makeOrder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-2 mt-2" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                </svg>
                
                <p>
                  PAGAR
                </p> 
              </button>
              <Link to='/cart'>
                <button className="btn-block bg-white ml-10 mt-5 flex flex-row justify-center items-center hover:bg-gray-500 h-12 hover:text-white hover:rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.021 11.9 3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                    <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"/>
                  </svg>
                  <p className='ml-2'>Volver</p>
                </button>
              </Link>
              
          </form>
        </div>
        
        <CheckoutList />
    </div>
  )
}

export default Checkout