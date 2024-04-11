import React from "react";
import DataTable from "react-data-table-component";

const ComponentLv3 = (prop) => {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Ttle_th",
      selector: (row) => row.title_th,
    },
    {
      name: "Title_en",
      selector: (row) => row.title_en,
    },
    {
      name: "Parent_id",
      selector: (row) => row.parent_id,
    },

    {
      name: "Link",
      selector: (row) => row.link,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
    {
      name: "Sequence",
      selector: (row) => row.sequence,
    },
    {
      name: "Sequence",
      selector: (row) => row.sequence,
    },
  ];
  return (
    <div>
      ComponentLv3
      {prop.page.action === "ComponentLv3" ? (
        <>
          <h1>ComponentLv3</h1>
          <DataTable columns={columns} data={prop.dataList_web} />{" "}
        </>
      ) : (
        <>
         
        </>
      )}
    </div>
  );
};
export default ComponentLv3;
