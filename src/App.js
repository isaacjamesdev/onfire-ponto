import { useCallback, useState } from "react";
import { getListOfMonths, getPeriod } from "./utils";
import "./App.css";
import TableBody from "./components/Table";
import Form from "./components/Form";

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

  return (
    <div>
      <div className="form">
        <Form onSubmit={handlePrint} onChange={handleOnChange} value={form} />
        <p>Dicas:</p>
        <p>
          1: Converta o .pdf para .doc através{` `}
          <a href="https://www.ilovepdf.com/pt/pdf_para_word" target="_blank">
            desse link
          </a>
          {` `}e edite o arquivo para adicionar férias, atestados e feriados.
        </p>
        <p>2: Nas configurações de impressão > Mais definições > desmarque a opção "Cabeçalhos e rodapés" </p>
      </div>
      {listOfMonths.map((month) => (
        <div>
          <table className="page-break to-print">
            <thead className="border">
              <tr>
                <th colSpan={6}>Empregador: {form.empregador}</th>
                <th className="border" colSpan={6}>
                  Empregado: {form.empregado} {form.nome}
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Endereço: {form.endereco}</th>
                <th className="border" colSpan={6}>
                  Cargo: {form.cargo}
                </th>
              </tr>
              <tr>
                <th colSpan={6}>
                  CNPJ/CEI: 06.029.766/0002-66 Período: De {getPeriod(month)}
                </th>
                <th className="border" colSpan={6}>
                  CTPS: {form.ctps}
                </th>
              </tr>
              <tr>
                <th colSpan={5} className="border"></th>
                <th colSpan={2} className="border">
                  Prorrogação
                </th>
                <th colSpan={1} className="border"></th>
              </tr>
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
