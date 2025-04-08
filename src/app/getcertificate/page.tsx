import React, { Suspense } from "react";
import CertificatePage from "./CertificatePage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CertificatePage />
    </Suspense>
  );
}