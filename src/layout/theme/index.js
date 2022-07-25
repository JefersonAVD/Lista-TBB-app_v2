import { createTheme, responsiveFontSizes } from "@mui/material/styles";


let MyTheme = createTheme({
    palette:{
        primary:{main:"#ffffff30"},
        secondary:{main:"#000000"},
        text:{main:"#414141"},
        background:{
            paper:"#ffffff30",
        },
    },
    typography:{
        fontSize:16,
        htmlFontSize:18,
        fontFamily:"'Roboto','Helvetica','sans-serif'",
        h1:{
            fontWeight:900,
            fontSize:"2rem",
        },
        h2:{
            fontWeight:800,
            fontSize:"1.3rem",
            lineHeight:0.9,
            letterSpacing:0,
            color:"#fff"
        },
        body1:{
            fontWeight:400,
            fontSize:14,
            lineHeight: 1,
            color:"#fff"
        }
    },
    breakpoints:{
        values:{
            xs:0,
            sm:350,
            md:700,
            lg:1000,
            xl:1200,
        }
    },
    
})


MyTheme = responsiveFontSizes(MyTheme);
export default MyTheme;