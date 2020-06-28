import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor: '#d6d0d1',
    },
  });

export const Box = (props) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root} >
                <CardActionArea>
                    
                    <CardContent>
                    <Typography  color="textSecondary" variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="h3" gutterBottom component="h4">
                    {props.cases}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.source}
                    </Typography>
                    </CardContent>
                    
                </CardActionArea>
            </Card>
        </>
    )
}
