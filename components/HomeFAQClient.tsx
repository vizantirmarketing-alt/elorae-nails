"use client";

import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });

export default function HomeFAQClient() {
  return <FAQ />;
}
