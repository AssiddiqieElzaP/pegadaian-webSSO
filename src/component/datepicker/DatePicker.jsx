import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
function DatePickerr() {
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();


    function onChangeHandler(value) {
        setDateStart(value[0]);
        setDateEnd(value[1]);
    }
  return (
   <>
     <DatePicker
        id="dateStartEnd"
        selectsRange={true}
        minDate={new Date()}
        startDate={dateStart}
        endDate={dateEnd}
        onChange={onChangeHandler}
        dateFormat="dd MMM yyyy"
        className={'form-control form-control-sm'}
        showDisabledMonthNavigation
    />
   </>
  )
}

export default DatePickerr