import CSS from 'csstype';

type TypeButtonStyle = {
    whiteStyle: {},
    whiteStyleBorder: {},
    dark: {},
    darkBorder: {}
  }
  


const servicesChangeStyle = {
    changerStyle
}
export default servicesChangeStyle

function changerStyle(): {} {
    
  let styles: CSS.Properties = {}
  const buttonStyle: TypeButtonStyle = {
    whiteStyle: {
      background: "white",
      color: "black"
    },
    whiteStyleBorder: {
      background: "white",
      color: "black",
      border: '1px solid orange'
    },


    dark: {
      background: "black",
      color: "white"
    },
    darkBorder: {
      background: "black",
      color: "white",
      border: '1px solid red'
    },
  }


const defStyle: CSS.Properties  = {
    cursor: "pointer",
    borderRadius: "5vw",
    width: "5vw",
    height: "2vw",
    minWidth: "70px",
    minHeight: "30px"
    
}


  if(variant === "white") {
    if(!border) { styles= buttonStyle.whiteStyle}
    else {styles = buttonStyle.whiteStyleBorder}}
    else if(variant === "dark") {
      if(!border) { styles= buttonStyle.dark}
    else {styles = buttonStyle.darkBorder}}
    
return{
    {
        
    }
}
}