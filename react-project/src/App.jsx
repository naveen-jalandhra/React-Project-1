import React, { useEffect, useState } from "react";
import { From } from "./components/from";
import { UserCard } from "./components/Usercard";

export const App = () => {
  const [Submissions, setSubmissions] = useState(() => {
    let ExData = JSON.parse(localStorage.getItem("users")) || [];

    return ExData;
  });

  const [NumData, setNumData] = useState(null);
  const [ReUpdateData, setReUpdateData] = useState(null);
  const [Toggle, setToggle] = useState(true);
  return (
    <>
      {Toggle ? (
        <From
          setToggle={setToggle}
          NumData={NumData}
          ReUpdateData={ReUpdateData}
          setSubmissions={setSubmissions}
        />
      ) : (
        <UserCard
          setNumData={setNumData}
          setToggle={setToggle}
          Submissions={Submissions}
          setSubmissions={setSubmissions}
          setReUpdateData={setReUpdateData}
        />
      )}
    </>
  );
};
