import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
// elvio, sergio, marco
const data = {
  vendidos: [
    {
      mes: "septiembre",
      data: [
        {
          razonSocial: "ECOP S.A. EMPRENDIMIENTOS COMERCIALES Y",
          kg: "10632",
        },
        {
          razonSocial: "MARCOS ARIEL TOLEDO AVALOS",
          kg: "1300",
        },
        {
          razonSocial: "ELVIO SAMUEL ORTIGOZA BARBUDEZ",
          kg: "1240",
        },
        {
          razonSocial: "SERGIO JAVIER ESCURRA RODAS",
          kg: "969",
        },
        {
          razonSocial: "NELVO KUNTZ",
          kg: "637",
        },
        {
          razonSocial: "SAN LORENZO SRL",
          kg: "613",
        },
        {
          razonSocial: "AIKI SA",
          kg: "416",
        },
        {
          razonSocial: "BLAS LEGUIZAMON RUIZ",
          kg: "182",
        },
        {
          razonSocial: "PATROCINIA CASTILLO DE SANCHEZ",
          kg: "180",
        },
        {
          razonSocial: "SELMA NELLY CORDOBA SERVIAN",
          kg: "130",
        },
        {
          razonSocial: "VYZ SRL",
          kg: "104",
        },
        {
          razonSocial: "TOMASA ESCOBAR DE CESPEDES",
          kg: "103",
        },
        {
          razonSocial: "LIDIO RAMON CASTILLO PAEZ",
          kg: "91",
        },
        {
          razonSocial: "VICTORIA EDEN FERNANDEZ",
          kg: "91",
        },
        {
          razonSocial: "AICOM SA",
          kg: "90",
        },
        {
          razonSocial: "GRUPO EURO PARAGUAY SRL",
          kg: "90",
        },
        {
          razonSocial: "MARIA ESTER ROTELA ORTELLADO",
          kg: "65",
        },
        {
          razonSocial: "OSCAR ROBERTO KOZLONSKI",
          kg: "65",
        },
        {
          razonSocial: "RUBEN DARIO LEDEZMA ROJAS",
          kg: "65",
        },
        {
          razonSocial: "OSAMU SATO",
          kg: "45",
        },
        {
          razonSocial: "COMERCIAL CAAGUAZU SRL",
          kg: "26",
        },
        {
          razonSocial: "FELISA RAMONA PEREIRA DE GONZALEZ",
          kg: "26",
        },
        {
          razonSocial: "MATIAS DAMIAN BENITEZ BERON",
          kg: "26",
        },
        {
          razonSocial: "SIN NOMBRE",
          kg: "20",
        },
        {
          razonSocial: "JUANA BAUTISTA PAREDES ESCALADA",
          kg: "13",
        },
        {
          razonSocial: "LUCAS KICH RODRIGUES",
          kg: "13",
        },
      ],
    },
    {
      mes: "octubre",
      data: [
        {
          razonSocial: "ECOP S.A. EMPRENDIMIENTOS COMERCIALES Y",
          kg: "12580",
        },
        {
          razonSocial: "ELVIO SAMUEL ORTIGOZA BARBUDEZ",
          kg: "1600",
        },
        {
          razonSocial: "SERGIO JAVIER ESCURRA RODAS",
          kg: "1169",
        },
        {
          razonSocial: "NELVO KUNTZ",
          kg: "715",
        },
        {
          razonSocial: "MARCOS ARIEL TOLEDO AVALOS",
          kg: "650",
        },
        {
          razonSocial: "SAN LORENZO SRL",
          kg: "629",
        },
        {
          razonSocial: "AIKI SA",
          kg: "533",
        },
        {
          razonSocial: "LIDIO RAMON CASTILLO PAEZ",
          kg: "481",
        },
        {
          razonSocial: "ESTACION DE SERVICIO EL PIONERO S.A.",
          kg: "260",
        },
        {
          razonSocial: "SELMA NELLY CORDOBA SERVIAN",
          kg: "234",
        },
        {
          razonSocial: "PATROCINIA CASTILLO DE SANCHEZ",
          kg: "180",
        },
        {
          razonSocial: "OSCAR ROBERTO KOZLONSKI",
          kg: "169",
        },
        {
          razonSocial: "GRUPO EURO PARAGUAY SRL",
          kg: "135",
        },
        {
          razonSocial: "ESTACION DE SERVICIOS EL PIONERO S.A",
          kg: "117",
        },
        {
          razonSocial: "VICTORIA EDEN FERNANDEZ",
          kg: "104",
        },
        {
          razonSocial: "VYZ SRL",
          kg: "65",
        },
        {
          razonSocial: "MARIA ESTER ROTELA ORTELLADO",
          kg: "65",
        },
        {
          razonSocial: "TOMASA ESCOBAR DE CESPEDES",
          kg: "58",
        },
        {
          razonSocial: "JUANA BAUTISTA PAREDES ESCALADA",
          kg: "52",
        },
        {
          razonSocial: "BLAS LEGUIZAMON RUIZ",
          kg: "52",
        },
        {
          razonSocial: "SIN NOMBRE",
          kg: "49",
        },
        {
          razonSocial: "PEDRO LEONEL CHAMORRO BARUA",
          kg: "45",
        },
        {
          razonSocial: "GUILLERMO STEWART",
          kg: "45",
        },
        {
          razonSocial: "AICOM SA",
          kg: "45",
        },
        {
          razonSocial: "RUBEN DARIO LEDEZMA ROJAS",
          kg: "39",
        },
        {
          razonSocial: "COMERCIAL CAAGUAZU SRL",
          kg: "39",
        },
        {
          razonSocial: "VICENTE MARTINEZ",
          kg: "26",
        },
        {
          razonSocial: "SILVIO PAREDES",
          kg: "13",
        },
      ],
    },
    {
      mes: "noviembre",
      data: [
        {
          razonSocial: "ECOP S.A. EMPRENDIMIENTOS COMERCIALES Y",
          kg: "10522",
        },
        {
          razonSocial: "ELVIO SAMUEL ORTIGOZA BARBUDEZ",
          kg: "1290",
        },
        {
          razonSocial: "SERGIO JAVIER ESCURRA RODAS",
          kg: "1164",
        },
        {
          razonSocial: "AIKI SA",
          kg: "653",
        },
        {
          razonSocial: "MARCOS ARIEL TOLEDO AVALOS",
          kg: "650",
        },
        {
          razonSocial: "SAN LORENZO SRL",
          kg: "469",
        },
        {
          razonSocial: "LIDIO RAMON CASTILLO PAEZ",
          kg: "455",
        },
        {
          razonSocial: "NELVO KUNTZ",
          kg: "442",
        },
        {
          razonSocial: "PATROCINIA CASTILLO DE SANCHEZ",
          kg: "225",
        },
        {
          razonSocial: "SELMA NELLY CORDOBA SERVIAN",
          kg: "169",
        },
        {
          razonSocial: "TOMASA ESCOBAR DE CESPEDES",
          kg: "161",
        },
        {
          razonSocial: "GRUPO EURO PARAGUAY SRL",
          kg: "135",
        },
        {
          razonSocial: "VYZ SRL",
          kg: "117",
        },
        {
          razonSocial: "MARIA ESTER ROTELA ORTELLADO",
          kg: "104",
        },
        {
          razonSocial: "NAURU E.A.S.",
          kg: "90",
        },
        {
          razonSocial: "OSCAR ROBERTO KOZLONSKI",
          kg: "78",
        },
        {
          razonSocial: "SIN NOMBRE",
          kg: "59",
        },
        {
          razonSocial: "BLAS LEGUIZAMON RUIZ",
          kg: "52",
        },
        {
          razonSocial: "COMERCIAL CAAGUAZU SRL",
          kg: "52",
        },
        {
          razonSocial: "RUBEN DARIO LEDEZMA ROJAS",
          kg: "52",
        },
        {
          razonSocial: "VICTORIA EDEN FERNANDEZ",
          kg: "52",
        },
        {
          razonSocial: "GUILLERMO STEWART (Hotel Casa Blanca)",
          kg: "45",
        },
        {
          razonSocial: "PASTORA SILVERO DE GURPEGUI (Hotel Guarania)",
          kg: "45",
        },
        {
          razonSocial: "LUCAS KICH RODRIGUES",
          kg: "26",
        },
        {
          razonSocial: "ESTEBAN BERNANDO FERNANDEZ",
          kg: "13",
        },
      ],
    },
    {
      mes: "diciembre",
      data: [
        {
          razonSocial: "ECOP S.A. EMPRENDIMIENTOS COMERCIALES Y",
          kg: "10728",
        },
        {
          razonSocial: "ELVIO SAMUEL ORTIGOZA BARBUDEZ",
          kg: "1190",
        },
        {
          razonSocial: "SERGIO JAVIER ESCURRA RODAS",
          kg: "1116",
        },
        {
          razonSocial: "SAN LORENZO SRL",
          kg: "839",
        },
        {
          razonSocial: "MARCOS ARIEL TOLEDO AVALOS",
          kg: "650",
        },
        {
          razonSocial: "NELVO KUNTZ",
          kg: "546",
        },
        {
          razonSocial: "AIKI SA",
          kg: "379",
        },
        {
          razonSocial: "BLAS LEGUIZAMON RUIZ",
          kg: "208",
        },
        {
          razonSocial: "LIDIO RAMON CASTILLO PAEZ",
          kg: "182",
        },
        {
          razonSocial: "VICTORIA EDEN FERNANDEZ",
          kg: "156",
        },
        {
          razonSocial: "GRUPO EURO PARAGUAY SRL",
          kg: "135",
        },
        {
          razonSocial: "MULTIFOOD E.A.S.",
          kg: "135",
        },
        {
          razonSocial: "PASTORA SILVERO DE GURPEGUI (Hotel Guarania)",
          kg: "135",
        },
        {
          razonSocial: "PATROCINIA CASTILLO DE SANCHEZ",
          kg: "135",
        },
        {
          razonSocial: "ESTACION DE SERVICIO EL PIONERO S.A.",
          kg: "130",
        },
        {
          razonSocial: "SELMA NELLY CORDOBA SERVIAN",
          kg: "130",
        },
        {
          razonSocial: "NOILI ZUEGE HERTER",
          kg: "104",
        },
        {
          razonSocial: "OSCAR ROBERTO KOZLONSKI",
          kg: "104",
        },
        {
          razonSocial: "MARIA ESTER ROTELA ORTELLADO",
          kg: "91",
        },
        {
          razonSocial: "TOMASA ESCOBAR DE CESPEDES",
          kg: "90",
        },
        {
          razonSocial: "RUBEN DARIO LEDEZMA ROJAS",
          kg: "65",
        },
        {
          razonSocial: "SIN NOMBRE",
          kg: "62",
        },
        {
          razonSocial: "PASTAS DEL ESTE S.R.L.",
          kg: "45",
        },
        {
          razonSocial: "SELTZ S.A.",
          kg: "45",
        },
        {
          razonSocial: "VICTOR HUGO APODACA AQUINO",
          kg: "45",
        },
        {
          razonSocial: "XPLAST",
          kg: "45",
        },
        {
          razonSocial: "VYZ SRL",
          kg: "26",
        },
        {
          razonSocial: "ESTEBAN BERNANDO FERNANDEZ",
          kg: "13",
        },
      ],
    },
  ],
};

export default function Graphics() {
  const [monthlyData, setMonthlyData] = useState([]);
  // septiembre
  const [vendidos, setVendidos] = useState([]);
  const [razonSocial, setRazonSocial] = useState([]);
  // octubre
  const [vendidos2, setVendidos2] = useState([]);
  const [razonSocial2, setRazonSocial2] = useState([]);
  // noviembre
  const [vendidos3, setVendidos3] = useState([]);
  const [razonSocial3, setRazonSocial3] = useState([]);
  // noviembre
  const [vendidos4, setVendidos4] = useState([]);
  const [razonSocial4, setRazonSocial4] = useState([]);

  useEffect(() => {
    setMonthlyData(
      data.vendidos.map((item, index) => {
        let value = item.data.reduce((prev, curr) => prev + Number(curr.kg), 0);
        return { id: index, value: value, label: item.mes };
      })
    );
    // Septiembre
    setVendidos(data.vendidos[0].data.map((item) => Number(item.kg)));
    setRazonSocial(data.vendidos[0].data.map((item) => item.razonSocial));
    // Octubre
    setVendidos2(data.vendidos[1].data.map((item) => Number(item.kg)));
    setRazonSocial2(data.vendidos[1].data.map((item) => item.razonSocial));
    // noviembre
    setVendidos3(data.vendidos[2].data.map((item) => Number(item.kg)));
    setRazonSocial3(data.vendidos[2].data.map((item) => item.razonSocial));
    // diciembre
    setVendidos4(data.vendidos[3].data.map((item) => Number(item.kg)));
    setRazonSocial4(data.vendidos[3].data.map((item) => item.razonSocial));
  }, []);

  return (
    <>
      <Typography
        style={{ color: "#2c3e50", fontSize: 32, textAlign: "center" }}
      >
        Resultado comparado
      </Typography>
      {/* total */}
      <PieChart
        series={[
          {
            data: monthlyData,
          },
        ]}
        width={400}
        height={200}
      />
      {/* Septiembre */}
      <Typography style={{ color: "#2c3e50", fontWeight: "bold", margin: 20 }}>
        Septiembre: {" " + vendidos.reduce((prev, curr) => prev + curr, 0)}
      </Typography>
      <Box style={{ margin: 20 }}>
        <BarChart
          series={[{ data: vendidos }]}
          height={290}
          xAxis={[{ data: razonSocial, scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Box>
      {/* octubre */}
      <Typography style={{ color: "#2c3e50", fontWeight: "bold", margin: 20 }}>
        Octubre: {" " + vendidos2.reduce((prev, curr) => prev + curr, 0)}
      </Typography>
      <Box style={{ margin: 20 }}>
        <BarChart
          series={[{ data: vendidos2 }]}
          height={290}
          xAxis={[{ data: razonSocial2, scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Box>
      {/* noviembre */}
      <Typography style={{ color: "#2c3e50", fontWeight: "bold", margin: 20 }}>
        Noviembre: {" " + vendidos3.reduce((prev, curr) => prev + curr, 0)}
      </Typography>
      <Box style={{ margin: 20 }}>
        <BarChart
          series={[{ data: vendidos3 }]}
          height={290}
          xAxis={[{ data: razonSocial3, scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Box>
      {/* diciembre */}
      <Typography style={{ color: "#2c3e50", fontWeight: "bold", margin: 20 }}>
        Diciembre: {" " + vendidos4.reduce((prev, curr) => prev + curr, 0)}
      </Typography>
      <Box style={{ margin: 20 }}>
        <BarChart
          series={[{ data: vendidos4 }]}
          height={290}
          xAxis={[{ data: razonSocial4, scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Box>
    </>
  );
}
