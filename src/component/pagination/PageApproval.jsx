import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageApproval({pages=2,setPage}) {
    const numberOfPages = []
    //setNumber pages
    for(let i=1; i<= pages; i++){
        numberOfPages.push(i)
    }    

    //set active 
    const [currentButtons,setCurrenButtons] = useState(1);

    // array of buttons what we see on the page
    const [arrOfCurrButtons,setArrOfCurrButtons] = useState([]);


    useEffect(() => async () =>{
        let tempNumberOfPages = [...arrOfCurrButtons];
        let dotsInitial = '...';
        if(numberOfPages.length < 9) {
            tempNumberOfPages = numberOfPages;
        } else if(currentButtons >=1 && currentButtons <= 3) {
            tempNumberOfPages = [1,2,3,4, dotsInitial, numberOfPages.length]
        }
        setArrOfCurrButtons(tempNumberOfPages);
        setPage(currentButtons);
    },[currentButtons]);



  return (
    <Pagination>
      <Pagination.Prev
      className={`${currentButtons === 1 ?  'disabled' : ''}`}
      onClick={() => setCurrenButtons(prev => prev<=1 ? prev : prev-1)}
       />
      {arrOfCurrButtons.map(((i,key) =>{
        return(
        <Pagination.Item
        key={key}
        className={`${currentButtons === i ? 'active' : ''}`}
        onClick={()=> setCurrenButtons(i)}
        >{i}</Pagination.Item>
        )
      }))
      }
      <Pagination.Next 
      className={`${currentButtons === numberOfPages.length ? 'disabled' : ''}`}
      onClick={()=>setCurrenButtons(prev => prev >= numberOfPages.length ? prev : prev+1)}
      />
    </Pagination>
 
  )
}

export default PageApproval