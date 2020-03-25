import React, { useState, useEffect } from "react";
import EventRow from "../EventRow";
import { Table } from "./style";

function EventTable(props) {
  const [responselist,setResponseList] = useState([]);
  useEffect(() => {
    if(props.obj.responselist instanceof Array)
    {
      setResponseList(props.obj.responselist);
    }
  },[props.obj.responselist])

  function fetchRows() {
    if (responselist instanceof Array) {
      return responselist.map((object, i) => {
        return <EventRow handlerEdit={props.handlerEdit} deleteRow={deleteRow} obj={object} index={i} eventid={props.obj.id} />;
      });
    }
  }
  function deleteRow(key) {
    var arr = [...responselist];
    arr.splice(key, 1);
    setResponseList(arr);
    return props.handleChange(arr);
  }
  function fetchTitle() {
    if (props.titles instanceof Array) {
      return props.titles.map((object) => {
        return <th> {object.content}</th>;
      });
    }
  }

  return (
    <div>
      <Table>
        <tr>
          <th>Name</th>
          {fetchTitle()}
          <th>Comment</th>
          <th className="ActionHeader">Actions</th>
        </tr>
        {fetchRows()}
      </Table>
    </div>
  );
}

export default EventTable;
