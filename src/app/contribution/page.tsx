import React from "react";
import Image from "next/image";
import QR from "../../../public/QR.png";
import PaymentPage from "../PaymentPage/page";

function ContributionPage() {
  return (
    <div id="contribution" className="">
      <div
        className="h-screen  bg-cover bg-center flex flex-col items-center justify-center gap-6"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2021/05/28/11/23/flag-6290584_1280.jpg")',
          opacity: 10,
        }}
      >
        
        
        <div className="flex flex-col items-center justify-center gap-4">
          <PaymentPage/>
          
          
        </div>
      </div>
    </div>
  );
}

export default ContributionPage;
