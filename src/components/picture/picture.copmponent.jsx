import React from 'react';
import '../picture/picture.styles.scss';
 
function MenuImage({menuInfo}) {
   return (
       <div>
           <img className="responsive" 
           height="400px"
           width="400px"
           
           src={menuInfo.imageUrl}></img>
       </div>
   )
}
 
export default MenuImage