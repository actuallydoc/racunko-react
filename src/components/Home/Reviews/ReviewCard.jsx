import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
const  ReviewCard =({userFull, Content, Image, job})=> {
    const [checked , setChecked] = useState(false);
    useEffect(() => {
        console.log("NewsCard");
        setChecked(true);
    }, [])
    return (
        <Slide direction="up" in={checked}>
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="140"
                image={Image}
                alt="Client"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {userFull}
                </Typography>
                <Typography gutterBottom variant="bold" component="div">
                    {job}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Content}
                </Typography>
            </CardContent>

        </Card>
        </Slide>
    );
}


export default ReviewCard;