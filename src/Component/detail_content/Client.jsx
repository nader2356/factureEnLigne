import React, { useEffect, useState } from "react";
import PopoverClient from "../ui/PopoverClient";
import logo from "../../assets/down-arrow.png";

export default function Client({
  formValues,
  setFormValues,
  handleChangeClient,
}) {
  const [selectedClient, setSelected] = useState("");
  const [showDetailOfAdresse, setShowDetailOfAdresse] = useState(false);
  const [toggleShowOfClient, setToggleShowOfClient] = useState(false);

  const handleChangeNom = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
    setToggleShowOfClient(true);
  };

  const toggleShow = () => setShowDetailOfAdresse((prev) => !prev);
  const handleChangeAdresse = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
    toggleShow();
  };
  const handleChangeEmail = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
    setToggleShowOfClient(false);
  };

  return (
    <div className="w-full lg:pt-9  md:mb-4">
      <h3 className="text-1.75rem font-medium text-blackj lg:-ml-28 md:mb-4">
        Adresse de facturation
      </h3>

      <form className=" lg:ml-12 w-full lg:pr-6">
        <div className="lg:mt-4 md:mt-8 md:flex md:items-center ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20 md:-mr-8  lg:-mt-4  md:max-w-1/4 md:overflow-hidden md:opacity-0">
            Nom
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full   py-2 px-4 md:mb-4  bg-white border-default   "
            name="nom"
            onChange={(e) => handleChangeNom(e)}
            placeholder="ex : Proxym"
            value={formValues.nom}
          ></input>
          {toggleShowOfClient && (
            <PopoverClient
              setSelected={setSelected}
              selectedClient={selectedClient}
              setToggleShowOfClient={setToggleShowOfClient}
              formValues={formValues}
              setFormValues={setFormValues}
            ></PopoverClient>
          )}
        </div>

        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20  lg:-mt-4 md:-mr-9 md:overflow-hidden md:opacity-0">
            Email
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full  lg:pr-10   md:mb-4 py-2 pl-4 bg-white border-default "
            name="email"
            onChange={(e) =>  handleChangeEmail(e)}
            placeholder="ex: proxym@gmail.com"
            value={formValues.email}
          ></input>
        </div>
        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-16 lg:-mt-4  md:-mr-14 md:overflow-hidden md:opacity-0">
            Adresse
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full   md:mb-4  py-2 px-4 bg-white border-default "
            name="adresse"
            placeholder="ex: Rue louis marlouf"
            onChange={(e) =>  handleChangeAdresse(e)}
            value={formValues.adresse}
          ></input>
        </div>
        {showDetailOfAdresse && (
          <>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="number"
                className="border-solid border-bg_input lg:ml-40 w-full   md:mb-4  py-2 px-4 bg-white border-default "
                name="codePostal"
                placeholder="ex: 4045"
                onChange={(handleChangeClient)}
                value={formValues.codePostal}
              ></input>
            </div>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="text"
                className="border-solid border-bg_input w-full   md:mb-4  lg:ml-40 py-2 px-4 bg-white border-default "
                name="Ville"
                placeholder="ex: Sousse"
                onChange={handleChangeClient}
                value={formValues.Ville}
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
            name="telephone"
            placeholder="ex : 207512650"
            onChange={handleChangeClient}
            value={formValues.telephone}
          ></input>
        </div>
      </form>
    </div>
  );
}
