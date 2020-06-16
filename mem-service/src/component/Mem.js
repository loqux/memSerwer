import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ArrowUpwardRounded,
  ArrowDownwardRounded,
  Star,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  memCard: {
    "margin-left": "20%",
    "margin-top": "5%",
    "margin-bottom": "5%",
    width: "60%",
  },
  memTitle: {
    margin: "5%",
  },
}));

const Mem = ({ mem, onUpvoteClick, onDownvoteClick, onMarkStar }) => {
  const classes = useStyles();
  //   const [favorite, setFavorite] = useState(false);

  //   const markAsFavorite=(mem) =>{
  // onMarkStar(mem);
  // setFavorite(true);
  //   }
  return (
    <Card className={classes.memCard}>
      <CardContent className={classes.memTitle}>
        <Typography variant="h5">{mem.title}</Typography>
        <img
          src={mem.img}
          alt={mem.title}
          style={{ width: "70%", marginTop: "5%" }}
        />
      </CardContent>
      <CardActions className={classes.memAction}>
        <Grid container>
          <Grid item sm>
            <IconButton
              onClick={() => onMarkStar(mem)}
              color={mem.star ? "primary" : "default"}
            >
              <Star />
            </IconButton>
          </Grid>
          <Grid item sm>
            <Button
              name="upvote"
              variant="contained"
              style={{
                width: "80%",
              }}
              onClick={() => onUpvoteClick(mem)}
            >
              <ArrowUpwardRounded />
              {mem.upvotes}
            </Button>
          </Grid>
          <Grid item sm>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowDownwardRounded />}
              style={{
                width: "80%",
              }}
              onClick={() => onDownvoteClick(mem)}
            >
              <ArrowDownwardRounded />
              {mem.downvotes}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Mem;
