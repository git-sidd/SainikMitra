"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function CertificatePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nameFromParams = searchParams.get("name");
    if (nameFromParams) {
      setName(nameFromParams);
    }
  }, [searchParams]);

  const handleDownload = async () => {
    if (!certRef.current) return;

    const canvas = await html2canvas(certRef.current);
    const link = document.createElement("a");
    link.download = `${name}-certificate.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <div ref={certRef} className="relative w-[90%] max-w-4xl border shadow-md">
        <Image src="/certificate.jpg" alt="Certificate" className="w-full" width={1000} height={700} />
        {name && (
          <div className="absolute text-5xl font-serif font-bold text-black top-[47%] w-full text-center">
            {name}
          </div>
        )}
      </div>

      <button
        onClick={handleDownload}
        className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Download Certificate
      </button>
    </div>
  );
}

export const dynamic = "force-dynamic";
