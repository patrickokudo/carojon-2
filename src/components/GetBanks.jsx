import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { BANK_LIST } from "../GraphQl/Queries";
function GetBanks() {
  const { error, loading, data } = useQuery(BANK_LIST);
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data.getAllBanks);
      setBanks(data.getAllBanks);
    }
  }, [data]);

  useEffect(() => { 
    console.log(data);
  }, [data]);

  return (
    <div>
      {" "}
      {banks.map((val) => {
        return <p>{val}</p>;
      })}
    </div>
  );
}

export default GetBanks;
