# Utilise l'image Node.js officielle comme image de base
FROM node:18

# Crée un répertoire de travail pour l'application
WORKDIR /app

# Copie le fichier package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installe les dépendances de l'application
RUN npm install

# Copie le reste des fichiers de l'application dans le conteneur
COPY . .

# Expose le port 8080 pour que le conteneur puisse être accessible sur ce port
EXPOSE 8080

# Définit la commande pour démarrer l'application
CMD ["npm", "start"]
