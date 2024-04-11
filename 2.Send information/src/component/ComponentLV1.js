import React from "react";
import ComponentLv2 from "./ComponentLV2";

const ComponentLv1 = (prop) => {
  return (
    <div>
      {prop.page.action === "ComponentLv1" ? (
        <>
          <h1>ComponentLv1</h1>
        </>
      ) : (
        <>
          <ComponentLv2
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

export default ComponentLv1;
