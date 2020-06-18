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
import styles from "./Mem.module.css";

const MemForm = ({ mem, onChange, onSave }) => {
  return (
    <form onSubmit={onSave} className={styles.addForm}>
      <Card className={styles.memCard}>
        <CardActions>
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
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </CardActions>
        <CardContent>
          <Typography variant="h5">{mem.title}</Typography>
          <img src={mem.img} alt={mem.title} className={styles.memImg} />
        </CardContent>
      </Card>
    </form>
  );
};

export default MemForm;
