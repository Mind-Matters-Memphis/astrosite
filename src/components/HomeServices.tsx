// import { MdOutlineArrowRight as Arrow } from "react-icons/md";
import "../assets/stylesheets/shapes.css";
type Service = {
  title: string;
  text: string;
  points?: string[];
  url: string;
  linkText: string;
  style: string;
  btnStyle: string;
  color: string;
};
type Props = {
  invert?: boolean;
  service: Service;
};
const ServiceBlock = ({ service }: Props) => {
  return (
    <div
      className={
        "border-4 rounded-md mx-4 md:rounded-none md:border-8 md:mx-12 max-w-3xl z-20 " +
        service.style
      }
    >
      <div
        className={
          "bg-dust text-midnight shadow-inner grid justify-center items-center w-inherit p-4 px-6 lg:p-8 rounded-3xl"
        }
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold font-accessdisplay py-4 text-center">
            {service.title}
          </h2>
        </div>
        <div>
          <p className="py-2 text-xl">{service.text}</p>
        </div>
        <ul className="pl-2">
          {service.points?.map((point, index) => (
            <li
              key={index}
              className={`text-lg grid grid-cols-12 items-start list-inside`}
            >
              {/* <Arrow
                className={"h-8 w-8 justify-self-end text-" + service.color}
              /> */}
              <span className="text-wrap col-span-10">{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <a
            href={service.url}
            className={
              "text-xl sm:text-2xl p-4 sm:px-8 m-4 rounded-lg text-midnight text-center font-semibold font-accessbold shadow-md border-2 lg:border-4 transition-all duration-500 ease-in-out relative active:left-[1px] active:top-[2px] active:shadow-none " +
              service.btnStyle
            }
          >
            {service.linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export const HomeServices = () => {
  const services = [
    {
      title: "Neuropsychological Assessments",
      text: "Comprehensive neuropsychological evaluations for individuals with cognitive concerns.",
      url: "/clinical-neuropsychology#top",
      points: [
        "Lorem ipsum list item",
        "Lorem ipsum list item",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      ],
      linkText: "Clinical Neuropsychology",
      // style: "xl:justify-self-end xl:mr-24 mt-10 border-inlet from-inlet/75",
      style: "border-inlet quote-frame-inlet",
      btnStyle: "border-inlet/75 hover:bg-inlet/15",
      color: "inlet",
    },
    {
      title: "Forensic Evaluations",
      text: "Objective, independent evaluations for legal matters involving cognitive health. Services include:",
      url: "/forensic-evaluations#top",
      points: [
        "Neuropsychological IMEs",
        "Psychological-only IMEs",
        "Testamentary Evaluations",
      ],
      linkText: "Forensic Evaluations",
      style: "border-sage quote-frame-sage",
      btnStyle: "border-sage/90 hover:bg-sage/25",
      color: "sage",
    },
    {
      title: "Cognitive Aging Evaluations",
      text: "Specialized care for individuals with memory disorders and their families, designed to:",
      url: "/cognitive-aging#top",
      points: [
        "Maximize existing cognitive function",
        "Promote healthy cognitive aging",
        "Establish a cognitive baseline",
      ],
      linkText: "Cognitive Aging",
      // style: "xl:justify-self-start xl:ml-24 mb-10 border-coral from-coral/50",
      style: "mb-10 border-coral quote-frame-coral",
      btnStyle: "border-coral/70 hover:bg-coral/15",
      color: "coral",
    },
  ];

  return (
    <div className="pb-12 bg-dust relative grid gap-10 md:gap-16 justify-center ">
      {services.map((service, index) => (
        <ServiceBlock key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
};