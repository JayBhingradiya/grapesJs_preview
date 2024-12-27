import Preview from "@/components/Preview/preview";
import React from "react";

const PreviewPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return <Preview pageId={slug} />;
};

export default PreviewPage;
