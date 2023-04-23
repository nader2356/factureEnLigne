import React, { useContext, useEffect, useState } from "react";
import Fournisseur from "../Component/detail_content/Fournisseur";
import Client from "../Component/detail_content/Client";
import DatedeCommande from "../Component/detail_content/DatedeCommande";
import TableauDeCommande from "../Component/detail_content/TableauDeCommande";
import Footer from "../Component/detail_content/Footer";
import { API, Token } from "../util/constante";
import axios from "axios";

export default function Index() {
  const initialStateClient = {
    nom: "",
    email: "",
    telephone: "",
    adresseRue: "",
    ville: "",
    codePostal: "",
  };

  const initialStateFour = {
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    Ville: "",
    codePostal: "",
  };

  const initialStateligneDeCommande = [
    {
      nom: "",
      prix: 0,
      categorie: "",
      montant: 0,
      Taxe: false,
      taxeValeur: 0,
      montantavecTaxe: 0,
      description: "",
      quantite: 1,
    },
  ];

  const initialStateDateCommande = {
    dateLivraison: "",
    deteDaFacture: "",
    dateDecheance: "",
  };
  const initialStateTotal = {
    taxe: 0,
    montantTotalavecTaxe: 0,
  };

  const [formListOfLigneCommande, setFormListOfLigneCommande] = useState(
    initialStateligneDeCommande
  );

  const [categories, setCategories] = useState("");
  const [ligne_commande, setligne_commande] = useState([]);
  const [description, setDescriptions] = useState("");
  const [clientId, setClientId] = useState(null);
  const [prix, setPrix] = useState(0);
  const [selectedProduit, setSelected] = useState("");
  const [total, setTotal] = useState(initialStateTotal);
  const [formFour, setFormFour] = useState(initialStateFour);
  const [formValues, setFormValues] = useState(initialStateClient);
  const [formCommande, setFormCommande] = useState(initialStateDateCommande);

  const handleChangeFour = async (e) => {
    const { name, value } = e.target;
    setFormFour({ ...formFour, [name]: value });
  };

  const handleChangeClient = async (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeDatedeCommande = async (e) => {
    const { name, value } = e.target;
    setFormCommande({ ...formCommande, [name]: value });
  };

  const itemsPrice = formListOfLigneCommande.reduce(
    (a, c) => a + c.quantite * c.prix,
    0
  );

  total.montantTotalavecTaxe = formListOfLigneCommande.reduce(
    (cartTotal, cartItem) => {
      return (cartTotal += cartItem.montantavecTaxe);
    },
    0
  );
  console.log(total.montantTotalavecTaxe, formListOfLigneCommande);
  total.taxe = formListOfLigneCommande.reduce((cartTotal, cartItem) => {
    return (cartTotal += cartItem.taxeValeur);
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .request(options)
      .then(function (response) {
        let res = response.data.data.id.toString();
        ligne_commande.push[{ res }];
        const options = {
          method: "POST",
          url: `${API}/factures`,
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          data: {
            data: {
              totalavectaxe: total.montantTotalavecTaxe,
              clients: clientId.toString(),
              date_echeance: formCommande.dateDecheance,
              date_livraison: formCommande.dateLivraison,
              date_facturation: formCommande.deteDaFacture,
              totalsanstaxe: itemsPrice,
              totalTaxe: total.taxe,
              ligne_factures: ligne_commande.map((client) => client).join(","),
            },
          },
        };
        axios
          .request(options)
          .then(function (response) {})
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(ligne_commande)
  return (
    <div className=" ">
      <div className=" container  w-full  md:mx-auto lg:mx-auto sm:mx-auto h-screen md:px-4  lg:px-4   sm:px-4  ">
        <div className="flex flex-wrap   -ml-4">
          <div className=" relative grid w-full grid-cols-1  px-4">
            <form onSubmit={handleSubmit}>
              <div className="bg-white  w-full shadow-lg  my-12">
                <div className="bg-black h-2"></div>
                <div className="min-h-full   md:py-2     px-8 ">
                  <div className="px-12">
                    <div className="flex justify-between ">
                      <h2 className="  mt-3 font-medium w-full  ">
                        {" "}
                        <input
                          type="text"
                          value="Facture 001"
                          className="lg:border-default pl-4 mt-4 -ml-96  lg:border-background_button py-4 md:text-1.5rem lg:text-2rem   md:border-none  lg:border-solid "
                        ></input>
                      </h2>
                    </div>
                  </div>
                  <div className="  px-12">
                    <div className="grid  lg:grid-cols-2 -mx-4 relative  w-full lg:px-4  ">
                      <Fournisseur
                        formFour={formFour}
                        setFormFour={setFormFour}
                        handleChangeFour={handleChangeFour}
                      ></Fournisseur>
                      <Client
                        formValues={formValues}
                        setFormValues={setFormValues}
                        handleChangeClient={handleChangeClient}
                        setClientId={setClientId}
                      ></Client>
                    </div>
                  </div>

                  <div className="border-t-default border-solid border-divider  mt-8 w-full  "></div>
                  <div className="  px-12">
                    <div className="grid  lg:grid-cols-2 md:grid-cols-1 -mx-4 relative  w-full lg:px-4  ">
                      <DatedeCommande
                        formCommande={formCommande}
                        setFormCommande={setFormCommande}
                        handleChangeDatedeCommande={handleChangeDatedeCommande}
                      ></DatedeCommande>
                    </div>
                  </div>
                  <div className="  px-10">
                    <div className="grid  grid-cols-1  relative  w-full   ">
                      <TableauDeCommande
                        formListOfLigneCommande={formListOfLigneCommande}
                        setCategories={setCategories}
                        categories={categories}
                        setPrix={setPrix}
                        prix={prix}
                        setligne_commande={setligne_commande}
                        ligne_commande={ligne_commande}
                        selectedProduit={selectedProduit}
                        setSelected={setSelected}
                        description={description}
                        setDescriptions={setDescriptions}
                        setFormListOfLigneCommande={setFormListOfLigneCommande}
                      ></TableauDeCommande>
                    </div>
                  </div>
                  <Footer montantTotal={itemsPrice} total={total}></Footer>
                </div>
              </div>

              <div className="mb-16   flex justify-between">
                <button
                  className="inline-flex items-center text-sm font-medium h-15  py-4 mr-5 rounded-md border border-transparent text-white bg-black  focus:outline-none 
                      focus:ring-2 focus:ring-offset-2   w-48 justify-center "
                  type="submit"
                >
                  generer une facture
                </button>
                <button
                  className="inline-flex items-center text-sm font-medium h-15  py-4  rounded-md border border-transparent text-white bg-black  focus:outline-none 
                      focus:ring-2 focus:ring-offset-2   w-48 justify-center "
                  type="button"
                >
                  telecharger une facture
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
