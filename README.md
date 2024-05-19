# Charity-Connect
## Description

Charity Connect is a web application designed to help users discover and donate to various charitable organizations. Users can view a list of charities, see detailed information about each charity, and make donations. The application supports user authentication, allowing users to create an account, log in, and manage their profile.

## Features

- View a list of charities
- Detailed information about each charity
- User authentication with JWT
- Make donations to charities
- Admin panel for managing charities and users
- Responsive and polished UI
- Payment processing with Stripe (for donations)
- Progressive Web App (PWA) features

## Technologies Used

### Frontend

- React
- Apollo Client
- Styled Components
- React Router

### Backend

- Node.js
- Express.js
- GraphQL
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

### Deployment

- Render (for both frontend and backend)
- MongoDB Atlas (for database)

## Installation

To set up the project locally, follow these steps:

### Backend

1. Clone the repository and navigate to the `backend` directory:
   ```bash
   git clone <repository_url>
   cd backend
Install the required dependencies:

bash
npm install
Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
npm start
Frontend
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the required dependencies:

bash
Copy code
npm install
Update the Apollo Client configuration in src/ApolloProvider.js to point to your local or deployed backend URL:

javascript
Copy code
const client = new ApolloClient({
  uri: 'https://charity-connect.onrender.com'
  cache: new InMemoryCache()
});
Start the frontend server:

bash
Copy code
npm start
Deployment
Backend
Create a new web service on Render.
Connect your GitHub repository and select the backend directory.
Set the environment variables (MONGO_URI and JWT_SECRET).
Deploy the service and note the backend URL.
Frontend
Build the React app:

bash
Copy code
npm run build
Create a new static site on Render.

Connect your GitHub repository and select the frontend directory.

Set the build command to npm run build and the publish directory to build.

Deploy the site and note the frontend URL.

Screenshots

Live Demo
Frontend: Charity Connect Frontend
Backend: Charity Connect Backend
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please reach out to teremuspigford@yahoo.com.

