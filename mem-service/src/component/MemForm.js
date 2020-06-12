import React from "react";
import {
  Input,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const MemForm = ({ mem, onChange, onSave }) => {
  return (
    <form onSubmit={onSave}>
      <Typography variant="h3" style={{ margin: 10 }}>
        Dodaj swojego mema
      </Typography>
      <Input name="title" label="Title" value={mem.title} onChange={onChange} />

      {/* <Input
        accept="image/*"
        //   className={classes.input}
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="raised"
          component="span"
          //   className={classes.button}
        >
          Upload
        </Button>
      </label> */}
      {/* <NavLink to="/regular"> */}
      <button type="submit">Save</button>
      {/* </NavLink> */}
    </form>
  );
};

export default MemForm;
