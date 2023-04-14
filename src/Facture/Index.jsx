import React, { useContext, useEffect, useState } from "react";
import Fournisseur from "../Component/detail_content/Fournisseur";
import Client from "../Component/detail_content/Client";



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
        nomSociete: "",
        emailSociete: "",
        telephoneSociete: "",
        adresseRueSociete: "",
        villeSociete: "",
        codePostalSociete: "",
      };
    

      const [formFour, setFormFour] = useState(initialStateFour);
      const [formValues, setFormValues] = useState(initialStateFour);
    
      const handleChangeFour = async (e) => {
        const { name, value } = e.target;
        setFormFour({ ...formFour, [name]: value });
      };

     
 

  return (
    <div className=" ">
      <div className=" container  w-full  md:mx-auto lg:mx-auto sm:mx-auto h-screen md:px-4  lg:px-4   sm:px-4  ">
        <div className="flex flex-wrap   -ml-4">
          <div className=" relative grid w-full grid-cols-1  px-4">
            <div className="bg-white  w-full shadow-lg  my-12">
              <div className="bg-black h-2"></div>
              <div className="min-h-1150px   md:py-2     px-8 ">
                <div className="px-12">
                  <div className="flex justify-between ">
                    <h2 className="  mt-3 font-medium w-full  ">
                      {" "}
                      <input
                        type="text"
                        value="Facture 001"
                        className="lg:border-default pl-4 mt-4  lg:border-background_button py-4 md:text-1.5rem lg:text-2rem   md:border-none  lg:border-solid "
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
                  
                   ></Client>

                  </div>
                </div>

                <div className="border-t-default border-solid border-divider  mt-8 w-full  "></div>
                <div className="  px-12">
                  <div className="grid  lg:grid-cols-2 md:grid-cols-1 -mx-4 relative  w-full lg:px-4  ">
                  //on va mettre ici le formulaire de date
                  </div>
                </div>
                <div className="  px-10">
                  <div className="grid  grid-cols-1  relative  w-full   ">
                  //on va mettre ici le tableau qui contient pulsieur ligne de commande
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
