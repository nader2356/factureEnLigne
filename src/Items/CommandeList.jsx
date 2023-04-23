import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Plus from "../assets/add-circle-outline.svg";
import Minus from "../assets/remove-circle-outline.svg";

import PopoverProduits from "../Component/ui/PopoverProduit";
const CommandeList = ({
  formListOfLigneCommande,
  setFormListOfLigneCommande,
  index,
  val,
  selectedProduit,
  setSelected,
  setCategories,
  setDescription,
  setPrix,
  description,
  prix,
  categories,
}) => {
  const [toggleShowOfProduct, setToggleShowOfProduct] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(formListOfLigneCommande.length).fill(false)
  );

  const onHandle = (e, i) => {
    const { name } = e.target;
    let newForm = [...formListOfLigneCommande];

    setFormListOfLigneCommande(newForm);
    if (selectedProduit != "") {
      newForm[i][name] = selectedProduit;
    } else {
      newForm[i][name] = e.target.value;
    }
    setToggleShowOfProduct(true);
  };

  const onHandleCategorie = (e, i) => {
    const { name } = e.target;
    let newForm = [...formListOfLigneCommande];
    setFormListOfLigneCommande(newForm);
    if (selectedProduit != "") {
      newForm[i][name] = categories;
    } else {
      newForm[i][name] = e.target.value;
    }

    setToggleShowOfProduct(false);
  };

  const onHandlequantite = (e, i) => {
    const { name } = e.target;
    let newForm = [...formListOfLigneCommande];

    newForm[i][name] = parseFloat(e.target.value);
    console.log(e.target.value);
    setFormListOfLigneCommande(newForm);

    if (newForm[i].Taxe === true) {
      newForm[i].taxeValeur =
        (parseInt(e.target.value) * newForm[i].prix * 20) / 100;
      newForm[i].montantavecTaxe =
        newForm[i].taxeValeur + parseInt(e.target.value) * newForm[i].prix;
    } else {
      newForm[i].taxeValeur = 0;
      newForm[i].montantavecTaxe =
        newForm[i].taxeValeur + parseInt(e.target.value) * newForm[i].prix;
    }
  };

  const onHandleMontant = (e, i) => {
    const { name } = e.target;
    let newForm = [...formListOfLigneCommande];
    console.log(newForm);
    newForm[i][name] = e.target.value;
    setFormListOfLigneCommande(newForm);
  };

  const onHandleDescription = (e, i) => {
    e.target.name = "description";
    const { name } = e.target;
    let newForm = [...formListOfLigneCommande];
    setFormListOfLigneCommande(newForm);
    if (selectedProduit != "") {
      newForm[i][name] = description;
    } else {
      newForm[i][name] = e.target.value;
    }
  };

  const onHandleChangeTaxe = (e, i) => {
    e.target.name = "Taxe";
    console.log(checkedState);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === i ? !item : item
    );

    console.log(updatedCheckedState);

    setCheckedState(updatedCheckedState);
    console.log(checkedState, updatedCheckedState);

    const { name, value } = e.target;
    let newForm = [...formListOfLigneCommande];
    newForm[i][name] = updatedCheckedState[i];
    if (updatedCheckedState[i] === true) {
      newForm[i].taxeValeur = (newForm[i].montant * 20) / 100;
      newForm[i].montantavecTaxe =
        newForm[i].taxeValeur + parseInt(newForm[i].montant);
    } else {
      newForm[i].taxeValeur = 0;
      newForm[i].montantavecTaxe =
        newForm[i].taxeValeur + parseInt(newForm[i].montant);
    }
    console.log(formListOfLigneCommande[i].montantavecTaxe);
    setFormListOfLigneCommande(newForm);
  };

  const onHandlePrix = (e, i) => {
    e.target.name = "prix";
    const { name } = e.target;
    let newForm = [...formListOfLigneCommande];
    newForm[i][name] = parseInt(e.target.value);
    
    setFormListOfLigneCommande(newForm);

    if (selectedProduit != "") {
      newForm[i][name] = prix;
    } else {
      if (newForm[i].Taxe === true) {
        newForm[i].taxeValeur = (parseInt(e.target.value) * newForm[i].quantite * 20) / 100;
        newForm[i].montantavecTaxe =
          newForm[i].taxeValeur + parseInt(e.target.value) * newForm[i].quantite;
      } else {
        newForm[i].taxeValeur = 0;
        newForm[i].montantavecTaxe =
          newForm[i].taxeValeur + parseInt(e.target.value) * newForm[i].quantite;
      }
     
    }

    setToggleShowOfProduct(false);
  };

  return (
    <>
      <tr className="  border-b-default border-dashed border-bg_input ">
        <td className=" pb-32 border-none pl-3 ">
          {" "}
          <button className="p-3 bg-bb text-ggg rounded-large min-w-2rem border-solid border-default border-background_button">
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
        </td>

        <td className="pt-6 w-full    lg:grid-cols-1">
          <span>
            <input
              type="text"
              className="border-solid border-bg_input w-60  md:mb-4 pb-2 py-2 -ml-1   px-4 bg-white border-default "
              name="nom"
              placeholder="ex: chaise"
              onChange={(e) => onHandle(e, index)}
              value={val.nom}
            ></input>
          </span>
          {toggleShowOfProduct && (
            <PopoverProduits
              selectedProduit={selectedProduit}
              setSelected={setSelected}
              setPrix={setPrix}
              setDescription={setDescription}
              setCategories={setCategories}
              setToggleShowOfProduct={setToggleShowOfProduct}
            ></PopoverProduits>
          )}

          <span>
            <textarea
              type="textarea"
              className="border-solid border-bg_input w-full md:mb-4 pb-2 py-1 px-4 ml-2 bg-white border-default "
              name="description"
              placeholder="Description"
              onChange={(e) => onHandleDescription(e, index)}
              value={val.description}
            ></textarea>
          </span>
          <span>
            <input
              type="text"
              className="border-solid border-bg_input w-full  md:mb-4 pb-2 py-2 px-5 ml-2 -mt-2  bg-white border-default text-left "
              name="categorie"
              onChange={(e) => onHandleCategorie(e, index)}
              placeholder="ex: Meuble"
              value={val.categorie}
            ></input>
          </span>
        </td>

        <td className="  pb-28 border-none lg:pl-16 lg:pr-0 md:pr-12 md:pl-6   text-left w-full ">
          <span>
            <input
              type="number"
              className="border-solid border-bg_input w-28  md:mb-4  py-2  bg-white border-default text-right "
              name="prix"
              onChange={(e) => onHandlePrix(e, index)}
              value={parseInt(val.prix)}
              placeholder="ex: 20,20"
            ></input>
          </span>
        </td>
        <td className=" pb-32  border-none flex pt-6 pl-5 text-left w-full ">
          <input
            type="number"
            onChange={(e) => onHandlequantite(e, index)}
            name="quantite"
            className="border-solid border-bg_input w-28   md:mb-4  py-2 text-black  bg-white border-default text-right "
            value={parseInt(val.quantite)}
            placeholder="ex: 20,20"
          ></input>
        </td>
        <td className="  pb-28 border-none pl-9   w-full ">
          <input
            type="number"
            onChange={(e) => onHandleMontant(e, index)}
            name="montant"
            className="border-solid border-bg_input w-28   md:mb-4  py-2 text-black  bg-white border-default text-right "
            value={(val.montant = parseInt(val.quantite) * parseInt(val.prix))}
            placeholder="ex: 20,20"
          ></input>
        </td>
        <td className="  pb-36 border-none pl-24 pr-6 pt-6 text-center w-full ">
          <input
            type="checkbox"
            name="Taxe"
            checked={checkedState[index]}
            className="p-3 h-7   rounded-large min-w-2rem "
            onClick={(e) => onHandleChangeTaxe(e, index)}
            value={val.Taxe}
          />
        </td>
      </tr>
    </>
  );
};

export default CommandeList;
