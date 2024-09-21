import React, { useState } from 'react'

const SideMenu = ({data}) => {
    
    let defaultChildren = data[0].children;
    const [children,setChildren] = useState(defaultChildren)
    
    const handleChange = (itemChildren) =>{
        setChildren(itemChildren)
    }
        
    return (    
        <div className='side-menu'>
            {
                data ?
                    data.map(item => {
                        return <>
                            <p id='item' onClick={() => handleChange(item.children)}>
                            <span>{item.title}</span>
                            {
                                item.children === children ? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={20} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg> 
                                :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={20} stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>                             
                            }
                            </p>
                            {
                                children && children === item.children?
                                children.map(childer =>{
                                    return <p id='childer'>{childer}</p>
                                })
                                :null
                            }
                        </> 
                    })
                : null
            }

        </div>
  )
}

export default SideMenu
