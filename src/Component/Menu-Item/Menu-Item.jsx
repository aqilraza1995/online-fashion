import React from 'react'
import '../Menu-Item/Menu-Item.scss'




const MenuItem =({title,imageUrl,size})=>(

    <div className={'menu-item'} >
        <div className="backgound-image" style={{backgroundImage: "url("+imageUrl+")" }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>

    // const MenuItem =(props)=>(
    // <div 
    //     className="menu-item"
    //     style={{backgroundImage: "url("+props.imageUrl+")" }}
    // >
    //     <div className="content">
    //         <h1 className="title">{props.titlle}</h1>
    //         <span className="subtitle">SHOP NOW</span>
    //     </div>
    // </div>


)
export default MenuItem