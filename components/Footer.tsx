import { FaLocationArrow } from 'react-icons/fa6';
import { MagicButton } from './ui/MagicButton';
import { socialMedia } from '@/data';

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="./footer-grid.svg" alt="grid" className="w-full h-full opacity-20" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading ld:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span>digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you to achieve your goals
        </p>
        <a href="mailto:lesya.stulkivska@gmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
        <div className="flex items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex itens-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={img} alt={img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-16 flex-col gap-2 md:flex-row items-center relative">
        <p className="md:text-base text-sm md:font-normal font-light">{`Copyright © ${new Date().getFullYear()} Lesia Stulkivska`}</p>
      </div>
    </footer>
  );
};
