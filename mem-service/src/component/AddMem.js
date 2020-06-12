import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addMem, memsFetched } from "../redux/actions/actions";
import MemForm from "./MemForm";
import { newMem } from "../api/newMem";
import { withRouter } from "react-router-dom";

export function AddMem({ mems, addMem, memsFetched, ...props }) {
  const [mem, setCourse] = useState({ ...props.mem });

  useEffect(() => {
    setCourse({ ...props.mem });
  }, [props.mem]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevMem) => ({
      ...prevMem,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    console.log(mem);
    addMem(mem);
    props.history.push("/regular");
  }

  return <MemForm mem={mem} onChange={handleChange} onSave={handleSave} />;
}

function mapStateToProps(state, ownProps) {
  const mem = newMem;
  return {
    mem,
    mems: state.mems,
  };
}

const mapDispatchToProps = {
  addMem,
  memsFetched,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddMem));
