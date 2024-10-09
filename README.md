## Teste tecnico Polgo backend

## Instalar dependecias do projeto caso for executar o mesmo localmente:
```
npm install
```

### Subir a aplicação localmente
```
npm run dev
```

OBS: Se for realizar o teste localmente será necessario a criação do .env, com as variaveis de ambiente da aplicação, todas utilizadas estão registradas seu nome no arquibo .env.example.

## Link da aplicação feita deploy no Render: 
# https://teste-tecnico-polgo-landing-page.onrender.com

### Payload para teste:

OK:
```
{
  "name":"Leonardo",
  "prize":"PC GAMER",
  "date":"2024-10-09"
}
```

Failed:
```
{
  "name":"Leonardo",
  "prize":"PC GAMER",
  "date":"09-10-2024"
}
```

### Rotas:

#### Buscar ganhador especifico por ID:
#### Method: GET
URL EXAMPLE: {application_url}/winners/:id

#### Buscar todos os ganhadores
#### Method: GET
URL EXAMPLE: {application_url}/winners


#### Deletar ganhador especifico por ID:
#### Method: DELETE
URL EXAMPLE: {application_url}/winners/:id

#### Inserir ganhador
#### Method: POST
URL EXAMPLE: {application_url}/winners
#### Body:
```
{
  "name":"Leonardo",
  "prize":"PC GAMER",
  "date":"2024-10-09"
}
```

## Considerações e Observações:
A aplicação foi feita deploy no Render, ela pode ter um tempo demorado (2, 3 minutos) nas primeiras chamadas por causa da localização. O registro de ganhadores tem que seguir o formato OK do payload, o campo date deve ser preenchido com o formato YYYY-MM-DD.
Agradeço pelo oportunidade de participar do processo seletivo, achei muito legal a ideia da atividade, estava a 4/5 meses sem programar, e voltar e realizar um projeto desses, foi bem desafiador, gratificante e divertido. Foi realizado a atividade em 5 dias

