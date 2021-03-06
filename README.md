# Live Art

#### A web application using web monetization and socket.io to enable supporters to view live art and make micro payments to the artist.

The hosted version of this project is available [here](https://live-art.herokuapp.com/).

![Alt text](./screenshots/homepage.png "homepage")

If you are an artist you will need a payment pointer to enable micro payments to be made to your web wallet. Uphold offer a good service for this and you can sign up [here](https://uphold.com/en-gb/)

![Alt text](./screenshots/artistlogin.png "artist log in")

As a supporter you will need an coil account and the relevant extension for your web browser. All can be found [here](https://coil.com/)

![Alt text](./screenshots/notmonetized.png "not monetized message")

Once logged in and the site is monetized, the artist will be able to draw on the canvas with the supporter able to view in real time.

![Alt text](./screenshots/blankcanvas.png "blank canvas")

![Alt text](./screenshots/badart.png "badart")

The supporter will be sending payments via their Coil browser extension as below.

![Monetization in action](./screenshots/monetized-screenshot-2.png "monetization in action")

If you would like to view the backend API for this project please find the code [here](https://github.com/katieraby/live-art-backend).

### **Prerequisites**

- Node.js version 13.10.1

### **Running locally**

1. Clone the following(this) repository

```
git clone https://github.com/katieraby/live-art.git
```

2. Navigate into the repository

```
cd live-art
```

3. Install the required dependences

```
npm i react reach@router axios express socket.io socket.io-client react-color react-meta-tags react-input-slider nodemon
```

alternatively

```
npm install
```

4. To launch the application locally type the following commands in separate terminals

```
nodemon src/server/index.js
```

```
npm start
```

In the terminal you should see a 'Compiled successfully!' message and the react app will open automatically on `local host:3000`.
