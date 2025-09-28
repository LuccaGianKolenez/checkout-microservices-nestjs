# Resumo da ideia
Um sistema de Checkout de E-commerce com arquitetura de microserviços e comunicação baseada em eventos, vai ser desenvolvido em NestJS e vai incluir serviços de Checkout, Pagamentos, Expedição e um BFF para centralização dos dados, com suporte a Docker Compose, ORM e testes automatizados.

# Checkout Microservices - NestJS

Este projeto é um **teste prático de backend** que implementa um fluxo de **Checkout de E-commerce** utilizando **arquitetura de microserviços** e **event-driven**.

## Desafio
Criar uma API REST utilizando **NestJS** e seguindo os princípios:
- Arquitetura baseada em **eventos** (event-driven).
- Divisão em **microserviços**.
- Padrão **Backend for Frontend (BFF)** para expor os dados.

## Serviços
- **Checkout Service** → Inicia o processo de compra e dispara evento de pagamento.
- **Payments Service** → Nessa etapa será processado o pagamento e retornará o status (aprovado/reprovado).
- **Shipping Service** → Gera ordem de envio quando o pagamento é aprovado.
- **BFF (Backend for Frontend)** → Por fim vai centraliza os dados e expor via API para o frontend.

## Tecnologias
- [NestJS](https://nestjs.com/) (estrutura principal)
- [Docker Compose](https://docs.docker.com/compose/) (subida do ambiente)
- Plataforma de eventos (ex: Kafka, RabbitMQ ou NATS)
- ORM (ex: TypeORM / Prisma)
- Testes automatizados (ex: Jest + Supertest)
