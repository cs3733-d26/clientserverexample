## React-Vite Client and Express Server Example

### To run the client and server, do the following
1. Open a terminal, and change to the `client` folder
2. Run `npm install -D`
3. Change directories to the `server` folder
4. Run `npm install -D`
5. Run `npm install -D @types/node @types/express @types/cors`
6. Create a run configuration for the React client
   1. Create a new run configuration by clicking on the bar to the left of
      the green run button in the middle of top of the screen
   2. Click on `+`
   3. Select `npm` (node package manager) from the left menubar
   4. Select the `package.json` file in the `client` folder
   5. Select `dev` as the script to run
7. Create a run configuration for the Express server
   1. Create another new run configuration 
   2. After clicking on `+`, select `Node.js`
   3. For the Typescript loader, select `(Bundled) TSX`
   4. For the file to run, select `server\server.ts`

### Practice creating the project by following the instructions below 
1. Create a folder named `clientserverexample` that will hold your
   React-Vite client and Express server
2. Create subfolders named `client` and `server`. Alternatively,
   you can call the subfolders `frontend` and `backend`.
3. Start Webstorm and create a new Vite React project in the `client` subfolder.
4. Check the React frontend by using the Vite development server at
   `http://localhost:5173`
5. Open a terminal window in Webstorm and change directories to the `server`
   subfolder.
6. Configure Express for the folder. Run the following install commands in a
   terminal:
    1. `npm install -D express cors`
    2. `npm install -D nodemon`
    3. `npm install -D typescript`
    4. `npm install @types/typescript @types/node @types/express @types/cors`
7. Create and run the server file `server.ts`

### Now create the files in the project
1. In the client, create `index.html` and `App.tsx`
2. In the server, create `server.ts`
