import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import Services from "@layouts/partials/Services";
import Workflow from "@layouts/partials/Workflow";
import { getListPage } from "../lib/contentParser";

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeBanner banner={banner} bgColor="bg-body" nextBgColor="bg-theme-light" />
      <div className="h-32 -mt-16 bg-gradient-to-b from-body to-theme-light"></div>

      {/* services */}
      <Services services={services} bgColor="bg-body" nextBgColor="bg-theme-light" />
      <div className={`h-32 -mt-16 bg-gradient-to-b from-body to-theme-light`}></div>

      {/* Features */}
      <HomeFeatures feature={feature} bgColor="bg-theme-light" nextBgColor="bg-body" />
      <div className={`h-32 -mt-16 bg-gradient-to-b from-theme-light to-body`}></div>

      {/* workflow */}
      <Workflow workflow={workflow} bgColor="bg-body" showDivider={true} nextBgColor="bg-body" />
      <div className={`h-32 -mt-16 bg-gradient-to-b from-body to-theme-light`}></div>

      {/* Cta */}
      <Cta cta={call_to_action} bgColor="bg-theme-light" />
    </>
  );
};

export default Home;
