import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner, bgColor = "bg-body", nextBgColor = "bg-theme-light", imageIndex = 0 }) => {
  // Support alternating images: if banner.image is an array, pick by imageIndex, else use as is
  const images = Array.isArray(banner.image) ? banner.image : [banner.image];
  const currentImage = images[imageIndex % images.length];

  return (
    <>
      <section className={`section pt-0 pb-0 min-h-screen flex items-center ${bgColor}`}>
        <div className="container">
          <div className="row items-center min-h-screen">
            <div className="lg:col-6 text-left">
              <h1 className="font-primary font-bold text-left whitespace-pre-line">{banner.title}</h1>
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
            <div className="lg:col-6 flex justify-end items-center relative">
              <div className="relative w-full h-[80vh] max-h-screen flex items-center justify-end">
                <Image
                  className="object-contain h-full w-auto drop-shadow-xl banner-blend"
                  src={currentImage}
                  fill
                  alt="banner image"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{
                    maxHeight: '100vh',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    WebkitMaskComposite: 'multiply',
                    maskComposite: 'intersect',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskSize: '100% 100%',
                  }}
                />
                {/* Blending overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Only a subtle transparent fade, no color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-transparent mix-blend-normal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
