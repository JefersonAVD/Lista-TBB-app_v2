import MyTheme from "../../layout/theme"

const selectStyle = {
    backdropFilter:"blur(300px)",
    backgroundColor:"#ffffff",
    color:"#000",
    transition:"0.1s all ease-in-out",
    "&:hover":{
        background:"#aaaaaa90",
        color:"#fff"
    },
    "&.Mui-selected":{
        color:"#fff"
    }
}
const inputStyle = {
    "& .MuiSvgIcon-root,.MuiSelect-select":{color:"#fff"},
    "& .MuiInputBase-root:hover  .MuiOutlinedInput-notchedOutline":{borderColor:"#fff"},
    "& .MuiInputLabel-root.Mui-focused":{
        color:"#fff",
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"#fff"
        }
    },
    "& .MuiOutlinedInput-notchedOutline":{
        borderColor:"#fff"
    },
    
}

export {selectStyle,inputStyle}