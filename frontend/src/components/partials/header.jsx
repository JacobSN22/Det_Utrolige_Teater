import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const Header = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            const url = "http://localhost:4000/imagelist";
            const result = await axios.get(url)
            // console.log(result.data);
            setImages(result.data.slice(0, 1))
        }
        getdata()
    }, []);

  return (
    <form action="">
                <div >
                    {images && images.map(item => {
                        return (
                            <>
                                <div className='container'>
                                    <img key={item.id} src={item.filename} alt="Billed" />
                                    <h2>VELKOMMEN TIL HOTEL OVERLOOK ONLINE</h2>
                                </div>
                                <section>
                                    <article>
                                        <News />
                                    </article>
                                    <article>
                                        <Rooms_frontpage />
                                    </article>


                                </section>
                            </>
                        )

                    })}
                </div>
    </form>
  )
}
