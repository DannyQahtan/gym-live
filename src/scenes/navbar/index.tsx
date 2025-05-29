import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {

  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = "bg-primary-100 drop-shadow" ;
  const navbarClass = isTopOfPage ? 'h-28' : 'h-20'; 
  const logoClass = isTopOfPage ? 'h-20' : 'h-14';
  const textClass = "text-secondary-500"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} ${navbarClass} fixed top-0 z-30 w-full py-6 transition-all duration-500 ease-in-out`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
              
              {/* LEFT SIDE */}
              <img src={Logo} alt="logo" className={`${logoClass} transition-all duration-500 ease-in-out`} />

              {/* RIGHT SIDE */}
              {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} ${textClass} gap-8`}>
                  <Link 
                    page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <Link 
                    page="Memberships" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <Link 
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />               
                  <Link 
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />  
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <ActionButton setSelectedPage={setSelectedPage}>Join us</ActionButton>
                  <ActionButton setSelectedPage={setSelectedPage} downloadApp={true}>Download App</ActionButton>
                </div>
              </div>
              ) : (
                <button
                  className="rounded-full bg-primary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
              
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      
      <div className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${isMenuToggled ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
            
        {/* CLOSE BUTTON */}

        <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
        </div>

        {/* MENU ITEMS */}
        
        <div className='ml-[20%] flex flex-col gap-10 text-white text-2xl'>
          <Link 
            page="Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled}
          />
          <Link 
            page="Memberships" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled}
          />
          <Link 
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled}
          />               
          <Link 
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled}
          />
          </div>
          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-4 mt-8 text-black  p-8 m-4 text-center">
            <ActionButton setSelectedPage={setSelectedPage}>Join us</ActionButton>
            <ActionButton setSelectedPage={setSelectedPage} downloadApp={true}>Download App</ActionButton>
            </div>
        
      </div>
        
    </nav>
  )
}

export default Navbar;