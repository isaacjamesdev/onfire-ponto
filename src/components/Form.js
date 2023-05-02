import { TextField, Button, Select, MenuItem, Divider, InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";

function Form({ onChange, onSubmit, value }) {
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
          <Divider>Dados do funcionário</Divider>
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
          <Divider>Dados da Empresa</Divider>
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
            label="CNPJ/CEI:"
            onChange={onChange}
            name="cnpj"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            label="Lotação:"
            onChange={onChange}
            name="lotacao"
          />
          <div>
            <Divider>Período Inicial</Divider>
            <InputLabel id="demo-simple-select-label">Mês Inicial</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value.startMonth}
              onChange={onChange}
              name="startMonth"
            >
              <MenuItem value={"01"}>Janeiro</MenuItem>
              <MenuItem value={"02"}>Fevereiro</MenuItem>
              <MenuItem value={"03"}>Março</MenuItem>
              <MenuItem value={"04"}>Abril</MenuItem>
              <MenuItem value={"05"}>Maio</MenuItem>
              <MenuItem value={"06"}>Junho</MenuItem>
              <MenuItem value={"07"}>Julho</MenuItem>
              <MenuItem value={"08"}>Agosto</MenuItem>
              <MenuItem value={"09"}>Setembro</MenuItem>
              <MenuItem value={"10"}>Outubro</MenuItem>
              <MenuItem value={"11"}>Novembro</MenuItem>
              <MenuItem value={"12"}>Dezembro</MenuItem>
            </Select>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              label="Ano Inicial"
              onChange={onChange}
              name="startYear"
            />
          </div>
          <div>
            <Divider>Período Final</Divider>
            <InputLabel id="demo-simple-select-label">Mês Final</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value.endMonth}
              onChange={onChange}
              name="endMonth"
            >
              <MenuItem value={"01"}>Janeiro</MenuItem>
              <MenuItem value={"02"}>Fevereiro</MenuItem>
              <MenuItem value={"03"}>Março</MenuItem>
              <MenuItem value={"04"}>Abril</MenuItem>
              <MenuItem value={"05"}>Maio</MenuItem>
              <MenuItem value={"06"}>Junho</MenuItem>
              <MenuItem value={"07"}>Julho</MenuItem>
              <MenuItem value={"08"}>Agosto</MenuItem>
              <MenuItem value={"09"}>Setembro</MenuItem>
              <MenuItem value={"10"}>Outubro</MenuItem>
              <MenuItem value={"11"}>Novembro</MenuItem>
              <MenuItem value={"12"}>Dezembro</MenuItem>
            </Select>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              label="Ano Final"
              onChange={onChange}
              name="endYear"
            />
          </div>
        </form>
        <Divider>Tudo pronto?</Divider>
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
