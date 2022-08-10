import React from 'react'

const button = ({name,msg}) => {
    
    const msg1=()=>{
        alert(`${msg} from ${name}`)
    }
    return (
        <div>
            <button onClick={msg1} >{name}</button>
        </div>
    )
}
export default button;