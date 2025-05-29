import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsBackgroundImage from "@/assets/BenefitsBackgroundImage.png";
import MembershipPackagesText from "@/assets/MembershipPackagesText.png";
import { useState } from "react";

const benefits: Array<BenefitType> = [
  {
    description:
      "At Altius, we believe in the power of unity. Our group classes offer an exhilarating experience, blending energy and motivation. From heart-pumping cardio sessions to karate classes, our expert instructors tailor each class to accommodate all fitness levels.",
  },
];

type PackageType = { title: string; price: string }[];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const tabs = [
  "Single",
 '2 Person Family',
 '3 Person Family', 
 '4 Person Family',
  "Students/Soldiers",
];

const packages: { [key: string]: PackageType } = {
  'Single': [
    { title: "MONTHLY", price: "65€" },
    { title: "3 MONTHS", price: "175€" },
    { title: "6 MONTHS", price: "310€" },
    { title: "YEARLY", price: "530€" },
  ],
  '2 Person Family': [
    { title: "MONTHLY", price: "120€" },
    { title: "3 MONTHS", price: "320€" },
    { title: "6 MONTHS", price: "580€" },
    { title: "YEARLY", price: "1040€" },
  ],
  '3 Person Family': [
    { title: "MONTHLY", price: "180€" },
    { title: "3 MONTHS", price: "440€" },
    { title: "6 MONTHS", price: "800€" },
    { title: "YEARLY", price: "1300€" },
  ],
  '4 Person Family': [
    { title: "MONTHLY", price: "240€" },
    { title: "3 MONTHS", price: "560€" },
    { title: "6 MONTHS", price: "1050€" },
    { title: "YEARLY", price: "1700€" },
  ],
  "Students/Soldiers": [
    { title: "MONTHLY", price: "58€" },
    { title: "3 MONTHS", price: "170€" },
    { title: "6 MONTHS", price: "243€" },
    { title: "YEARLY", price: "420€" },
  ],
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Memberships = ({ setSelectedPage }: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div
      style={{
        backgroundImage: `url(${BenefitsBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <section id="memberships" className="mx-auto min-h-full w-5/6 py-20 ">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Memberships)}
        >
          {/* HEADER */}
          {/* <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div> */}

          {/* BENEFITS */}

          {/* <motion.div
            className="mt-5 flex items-center justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <Benefit
              key={"benefitKey"}
              description={benefits[0].description}
              setSelectedPage={setSelectedPage}
            />
          </motion.div> */}

          {/* MEMBERSHIP PACKAGES */}
          <div className="mx-auto mt-20 max-w-screen-md rounded-xl bg-black p-8 text-center shadow-lg border-2 border-red-600">
          <h2 className="mb-6 text-3xl font-bold text-red-500 uppercase tracking-wide">
              MEMBERSHIP PACKAGES
            </h2>
            <div className="mb-8 flex justify-center">
              <select
                value={selectedTab}
                onChange={(e) => setSelectedTab(e.target.value)}
                className="rounded-md border border-x-0 border-red-600 bg-black px-4 py-2  text-lg text-white shadow-sm"
              >
                {tabs.map((tab) => (
                  <option key={tab} value={tab} className="text-black">
                    {tab}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {packages[selectedTab].map((pkg, index) => (
                <div
                  key={index}
                  className={`min-w-[200px] rounded-xl p-6 text-center shadow-md ${
                    index === 2
                      ? "bg-red-500 text-black"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <p className="mb-2 text-2xl font-semibold">{pkg.title}</p>
                  <h3 className={`text-3xl font-bold ${
                    index !== 2
                      ? "text-red-400"
                      : "text-black"
                  } `}>{pkg.price}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-screen-md rounded-xl bg-black p-8 text-center shadow-lg border-2 border-red-600">
            <h2 className="mb-6 text-3xl font-bold text-red-500 uppercase tracking-wide">
              Additional Passes
            </h2>
            <ul className="space-y-4 text-lg text-white">
              <li className="flex justify-between border-b border-red-500 pb-2">
                <span>Daily Pass (First Visit)</span>
                <strong className="text-red-400">10€</strong>
              </li>
              <li className="flex justify-between border-b border-red-500 pb-2">
                <span>Daily Pass (Next Visits)</span>
                <strong className="text-red-400">15€</strong>
              </li>
              <li className="flex justify-between border-b border-red-500 pb-2">
                <span>
                  5-Visit Package
                  <span className="block text-sm text-gray-400">Valid for 5 weeks</span>
                </span>
                <strong className="text-red-400">40€</strong>
              </li>
              <li className="flex justify-between border-b border-red-500 pb-2">
                <span>
                  10-Visit Package
                  <span className="block text-sm text-gray-400">Valid for 10 weeks</span>
                </span>
                <strong className="text-red-400">70€</strong>
              </li>
              <li className="flex justify-between">
                <span>2 Week Pass</span>
                <strong className="text-red-400">40€</strong>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Memberships;
