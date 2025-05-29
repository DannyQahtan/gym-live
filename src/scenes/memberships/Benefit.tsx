import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"
import BenefitsText from "../../assets/BenefitsText.png"

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1.0 }
}

type Props = {
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({description, setSelectedPage}: Props) => {
  return (
    <motion.div 
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-10 text-left w-full sm:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 h-auto lg:h-[1000px]" // Responsive height classes
      variants={childVariant}
      style={{ backgroundColor:"white"}}
    >

        <img src={BenefitsText} alt="benefits-text" style={{paddingBottom:"10px"}} />

        <p className="my-3">
          {description}
        </p>

        <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-primary-300"
              onClick={ () => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.OurClasses}`}
            >
              <p>Discover our Group Classes</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit
