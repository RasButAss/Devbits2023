import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import Navbar from '../Landing/Componenets/Navbar/Navbar'

const Details = () => {
  const { id } = useParams()
  return (
    <div className='details-main-div'>
      <Navbar />
      <div className='company-details-content'>
        <div className='company-details-header'>
          <div className='company-details-heading'>
            <h1>Company wow wow</h1>
          </div>
        </div>
        <div className='company-overview'>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque magna accumsan felis porta faucibus. Cras a condimentum massa, nec sagittis massa. Phasellus egestas elit mauris, eget commodo risus rutrum eget. Duis non justo a dolor mollis sollicitudin. Nullam enim turpis, ornare sed pharetra ut, sodales ac est. Cras non metus in ante gravida hendrerit nec nec ante. Cras gravida metus ac lacus eleifend, ut dictum justo scelerisque. In ac nisi ac urna aliquet imperdiet. Duis vel lacinia felis. Fusce convallis rutrum orci id aliquet. Ut velit ligula, aliquam nec odio et, vulputate hendrerit enim. Nullam mollis felis vitae ante.</p>
        </div>
        <div className='company-quick-overview'>
          <div>Sector : </div>
          <div>Industry : </div>
          <div>Exchange : </div>
          <div></div>
        </div>
        <div className='company-key-stats'>
          <h2>Key Stats</h2>
          <div>Market capitalization : </div>
          <div>Price to Earning Ratio : </div>
          <div>Dividends Yield : </div>
          <div>Basic EPS : </div>
          <div>Dividend Per share : </div>
          <div>Return on Assets : </div>
        </div>
      </div>
    </div>
  )
}

export default Details