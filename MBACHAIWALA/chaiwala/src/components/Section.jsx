import React from 'react'

const Section = ({h3, text, hasbtn=true, btnTxt, imgSrc, imgSize="70%",backgroundColor,headingColor,textColor,btnBgColor,btnColor, }) => {
  
  return (
  <section className="section"
  style={{
    backgroundColor,
  }}>
<div>
    <h3 
    style={{color: headingColor,}}>
        {h3}
        </h3>
    <p 
    style={{color: textColor,}}>
        {text}
        </p>

{hasbtn && (<button
style={{
color:btnColor,
backgroundColor:btnBgColor,

}}
>
    {btnTxt}
    </button>
)}

<div>
    <img src={imgSrc} alt="ImgSrc"
    style={{
        width:imgSize,
    }}
    
    />
</div>

</div>
  </section>
  );
};

export default Section;