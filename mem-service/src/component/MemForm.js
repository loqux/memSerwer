import React from "react";
import {
  Input,
  Typography,
  Card,
  CardContent,
  CardActions,
  InputLabel,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  memCard: {
    "margin-left": "20%",
    "margin-top": "5%",
    "margin-bottom": "5%",
    width: "60%",
    padding: "5%",
  },
  memTitle: {
    margin: "5%",
  },
}));

const MemForm = ({ mem, onChange, onSave }) => {
  const classes = useStyles();
  return (
    <form onSubmit={onSave}>
      <Typography variant="h3" style={{ margin: 10 }}>
        Wrzuć mema:
      </Typography>

      <Card className={classes.memCard}>
        <CardActions className={classes.memAction}>
          <Grid container>
            <Grid item sm>
              <InputLabel> Podaj nazwę:</InputLabel>
              <Input
                name="title"
                label="Title"
                value={mem.title}
                onChange={onChange}
              />
            </Grid>
            <Grid item sm>
              <Button type="submit">Save</Button>
            </Grid>
          </Grid>
        </CardActions>
        <CardContent className={classes.memTitle}>
          <Typography variant="h5">{mem.title}</Typography>
          <img
            src={mem.img}
            alt={mem.title}
            style={{ width: "70%", marginTop: "5%" }}
          />
        </CardContent>
      </Card>
    </form>
  );
};

export default MemForm;
