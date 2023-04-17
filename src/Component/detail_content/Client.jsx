import React, { useEffect, useState } from "react";
import PopoverClient from "../ui/PopoverClient";
import logo from "../../assets/down-arrow.png";

export default function Client({ formValues, setFormValues }) {
  const [toggleShowOfClient, setToggleShowOfClient] = useState(false);
  const [selectedClient, setSelected] = useState("");
  const [showDetailOfAdresse, setShowDetailOfAdresse] = useState(false);
  const [openListClient, setOpenList] = useState(false);
  const { nom, email, telephone, adresse, Ville, codePostal } = formValues;

  const changeNom = (e) => {
    setFormValues({
      ...formValues,
      nom: e.target.value,
    });

    setToggleShowOfClient(true);
  };
  const changeEmail = (e) => {
    e.target.name = "email";

    setFormValues({
      ...formValues,
      email: e.target.value,
    });
  };
  const changeTelephone = (e) => {
    setFormValues({
      ...formValues,
      telephone: e.target.value,
    });
  };

  const changeAdresseRue = (e) => {
    setFormValues({
      ...formValues,
      adresseRue: e.target.value,
    });

    changeCodePostal(e);
    changeVille(e);
  };

  const changeCodePostal = (e) => {
    setFormValues({
      ...formValues,
      codePostal: e.target.value,
    });
  };

  const changeVille = (e) => {
    setFormValues({
      ...formValues,
      Ville: e.target.value,
    });
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

          <PopoverClient
            setSelected={setSelected}
            changeNom={changeNom}
            setOpenList={setOpenList}
            openListClient={openListClient}
            selectedClient={selectedClient}
            formValues={formValues}
            setFormValues={setFormValues}
          ></PopoverClient>
        </div>

        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-20  lg:-mt-4 md:-mr-9 md:overflow-hidden md:opacity-0">
            Email
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full  lg:pr-10   md:mb-4 py-2 pl-4 bg-white border-default "
            name="email"
            onChange={(e) => changeEmail(e)}
            placeholder="ex: proxym@gmail.com"
            value={email}
          ></input>
        </div>
        <div className=" md:-mt-1 md:flex md:items-center  ">
          <span className=" lg:overflow-visible lg:opacity-100 lg:mr-16 lg:-mt-4  md:-mr-14 md:overflow-hidden md:opacity-0">
            Adresse
          </span>
          <input
            type="text"
            className="border-solid border-bg_input w-full   md:mb-4  py-2 px-4 bg-white border-default "
            name="adresseRue"
            placeholder="ex: Rue louis marlouf"
            onChange={(e) => changeAdresseRue(e)}
            value={adresse}
          ></input>
        </div>
        {showDetailOfAdresse && (
          <>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="number"
                className="border-solid border-bg_input lg:ml-40 w-full   md:mb-4  py-2 px-4 bg-white border-default "
                name="CodePostal"
                placeholder="ex: 4045"
                onChange={(e) => changeCodePostal(e)}
                value={codePostal}
              ></input>
            </div>
            <div className=" md:-mt-1  md:flex md:items-center  ">
              <input
                type="text"
                className="border-solid border-bg_input w-full   md:mb-4  lg:ml-40 py-2 px-4 bg-white border-default "
                name="Ville"
                placeholder="ex: Sousse"
                onChange={(e) => changeVille(e)}
                value={Ville}
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
            name="Telephone"
            placeholder="ex : 207512650"
            onChange={(e) => changeTelephone(e)}
            value={telephone}
          ></input>
        </div>
      </form>
    </div>
  );
}
