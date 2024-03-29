"use client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  HTMLMotionProps,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Url } from "url";

interface ProjectProps extends HTMLMotionProps<"div"> {
  title: string;
  desc: string;
  tags: string[];
  imgPath?: string | StaticImageData;
  github?: string | Url;
  live?: string | Url;
}

const OpenSourceProject: FC<ProjectProps> = ({
  title,
  desc,
  tags,
  imgPath,
  github,
  live,
  style,
  className,
  ...props
}) => {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={scrollTarget}
      className={cn(
        "relative z-0 overflow-hidden p-5 sm:px-6 lg:px-0 rounded-md top-0 w-full group flex items-start py-32 lg:items-center lg:pt-10 justify-center",
        className
      )}
      style={{ ...style }}
      {...props}
    >
      <div className="pb-32 md:pb-0 flex flex-col md:group-even:flex-row-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          style={{
            y,
          }}
          className="flex-1 w-full flex flex-col gap-1 z-20"
        >
          <h2 className="text-xl">{title}</h2>
          <Link target="_blank" className="relative" href={live || "/"}>
            <motion.h1
              initial={{
                backgroundSize: "0% 2px",
              }}
              whileHover={{
                backgroundSize: "100% 2px",
              }}
              transition={{ duration: 0.5 }}
              className="peer text-4xl inline text-justify bg-gradient-to-r from-current to-current/50 bg-no-repeat bg-left-bottom font-Syne font-medium"
            >
              {desc}
            </motion.h1>
            <MdArrowOutward className="text-4xl absolute bottom-full left-full opacity-0 peer-hover:opacity-100 transition-opacity" />
          </Link>
          <div className="flex flex-wrap items-center gap-0 text-xs">
            {tags.map((tag, i) => (
              <span key={i} className="px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            {github && (
              <Link aria-label={`Github link for ${title}`} href={github}>
                <Button
                  aria-label={`Github button for ${title}`}
                  className="text-3xl p-2 text-inherit"
                  variant={"secondary"}
                >
                  <FaGithub />
                </Button>
              </Link>
            )}
            {live && (
              <Link aria-label={`Live link for ${title}`} href={live}>
                <Button
                  aria-label={`Live button for ${title}`}
                  className="text-3xl p-2 text-inherit"
                  variant={"secondary"}
                >
                  <FaLink />
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
        {imgPath && (
          <motion.div
            style={{
              opacity,
              y: imageY,
            }}
            className="absolute w-96 bottom-0 md:static lg:w-1/2 z-10"
          >
            <Image
              className="overflow-hidden mx-auto rounded-md border-none sm:border"
              src={imgPath}
              alt={title}
              width={900}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default OpenSourceProject;
