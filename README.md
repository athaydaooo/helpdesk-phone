# Plataforma de Suporte Técnico para Telefonia

Uma plataforma interna de suporte técnico voltada para atendimento de telefonia, permitindo que usuários acessem um formulário de suporte via QR Code e a equipe técnica gerencie os chamados de forma eficiente.

## 📋 Descrição

O sistema oferece:
- Acesso rápido a formulários de suporte via QR Code diretamente no telefone
- Registro automatizado de chamados técnicos
- Painel de acompanhamento para a equipe técnica responder rapidamente

## 🚀 Começando

### Requisitos

- **Node.js**: Versão 16 ou superior
- **pnpm**: Gerenciador de pacotes recomendado

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/athaydaooo/helpdesk-phone.git
   cd helpdesk-phone
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` baseado no `.env.example`
   - Configure as variáveis para email (Nodemailer) e outros serviços

### Scripts Principais

- **Desenvolvimento**:
  ```bash
  pnpm dev
  ```

- **Produção**:
  ```bash
  pnpm build
  pnpm start
  ```

- **Lint e Formatação**:
  ```bash
  pnpm lint
  pnpm format
  ```

## 🛠️ Dependências Principais

### Dependências de Produção
- Next.js 15.1.6
- React 19
- Nodemailer 6.10.0 (para notificações por email)
- Winston 3.17.0 (para logging)
- Tailwind CSS 3.4.1 (para estilização)

### Dependências de Desenvolvimento
- TypeScript 5
- ESLint 9
- Jest (para testes)
- Testing Library (para testes de componentes)

## 🔧 Funcionalidades Implementadas
- Formulário de suporte acessível via QR Code
- Sistema de registro e acompanhamento de chamados
- Integração com serviço de email (Nodemailer)
- Logging de atividades (Winston)

## 📈 Próximos Passos
- [ ] Implementar autenticação de usuários
- [ ] Adicionar dashboard de métricas
- [ ] Integração com sistemas de telefonia
- [ ] Notificações em tempo real

## 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).