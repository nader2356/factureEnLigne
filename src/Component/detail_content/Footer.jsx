import React from "react";
const Footer = ({ total , montantTotal }) => {

  return (
    <div className="relative w-full text-right lg:ml-96">
      <div className="pt-10 pb-10 ml-72">
        <div className="w-4 -mb-4 flex ">
          <div className="min-w-130px">Sous-total</div>
          <div className="text-right  min-w-130px">
            <span>{parseFloat(montantTotal)} $</span>
          </div>
        </div>
        <div className="w-4 mt-5 -mb-4 flex ">
          <div className="min-w-130px">Taxe(20%)</div>
          <div className="text-right  min-w-130px">
            <span>{parseFloat(total.taxe)} $</span>
          </div>
        </div>
        <div className="w-4 mt-5 -mb-4 flex ">
          <div className="min-w-130px">Total</div>
          <div className="text-right  min-w-130px">
            <span>{parseFloat(total.montantTotalavecTaxe)} $</span>
          </div>
        </div>
        <div className="w-4 mt-5 flex ">
          <div className="min-w-130px">Solde du</div>
          <div className="text-right  min-w-130px">
            <span>{parseFloat(total.montantTotalavecTaxe)} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
