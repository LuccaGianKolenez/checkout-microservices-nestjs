# Checkout Microservices - NestJS

Este projeto é um **teste prático de backend** que implementa um fluxo de **Checkout de E-commerce** utilizando **arquitetura de microserviços** e **event-driven**, desenvolvido em **NestJS**.

---

## Resumo da ideia

Um sistema de Checkout de E-commerce com arquitetura de microserviços e comunicação baseada em eventos.  
Inclui serviços de Checkout, Pagamentos, Expedição e um BFF para centralização dos dados, com suporte a Docker Compose, ORM e testes automatizados.

---

## Desafio

Criar uma API REST utilizando **NestJS** e seguindo os princípios:
- Arquitetura baseada em **eventos** (event-driven)
- Divisão em **microserviços**
- Padrão **Backend for Frontend (BFF)** para expor os dados ao frontend

---

## Serviços

- **Checkout Service** → Inicia o processo de compra e dispara evento de pagamento.
- **Payments Service** → Processa o pagamento e retorna status (aprovado/reprovado).
- **Shipping Service** → Gera ordem de envio quando o pagamento é aprovado.
- **BFF (Backend for Frontend)** → Centraliza os dados e expõe via API para o frontend.

---

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) – estrutura principal  
- [Docker Compose](https://docs.docker.com/compose/) – subida do ambiente  
- Plataforma de eventos (Kafka, RabbitMQ ou NATS)  
- ORM (TypeORM / Prisma)  
- Testes automatizados (Jest + Supertest)  

---

## Como Usar o Projeto

### 1️- Pré-requisitos
- Node.js >= 18  
- Docker + Docker Compose instalados  
- npm ou yarn  

### 2 - Clonar o repositório

git clone https://github.com/LuccaGianKolenez/checkout-microservices-nestjs.git
cd checkout-microservices-nestjs

### 3 Subir os serviços com Docker
docker-compose up -d

### 4 Instalar dependências
npm install

### 5 Executar o projeto

Por padrão o script inicia o ambiente e o serviço Checkout:

npm start

Você também pode entrar em cada serviço individualmente e iniciar com:

cd services/checkout && npm run start:dev
cd services/payments && npm run start:dev
cd services/shipping && npm run start:dev
cd services/bff && npm run start:dev

### 6 Rodar os testes
npm test

Testes Automatizados

Os testes cobrem os fluxos principais:

Criação de checkout dispara evento de pagamento

Pagamento processa e gera status

Expedição é notificada em caso de aprovação

BFF centraliza e retorna os dados para o frontend

Arquitetura
flowchart LR
    A[Checkout Service] -->|Evento: Pedido Criado| B[Payments Service]
    B -->|Evento: Pagamento Aprovado| C[Shipping Service]
    C -->|Status de Expedição| D[BFF Service]
    B -->|Evento: Pagamento Reprovado| D[BFF Service]
    A --> D
