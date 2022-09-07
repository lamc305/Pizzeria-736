import CardEmpanada from "../CardEmpanada"
import '../ListOfBebidas/listOfItems.css'

function ListOfEmpanadas({ state, name }) {

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
          {state.map(({ description, name, id, price }) => (
            <CardEmpanada
              description={description}
              id={id}
              key={id}
              name={name}
              price={price}
            />
          ))}
        </section>
      </>}
    </>
  )
}

export default ListOfEmpanadas