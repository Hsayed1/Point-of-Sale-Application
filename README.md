# Point-of-Sale-Application

The Point of Sale (POS) system serves as the headquarters of business transactions. It facilitates order processing and customer interactions. This project introduces a POS solution targeted towards cash-only businesses and catering events, reshaping traditional practices. Our implementation of the POS system forms a digital channel for seamless order management as opposed to the traditional paper orders. This modernized POS framework signifies a transition from conventional to efficient, user-centric interactions, aligning with today's digital landscape and revolutionizing transactional experiences.

# Setup
Make sure you have node >= v 16.0 installed on your machine and have npm installed as well. Extract the contents of the .zip file locally and cd into the project and then again into the client folder. Run npm install, then run npm run build. Once this is completed cd back to the root of the project and run npm install once again. Run npm run build and then npm run start and navigate to the following url:
It is important that you use this access token as the OAuth flow only works while running on the heroku instance since you need to specify a particular endpoint for the redirect step of the OAuth flow.  

# System Architecture
The POS system's architecture is supported by a client-server model allowing for communication and data management. Within this model, the server serves as the central repository, maintaining the state of both orders and menu items. Through specified endpoints, the server manages token management, order creation, and status tracking The client component interfaces with users. The Kitchen Display System  client complements this by providing order statuses. The client-server model forms the backbone of the system.

