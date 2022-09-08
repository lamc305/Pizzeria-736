import CardPizza from "../CardPizza"
import '../ListOfBebidas/listOfItems.css'

function ListOfPizza({ state, name }) {

  return (
    <>
      {state && <>
        {name &&
          <div className="ListOfItems__header">
            <h2 id={name}>{name}</h2>
            <div></div>
          </div>
        }
        <section className='producto'>
          {state.map(({ description, name, id, price, img }) => (
            <CardPizza
              description={description}
              id={id}
              key={id}
              name={name}
              price={price}
              img={img}
            />
          ))}
        </section>
      </>}
    </>
  )
}

export default ListOfPizza