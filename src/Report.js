import React from 'react'
import './Report.css'

function Report({item,diff,price}) {
    return (
        <div className="report">
            <p>{item}</p>
            <p>{diff}</p>
            <p>{((price+diff+250)*1.18+2500)}</p>
        </div>
    )
}

export default Report
