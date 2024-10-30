import React from 'react'
import { explore } from '../../../assets/assets'
import './Explore.css'

const Explore = () => {
  return (
    <div className='explore'>
        <div className='exploreContainer'>
            <h3>Explore Skillup</h3>
                <div className='exploreContent'>
                    {explore.map((item, index)=>{
                        return(
                            <div className='exploreItem' key={index}>
                                <div className='color'></div>{item.course}
                            </div>
                        )
                    })}
                </div>
        </div>
    </div>
  )
}

export default Explore