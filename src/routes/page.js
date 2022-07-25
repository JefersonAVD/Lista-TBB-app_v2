import { useContext, useState } from "react";
import Filter from "../components/filter"
import List from "../components/list";
import { dataContext } from "../App";
import { Grid, Typography } from "@mui/material";
import FilterMenu from "../layout/header";
import Body from "../layout/body";

const ListPage = ()=>{
    const [btn,setBtn] = useState();
    const [name,changeName] = useState("");
    const [inputValue,setInputValue] = useState("");

    const data = useContext(dataContext);
    return(
        <Grid rowGap={2} container>
            <Grid xs={12} item>
                <Typography variant="h1">Listagem de items - app_v2</Typography>
            </Grid>
            <FilterMenu>
                    <Filter 
                    data={data} 
                    btn={btn} 
                    setBtn={setBtn} 
                    name={name}
                    changeName={changeName}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    />
            </FilterMenu>
            <Body>
                <List data={data}/>
            </Body>    
        </Grid>
    );
}

export default ListPage;