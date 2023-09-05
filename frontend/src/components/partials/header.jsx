import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const Header = () => {

  return (
    <header>
        <div>
            <h1>DET<br /><span>Utrolige</span><br />TEATER</h1>
        </div>

        <div>
            <input type="search" />
        </div>

        <form action="">
            <li><a href="/">FORSIDE</a></li>
            <li><a href="/events">FORESTILLINGER & EVENTS</a></li>
            <li><a href="/actors">SKUESPILLERE</a></li>
            <li><a href="">LOGIN</a></li>
        </form>
    </header>
  )
}
