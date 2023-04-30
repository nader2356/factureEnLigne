import React, { useState } from "react";
const Fournisseur = ({ formFour, setFormFour, handleChangeFour }) => {
  const [showDetailOfAdresse, setShowDetailOfAdresse] = useState(true);

  const handleChangeEmail = (e) => {
    const { name } = e.target;
    setFormFour({
      ...formFour,
      [name]: e.target.value,
    });
    setToggleShowOfClient(false);
  };

  const handleChangeTelephone = (e) => {
    const { name } = e.target;
    setFormFour({
      ...formFour,
      [name]: e.target.value,
    });
    setShowDetailOfAdresse(false);
  };

  return (
    <div className="w-full lg:pt-9 md:mb-4    ">
      <h3 className="text-1.75rem font-medium text-blackj text-left  mb-1">
        De
      </h3>

      <div className="lg:mt-4 md:mt-8 md:flex md:items-center ">
        <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20 md:-mr-8  lg:-mt-4  md:max-w-1/4 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
          Nom
        </span>
        <input
          type="text"
          className="border-solid border-bg_input w-full   py-2 px-4 md:mb-4  bg-white border-default   "
          name="nom"
          onChange={handleChangeFour}
          placeholder="ex : Proxym"
          value={formFour.nom}
        ></input>
      </div>

      <div className=" md:-mt-1 md:flex md:items-center  ">
        <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20  lg:-mt-4 md:-mr-9 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
          Email
        </span>
        <input
          type="text"
          className="border-solid border-bg_input w-full  lg:pr-10   md:mb-4 py-2 pl-4 bg-white border-default "
          name="email"
          onChange={(e) => handleChangeEmail(e)}
          placeholder="ex: proxym@gmail.com"
          value={formFour.email}
        ></input>
      </div>
      <div className=" md:-mt-1 md:flex md:items-center  ">
        <span className=" lg:overflow-visible lg:opacity-100 lg:mr-16 lg:-mt-4  md:-mr-14 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
          Adresse
        </span>
        <input
          type="text"
          onChange={handleChangeFour}
          className="border-solid border-bg_input w-full  md:mb-4 sm:mb-4  py-2 px-4 bg-white border-default "
          name="adresse"
          placeholder="ex: Rue louis marlouf"
          value={formFour.adresse}
        ></input>
      </div>
      {showDetailOfAdresse && (
        <>
          <div className=" md:-mt-1  md:flex md:items-center  ">
            <input
              type="number"
              onChange={handleChangeFour}
              className="border-solid border-bg_input lg:ml-40 w-full sm:ml-5 sm:mb-4  md:mb-4  py-2 px-4 bg-white border-default "
              name="codePostal"
              placeholder="ex: 4045"
              value={formFour.codePostal}
            ></input>
          </div>
          <div className=" md:-mt-1  md:flex md:items-center  ">
            <input
              type="text"
              onChange={handleChangeFour}
              className="border-solid border-bg_input w-full sm:ml-5  lg:ml-40 md:mb-4 py-2 px-4 bg-white border-default "
              name="ville"
              placeholder="ex: Sousse"
              value={formFour.ville}
            ></input>
          </div>
        </>
      )}
      <div className=" md:-mt-1 md:flex md:items-center  ">
        <span className=" lg:overflow-visible lg:opacity-100 lg:mr-12   lg:-mt-1 md:-mr-16 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
          Telephone
        </span>
        <input
          type="number"
          className="border-solid border-bg_input w-full lg:ml-0   md:-ml-2  py-2 px-4 bg-white border-default "
          name="telephone"
          onChange={(e) => handleChangeTelephone(e)}
          placeholder="ex : 207512650"
          value={formFour.telephone}
        ></input>
      </div>
    </div>
  );
};
export default Fournisseur;
