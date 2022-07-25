const CardStyle = {
    width:"100%", 
    display:"flex",
    borderRadius:5,
    backdropFilter:"blur(10px)"
}
const BadgeStyle = {
    ".MuiBadge-badge":{
        height:"auto",
        padding:"3px",
        top:"20px",
        right:{
            xs:"50%",
            sm:"40px"
        },
        width:"65px",
        textAlign:"center",
        backgroundColor:"#00000020",
        backdropFilter:"blur(10px)"
    },
    display:"flex",
    alignItems:"center",
    background:"#ffffff",
    padding:"15px",
    width:{
        xs:"80px",
        sm:"130px",
        md:"100px"},
    justifyContent:"center",
    overflow:"hidden",
}

const CardMediaStyle = {
    ".img":{objectFit:"cover"},
    width:{
        xs:"100px",
        md:"110px",
    },
    height:"auto",
}

const CardContentStyle = {
    flexGrow:"1",
    display:"flex",
    flexDirection:"column",
    gap:1
}

export {CardStyle, BadgeStyle, CardMediaStyle, CardContentStyle}