import React from "react";

const DatedeCommande= ({formCommande,setFormCommande,handleChangeDatedeCommande}) => {

 

    return (
        <div className="w-full  md:mb-4    ">
        <form className=" ">
          <div className=" md:mt-14 md:flex md:items-center ">
            <span className=" lg:overflow-visible lg:opacity-100 lg:mr-10 md:-mr-28  lg:-mt-4  md:max-w-1/4 md:overflow-hidden md:opacity-0">
              Date de Livraion 
            </span>
            <input
              type="date"
              className="border-solid border-bg_input w-full   py-2 px-4 md:mb-4  bg-white border-default   "
              name="dateDeLivraion"
              onChange={handleChangeDatedeCommande}
              placeholder=" ex 10/10/2020"
              value={formCommande.dateDeLivraion}
            ></input>
          </div>
          <div className=" md:-mt-1 md:flex md:items-center  ">
            <span className=" lg:overflow-visible lg:opacity-100 lg:mr-10  lg:-mt-4 md:-mr-28 md:overflow-hidden md:opacity-0">
              Date D'échéance
            </span>
            <input
              type="date"
              className="border-solid border-bg_input w-full    md:mb-4 py-2 px-4 bg-white border-default "
              name="dateDéchéance"
              onChange={ handleChangeDatedeCommande}
              placeholder="ex 10/10/2020"
              value={formCommande.dateDéchéance}
            ></input>
          </div>
       
        </form>
      </div>
    )
}

export default DatedeCommande