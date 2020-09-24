import React from 'react';
import './arrow.styles.scss';
 
function Arrow({label}) {
 
const divStyle = {
   fill:'white',
   strokeWidth:3,
   borderRadius: '25px'
};
 
   return (
       <div style={divStyle}>
          
       <svg width="100" height="20">
 
       <rect width="90" height="20" />
       <text x="0" y="15" fill="black">{label}</text>
 
       Sorry, your browser does not support inline SVG. 
       </svg>
 
       </div>
   )
}
 
export default Arrow