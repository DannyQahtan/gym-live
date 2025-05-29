import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import BackgroundImage from "@/assets/BackgroundImage.png"
import SponsorPanatta from "@/assets/SponsorPanatta.png"
import SponsorFamous from "@/assets/SponsorFamous.png"
import SponsorPrive from "@/assets/SponsorPrive.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import InstagramCarousel from "./InstagramCarousel"; // Import the InstagramCarousel component

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const homeText1Class = "text-white text-2xl" ;
  
  return (
    <section
      id="home"
      className="flex flex-col justify-between gap-16 bg-gray-20 md:h-full md:mb-0 "
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center  md:h-5/6 "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-64 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
            >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className={`mt-8 text-sm ${homeText1Class}`}>
              The Energy of Nicosia
            </p>
          </motion.div>

          {/* ACTIONS */}

          <motion.div 
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Get Started
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
              onClick={ () => setSelectedPage(SelectedPage.OurClasses)}
              href={`#${SelectedPage.ContactUs}`}
            >
            </AnchorLink>
          </motion.div>

          {/* Instagram Carousel */}
          {/* <InstagramCarousel /> */}

        </div>

        {/* IMAGE */}

        {/* <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end ">
          <img src={HomePageGraphic} alt="Home-pageGraphic" />
        </div> */}
      </motion.div>

      {/* SPONSORS */}
      
      {isAboveMediumScreens && (
        <div className="h-[150px] flex w-full bg-primary-100 md:p-8 lg:p-7 ">
          <div className="mx-auto w-5/6">
            <div className="flex justify-center space-x-48 items-center">
              <a href="https://www.panattasport.com/en/" target='_blank'><img  src={SponsorPanatta} alt="panatta-sponsor" /></a>
              <a href="https://www.famousports.com/" target='_blank'><img src={SponsorFamous} alt="famous-sponsor" /></a>
              <a href="https://www.privesports.com.cy/" target='_blank'><img src={SponsorPrive} alt="famous-sponsor" /></a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
