import React from "react";
import HeroCommunaute from "../../../components/Visitor/Communaute/HeroCommunaute";
import Forums from "../../../components/Visitor/Communaute/Forums";
import GroupesEtude from "../../../components/Visitor/Communaute/GroupesEtude";

const Communaute = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroCommunaute />
      <div className="container mx-auto px-4 py-8">
        <Forums />
        <GroupesEtude />
      </div>
    </main>
  );
};

export default Communaute;
