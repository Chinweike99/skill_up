import React, { useState } from 'react'
import './Benefits.css'
import { assets, benefitsContent, benefitsContent2 } from '../../../assets/assets'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Benefits = () => {

    const [details, setDetails] = useState(null)
    const [info, setInfo] = useState(null)

  return (
    <div className='benefitsMain'>
        <h3>Benefits of Joining <span>skillUp</span></h3>
        <div className='Benefits'>
        
        <div className='benefitsImg'>
            <img src={assets.Benefits} alt="" />
        </div>
        <div className='benefitsOptions'>
            <div className='benefitSelect'>
                <div className='option'>
                    {
                        benefitsContent.map((items, index)=>{
                            return(
                                <div className='positionSet' key={index}>
                                    <div className='buttons' onClick={()=>setDetails(details === index ? null : index)}>
                                        <button>{items.title}</button>
                                        <KeyboardArrowDownIcon />
                                    </div>

                                    <p style={{display: details === index ? "block" : "none" }}>{items.details}</p>

                                </div>
                            )
                        })
                    }
                </div>
                
                <div className='option'>
                    {
                        benefitsContent2.map((items, index)=>{
                            return(
                                <div key={index} className='positionSet'>
                                    <div className='buttons' onClick={()=>setInfo(info === index ? null : index)}>
                                        <button>{items.title}</button>
                                        <KeyboardArrowDownIcon />
                                    </div>

                                    <p style={{display: info === index ? "block" : "none" }}>{items.details}</p>

                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Benefits