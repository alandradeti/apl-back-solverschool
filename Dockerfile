# Use a imagem oficial do Node.js como base
FROM node:23.6.0

# Crie o diretório de trabalho no contêiner
WORKDIR /usr/app

# Copie os arquivos de dependências para o contêiner
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Instala o nodemon globalmente (opcional)
RUN npm install -g nodemon

# Copia o restante dos arquivos para o contêiner
COPY . .

# Expõe a porta que o seu aplicativo vai usar
EXPOSE 3010

# Comando para rodar o aplicativo com nodemon, especificando o comando correto
CMD ["npx", "nodemon", "--watch", "src", "--exec", "npm run start:dev"]
