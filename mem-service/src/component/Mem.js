import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";

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

const Mem = ({ mem, onUpvoteClick, onDownvoteClick }) => {
  const classes = useStyles();

  return (
    <div>
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
              <Button
                name="upvote"
                variant="contained"
                color="primary"
                startIcon={<ArrowUpwardRoundedIcon />}
                style={{
                  width: "80%",
                }}
                onClick={() => onUpvoteClick(mem)}
              >
                {mem.upvotes}
              </Button>
            </Grid>
            <Grid item sm>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowDownwardRoundedIcon />}
                style={{
                  width: "80%",
                }}
                onClick={() => onDownvoteClick(mem)}
              >
                {mem.downvotes}
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};

export default Mem;
