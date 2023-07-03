import React from "react";
import SectionItem from "./SectionItem";

function Section(props) {
  const arr = props.users;
  return (
    <div>
      {arr.map((item) => {
        return <SectionItem key={item.id} user={item} />;
      })}
    </div>
  );
}

export default Section;
