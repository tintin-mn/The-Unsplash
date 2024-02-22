import { SlSocialDribbble } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className="w-full h-32 bg-[#161A30] fixed bottom-0">
      <div className="h-[4px] w-full bg-[#31304D]"></div>
      <div className="flex flex-col items-center justify-center h-full gap-y-3">
        <div className="flex items-center justify-center gap-x-4">
          <a href="https://github.com/tintin-mn" className="bg-white p-3 rounded-full">
            <SlSocialGithub size={'20px'} fill="#31304D" />
          </a>
          <a href="https://dribbble.com/tintin_mn" className="bg-white p-3 rounded-full">
            <SlSocialDribbble size={'20px'} fill="#31304D" />

          </a>
          <a href="https://www.linkedin.com/in/tina-mazikian-74b953176/" className="bg-white p-3 rounded-full">
            <SlSocialLinkedin size={'20px'} fill="#31304D" />
          </a>
        </div>
        <span className="text-white tracking-wide">Developed by Tina Mazikian :)</span>
      </div>
    </footer>
  );
};

export default Footer;