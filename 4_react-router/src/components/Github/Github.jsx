import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-700 text-center text-white p-4 m-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoloader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response;
};
