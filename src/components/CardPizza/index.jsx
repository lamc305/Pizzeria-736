import './pizza.css'
import imageNotFound from '../../assets/image-not-found-icon.svg'
import { useContext } from 'react'
import { ReducerContext } from '../../contexto'
import { TYPES } from '../../action/actionReducer'
import { HiPlus, HiMinus } from 'react-icons/hi'
function CardPizza({ description, name, id, price }) {

  const { dispatch } = useContext(ReducerContext)

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })

  }

  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <div className='item__header--text'>
          <h2>{name}</h2>
        </div>
        <h3>{description}</h3>
        <h2 className='item__price'>${price}</h2>
        <img className='item__image' src={imageNotFound} alt={name} />
      </div>
      <div className='item__buttons'>
        <div>
          <button className='item__buttons--left'><HiMinus /></button>
          <button className='item__buttons--center'>0</button>
          <button className='item__buttons--left'><HiPlus /></button>
        </div>
        <button className='item__buttons--right' onClick={() => addToCart(id)}>Pedir</button>
      </div>
    </div>
  )
}

export default CardPizza