import React, {  useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { memsFetched, updateMem } from "../redux/actions/memActions";
import { bindActionCreators } from "redux";
import { useLocation } from 'react-router-dom';
import MemsPage from "./MemsPage";

const MemsList = (props) => {

  useEffect(() => {
    props.memsFetched();
  }, []);

  const handleUpvoteMem = async (mem) => {
    let newMem = { ...mem };
    console.log("Upvote",newMem)
    newMem.upvotes = newMem.upvotes + 1;
    console.log("Upvote",newMem)
    await props.updateMem(newMem);
  };

  const handleDownvoteMem = async (mem) => {
    let newMem = { ...mem };
    newMem.downvotes = newMem.downvotes - 1;
    await props.updateMem(newMem);
  };

  if(useLocation().pathname === "/hot"){
      return(
          
      <MemsPage mems={props.mems.hots} handleUpvoteMem={handleUpvoteMem}  handleDownvoteMem={handleDownvoteMem}/>
      )}
 return( 
   
 <MemsPage mems={props.mems.regulars} handleUpvoteMem={handleUpvoteMem}  handleDownvoteMem={handleDownvoteMem}/>
    ) 
   
};

const mapStateToProps = (state) => {
    console.log("mapStateToPorps", state);
  return {
    mems: state.mems,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      memsFetched,
      updateMem,
    //   filterHot,
    //   filterRegular,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MemsList));
