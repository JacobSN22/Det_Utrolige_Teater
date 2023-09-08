import React, { useEffect, useState } from 'react'
import { Header } from '../../partials/header'
import { Footer } from '../../partials/footer'
import axios from 'axios';
import { Login } from '../../partials/login';

export const Events = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const url = `http://localhost:4000/events?attributes=id,title,image`;
      const result = await axios.get(url)
      // console.log(result.data);
      setImages(result.data.slice(0, 1))
    }
    getdata()
  }, []);

  return (

    <div>
      <Header />
      <Login />
      <div >
        {images && images.map(item => {
          return (
            <>
              <div className='container'>
              <div className='headline'>
                    <div className='headline_text'>
                      <p>STOR SCENE</p>
                      <p>28. APRIL - 30 APRIL 2023</p>

                      <h2>Fyrtøjet</h2>
                      <h3>BØRNEFORFATTER</h3>
                    </div>
                    <div className='img_fit'>
                      <img key={item.id} src={`http://localhost:4000/Assets/Images/events/medium/${item.image}`} alt="Billed" />
                    </div>
                  </div>

              </div>
            </>
          )

        })}
      </div>
      <Footer />
    </div>
  )
}
