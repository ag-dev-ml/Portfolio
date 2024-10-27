import { Bio } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a className="social-icon" href={Bio.github} title="Github">
          <img loading="lazy" src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="#contact" title="Mail">
          <img loading="lazy" src="/assets/mail.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href={Bio.linkedin} title="Instagram">
          <img loading="lazy" src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href={Bio.linkedin} title="LinkedIn">
          <img loading="lazy" src="/assets/linkedin.svg"  alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Aryan Gupta. All rights reserved.</p>
    </footer>
  );
};

export default Footer;