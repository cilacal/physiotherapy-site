// Tailwind JIT: ensure these classes are generated
// from-body to-theme-light from-theme-light to-body from-body to-body from-theme-light to-theme-light
import { markdownify } from "@lib/utils/textConverter";
import MDXContent from "app/helper/MDXContent";

const Default = ({ data, bgColor = "bg-body", showDivider = true, nextBgColor = "bg-theme-light" }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;
  return (
    <>
      <section className={`section pb-0 mb-[-64px] ${bgColor}`}>
        <div className="container pt-12">
          {markdownify(title, "h1", "h2 mb-8 text-center")}
          <div className="content">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
      {showDivider && (
        <div className={`h-32 -mt-16 bg-gradient-to-b from-${bgColor.replace('bg-', '')} to-${nextBgColor.replace('bg-', '')} w-full`} style={{position: 'relative', zIndex: 1}}></div>
      )}
    </>
  );
};

export default Default;
