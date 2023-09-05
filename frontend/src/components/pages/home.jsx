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
                  <div>
                    <p>STOR SCENE</p>
                    <p>28. APRIL - 30 APRIL 2023</p>
                    
                    <h2>Fyrtøjet</h2>
                    <h3>BØRNEFORFATTER</h3>
                  </div>
                  
                  <img key={item.id} src={`http://localhost:4000/Assets/Images/events/medium/${item.image}`} alt="Billed" />
                </div>

                <div>
                  <div>
                    <img key={item.id} src={`http://localhost:4000/Assets/Images/events/medium/${item.image}`} alt="Billed" />
                    <p>STOR SCENE</p>
                    <p>2. JUNI - 6. JUNI 2023</p>
                    <h2>Downtown<br />Revyen</h2>
                    <h3>AF MICHEAL ENGLER</h3>
                    <button>LÆS MERE</button>
                    <button>KØB BILLET</button>
                  </div>

                  <div>
                    <img key={item.id} src={`http://localhost:4000/Assets/Images/events/medium/${item.image}`} alt="Billed" />
                    <p>FRISCENEN</p>
                    <p>13. MAJ - 17. MAJ 2023</p>
                    <h2>Mit<br />Nordkraft</h2>
                    <h3>MUSIKTEATER</h3>
                    <button>LÆS MERE</button>
                    <button>KØB BILLET</button>
                  </div>

                  <div>
                    <img key={item.id} src={`http://localhost:4000/Assets/Images/events/medium/${item.image}`} alt="Billed" />
                    <p>LILLE SCENE</p>
                    <p>23. DECEMBER - 25. DECEMBER 2022</p>
                    <h2>Det lever<br />i skyggerne</h2>
                    <h3>AF ENMAS GARCIA</h3>
                    <button>LÆS MERE</button>
                    <button>KØB BILLET</button>
                  </div>
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
