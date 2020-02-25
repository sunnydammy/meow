import React from "react";
import "./Page.css";

function Page({ totalCount, searchCount }) {
  const page = parseInt(totalCount / searchCount);
  let arrPage = [];
  for (let i = 1; i <= page; i++) {
    const href = `/${i}`;
    arrPage.push(<a href={href}>{i}</a>);
  }

  return <div className="container__page">{arrPage}</div>;
}

export default Page;
