import React, { useEffect, useState } from 'react'
import { Header } from '../partials/header'
import { Footer } from '../partials/footer'
import axios from 'axios';

export const Home = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const url = `http://localhost:4000/events?attributes=id,title,image`;
      const result = await axios.get(url)
      // console.log(result.data);
      setImages(result.data.slice(0, 1))
      console.log(result.data);
    }
    getdata()
  }, []);


  return (
    <div>Home
      <Header />
      <section>
        <div >
          {images && images.map(item => {
            return (
              <>
                <div className='container'>
                  <img key={item.id} src={`http://localhost:4000/Assets/Images/events/medium/${item.image}`} alt="Billed" />
                </div>
              </>
            )

          })}
        </div>

      </section>
      <Footer />
    </div>
  )
}
