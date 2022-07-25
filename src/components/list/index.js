import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, Badge, CardMedia, CardContent, Typography,Box,Grid, Button} from "@mui/material";
import {BadgeStyle, CardContentStyle, CardMediaStyle, CardStyle} from "./style";

const List = ({data}) =>{
    const [params] = useSearchParams();
    const [list, newList] = useState(data);

    const filterString = (data,variable) => {
        if(!variable)return data;
        const filteredData = data.filter(item=> item.name.toLowerCase().includes(variable.toLowerCase()));
        return filteredData;
    }

    const filterCat = (data)=>{
        if(!params.get('category'))return data;
        const filteredData = data.filter(item=>item.category.name === params.get('category'));
        return filteredData;
    }

    useEffect(()=>{
        let filteredData = filterCat(data);
        filteredData = filterString(filteredData,params.get('name'));
        filteredData = filterString(filteredData,params.get('gender'));
        newList(filteredData);
    },[params]);

    return(
        <Grid container justifyContent="center" spacing={2} 
        >
            {list.map(item => {
                return(
                    <Grid container xs={12} md={6} lg={4} item key={item.id}>
                        <Card sx={CardStyle}>
                            <Badge sx={BadgeStyle} overlap="circular" badgeContent={item.category.name}>
                                <CardMedia sx={CardMediaStyle}
                                 component="img" 
                                 image={item.images[0].asset.url} 
                                 alt={item.images[0].alt}/>   
                            </Badge>
                            <CardContent sx={CardContentStyle}>
                                <Typography  variant="h2">{item.name}</Typography>
                                <Typography variant="body1">{item.shortDescription}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}


export default List;