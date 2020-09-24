import React from 'react'

const Content = ({lang, workSamples}) => {
    return (
        <div>
   
            <h2> {lang === 'en' ? workSamples.sample.en : workSamples.sample.es} </h2>
          
           <p>
           {lang === 'en' ? workSamples.sampleDescription.en : workSamples.sampleDescription.es}
           </p>
        </div>
    )
}

export default Content



 
