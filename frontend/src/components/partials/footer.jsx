import React from 'react'
import { Footerstyle } from './footer.style'

export const Footer = () => {
  return (
    <Footerstyle>
      <footer>
        <div>
          <h4>ADRESSE</h4>
          <p>Det utrolige teater</p>
          <p>Havnegade 901</p>
          <p>9000 Aalborg</p>
          <p>EAN 5798003279845</p>
          <p>CVR 1001 0012</p>
          <p>Find vej på kortet</p>
        </div>

        <div>
          <h4>BILLETSERVICE</h4>
          <p>Se åbningstider</p>
          <p>Billettelefon +45 96 31 80 80</p>
          <p>billet@dut.dk</p>

          <h4>ADMINISTRATION</h4>
          <p>Telefon +45 96 31 80 90</p>
          <p>adm@dut.dk</p>
        </div>

        <div>
          <h4>PRAKTISK INFO</h4>
          <p>Kontakt</p>
          <p>Kom trygt i teatret</p>
          <p>Presseside</p>
          <p>Skoleforestillinger</p>
          <p>Teatercaféen</p>
          <p>Handelsbetingelser</p>
        </div>

        <div>
          icons <br />
          icons <br />
          icons <br />
        </div>
      </footer>
    </Footerstyle>
  )
}
