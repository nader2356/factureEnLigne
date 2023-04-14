import React, { useState } from "react";
const Fournisseur = ({formFour,setFormFour,handleChangeFour}) => {
  const [showDetailOfAdresse, setShowDetailOfAdresse] = useState(false);
  const toggleShow = () => setShowDetailOfAdresse((prev) => !prev);


  const { nomSociete,emailSociete,telephoneSociete,adresseRueSociete,villeSociete,codePostalSociete} = formFour; 

  const handleChangeAdresse = (e) => {
    setFormFour({
      ...formFour,
      adresseRueSociete: e.target.value,
    });
    toggleShow();
  };
  
  return (
    <div className="w-full lg:pt-9 md:mb-4    ">
      <h3 className="text-1.75rem font-medium text-blackj  md:mb-4">De</h3>

      <form className=" ">
        <div className="lg:mt-4 md:mt-8 md:flex md:items-center ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20 md:-mr-8  lg:-mt-4  md:max-w-1/4 md:overflow-hidden md:opacity-0">
            Nom
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full   py-2 px-4 md:mb-4  bg-white border-default   "
            name="nomSociete"
            onChange={handleChangeFour}
            placeholder="ex : Proxym"
            value={nomSociete}
          ></input>
        </div>

        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20  lg:-mt-4 md:-mr-9 md:overflow-hidden md:opacity-0">
            Email
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full  lg:pr-10   md:mb-4 py-2 pl-4 bg-white border-default "
            name="emailSociete"
            onChange={handleChangeFour}
            placeholder="ex: proxym@gmail.com"
            value={emailSociete}
          ></input>
        </div>
        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-16 lg:-mt-4  md:-mr-14 md:overflow-hidden md:opacity-0">
            Adresse
          </span>
          <input
            type="text"
            onChange={(e) => handleChangeAdresse(e)}
            className="border-solid border-bg_input w-full  md:mb-4  py-2 px-4 bg-white border-default "
            name="adresseRueSociete"
            placeholder="ex: Rue louis marlouf"
            value={adresseRueSociete}
          ></input>
        </div>
        {showDetailOfAdresse && (
          <>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="number"
                onChange={handleChangeFour}
                className="border-solid border-bg_input lg:ml-40 w-full   md:mb-4  py-2 px-4 bg-white border-default "
                name="codePostalsociete"
                placeholder="ex: 4045"
                value={codePostalSociete}
              ></input>
            </div>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="text"
                onChange={handleChangeFour}
                className="border-solid border-bg_input w-full   md:mb-4  lg:ml-40 py-2 px-4 bg-white border-default "
                name="villesociete"
                placeholder="ex: Sousse"
                value={villeSociete}
              ></input>
            </div>
          </>
        )}
        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-12   lg:-mt-4 md:-mr-16 md:overflow-hidden md:opacity-0">
            Telephone
          </span>
          <input
            type="number"
            className="border-solid border-bg_input w-full    md:mb-4 py-2 px-4 bg-white border-default "
            name="telephoneSociete"
            onChange={handleChangeFour}
            placeholder="ex : 207512650"
            value={telephoneSociete}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default Fournisseur;
