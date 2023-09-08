import React, { useEffect, useState } from 'react'
import { Header } from '../partials/header'
import { Footer } from '../partials/footer'
import axios from 'axios';

export const Skuespillere = () => {
  
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getdata = async () => {

      //Henter id, name, image of description fra vores url
      const url = `http://localhost:4000/actors?attributes=id, name, image,description`;
      const result = await axios.get(url)
      // console.log(result.data);
      setImages(result.data.slice(0, 2))
    }
    getdata()
  }, []);



  return (
    <div>
      <Header />  
      {images && images.map(item => {
            return (
              <>
                <h1>Skuespillere</h1>
                <div className='container'>
                  <img key={item.id} src={`http://localhost:4000/Assets/Images/actors/${item.image}`} alt="Billed" />
                  <h3 key={item.id} >{item.name}</h3>
                  <p key={item.id}>{item.description}</p>
                  <button>LÆS MERE</button>
                </div>
              </>
            )

          })}
      <Footer />
    </div>
  )
}
