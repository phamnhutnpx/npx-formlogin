import React, { useState } from 'react'
import moment from 'moment'
const useStateDemo = () => {
    const arrDate = {
        date: new Date()
    }
    // console.log(arrDate.date);
    const [dateDemo, setDateDemo] = useState(arrDate.date);

    const handleChangeDate = (e) => {
        // console.log(e.target.value);
        // const changeDate = arrDate.date;
        setDateDemo(() => {
            return arrDate.date = e.target.value;
        })

    }
    return (
        <>
            <div>useStateDemo</div>
            {/* Thay doi date */}
            <input
                type="date"
                value={dateDemo}
                onChange={handleChangeDate}
            />
            <div>
                My date is: {moment(dateDemo).format('LL')}
            </div>
        </>
    )
}

export default useStateDemo