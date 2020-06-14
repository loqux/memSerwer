import React, { useState } from "react";
import { connect } from "react-redux";
import { addMem} from "../redux/actions/actions";
import MemForm from "./MemForm";
import { newMem } from "../api/newMem";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

export function AddMem({  addMem, ...props }) {
  const [mem, setMem] = useState({ ...props.mem });

  function handleInputValue(event) {
    const { name, value } = event.target;
    setMem((handleMem) => ({
      ...handleMem,
      [name]: value,
    }));
  }

  function handleSaveMem(event) {
    event.preventDefault();
    addMem(mem);
    props.history.push("/regular");
  }

  return <MemForm mem={mem} onChange={handleInputValue} onSave={handleSaveMem}/>;
}

function mapStateToProps() {
  const mem = newMem;
  return {
    mem,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMem,
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddMem));
