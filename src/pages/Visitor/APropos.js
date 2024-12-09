import React from "react";
import ContactFAQ from "../../components/Visitor/APropos/ContactFAQ";
import EquipeFondatrice from "../../components/Visitor/APropos/EquipeFondatrice";
import HelloAbout from "../../components/Visitor/APropos/HelloAbout";
import MissionVision from "../../components/Visitor/APropos/MissionVision";

const APropos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HelloAbout />
      <MissionVision />
      <EquipeFondatrice />
      <ContactFAQ />
    </div>
  );
};

export default APropos;
