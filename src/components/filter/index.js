import { Opacity } from "@mui/icons-material";
import { Grid, MenuItem, Select, TextField, ToggleButton, InputLabel, FormControl, ToggleButtonGroup} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { inputStyle, selectStyle } from "./style";


const Filter = ({data,btn,setBtn,name,changeName,inputValue,setInputValue}) =>{
    const [, setParams] = useSearchParams();
    const [search,setSearch] = useState({});
    

    const set = new Set();
    const cat =  data.map((item) => item = item.category).filter(
        item=>{
            const dup = set.has(item.name);
            set.add(item.name);
            return !dup;
    });

    const changeSearch = (evt,btn,select = false,input=false)=>{
        const obj = {};
        setBtn(btn)
        obj[evt.target.name]= evt.target.value;
        setSearch({...search, ...obj});
        if(input)setInputValue(evt.target.value)
        if(select) changeName(evt.target.value)
    }

    useEffect(()=>{
        setParams(search)
    },[search])
    
    return(
        <Grid xs={12} item display="flex" flexWrap={"wrap"} gap={1} justifyContent="center">
            <Grid xs={12} md={3.5} px={0.7} item>
                <TextField 
                    size="small" 
                    fullWidth 
                    value={inputValue} 
                    onChange={(evt)=>changeSearch(evt,false,false,true)} 
                    name="name" 
                    placeholder="Buscar pelo nome..."
                    id="filterText"
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline":{border:"1px solid #fff"},
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{border:"1px solid #fff"},
                        "& #filterText::placeholder":{fontWeight:800,color:"#ffffff",}
                }}    
                />
            </Grid>
            <Grid xs={12} md={3.5} px={0.7} item>
                <FormControl 
                    size="small" 
                    fullWidth
                    sx={inputStyle}
                >
                    <InputLabel id="nameLabel">selecione uma categoria</InputLabel>
                    <Select 
                        onChange={(evt)=> 
                        changeSearch(evt,false,true)} 
                        label="selecione uma categoria" 
                        value={name} labelId="nameLabel" 
                        name="category"
                    >
                                <MenuItem sx={selectStyle} 
                                    value=""
                                    >
                                        <em>Nenhuma</em>
                                    </MenuItem>
                        {cat.map(element=>{
                            return(
                                <MenuItem sx={selectStyle} value={element.name} key={element._id}>{element.name}</MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid xs={12} md={3.5} px={0.7} item>
                <ToggleButtonGroup size="small" 
                    fullWidth onChange={changeSearch} 
                    value={btn} 
                    aria-label="gender" 
                    exclusive
                    sx={{
                        border:"none",
                        "& .MuiButtonBase-root":{
                            color:"#fff",
                            border:"1px solid #fff",
                            "&.Mui-selected":{
                                color:"#fff",
                                background:"#00000090",
                                textDecoration:"underline"
                            },
                        },
                    }}
                >
                    <ToggleButton name="gender" value="">Todos</ToggleButton>
                    <ToggleButton name="gender" value="women">Women</ToggleButton>
                    <ToggleButton name="gender" value="men">Men</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );
}

export default Filter;