import React, { useState } from "react";
import { connect } from "react-redux";
import { addMem } from "../redux/actions/actions";
import MemForm from "./MemForm";
import { newMem } from "../api/newMem";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

const AddMem = (props) => {
  const [mem, setMem] = useState(newMem);

  function handleInputValue(event) {
    const { name, value } = event.target;
    setMem((addedMem) => ({
      ...addedMem,
      [name]: value,
    }));
  }

  function handleSaveMem(event) {
    event.preventDefault();
    props.addMem(mem);
    props.history.push("/regular");
  }

  return (
    <MemForm mem={mem} onChange={handleInputValue} onSave={handleSaveMem} />
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMem,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withRouter(AddMem));
