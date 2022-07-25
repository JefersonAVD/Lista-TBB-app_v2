const selectStyle = {
    backdropFilter:"blur(10px)",
    backgroundColor:"#ffffff",
    "&:hover":{
        background:"#aaaaaa"
    },
    "&.Mui-selected":{
        color:"#fff"
    }
}
const inputStyle = {
    "& .MuiSvgIcon-root, #nameLabel,.MuiSelect-select":{color:"#fff"},
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