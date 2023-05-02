import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";

function Form({ onChange, onSubmit }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <form style={{ margin: "auto" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="Número do empregado"
            onChange={onChange}
            name="empregado"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="Nome completo"
            onChange={onChange}
            name="nome"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="Cargo"
            onChange={onChange}
            name="cargo"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="CTPS"
            onChange={onChange}
            name="ctps"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="Empregador"
            onChange={onChange}
            name="empregador"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="Endereço da Empresa"
            onChange={onChange}
            name="endereco"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="INICIAL: YYYY-MM"
            onChange={onChange}
            name="startPeriod"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="FINAL: YYYY-MM"
            onChange={onChange}
            name="endPeriod"
          />
        </form>
        <Button variant="contained" type="button" onClick={onSubmit}>
          Imprimir
        </Button>
      </div>
    </Box>
  );
}

export default Form;

// Número do Empregado:
// Nome Completo:
// Cargo:
// CTPS:

// Empregador:
// Endereço:

// período das folhas:
// ex.:  12/2020-08/2021;12/2021-12/2022
