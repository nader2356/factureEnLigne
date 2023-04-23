import React, { useEffect, useState } from "react";
import CommandeList from "../../Items/CommandeList";

import { API, Token } from "../../util/constante";
import axios from "axios";

const TableauDeCommande = ({
  formListOfLigneCommande,
  setFormListOfLigneCommande,
  categories,
  setPrix,
  prix,
  selectedProduit,
  setSelected,
  description,
  setCategories,
  setDescriptions,
  setligne_commande,
  ligne_commande,
}) => {
  const EducationDetailsListAddField = (actionType) => (event) => {
    event.preventDefault();

    let errorMsg = formListOfLigneCommande.map((education, key) => {
      if (
        formListOfLigneCommande[formListOfLigneCommande.length - 1].nom !==
          selectedProduit &&
        formListOfLigneCommande[formListOfLigneCommande.length - 1]
          .description !== description &&
        formListOfLigneCommande[formListOfLigneCommande.length - 1].prix !==
          prix &&
        formListOfLigneCommande[formListOfLigneCommande.length - 1]
          .categorie !== categories
      ) {
        const options = {
          method: "POST",
          url: `${API}/categories`,
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          data: {
            data: {
              Name: formListOfLigneCommande[formListOfLigneCommande.length - 1]
                .categorie,
            },
          },
        };
        axios
          .request(options)
          .then(function (response) {
            const options = {
              method: "POST",
              url: `${API}/produits`,
              headers: {
                Authorization: `Bearer ${Token}`,
              },
              data: {
                data: {
                  nom: formListOfLigneCommande[
                    formListOfLigneCommande.length - 1
                  ].nom,
                  prix: formListOfLigneCommande[
                    formListOfLigneCommande.length - 1
                  ].prix,
                  description:
                    formListOfLigneCommande[formListOfLigneCommande.length - 1]
                      .description,
                  quantite:
                    formListOfLigneCommande[formListOfLigneCommande.length - 1]
                      .quantite,
                  categories: response.data.data.id,
                },
              },
            };
            axios
              .request(options)
              .then(function (response) {
                const options = {
                  method: "POST",
                  url: `${API}/ligne-commandes`,
                  headers: {
                    Authorization: `Bearer ${Token}`,
                  },
                  data: {
                    data: {
                      quantite:
                        formListOfLigneCommande[
                          formListOfLigneCommande.length - 1
                        ].quantite,
                      produits: response.data.data.id.toString(),
                    },
                  },
                };
                axios
                  .request(options)
                  .then(function (response) {
                    let res = response.data.data.id.toString();
                    ligne_commande.push({ res });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
        setFormListOfLigneCommande([
          ...formListOfLigneCommande,
          {
            nom: "",
            description: "",
            montant: 0,
            quantite: 1,
            prix: 0,
            Taxe: false,
            taxeValeur: 0,
            montantavecTaxe: 0,
          },
        ]);
      } else {
        setFormListOfLigneCommande([
          ...formListOfLigneCommande,
          {
            nom: "",
            description: "",
            montant: 0,
            quantite: 1,
            prix: 0,
            Taxe: false,
            taxeValeur: 0,
            montantavecTaxe: 0,
          },
        ]);
      }
    });
  };
  return (
    <div className="overflow-x-auto rounded-lg lg:mt-4 md:-mt-8  bg-white  ">
      <table className="w-full border-collapse text-bg_button md:mb-4">
        <thead className="lg:border-b-default  lg:border-t-default lg:border-black   md:overflow-hidden md:opacity-0 lg:overflow-visible lg:opacity-100">
          <tr>
            <th className=" p-3  pr-12  text-left "></th>
            <th className=" pt-2 pb-2 pl-2  tracking-wide text-left ">
              ARTICLE
            </th>

            <th className="   pr-1 tracking-wide text-right  ">PRIX</th>
            <th className="   pr-1 tracking-wide text-right  ">QTTÉ</th>
            <th className=" pl-16  tracking-wide text-left   ">MONTANT</th>
            <th className="      tracking-wide  pl-32 pr-16">TAXES</th>
          </tr>
        </thead>
        <tbody>
          {formListOfLigneCommande.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <CommandeList
                  setCategories={setCategories}
                  formListOfLigneCommande={formListOfLigneCommande}
                  setFormListOfLigneCommande={setFormListOfLigneCommande}
                  index={index}
                  val={val}
                  prix={prix}
                  description={description}
                  categories={categories}
                  setPrix={setPrix}
                  setDescription={setDescriptions}
                  selectedProduit={selectedProduit}
                  setSelected={setSelected}
                ></CommandeList>
              </React.Fragment>
            );
          })}
          <tr className=" lg:grid-flow-col border-b-default border-dashed border-bg_input  ">
            <td className="pt-2 pb-2 border-none pl-6 ">
              <button
                className="p-3 bg-ffff text-rr rounded-large min-w-2rem   border-solid border-default border-background_button"
                onClick={EducationDetailsListAddField("add")}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plus"
                  className="w-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableauDeCommande;
