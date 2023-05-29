import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <>
         <Container className=' p-0'>
             <div className='wrapper-headnav'>
               <h4 className='title-head mx-2'>{this.props.heading}</h4>
            </div>
          </Container>
      </>
    )
  }
}


// function Header() {
//   return (
//     <>
//     <Container className='mt-3 p-0'>
//         <div className='wrapper-headnav'>
//             <h4 className='title-head mx-2'>PENDAFTARAN USER BACKUP</h4>
//         </div>
//     </Container>
//     </>
//   )
// }

// export default Header
