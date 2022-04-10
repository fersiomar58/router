import { useParams } from 'react-router-dom'

export const Info = ({product}) => {
  const   {id}=useParams()

 const element=product.find(el=>el.id===id)
 console.log(element);



  return (
    <div className='window'>
      {/* <img src={element.imgSrc} alt="" />
      <h1>{element.name}</h1> */}
    </div>
  )
}
