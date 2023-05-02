import { useCallback, useState } from "react";
import { getListOfMonths, getPeriod } from "./utils";
import "./App.css";
import TableBody from "./components/Table";
import Form from "./components/Form";
import {
  Accordion,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import pix from "./pix.png";

const TABLE_HEADER = [
  { name: "Dia", colSpan: 1 },
  { name: "E1", colSpan: 1 },
  { name: "S1", colSpan: 1 },
  { name: "E2", colSpan: 1 },
  { name: "S2", colSpan: 1 },
  { name: "E", colSpan: 1 },
  { name: "S", colSpan: 1 },
  { name: "Assinatura", colSpan: 3 },
];

function App() {
  const [form, setForm] = useState({
    empregado: "",
    nome: "",
    cargo: "",
    ctps: "",
    empregador: "",
    endereco: "",
    startYear: "",
    endYear: "",
    startMonth: "01",
    endMonth: "01",
    cnpj: "",
    lotacao: "",
  });

  const handleOnChange = useCallback((event) => {
    console.log(event.target.name, event.target.value);
    setForm((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handlePrint = () => {
    setListOfMonths(
      getListOfMonths(
        `${form.startYear}-${form.startMonth}`,
        `${form.endYear}-${form.endMonth}`
      )
    );

    setTimeout(() => {
      window.print();
    }, 2000);

    console.log(form);
  };

  const [listOfMonths, setListOfMonths] = useState([]);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="form">
        <Form onSubmit={handlePrint} onChange={handleOnChange} value={form} />
        <Divider style={{ margin: "20px 0" }}>Dicas:</Divider>
        <p className="hints">
          1: Converta o .pdf para .doc através{` `}
          <a
            href="https://www.ilovepdf.com/pt/pdf_para_word"
            target="_blank"
            rel="noreferrer"
          >
            desse link
          </a>
          {` `}e edite o arquivo para adicionar férias, atestados e feriados.
        </p>
        <p className="hints">
          2: Nas configurações de impressão > Mais definições > desmarque a
          opção "Cabeçalhos e rodapés"{" "}
        </p>

        <Divider style={{ margin: "20px 0" }}>Cafézinho:</Divider>
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Expanda-me</Typography>
          </AccordionSummary>
          <img src={pix} alt="Faz o pix bebê" width={200} height={200} />
        </Accordion>
      </div>
      {listOfMonths.map((month) => (
        <div>
          <p className="center-text to-print">Controle de frequência:</p>
          <table className="page-break to-print">
            <thead className="border">
              <tr>
                <th colSpan={6} className="border left-text">
                  Empregador: {form.empregador}
                </th>
                <th colSpan={4} className="border left-text">
                  CNPJ/CEI: {form.cnpj}
                </th>
              </tr>
              <tr>
                <th colSpan={6} className="border left-text">
                  Endereço: {form.endereco}
                </th>
                <th colSpan={4} className="border left-text">
                  Período: De {getPeriod(month)}
                </th>
              </tr>
              <tr>
                <th colSpan={6} className="border left-text">
                  Atividade:{" "}
                </th>
                <th colSpan={4} className="border left-text">
                  Lotação: {form.lotacao}
                </th>
              </tr>
              <tr>
                <th className="border left-text" colSpan={6}>
                  Empregado: {form.empregado} {form.nome}
                </th>
                <th className="border left-text" colSpan={6}>
                  CTPS: {form.ctps}
                </th>
              </tr>
              <tr>
                <th className="border left-text" colSpan={12}>
                  Cargo: {form.cargo}
                </th>
              </tr>
              <tr>
                <th colSpan={5} className="border left-text"></th>
                <th colSpan={2} className="border left-text">
                  Prorrogação
                </th>
                <th colSpan={2} className="border"></th>
              </tr>
              {/*  */}
              <tr className="border">
                {TABLE_HEADER.map((header, idx) => (
                  <th key={idx} className="border" colSpan={header.colSpan}>
                    {header.name}
                  </th>
                ))}
              </tr>
            </thead>
            <TableBody month={month} />

            <span className="signature-line">
              ___________________________________________
            </span>
            <span className="signature">Assinatura do Empregado</span>
          </table>
        </div>
      ))}
    </div>
  );
}

export default App;
