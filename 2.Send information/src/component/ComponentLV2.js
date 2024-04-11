import React from "react";
import ComponentLv3 from "./ComponentLV3";
import DataTable from "react-data-table-component";

const ComponentLv2 = (prop) => {
  const columns = [
    {
      name: "Active",
      selector: (row) => (row.active === true ? "True" : "False"),
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
    },
    {
      name: "Icon",
      selector: (row) => row.icon,
    },
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Key",
      selector: (row) => row.key,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Navigation_id",
      selector: (row) => row.navigation_id,
    },
    {
      name: "Sequence",
      selector: (row) => row.sequence,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
  ];

  return (
    <div>
      
      {prop.page.action === "ComponentLv2" ? (
        <>
          <h1>ComponentLv2</h1>
          <DataTable columns={columns} data={prop.dataList_nav} />
        </>
      ) : (
        <>
          <ComponentLv3
            dataList_nav={prop.dataList_nav}
            dataList_web={prop.dataList_web}
            page={prop.page}
            setPage={prop.setPage}
          />
        </>
      )}
    </div>
  );
};
export default ComponentLv2;
