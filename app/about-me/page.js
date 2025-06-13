import fs from "fs";
import path from "path";
import { marked } from "marked";

export default function AboutMePage() {
  // Read the about-me.md file
  const filePath = path.join(process.cwd(), "content", "about-me.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // Remove frontmatter for simplicity
  const content = fileContent.replace(/^---[\s\S]*?---/, "").trim();

  return (
    <section className="section container prose mx-auto">
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </section>
  );
}
