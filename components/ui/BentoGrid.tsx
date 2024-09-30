import { cn } from "@/lib/utils";
import { GradientBg } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[minmax(18rem, auto)] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 min-h-40",
        id === 2 ? "pb-4 md:pb-24" : "",
        className
      )}
      style={{
        backgroundColor: "rgb(24,14,69)",
        backgroundImage: "linear-gradient(90deg, rgba(2, 1, 6, 1) 0%, rgb(9 3 34) 48%, rgb(13 0 35) 96%)",
      }}
    >
      <div className={id === 6 ? "flex justify-center h-full" : undefined}>
        <div className="w-full h-full absolute">
          {!!img && <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
          {!!spareImg && <img src={spareImg} alt={spareImg} className={"object-cover object-center w-full h-full"} />}
        </div>
        {id === 6 && (
          <GradientBg>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </GradientBg>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 z transition duration-200 relative md:h-full  flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">{title}</div>
        </div>

        {id === 2 && <GridGlobe />}
      </div>
    </div>
  );
};
