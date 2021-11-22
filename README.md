# GratiBox

<p align="center" >
<img src="https://github.com/driven-exercises/Projeto-GratiBox/blob/a09f21f55810dd55c09230dd88ed027151e81043/image05.webp" width="300" height="300"/>
</p>


## Problema

Visando estimular um estilo de vida mais saudável você idealizou uma startup que entrega box com produtos saudáveis e de #gratidão. Os clientes poderão escolher entre dois planos de assinatura recorrente, semanal ou mensal. Cada box contém produtos sortidos como chás, produtos orgânicos, incensos. Os clientes não podem escolher os produtos e não sabem o que será enviado em cada box. 😇


## Requisitos
- O front-end deverá ser uma Single Page Application em React, que se comunique com o back-end através de API;
- O back-end da aplicação deverá ser feito em Node.js;
- O banco de dados deverá ser Postgres;

- **Login**
    
    Após o login, existem dois possíveis caminhos:
    
    Se o cliente tiver assinado um plano ele deverá visualizar informações do seu plano:
    
    - Tipo de plano
    - Data da assinatura
    - Dia de entrega recorrente
    - Visualizar as datas de entrega para mês atual
        - Plano Mensal: Se o dia escolhido cair em um final de semana mostrar o próximo dia útil
        - Plano Semanal: Mostrar os dias (dd/mm/aaaa) que serão feitas na entrega. As entregas são feitas nos feriados.
    
    Se o cliente ainda não tiver assinado um plano ele poderá selecionar um dos planos e finalizar, escolher a data de entrega e finalizar a compra.
    
    - Para a data de entrega o cliente poderá escolher uma entre as opções:
        - Mensal: Dia 01, Dia 10, Dia 20.
        - Semana: Segunda, Quarta, Sexta.

- **Assinar**
    - A assinatura é dividia em duas páginas, send a primeiro dados do plano e a segunda dados de entrega.
        - Dados do Plano
            - Tipo do Plano:
                - Semanal
                - Mensal
            - Entrega:
                - Mensal: Dia 01, Dia 10, Dia 20.
                - Semanal: Segunda, Quarta, Sexta.
            - Quero Receber: O cliente poderá escolher entre uma a três opções
                - Chás
                - Incensos
                - Produtos orgânicos
        - Dados de Entrega
            - Nome completo
            - Endereço de entrega
            - CEP
            - Cidade
            - Estado
