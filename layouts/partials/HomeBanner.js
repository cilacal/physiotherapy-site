import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner, bgColor = "bg-body", nextBgColor = "bg-theme-light" }) => {
  return (
    <>
      <section className={`section pt-0 pb-0 min-h-screen flex items-center ${bgColor}`}>
        <div className="container">
          <div className="row items-center min-h-screen">
            <div className="lg:col-6 text-left">
              <h1 className="font-primary font-bold text-left">{banner.title}</h1>
              <p className="mt-4 text-left">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
            </div>
            <div className="lg:col-6 flex justify-end">
              <Image
                className="mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <div className={`h-32 -mt-16 bg-gradient-to-b from-body to-theme-light`}></div>
    </>
  );
};

export default HomeBanner;
