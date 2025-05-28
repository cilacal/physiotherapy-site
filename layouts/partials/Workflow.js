import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Workflow = ({ workflow, bgColor = "bg-theme-light", showDivider = true, nextBgColor = "bg-body" }) => {
  return (
    <section className={`section pt-0 pb-0 ${bgColor}`}>
      <div className="mb-8 text-center">
        {markdownify(
          workflow.title,
          "h2",
          "mx-auto max-w-[400px] font-bold leading-[44px]"
        )}
        {markdownify(workflow.description, "p", "mt-3")}
      </div>
      <Image
        src={workflow.image}
        alt="workflow image"
        width={1920}
        height={296}
      />
      <div className={`h-32 -mt-16 bg-gradient-to-b from-theme-light to-body`}></div>
    </section>
  );
};

export default Workflow;
