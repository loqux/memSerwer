import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  memCard: {
    height: 1000,
    'margin-left': '10%',
    width: "80%",
  }
})
);

const Mem = ({mem}) => {
  const classes = useStyles();
  return (
    <div>
     
      <Card className={classes.memCard}>
      <CardHeader title=  {mem.title}/>
        <CardMedia
        
          style={{
            height: 0,
            paddingTop: '56.25%',
          }}
          image={mem.img}
          title={mem.title}
          className="mem-img"
        />
        <CardActions>
          <Button size="small" color="primary">
            Upvote
          </Button>
          <p>{mem.upvotes}</p>
          <Button size="small" color="primary">
            Unvote
          </Button>
          <p>{mem.downvotes}</p>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mem;
