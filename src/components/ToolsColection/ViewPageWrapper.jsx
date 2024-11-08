import React, { useEffect, useState } from "react";

import ViewPage from "../../pages/View";
import API from "../../API";

export default function ViewPageWrapper({ slug }) {
  const [data, setData] = useState(null);
  const [pageStatus, setPageStatus] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.fetchItemBySlug(slug);
        const data = response.data;
        const originalData = data?.source?.originalData || {};

        setData({
          originalData: originalData,
          type: data?.diagram_type,
        });
        setPageStatus("succeeded");
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <ViewPage pageData={data} pageStatus={pageStatus} isPaginationMode={true} />
  );
}
