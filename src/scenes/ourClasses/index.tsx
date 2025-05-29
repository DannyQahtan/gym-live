import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";
import KarateImage from "@/assets/KarateImage.png";
import GroupClassesImage from "@/assets/GroupClassesImage.png";
import PersonalTrainingImage from "@/assets/PersonalTrainingImage.png";
import FindYourFitText from "@/assets/FindYourFitText.png";
import ClassesBackgroundImage from "@/assets/ClassesBackgroundImage.png";
import ClassesProgram from "@/assets/ClassesProgram.png";

const classes: Array<ClassType> = [
  {
    name: "GROUP CLASSES ",
    description: "At Altius, we believe in the power of unity. Our group classes offer an exhilarating experience, blending energy and motivation.",
    image: GroupClassesImage,
    programImage: ClassesProgram,
  },
  {
    name: "KARATE SCHOOL",
    description: "Discover the discipline and artistry of martial arts at our Karate School. Our experienced instructors blend traditional techniques with modern teaching methods.",
    image: KarateImage,
  },
  {
    name: "PERSONAL TRAINING",
    description: "We understand that every individual is unique, with distinct fitness goals, body types, and challenges. Our certified personal trainers are not just experts in their field but also passionate motivators.",
    image: PersonalTrainingImage,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <div style={{ backgroundImage: `url(${ClassesBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight:"100vh", overflow: "auto" }}>
    <section id="ourclasses" className="w-full  py-20 border-t-4 border-t-8 border-red-600">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img className="mx-auto w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5" style={{padding:"20px"}} src={FindYourFitText} alt="membership-text" />
        </motion.div>

        <div className="mt-10 flex justify-center flex-wrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              programImage={item.programImage}
            />
          ))}
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default OurClasses;
