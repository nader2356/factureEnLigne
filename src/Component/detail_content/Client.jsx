import React, { useState } from "react";
import PopoverClient from "../ui/PopoverClient";

export default function Client({
  formValues,
  setFormValues,
  setClientId,
  clientId,
}) {
  const [selectedClient, setSelected] = useState("");
  const [showDetailOfAdresse, setShowDetailOfAdresse] = useState(true);
  const [toggleShowOfClient, setToggleShowOfClient] = useState(false);

  const handleChangeNom = (e) => {
    const { name } = e.target;
    setFormValues((prevState) => ({
      formValues: {
        ...prevState.formValues,
        name: e.target.value,
      },
    })),
      setToggleShowOfClient(true);
  };

  const handleChangeAdresse = (e) => {
    const { name } = e.target;
    setFormValues((prevState) => ({
      formValues: {
        ...prevState.formValues,
        name: e.target.value,
      },
    }))
  };
  const handleChangeEmail = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
  };

  const handleChangeCodePostal = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
  };
  const handleChangeVille = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
  };
  const handleChangeTelephone = (e) => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
    setShowDetailOfAdresse(false);
  };

  return (
    <div className="w-full lg:pt-5  md:mb-4 ">
      <h3 className="text-1.75rem w-full font-medium text-blackj lg:ml-8 text-left sm:mt-4 ">
        Adresse de facturation
      </h3>

      <div className=" lg:ml-8  w-full lg:pr-6">
        <div className="lg:mt-4 md:mt-8 md:flex md:items-center ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20 md:-mr-8  lg:-mt-4  md:max-w-1/4 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
            Nom
          </span>

          <PopoverClient
            setSelected={setSelected}
            selectedClient={selectedClient}
            setToggleShowOfClient={setToggleShowOfClient}
            formValues={formValues}
            toggleShowOfClient={toggleShowOfClient}
            handleChangeNom={handleChangeNom}
            setFormValues={setFormValues}
          ></PopoverClient>
        </div>

        <div className=" md:-mt-1   md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20  lg:-mt-4 md:-mr-9 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
            Email
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full  lg:pr-10 md:mb-4  lg:mb-4 py-2 pl-4 bg-white border-default "
            name="email"
            onChange={(e) => handleChangeEmail(e)}
            placeholder="ex: proxym@gmail.com"
            value={formValues.email}
          ></input>
        </div>
        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-16 lg:-mt-4  md:-mr-14 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
            Adresse
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full    sm:mb-4  py-2 px-4 bg-white border-default "
            name="adresse"
            placeholder="ex: Rue louis marlouf"
            onChange={(e) => handleChangeAdresse(e)}
            value={formValues.adresse}
          ></input>
        </div>
        {showDetailOfAdresse && (
          <>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="number"
                className="border-solid border-bg_input  sm:ml-5 sm:mb-4 lg:ml-40 w-full   md:mb-4  py-2 px-4 bg-white border-default "
                name="codePostal"
                placeholder="ex: 4045"
                onChange={(e) => handleChangeCodePostal(e)}
                value={formValues.codePostal}
              ></input>
            </div>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="text"
                className="border-solid border-bg_input  sm:ml-5  lg:ml-40 w-full   md:mb-4 py-2 px-4 bg-white border-default "
                name="Ville"
                placeholder="ex: Sousse"
                onChange={(e) => handleChangeVille(e)}
                value={formValues.Ville}
              ></input>
            </div>
          </>
        )}
        <div className=" md:-mt-1 md:flex md:items-center   ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-12   lg:-mt-4 md:-mr-16 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
            Telephone
          </span>
          <input
            type="number"
            className="border-solid border-bg_input w-full md:-ml-2 lg:ml-0  md:mb-4 py-2 px-4 bg-white border-default "
            name="telephone"
            placeholder="ex : 207512650"
            onChange={(e) => handleChangeTelephone(e)}
            value={formValues.telephone}
          ></input>
        </div>
      </div>
    </div>
  );
}
