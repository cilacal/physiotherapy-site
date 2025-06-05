"use client";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import BookingForm from "../partials/BookingForm";

function Cta({ cta, bgColor = "bg-body" }) {
  return (
    <section className={`section px-4 ${bgColor}`}>
      <div className="section container rounded-xl shadow">
        <div className="row mx-auto items-center justify-center">
          {/* Text on the left */}
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left order-2 md:order-1">
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
            )}
          </div>
          {/* Booking system on the right */}
          <div className="md:col-5 lg:col-4 order-1 md:order-2 flex justify-center">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
