import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner, bgColor = "bg-body", nextBgColor = "bg-theme-light" }) => {
  return (
    <>
      <section className={`section pt-0 pb-0 ${bgColor}`}>
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
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
