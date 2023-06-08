import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    return (
      <>
        
             <div className='wrapper-headnav'>
               <h4 className='title-head mx-2'>{this.props.heading}</h4>
            </div>
          
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
