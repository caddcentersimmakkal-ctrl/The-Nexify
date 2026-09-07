"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { NexifyGlobe } from "./NexifyGlobe";

import {
  ArrowRight,
  Play,
  Globe2,
  BarChart3,
  Bot,
  Boxes,
} from "lucide-react";


// ============================================================
// TYPES
// ============================================================

type Service = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: "cyan" | "green";
  position: string;
};


// ============================================================
// SERVICES
// ============================================================

const services: Service[] = [
  {
    id: "web",
    title: "WEB",
    subtitle: "Digital Experiences",
    icon: Globe2,
    color: "cyan",
    position:
      "left-[2%] top-[15%] lg:left-[4%] lg:top-[13%]",
  },

  {
    id: "data",
    title: "DATA",
    subtitle: "Business Intelligence",
    icon: BarChart3,
    color: "green",
    position:
      "right-[2%] top-[17%] lg:right-[3%] lg:top-[15%]",
  },

  {
    id: "ai",
    title: "AI",
    subtitle: "Intelligent Automation",
    icon: Bot,
    color: "cyan",
    position:
      "left-[2%] bottom-[19%] lg:left-[4%] lg:bottom-[17%]",
  },

  {
    id: "erp",
    title: "ERP",
    subtitle: "Business Operations",
    icon: Boxes,
    color: "green",
    position:
      "right-[2%] bottom-[17%] lg:right-[3%] lg:bottom-[15%]",
  },
];


// ============================================================
// HERO SECTION
// ============================================================

export const HeroSection: React.FC = () => {
  const [activeService, setActiveService] =
    useState<string | null>(null);

  return (
    <section
      className="
        relative
        min-h-screen
        bg-navy
        text-white
        overflow-hidden
      "
    >

      {/* ======================================================
          BACKGROUND GRID
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "52px 52px",
        }}
      />


      {/* ======================================================
          ATMOSPHERIC GLOWS
      ======================================================= */}

      <div
        className="
          absolute
          -top-[250px]
          right-[5%]
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-tech/10
          blur-[160px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-250px]
          right-[20%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-green-brand/10
          blur-[160px]
          pointer-events-none
        "
      />


      {/* ======================================================
          CONTENT CONTAINER
      ======================================================= */}

      <Container
        className="
          relative
          z-10
          min-h-screen
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            min-h-screen
            items-center
          "
        >


          {/* ==================================================
              LEFT CONTENT
          =================================================== */}

          <div
            className="
              lg:col-span-5
              relative
              z-40
              pt-28
              pb-10
              lg:pt-0
              lg:pb-0
            "
          >

            {/* Eyebrow */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3.5
                py-1.5
                rounded-full
                border
                border-green-brand/20
                bg-green-brand/5
                backdrop-blur-sm
                mb-7
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-brand
                  shadow-[0_0_12px_rgba(69,214,106,0.8)]
                  animate-pulse
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-green-brand
                "
              >
                The Nexify
              </span>

            </div>


            {/* =================================================
                HEADLINE
            ================================================== */}

            <h1
              className="
                text-5xl
                sm:text-6xl
                lg:text-[58px]
                xl:text-[66px]
                font-black
                leading-[0.94]
                tracking-[-0.055em]
              "
            >

              <span className="block text-white">
                Technology
              </span>

              <span className="block text-white">
                that moves
              </span>

              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-cyan-tech
                  via-cyan-tech
                  to-green-brand
                "
              >
                your business.
              </span>

            </h1>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-7
                max-w-[520px]
                text-base
                sm:text-lg
                leading-relaxed
                text-white/50
              "
            >
              Build digital experiences, unlock your data,
              automate operations and connect your business
              with intelligent technology.
            </p>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={
                  <ArrowRight className="w-4 h-4" />
                }
              >
                Start a Project
              </Button>


              <Button
                href="/services"
                variant="secondary-dark"
                size="lg"
                icon={
                  <Play className="w-4 h-4" />
                }
              >
                Explore Services
              </Button>

            </div>


            {/* =================================================
                SMALL SERVICE INDICATORS
            ================================================== */}

            {/* <div
              className="
                mt-10
                flex
                items-center
                gap-4
                text-[9px]
                uppercase
                tracking-[0.25em]
              "
            >

              {["WEB", "DATA", "AI", "ERP"].map(
                (item, index) => (

                  <React.Fragment key={item}>

                    <span
                      className="
                        text-white/30
                        transition-colors
                        duration-300
                        hover:text-green-brand
                      "
                    >
                      {item}
                    </span>

                    {index < 3 && (
                      <span className="text-white/10">
                        •
                      </span>
                    )}

                  </React.Fragment>
                )
              )}

            </div> */}

          </div>


          {/* ==================================================
              GLOBE + FLOATING SERVICE ECOSYSTEM
          =================================================== */}

          <div
            className="
              lg:col-span-7
              relative
              h-[600px]
              sm:h-[680px]
              lg:h-[760px]
              -mt-6
              lg:mt-0
            "
          >

            {/* ==================================================
                GLOBE
            =================================================== */}

            <div
              className="
                absolute
                inset-0
                z-10
              "
            >

              <NexifyGlobe
                activeService={activeService}
              />

            </div>


            {/* ==================================================
                OUTER GLOW
            =================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[430px]
                h-[430px]
                lg:w-[600px]
                lg:h-[600px]
                rounded-full
                border
                border-cyan-tech/10
                pointer-events-none
                animate-[pulse_5s_ease-in-out_infinite]
              "
            />


            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[500px]
                h-[500px]
                lg:w-[700px]
                lg:h-[700px]
                rounded-full
                border
                border-green-brand/5
                pointer-events-none
              "
            />


            {/* ==================================================
                FLOATING SERVICE NODES
            =================================================== */}

            {services.map((service, index) => {

              const Icon = service.icon;

              const isActive =
                activeService === service.id;


              const isCyan =
                service.color === "cyan";


              return (

                <div
                  key={service.id}
                  className={`
                    absolute
                    ${service.position}
                    z-50
                    w-[185px]
                    sm:w-[205px]
                    lg:w-[215px]

                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "scale-110"
                        : "scale-100"
                    }

                    service-float-${index + 1}
                  `}
                >

                  {/* =================================================
                      CONNECTING LINE
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      hidden
                      lg:block
                      pointer-events-none

                      ${
                        service.id === "web"
                          ? "right-[-125px] top-[65%] w-[130px] rotate-[18deg]"
                          : ""
                      }

                      ${
                        service.id === "data"
                          ? "left-[-125px] top-[65%] w-[130px] rotate-[-18deg]"
                          : ""
                      }

                      ${
                        service.id === "ai"
                          ? "right-[-125px] top-[20%] w-[130px] rotate-[-18deg]"
                          : ""
                      }

                      ${
                        service.id === "erp"
                          ? "left-[-125px] top-[20%] w-[130px] rotate-[18deg]"
                          : ""
                      }
                    `}
                  >

                    <div
                      className={`
                        h-px
                        w-full
                        bg-gradient-to-r
                        ${
                          isCyan
                            ? "from-cyan-tech/0 via-cyan-tech/50 to-cyan-tech"
                            : "from-green-brand/0 via-green-brand/50 to-green-brand"
                        }
                      `}
                    />

                    {/* Moving data point */}

                    <span
                      className={`
                        absolute
                        top-1/2
                        -translate-y-1/2
                        w-2
                        h-2
                        rounded-full

                        ${
                          isCyan
                            ? "bg-cyan-tech shadow-[0_0_12px_rgba(0,200,255,0.9)]"
                            : "bg-green-brand shadow-[0_0_12px_rgba(69,214,106,0.9)]"
                        }

                        animate-pulse
                      `}
                    />

                  </div>


                  {/* =================================================
                      SERVICE CARD
                  ================================================== */}

                  <button
                    type="button"
                    onMouseEnter={() =>
                      setActiveService(
                        service.id
                      )
                    }
                    onMouseLeave={() =>
                      setActiveService(null)
                    }
                    className="
                      group
                      relative
                      w-full
                      text-left
                      focus:outline-none
                    "
                  >

                    {/* Outer glow */}

                    <div
                      className={`
                        absolute
                        -inset-2
                        rounded-2xl
                        blur-xl
                        transition-opacity
                        duration-500

                        ${
                          isActive
                            ? isCyan
                              ? "bg-cyan-tech/25 opacity-100"
                              : "bg-green-brand/25 opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />


                    {/* Card */}

                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        backdrop-blur-xl
                        px-4
                        py-3.5

                        transition-all
                        duration-500

                        ${
                          isActive
                            ? isCyan
                              ? "border-cyan-tech/60 bg-[#062744]/95"
                              : "border-green-brand/60 bg-[#092d25]/95"
                            : "border-white/10 bg-[#061f3d]/75"
                        }
                      `}
                    >

                      {/* Scan highlight */}

                      <div
                        className={`
                          absolute
                          inset-0
                          bg-gradient-to-r
                          ${
                            isCyan
                              ? "from-cyan-tech/0 via-cyan-tech/10 to-cyan-tech/0"
                              : "from-green-brand/0 via-green-brand/10 to-green-brand/0"
                          }
                          translate-x-[-100%]
                          group-hover:translate-x-[100%]
                          transition-transform
                          duration-1000
                        `}
                      />


                      <div
                        className="
                          relative
                          flex
                          items-center
                          gap-3
                        "
                      >

                        {/* Icon */}

                        <div
                          className={`
                            flex-shrink-0
                            w-11
                            h-11
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            border

                            ${
                              isCyan
                                ? "bg-cyan-tech/10 border-cyan-tech/25 text-cyan-tech"
                                : "bg-green-brand/10 border-green-brand/25 text-green-brand"
                            }
                          `}
                        >

                          <Icon
                            className="
                              w-5
                              h-5
                              transition-transform
                              duration-500
                              group-hover:scale-110
                              group-hover:rotate-3
                            "
                          />

                        </div>


                        {/* Text */}

                        <div className="min-w-0">

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                            "
                          >

                            <span
                              className="
                                text-[13px]
                                sm:text-[14px]
                                font-black
                                tracking-wide
                                text-white
                              "
                            >
                              {service.title}
                            </span>


                            <span
                              className={`
                                w-1.5
                                h-1.5
                                rounded-full
                                animate-pulse

                                ${
                                  isCyan
                                    ? "bg-cyan-tech"
                                    : "bg-green-brand"
                                }
                              `}
                            />

                          </div>


                          <div
                            className="
                              mt-0.5
                              text-[9px]
                              sm:text-[10px]
                              text-white/40
                              whitespace-nowrap
                            "
                          >
                            {service.subtitle}
                          </div>

                        </div>

                      </div>


                      {/* Bottom progress line */}

                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          transition-all
                          duration-700

                          ${
                            isCyan
                              ? "bg-cyan-tech"
                              : "bg-green-brand"
                          }

                          ${
                            isActive
                              ? "w-full"
                              : "w-0"
                          }
                        `}
                      />

                    </div>

                  </button>

                </div>

              );

            })}


            {/* ==================================================
                CENTRAL FLOATING LABEL
            =================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-[7%]
                -translate-x-1/2
                z-30
                hidden
                sm:flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
              "
            >

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-green-brand
                  animate-pulse
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  font-bold
                  text-white/40
                "
              >
                Integrated Technology
              </span>

            </div>


            {/* ==================================================
                DECORATIVE DATA POINTS
            =================================================== */}

            <span
              className="
                absolute
                left-[25%]
                top-[25%]
                w-1.5
                h-1.5
                rounded-full
                bg-cyan-tech
                shadow-[0_0_15px_rgba(0,200,255,0.9)]
                animate-pulse
                z-30
              "
            />

            <span
              className="
                absolute
                right-[25%]
                top-[30%]
                w-1.5
                h-1.5
                rounded-full
                bg-green-brand
                shadow-[0_0_15px_rgba(69,214,106,0.9)]
                animate-pulse
                z-30
              "
            />

            <span
              className="
                absolute
                left-[30%]
                bottom-[27%]
                w-1
                h-1
                rounded-full
                bg-cyan-tech
                animate-pulse
                z-30
              "
            />

          </div>

        </div>

      </Container>


      {/* ======================================================
          BOTTOM FADE
      ======================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-navy
          via-navy/60
          to-transparent
          pointer-events-none
          z-20
        "
      />


      {/* ======================================================
          FLOAT ANIMATIONS
      ======================================================= */}

      <style jsx>{`

        @keyframes serviceFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(
              0,
              -12px,
              0
            );
          }
        }


        @keyframes serviceFloat2 {
          0%, 100% {
            transform: translate3d(
              0,
              0,
              0
            );
          }

          50% {
            transform: translate3d(
              0,
              14px,
              0
            );
          }
        }


        @keyframes serviceFloat3 {
          0%, 100% {
            transform: translate3d(
              0,
              0,
              0
            );
          }

          50% {
            transform: translate3d(
              0,
              13px,
              0
            );
          }
        }


        @keyframes serviceFloat4 {
          0%, 100% {
            transform: translate3d(
              0,
              0,
              0
            );
          }

          50% {
            transform: translate3d(
              0,
              -13px,
              0
            );
          }
        }


        .service-float-1 {
          animation:
            serviceFloat1
            5.5s
            ease-in-out
            infinite;
        }


        .service-float-2 {
          animation:
            serviceFloat2
            6s
            ease-in-out
            infinite;
        }


        .service-float-3 {
          animation:
            serviceFloat3
            6.5s
            ease-in-out
            infinite;
        }


        .service-float-4 {
          animation:
            serviceFloat4
            5.8s
            ease-in-out
            infinite;
        }

      `}</style>

    </section>
  );
};