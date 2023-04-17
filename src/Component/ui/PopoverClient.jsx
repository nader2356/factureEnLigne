import React, { useEffect, useState } from "react";
import { API, Token } from "../../util/constante";

import axios from "axios";
const PopoverClient = ({
  setSelected,
  formValues,
  selectedClient,
  setFormValues,
  setOpenList,
  handleChangeClient,
  openListClient,
}) => {
  const [clients, setClient] = useState([]);
  const { nom } = formValues;
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

  const fetchClientById = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    axios.get(`${API}/clients/${id}`, config).then((response) => {
      let datas = response.data.data.attributes;
      console.log(datas);
      setFormValues(datas);
      formValues.nom = datas.nom + " " + datas.prenom;
      formValues.email = datas.email;
      formValues.telephone = datas.telephone;
      formValues.codePostal = datas.codePostal;
      formValues.Ville = datas.Ville;
      formValues.adresse = datas.adresse;
      
    });
  };

  return (
    <>
      <div className="flex-none">
        <div className="flex">
          <label className="relative block">
            <input
              type="text"
              value={nom}
              onChange={handleChangeClient}
              className="border-solid border-bg_input w-full lg:pr-36 md:pr-80   py-2 px-4 md:mb-4  bg-white border-default   "
              placeholder="ex : Proxym"
            ></input>

            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 pb-4"
              onClick={() => setOpenList(!openListClient)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </label>
        </div>
        <ul
          className = {`bg-panel  w-full overflow-y-auto ${openListClient ? "max-h-60" : "max-h-0"
        } `}
        >
          <option className="pl-5 pt-5 mb-5 text-left">Selectionner un client </option>
          {clients.map((item) => (
            <li
              key={item.id}
              value={item.id}
              className="pl-8 pt-5 pb-5 text-sm text-left hover:bg-panel"
              onClick={() => {
                setSelected(item?.nom + " " + item?.prenom);
                console.log(selectedClient);
                if (selectedClient != "") {
                  setOpenList(false);
                  fetchClientById(item?.id);
                }
              }}
            >
              {item?.nom + "     " + item?.prenom}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default PopoverClient;
