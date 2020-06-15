
import React from "react";
import Mem from "./Mem";
import Leyout from "./Layouts/index";
import Paper from "@material-ui/core/Paper";


const MemsPage = ({mems, handleUpvoteMem, handleDownvoteMem}) =>(
 <Leyout>
    <Paper styles={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
      {mems.map((thismem) => (
        <Mem
          key={thismem.id}
          mem={thismem}
          onUpvoteClick={handleUpvoteMem}
          onDownvoteClick={handleDownvoteMem}
        />
      ))}
    </Paper>
  </Leyout>

)


export default MemsPage;