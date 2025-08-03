"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { menu_list } from "./constants";
import { MenuListItem } from "./types";

export default function HomePage() {
  const [index, setIndex] = useState<number>(0);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const circles = useRef<(SVGCircleElement | null)[]>([]);
  const numberOfCircles: number = 40;
  const radius: number = 20;
  const zero_svg = useRef<SVGPathElement | null>(null);
  const zero_circles = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const length = paths.current[index]?.getTotalLength();
    const step = length! / numberOfCircles;

    circles.current.forEach((circle: SVGPathElement | null, i: number) => {
      if (!circle) return;

      const { x, y } = paths.current[index]!.getPointAtLength(i * step);
      animate(circle, { cx: x, cy: y }, { delay: 0.02 * i, ease: "easeInOut" });
    });

    if (index === 0 && zero_svg.current) {
      const length = zero_svg.current.getTotalLength();
      const step = length / numberOfCircles;

      zero_circles.current.forEach((circle, i) => {
        if (!circle) return;

        const { x, y } = zero_svg.current!.getPointAtLength(i * step);
        animate(
          circle,
          { cx: x, cy: y },
          { delay: 0.02 * i, ease: "easeInOut" }
        );
      });
    }
  }, [index]);

  return (
    <section className="min-h-screen flex justify-between items-center bg-rose-300">
      <ul className="flex flex-col gap-5 ml-20">
        {menu_list.map(({ label }: MenuListItem, i: number) => (
          <li
            onClick={() => setIndex(i)}
            className={twMerge(
              "text-9xl font-bold cursor-pointer hover:text-white transition-colors duration-500",
              i === index && "!text-rose-500"
            )}
            key={label}
          >
            {label}
          </li>
        ))}
      </ul>

      <svg className="w-[800px]" viewBox="0 0 256 256">
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
              result="filter"
            />
          </filter>
        </defs>

        {menu_list.map((item: MenuListItem, i: number) => (
          <path
            key={item.label}
            className="hidden"
            ref={(ref: SVGPathElement | null) => {
              paths.current[i] = ref;
            }}
            d={item.svg}
          />
        ))}

        <g>
          {[...Array(numberOfCircles)].map((_, i) => (
            <circle
              key={i}
              r={radius}
              cx={128}
              cy={128}
              ref={(ref: SVGCircleElement | null) => {
                circles.current[i] = ref;
              }}
            />
          ))}
        </g>
      </svg>
    </section>
  );
}
