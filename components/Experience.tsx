import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

export const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
        <Button>hello</Button>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ id, thumbnail, title, desc }) => (
          <Button
            key={thumbnail}
            duration={id * 7000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src={thumbnail} alt={thumbnail} className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{title}</h1>
                <p className="text-start text-white-100 mt-3 font-semibold">{desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
