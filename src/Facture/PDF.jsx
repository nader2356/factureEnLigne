import moment from "moment";
const getLigneCommande = (total) => {
  const exs = [];

  total.map((formListOfLigneCommande) => {
    console.log(formListOfLigneCommande);
    exs.push([
      {
        columns: [
          [
            {
              columns: [
                {
                  text: formListOfLigneCommande.nom,

                  width: "20%",
                  margin: [15, 0, 0, -50],
                  bold: true,
                  color: "black",
                },
                {
                  text: formListOfLigneCommande.prix + " " + "$",

                  width: "50%",
                  margin: [101, 2, 0, -20],

                  color: "black",
                },
                {
                  text: formListOfLigneCommande.quantite,
                  width: "20%",
                  margin: [-10, 2, 0, -20],

                  color: "black",
                },
                {
                  text: formListOfLigneCommande.montant + " " + "$",
                  width: "20%",
                  margin: [-10, 2, 0, -20],
                  bold: false,
                  color: "black",
                },
              ],
            },

            {
              columns: [
                {
                  text: formListOfLigneCommande.description,
                  margin: [15, 10, 0, 10],
                  width: "100%",
                  height: "0%",
                },
              ],
            },
          ],
        ],
        border: [false, false, false, true],

        borderColor: ["", "", "", "#CBD5E1"],
        layout: "noBorders",
      },
    ]);
  });

  return {
    table: {
      widths: ["*"],
      body: [...exs],
    },
  };
};

export const getDocumentDefinition = (
  formListOfLigneCommande,
  formCommande,
  total,
  itemsPrice,
  formFour,
  formValues,
  codeFacture
) => {
  

  return {
    content: [
      {
        columns: [
          [{ text: "jkjlkjlkjlklj" }],
          [
            {
              text: `${formValues.nom}`,
              fontSize: 20,
              color: "#555",
              margin: [0, -20, 0, 10],
            },
            {
              text: `${formValues.adresse}`,
              color: "#454545",
              margin: [0, 0, 0, 5],
            },
            {
              text: `${formValues.Ville}`,
              color: "#454545",
              margin: [0, 0, 0, 5],
            },
            {
              text: `${formValues.codePostal}`,
              color: "#454545",
              margin: [0, 0, 0, 5],
            },
            {
              text: `${formValues.telephone}`,
              color: "#454545",
              margin: [0, 0, 0, 5],
            },
            {
              text: `${formValues.email}`,
              color: "#454545",
              margin: [0, 0, 0, 30],
            },
          ],
          [
            {
              text: "FACTURE",
              fontSize: 10,
              color: "#454545",
              bold: true,
              margin: [80, -12, 0, 0],
            },
            {
              text: `${codeFacture}`,
              color: "#454545",
              margin: [80, 10, 0, 0],
            },
            {
              text: "DATE",
              color: "#454545",
              fontSize: 10,
              bold: true,
              margin: [80, 10, 0, 0],
            },
            {
              text: moment(`${itemsPrice.deteDaFacture}`).format("DD-MM-YYYY"),
              color: "#454545",
              margin: [80, 10, 0, 0],
            },

            {
              text: "DATE D'ÉCHÉANCE",
              bold: true,
              fontSize: 10,
              margin: [80, 10, 0, 0],
            },
            {
              text: moment(`${itemsPrice.dateDecheance}`).format("DD-MM-YYYY"),
              margin: [80, 10, 0, 0],
            },
          ],
        ],
      },
      {
        table: {
          body: [
            [
              {
                text: "",
                bold: false,
                border: [false, true, false, false],
                margin: [0, 0, 480, 0],
                borderColor: ["", "#CBD5E1", "", ""],
                alignment: "center",
              },
            ],
          ],
        },
      },
      {
        columns: [
          [
            {
              text: "ADRESSE DE FACTURATION",
              margin: [0, 30, 0, 0],
              color: "#454545",
            },
            {
              text: `${formFour.nom}`,
              color: "#454545",
              margin: [0, 10, 0, 0],
              bold: true,
            },
            {
              text: `${formFour.email}`,
              margin: [0, 10, 0, 20],
              color: "#454545",
            },
          ],
        ],
      },
      {
        table: {
          body: [
            [
              {
                text: "",
                bold: false,
                border: [false, true, false, false],
                margin: [0, 0, 480, 0],
                borderColor: ["", "#CBD5E1", "", ""],
                alignment: "center",
              },
            ],
          ],
        },
      },
      {
        columns: [
          [
            {
              text: "ARTICLE",
              style: "name",
            },
          ],
          [
            {
              text: "PRIX",
              style: "name3",
            },
          ],
          [
            {
              text: "QTTÉ",
              style: "name4",
            },
          ],
          [
            {
              text: "MONTANT",
              style: "name5",
            },
          ],
        ],
      },
      {
        table: {
          body: [
            [
              {
                text: "",
                bold: false,
                border: [false, true, false, false],
                margin: [0, 0, 480, 0],
                borderColor: ["", "#CBD5E1", "", ""],
                alignment: "center",
              },
            ],
          ],
        },
      },
      getLigneCommande(total),
      {
        columns: [
          [
            {
              text: "SOUS-TOTAL",
              width: "180%",
              bold: true,
              fontSize: 10,
              margin: [210, 10, 0, 0],
            },
            {
              text: "TAXE(20%)",
              width: "180%",
              bold: true,
              fontSize: 10,
              margin: [210, 12, 0, 10],
            },
            

            {
              text: "TOTAL",
              width: "180%",
              bold: true,
              fontSize: 10,
              margin: [210, 0, 0, 0],
            },

            {
              text: "SOLDE DÛ",
              width: "180%",
              bold: true,
              fontSize: 10,
              margin: [210, 10, 0, 0],
            },
          ],
          [
            {
              text: `${formCommande}` + " " + "$",
              fontSize: 10,
              margin: [150, 11, 0, 0],
            },
            {
              text: `${formListOfLigneCommande.taxe}` + " " + "$",
              fontSize: 10,
              margin: [150, 20, 0, 0],
            },
            {
              text:
                `${formListOfLigneCommande.montantTotalavecTaxe}` + " " + "$",
              fontSize: 10,
              margin: [150, 12, 0, 0],
            },
            {
              text:
                `${formListOfLigneCommande.montantTotalavecTaxe}` + " " + "$",
              fontSize: 10,
              margin: [150, 10, 0, 0],
            },
          ],
        ],
      },
    ],

    styles: {
      ParcoursAcadémique: {
        fontSize: 16,
        bold: true,
        color: "black",
        margin: [0, 10, 0, 10],
      },
      ExpériencesProfessionnelles: {
        fontSize: 16,

        bold: true,
        color: "black",
        margin: [0, 10, 0, 10],
      },
      Profil: {
        fontSize: 16,
        bold: true,
        color: "black",
        alignment: "left",
        margin: [0, 10, 0, 20],
      },

      name: {
        fontSize: 10,
        color: "black",
        bold: true,
        alignment: "left",
        width: "80%",
        margin: [20, 5, 0, 10],
      },
      name3: {
        fontSize: 10,
        color: "black",
        bold: true,
        alignment: "left",
        width: "80%",
        margin: [80, 5, 0, 10],
      },

      name4: {
        fontSize: 10,
        color: "black",
        bold: true,
        alignment: "left",
        width: "10%",
        margin: [80, 5, 0, 10],
      },
      name5: {
        fontSize: 10,
        color: "black",
        bold: true,
        alignment: "left",
        width: "10%",
        margin: [60, 5, 0, 10],
      },

      name2: { margin: [20, 10, 0, 20] },
    },
  };
};
