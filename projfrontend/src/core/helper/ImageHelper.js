import React from 'react'

 const Imagehelper = ({product}) => {
     const imageurl = product ? product.image 
     : `https://www.pexels.com/photo/wood-light-dawn-table-7525670/`
    return (
        <div>
            <div className="rounded border border-success p-2">
                <img src={imageurl} style={{maxHeight:"100%", maxWidth:"100%" }} 
                className="mb-3 rounded"
                alt="" />
            </div>
        </div>
    )
}


export default Imagehelper