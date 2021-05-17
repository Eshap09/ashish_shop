import React from 'react'
import './Report.css'

function Report({item,diff,price,weight}) {
    return (
        <div className="report">
            <p>
               {item} {weight ? `: ${weight}`: ''}
            </p>
            <p>{diff}</p>
            <p>{((price+diff+250)*1.18+2500)}</p>
        </div>
    )
}

export default Report
