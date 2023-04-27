import React from "react";

const DatedeCommande= ({formCommande,setFormCommande,handleChangeDatedeCommande}) => {

 

    return (
        <div className="w-full  md:mb-4   ">
      
          <div className=" md:mt-14 md:flex md:items-center ">
            <span className=" lg:overflow-visible lg:opacity-100 lg:mr-4 md:-mr-28  lg:-mt-4  md:max-w-1/4 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
              Date de Livraion 
            </span>
            <input
              type="date"
              className="border-solid border-bg_input lg:w-full md:ml-8 md:w-full sm:w-80  py-2 px-4 md:mb-4  bg-white border-default   "
              name="dateLivraion"
              onChange={handleChangeDatedeCommande}
              placeholder=" ex 10/10/2020"
              value={formCommande.dateLivraion}
            ></input>
          </div>
          <div className=" md:-mt-1 md:flex md:items-center  ">
            <span className=" lg:overflow-visible lg:opacity-100 lg:mr-4   lg:-mt-4 md:-mr-28 md:overflow-hidden md:opacity-0 sm:overflow-hidden sm:opacity-0">
              Date D'échéance
            </span>
            <input
              type="date"
              className="border-solid border-bg_input lg:w-full md:ml-8  sm:w-80  md:w-full md:mb-4 py-2 px-4 bg-white border-default "
              name="dateDecheance"
              onChange={ handleChangeDatedeCommande}
              placeholder="ex 10/10/2020"
              value={formCommande.dateDecheance}
            ></input>
          </div>
       
      
      </div>
    )
}

export default DatedeCommande