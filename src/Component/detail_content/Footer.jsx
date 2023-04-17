import React from "react";
const Footer = ({ montantTotalavecTaxe, taxeTotal, montantTotal }) => {
  
  return (
    <tr >
    <td className="pt-10 pb-10 text-right -mr-52">
      <div className="w-4 -mb-4 flex ">
        <div className="min-w-130px">Sous-total</div>
        <div className="text-right  min-w-130px">
        <span>{parseFloat(montantTotal)} $</span>
        </div>
      </div>
      <div className="w-4 mt-5 -mb-4 flex ">
        <div className="min-w-130px">Sous-total</div>
        <div className="text-right  min-w-130px">
        <span>0 $</span>
        </div>
      </div>
      <div className="w-4 mt-5 -mb-4 flex ">
        <div className="min-w-130px">Sous-total</div>
        <div className="text-right  min-w-130px">
          <span>0 $</span>
        </div>
      </div>
      <div className="w-4 mt-5 flex ">
        <div className="min-w-130px">Sous-total</div>
        <div className="text-right  min-w-130px">
          <span>0 $</span>
        </div>
      </div>
    </td>
  </tr>
  
  );
};

export default Footer;
