import React, {useEffect, useState} from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
const NewsCard = ({date, content, title, link}) => {
    const [checked , setChecked] = useState(false);
    useEffect(() => {
        console.log("NewsCard");
        setChecked(true);
        }, [])

    return (
        <div>
            <div>
                <Slide direction="up" in={checked}>
                    <Card variant="outlined" sx={{ maxWidth: 275}}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {date}
                            </Typography>
                            <Typography variant="body2">
                                {content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={link}>Github commit</Button>
                        </CardActions>
                    </Card>
                </Slide>

            </div>
        </div>
    )
    }
    
;

export default NewsCard;