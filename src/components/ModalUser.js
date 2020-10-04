import React, {useState, useEffect} from 'react'
import {ModalStyler} from './ModalStyler'
import screenSize from '../responsive/screenSize'
import {UserButton} from './common/UserButton'
import {CircleIconButtons} from './common/CircleIconButtons'
import {ContainersStructure} from "./ContainersStructure";
import {Button} from './common/Button'
import {ModalExitWithSeperateShadedDiv} from './common/ModalExitWithSeperateShadedDiv'

import generalAlert from './buttonsAlert/generalAlert'
import {addEventListenerAttacher} from "./addEventListenerAttacher";
import {v1 as uuidv1} from "uuid";
import ModalUserCss from './ModalUserCss.css'

export const ModalUser = (props) => {
    const screenSizeObj= new screenSize()
    const ContainersStructureObj= new ContainersStructure()
 
 
    const ModalStylerObj= new ModalStyler()
    const generalAlertObj= new generalAlert()
    const addEventListenerAttacherObj= new addEventListenerAttacher()



    // React.useEffect(() => { })
    
      
   

    return (
        <div id={"userModal"} class=" displayNone ">

        <ModalExitWithSeperateShadedDiv id={"userModal"} toggledClass={"user-modal"}
        closeClassTransition={"width0"}></ModalExitWithSeperateShadedDiv>
        

        <div id="Modal-user-top">
    <div id='user-welcome'>
<UserButton name="Saar"></UserButton>
<Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד מודעה חדשה")}
id="newAdId-UserModal" class3="greenButton">  
פרסום מודעה
    </Button> 

</div>
<div   class="flexRowSpaceAround">

<Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד השוואת רכבים")}
id="">  
<div>&#8596;</div>
<div>השוואת רכבים</div>

     </Button> 
    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד חיפושים אחרונים")}
id="">  
<div>&#8596;</div>
<div>עמוד חיפושים אחרונים  </div>
  </Button>
    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד מודעות שמורות")}
id="">  
<div>&#8596;</div>
<div>מודעות שמורות  </div>
    </Button>
    <Button class1="button" class2="Ad-hover" 
callBack={()=>generalAlertObj.buttonClicked("עמוד התראות שלי")}
id="">  
<div>&#8596;</div>
<div>התראות שלי  </div>
    </Button>
</div>
</div>

<div class="flexColumn alignItems modalUserSearchTopics" id='modalUserSearchTopics'>
<div id="modalUserMainSearch" class="flexColumn modalUserSearchContainer">
<h1 class=" modalUserSearchHeadline">
מה תרצו לחפש?
    </h1>

    <Button class1="button" class2=" " 
callBack={()=>generalAlertObj.buttonClicked('עמוד נדל"ן')}
id=" ">  
נדל"ן
 </Button> 

 <Button class1="button" class2=" " 
 callBack={()=>generalAlertObj.buttonClicked('עמוד רכב')}
 id=" ">  
 רכב
  </Button> 
  
  </div>
  <div id="modalUserExtraSearch" class="flexColumn modalUserSearchContainer">
 
  <h1 class="modalUserSearchHeadline">
קטגוריות נוספות      </h1>
<Button class1="button" class2=" " 
callBack={()=>generalAlertObj.buttonClicked('עמוד מחירון רכב')}
id=" ">  
מחירון רכב
 </Button> 
 <Button class1="button" class2=" " 
 callBack={()=>generalAlertObj.buttonClicked('עמוד כונס רכב')}
 id=" ">  
 כונס רכב
  </Button>
  <Button class1="button" class2=" " 
  callBack={()=>generalAlertObj.buttonClicked('עמוד תיירות ונופש')}
  id=" ">  
  תיירות ונופש
   </Button>
   <Button class1="button" class2=" " 
  callBack={()=>generalAlertObj.buttonClicked('עמוד בעלי מקצוע')}
  id=" ">  
  בעלי מקצוע
   </Button> 
   <Button class1="button" class2=" " 
  callBack={()=>generalAlertObj.buttonClicked('עמוד לימודים')}
  id=" ">  
  לימודים
   </Button>   
   <Button class1="button" class2=" " 
  callBack={()=>generalAlertObj.buttonClicked('עמוד מדד הנדל"ן')}
  id=" ">  
  מדד הנדל"ן
   </Button> 
   <Button class1="button" class2=" " 
   callBack={()=>generalAlertObj.buttonClicked('עמוד מגזין תלפיות הייטק')}
   id=" ">  
מגזין תלפיות הייטק    </Button>
</div>
 
</div>
<div id='modalUserFooter'>
{
    [{icon:"&#9998;",text:'תקנון',
},
{icon:"&#63;",text:'מענה לשאלות',
},
 
{icon:"&#x260E;",text:'צור קשר',
}].map((value,index)=>{
       return <CircleIconButtons background={"rgb(245, 241, 191)"} id={uuidv1()} icon={value.icon} text={value.text}></CircleIconButtons>
    })

}
    </div>


        </div>
    )
}
