import logo from "../assets/imgs/logo/logoDust.svg";
import phone from "../assets/imgs/icons/phone.svg";
import email from "../assets/imgs/icons/email.svg";
import fax from "../assets/imgs/icons/fax.svg";
import location from "../assets/imgs/icons/location.svg";

type Props = {
  icon: any;
  imgName: string;
  text: string | JSX.Element;
  url: string;
};
const ContactListItem = ({ icon, imgName, text, url }: Props) => {
  const iconStyle = "h-8 w-8 md:h-12 md:w-12 text-sand";
  return (
    <a
      href={url}
      className="flex items-center cursor-pointer py-2 gap-2 sm:gap-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-8 w-8 md:h-12 md:w-12">
        <img className={iconStyle} title={imgName} src={icon.src} />
      </div>
      {text}
    </a>
  );
};

export const Footer = () => {
  const contactItems = [
    {
      icon: phone,
      imgName: "Phone icon",
      text: (
        <p className="hover:underline active:underline decoration-sage md:decoration-2">
          901-766-7500
        </p>
      ),
      url: "tel:+19017667500",
    },
    {
      icon: fax,
      imgName: "Fax icon",
      text: (
        <p className="hover:underline active:underline decoration-sage md:decoration-2">
          901-766-7550
        </p>
      ),
      url: "tel:+19017667550",
    },
    {
      icon: email,
      imgName: "Email icon",
      text: (
        <p className="text-[1.05rem] sm:text-xl hover:underline active:underline decoration-sage md:decoration-2">
          info@mindmattersmemphis.com
        </p>
      ),
      url: "mailto:info@mindmattersmemphis.com",
    },
    {
      icon: location,
      imgName: "Location icon",
      text: (
        <p className="text-lg sm:text-xl hover:underline active:underline flex flex-col decoration-sage md:decoration-2">
          <span>5100 Poplar Ave, Suite 322</span>
          <span>Memphis, TN 38137</span>
        </p>
      ),
      url: "https://maps.app.goo.gl/9RzA1WMAE9NfWH1B6",
    },
  ];

  const listItemStyle = "py-2";
  const altLinkStyle =
    "p-2 hover:underline active:underline decoration-sage md:decoration-2 tracking-wide text-dust active:left-[1px] active:top-[2px] active:shadow-none";
  return (
    <footer className="bg-midnight text-dust p-4 sm:p-8 text-xl peer-has-[[data-state=open]]:blur-sm">
      <div className="flex flex-col md:grid md:grid-rows-2 justify-center md:items-end border-b-2 border-sage lg:border-b-4">
        <div className="self-center md:self-start border-b-2 border-sage md:border-b-0 md:pt-6">
          <a
            href="/"
            className="flex justify-center cursor-pointer py-4"
            aria-label="Return to Mind Matters Memphis homepage"
          >
            <img
              src={logo.src}
              className="sm:max-w-[575px]"
              title="Mind Matters Logo"
              role="Mind Matters Memphis logo image"
              alt="Mind Matters Memphis logo, with the 3 'M's depicting a bridge"
            />
          </a>
        </div>
        <div className="flex flex-col mx-auto md:flex-row md:justify-between md:mx-0 md:gap-10 lg:gap-48 xl:gap-96 md:pb-4">
          <div className="pb-4 grid justify-start">
            <h2 className="p-2 pt-4 md:pt-2 text-2xl font-accessdisplay tracking-wider">
              Get in Touch:
            </h2>
            <div className="flex flex-col items-center">
              <div>
                {contactItems.map((item, index) => (
                  <ContactListItem
                    key={index}
                    icon={item.icon}
                    imgName={item.imgName}
                    text={item.text}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:self-start pb-4">
            <h2 className="p-2 md:pb-4 text-2xl font-accessdisplay tracking-wider">
              Site Navigation:
            </h2>
            <ul className="flex flex-col justify-between md:gap-2 md:items-start">
              <li className={listItemStyle}>
                <a
                  href="/clinical-neuropsychology#top"
                  className={altLinkStyle}
                >
                  <span className="z-20">Clinical Neuropsychology</span>
                </a>
              </li>
              <li className={listItemStyle}>
                <a
                  href="/forensic-evaluations#top"
                  className={altLinkStyle}
                >
                  <span className="z-20">Forensic Evaluations</span>
                </a>
              </li>
              <li className={listItemStyle}>
                <a href="/cognitive-aging#top" className={altLinkStyle}>
                  <span className="z-20">Healthy Cognitive Aging</span>
                </a>
              </li>
              <li className={listItemStyle}>
                <a href="/meet-dr-gould#top" className={altLinkStyle}>
                  <span className="">Meet Dr. Gould</span>
                </a>
              </li>
              <li className={listItemStyle}>
                <a href="/forms#top" className={altLinkStyle}>
                  <span className="">Forms</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 pt-6 lg:mx-12">
        <div className="flex justify-center lg:justify-end text-center text-base sm:text-xl">
          <p>&copy; 2024 Mind Matters Memphis, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};