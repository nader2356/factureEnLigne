import React, { useEffect, useState } from "react";
import { API, Token } from "../../util/constante";

import axios from "axios";
const PopoverProduits = ({
  selectedProduit,
  setSelected,
  setToggleShowOfProduct,
  setCategories,
  setPrix,
  setDescription,
}) => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      axios.get(`${API}/produits?populate=*`, config).then((response) => {
        let datas = response.data.data;

        const res = datas.map((annee) => {
          const categorie = annee.attributes.categories.data;
          return {
            id: annee.id,
            nom: annee.attributes.nom,
            prix: annee.attributes.prix,
            description: annee.attributes.description,
            categories: categorie
              .map((categorie) => categorie.attributes.Name)
              .join(", "),
          };
        });
        setProduits(res);
      });
    };

    fetchProduits();
  }, []);

  return (
    <div className=" w-60 text-sm font-light absolute md:top-20 lg:top-32 ml-2  z-10 duration-150 ease-in-out text-gray-500 bg-white rounded-lg border-default border-gray shadow-sm opacity-100 transition-opacity  dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
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
      <option className="pl-5  mb-5 text-left">Selectionner un produit </option>
      <div className="   mb-2   ">
        {produits.map(
          (item, index) => (
            console.log(item?.id),
            (
              <div key={index}>
                <p
                  key={item.id}
                  value={item.id}
                  className=" text-left  pl-10 pt-5 pb-5  mb-2 hover:bg-panel"
                  onClick={() => {
                    setSelected(item?.nom);
                    if (selectedProduit != "") {
                      setToggleShowOfProduct(false);
                      setCategories(item.categories);
                      setPrix(item.prix);
                      setDescription(item.description);
                    }
                  }}
                >
                  {item?.nom}
                </p>
                <hr className="my-3  w-full border-t border-gray" />
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
export default PopoverProduits;
