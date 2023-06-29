import React from "react";
import MemberCard from "../Member-card/MemberCard";
import "./Members.css";

const Members = () => {
  return (
    <div className="members-sec">
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
};

export default Members;
