import React, { useContext, useEffect, useState } from "react";
import Fournisseur from "../Component/detail_content/Fournisseur";
import Client from "../Component/detail_content/Client";
import DatedeCommande from "../Component/detail_content/DatedeCommande";
import TableauDeCommande from "../Component/detail_content/TableauDeCommande";
import Footer from "../Component/detail_content/Footer";
import { API, Token } from "../util/constante";
import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
import { getDocumentDefinition } from "../Facture/PDF";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import axios from "axios";
import moment from "moment";

export default function Index() {
  const initialStateClient = {
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
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
  const [codeFacture, setCodeFacture] = useState("Facture");
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

  const handleChangeCodeFacture = async (e) => {
    const { name, value } = e.target;
    setCodeFacture({ ...codeFacture, [name]: value });
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
  total.taxe = formListOfLigneCommande.reduce((cartTotal, cartItem) => {
    return (cartTotal += cartItem.taxeValeur);
  }, 0);

  const downloadPdf = () => {
    console.log(formListOfLigneCommande);
    const documentDefinition = getDocumentDefinition(
      total,
      itemsPrice,
      formListOfLigneCommande,
      formCommande,
      formFour,
      formValues,
      codeFacture
    );
    pdfMake.createPdf(documentDefinition).open();
    //pdfMake.createPdf(docDefinition).open();
  };

  const handleSubmit = async (e) => {
    console.log(clientId);
    e.preventDefault();
    let clientIds = clientId.toString();
    const options = {
      method: "POST",
      url: `${API}/factures`,
      headers: {
        Authorization: `Bearer ${Token}`,
      },
      data: {
        data: {
          totalavectaxe: total.montantTotalavecTaxe,
          clients: clientIds,
          date_echeance: moment(formCommande.dateDecheance).format(
            "YYYY-DD-MM"
          ),
          date_livraison: moment(formCommande.dateLivraison).format(
            "YYYY-DD-MM"
          ),
          date_facturation: moment(formCommande.deteDaFacture).format(
            "YYYY-DD-MM"
          ),
          totalsanstaxe: itemsPrice,
          totalTaxe: total.taxe,
          codeFacture: codeFacture,
          ligne_factures: console.log(
            ligne_commande.map((client) => client).join(",")
          ),
        },
      },
    };

    axios
      .request(options)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className=" ">
      <div className=" container  w-full  md:mx-auto lg:mx-auto sm:mx-auto sm:h-screen  md:h-screen lg:h-screen md:px-4  lg:px-4  sm:px-4  ">
        <div className="flex flex-wrap   -ml-4">
          <div className=" relative grid w-full grid-cols-1  px-4">
            <form onSubmit={handleSubmit}>
              <div className="bg-white  w-full shadow-lg  my-12">
                <div className="bg-black h-2"></div>
                <div className="md:min-h-full   relative md:py-2     lg:px-8 ">
                  <div className="px-12 md:px-4">
                    <div className="flex justify-between   !important ">
                      <h2 className="  mt-3 font-medium w-full  ">
                        {" "}
                        <input
                          type="text"
                          value={codeFacture}
                          className="lg:border-default pl-4 mt-4 lg:-ml-96 md:-ml-40 lg:border-background_button py-4 md:text-1.5rem lg:text-2rem sm:text-1.5rem  md:border-none  lg:border-solid "
                          onChange={(e) => handleChangeCodeFacture(e)}
                        ></input>
                      </h2>
                    </div>
                  </div>
                  <div className="  px-12 md:px-4">
                    <div className="flex flex-wrap -mx-4">
                      <div className="grid  lg:grid-cols-2   md:pb-2 relative px-4  sm:w-full md:w-full lg:px-4  ">
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
                  </div>

                  <div className="border-t-default border-solid border-divider  mt-8 lg:w-full md:w-11/12 lg:ml-0 md:ml-6  "></div>
                  <div className="  px-2 pt-2 pb-2">
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

              <div className="mb-16  lg:flex sm:flex-row-reverse justify-between">
                <button
                  className="inline-flex items-center text-sm font-medium h-15  py-4 mr-5 rounded-md border border-transparent text-white bg-black  
                        w-48 justify-center "
                  type="submit"
                >
                  generer une facture
                </button>
                <button
                  className="inline-flex items-center text-sm font-medium h-15  py-4  rounded-md border border-transparent text-white bg-black  
                        w-48 justify-center "
                  type="button"
                  onClick={() => downloadPdf()}
                >
                  telecharger une facture
                </button>
                <button
                  className="inline-flex items-center text-sm font-medium h-15  py-4  rounded-md border border-transparent text-white bg-black   
                     w-48 justify-center "
                  type="button"
                >
                  initialiser une facture
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
