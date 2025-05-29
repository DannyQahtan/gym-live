import { useState } from "react";
import Modal from "react-modal";

type Props = {
  name: string;
  description?: string;
  image: string;
  programImage?:string
};

const Class = ({ name, description, image, programImage }: Props) => {
  const overlayStyles = `p-5 absolute z-10 flex flex-col h-full w-full items-center justify-center whitespace-normal text-center bg-red-700 text-white opacity-0 transition duration-500 hover:opacity-90`;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLinkClick = (e:any) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  return (
    <div className="relative bg-red-800 m-5 mb-14 md:mb-5 inline-block h-[380px] w-full md:w-[30%]">
      
      <h2 className="text-3xl text-center text-secondary-500 p-3">{name}</h2>
      <div className={overlayStyles}>
        <p className="mb-5">{description}</p>
        {programImage && <a href="#" style={{textDecoration:"underline", marginTop:"5px"}} onClick={handleLinkClick}>See the program</a>}
      </div>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000 // Add a zIndex
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            width: '80%', // Add this line
            maxWidth: '800px', // Add this line
          }
        }}
      >
        <button style={{padding:"5px", marginBottom:"5px"}} onClick={() => setModalIsOpen(false)}>Close</button> 
        <img src={programImage} alt="Classes Program" style={{maxWidth: '100%', maxHeight: '100%'}} />
      </Modal>
      <img style={{width:"100%", height:"100%", objectFit: "cover", objectPosition: "top"}} src={image} alt="image" />
    </div>
  );
};

export default Class;
