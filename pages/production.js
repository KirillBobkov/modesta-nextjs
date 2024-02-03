import Layout from "../components/Layout/Layout";
import React from "react";

import { ProductionBlock } from "../components/ProductionBlock/ProductionBlock.jsx";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock.jsx";
import { MozaicBlock } from "../components/MozaicBlock/MozaicBlock.jsx";
import { QuoteBlock } from "../components/QuoteBlock/QuoteBlock.jsx";

import process__poster from "../public/images/process__poster.webp";
import workingProcess1 from "../public/images/working_process1.jpg";
import workingProcess2 from "../public/images/working_process2.jpg";
import workingProcess3 from "../public/images/working_process3.jpg";
import workingProcess4 from "../public/images/working_process4.jpg";
import workingProcess5 from "../public/images/working_process5.jpg";
import workingProcess6 from "../public/images/working_process6.jpg";
import workingProcess7 from "../public/images/working_process7.jpg";
import workingProcess8 from "../public/images/working_process8.jpg";
import workingProcess9 from "../public/images/working_process9.jpg";

import workingProcess1_2 from "../public/images/working_process_2_1.jpg";
import workingProcess2_2 from "../public/images/working_process_2_2.jpg";
import workingProcess3_2 from "../public/images/working_process_2_3.jpg";
import workingProcess4_2 from "../public/images/working_process_2_4.jpg";
import workingProcess5_2 from "../public/images/working_process_2_5.jpg";
import workingProcess6_2 from "../public/images/working_process_2_6.jpg";
import workingProcess7_2 from "../public/images/working_process_2_7.jpg";
import workingProcess8_2 from "../public/images/working_process_2_8.jpg";
import workingProcess9_2 from "../public/images/working_process_2_9.jpg";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { quoteContent } from "../content.ts";

const secondMozaicImages = [
  workingProcess1,
  workingProcess2,
  workingProcess3,
  workingProcess4,
  workingProcess5,
  workingProcess6,
  workingProcess7,
  workingProcess8,
  workingProcess9,
];

const firstMozaicImages = [
  workingProcess1_2,
  workingProcess2_2,
  workingProcess3_2,
  workingProcess4_2,
  workingProcess5_2,
  workingProcess6_2,
  workingProcess7_2,
  workingProcess8_2,
  workingProcess9_2,
];

const processMp4 = "/images/process.mp4";

export default function ProductionPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager side="opacity">
        <PreviewBlock video={processMp4} poster={process__poster.src} />
        <QuoteBlock
          title={quoteContent.title}
          author={quoteContent.author}
          quote={quoteContent.quote}
        />
        <MozaicBlock images={firstMozaicImages} />
        <ProductionBlock />
        <MozaicBlock images={secondMozaicImages} />
      </VisibilityManager>
    </Layout>
  );
}
