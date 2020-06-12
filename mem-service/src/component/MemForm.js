import React from "react";
import {
  Input,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";



const MemForm = ({ mems, onSave}) => {
let newMem = {
    id: mems.length + 1,
    title: "",
    img: "",
    upvote: 0,
    downvote: 0,
  }

  return (
    <form onSubmit={onSave(newMem)}>
      <Typography variant="h3" style={{ margin: 10 }}>
        Dodaj swojego mema
      </Typography>
      <Input
        placeholder="Podaj nazwę mema:"
        inputProps={{ "aria-label": "description" }}
        onChange={(evt) => newMem.title = evt.target.value}
        name="title"
        label="Title"
      />
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
      <Button type="submit" className="btn btn-primary">
        Save
      </Button>
    </form>
  );
};

export default MemForm;
