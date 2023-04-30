import React, { useEffect, useState } from "react";
import { API, Token } from "../../util/constante";

import axios from "axios";
const PopoverClient = ({
  setSelected,
  formValues,
  selectedClient,
  setFormValues,
  setClientId,
  handleChangeNom,
  setToggleShowOfClient,
  toggleShowOfClient,
}) => {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    const fetchClient = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      axios.get(`${API}/clients`, config).then((response) => {
        let datas = response.data.data;
        const users = datas.map((x) => {
          return {
            id: x.id,
            email: x.attributes.email,
            adresse: x.attributes.adresse,
            nom: x.attributes.nom,
            prenom: x.attributes.prenom,
            Ville: x.attributes.Ville,
            codePostal: x.attributes.codePostal,
            telephone: x.attributes.telephone,
          };
        });

        setClient(users);
      });
    };

    fetchClient();
  }, []);

  const fetchClientById = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    axios.get(`${API}/clients/${id}`, config).then((response) => {
      let datas = response.data.data.attributes;
      setFormValues({
        nom: datas.nom + " " + datas.prenom,
        email: datas.email,
        telephone: datas.telephone,
        adresse: datas.adresse,
        Ville: datas.Ville,
        codePostal: datas.codePostal,
      });
    });
  };

  return (
    <>
      <input
        type="text"
        className="border-solid border-bg_input w-full   py-2 px-4 md:mb-4  bg-white border-default   "
        name="nom"
        onChange={handleChangeNom}
        placeholder="ex : Proxym"
        value={formValues.nom}
      ></input>

      {toggleShowOfClient && (
        <div className=" w-80 text-sm font-light absolute md:top-20 lg:top-36 ml-32  z-10 duration-150 ease-in-out text-gray-500 bg-white rounded-lg border-default border-gray shadow-sm opacity-100 transition-opacity  dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
          <div className="flex justify-end items-right ">
            <div>
              <button type="button" className="p-3  text-black min-w-2rem">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times"
                  className="w-3 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <option className="pl-5  mb-5 text-left">
            Selectionner un client{" "}
          </option>
          {clients.map((item, index) => (
            <div key={index}>
              <p
                key={item.id}
                value={item.id}
                className="pl-8 pt-5  pb-5 text-sm text-left hover:bg-panel"
                onClick={() => {
                  setSelected(item?.nom + " " + item?.prenom);
                  setClientId(item?.id);
                  if (selectedClient != "") {
                    setToggleShowOfClient(false);
                    fetchClientById(item?.id);
                  }
                }}
              >
                {item?.nom + "     " + item?.prenom}
              </p>
              <hr className="my-4  w-full border-t border-gray" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default PopoverClient;
