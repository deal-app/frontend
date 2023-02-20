Steps

1. Install node
2. Install mongodb
3. Clone this project (all the repositories)
4. After cloning a repository run: npm install (at the directory where your repository is stored)
5. Start local mongodb server by running: mongod
6. Run all scraping files in Scrape repository (DodoPizza.js and others)
7. Start the server by running: npm run start-server (do this in the directory where your backend repo is cloned)
8. Create .env file with REACT_APP_IP_ADDRESS variable that specifies your ip address in frontend root directory
9. Load the frontend application by running: npx expo start