CS-152-Bot
Ahmed Ahmed
Hamed Sayed
27 June 2023
Abstract
A Point of Sale (POS) system designed to enable businesses to accept orders without
payments. The use cases for this are cash-only businesses and catering events.
1 Proposed Work
For this project, we will follow a client-server model where the server will maintain the state
of the orders and menu items and be the source of truth. The client will need two main
”applications” to satisfy these use cases. The first is the POS where the user’s Catalog/Menu
items [Squ23a] are displayed and orders are submitted and the second is the order screen,
often referred to as a ”Kitchen Display System” (KDS). The server will be responsible
for maintaining the user’s menu, square tokens, sessions, and orders including their state
(completed/incomplete).
2 Client
2.1 POS
• The user will be able to authenticate via Square using their OAuth 2.0 flow[Squ23b].
• Once Authenticated, the user will be able to see their Menu/Catalog in the POS and be
able to create orders and submit them for completion.
2.2 KDS
• The user will be able to navigate to the KDS to see a list of all the orders submitted in
a FIFO (First In First Out) order.
• The user will be able to mark items as completed.
• The user will be able to view a list of all the completed orders.
3 Server
• Redirect endpoint to store the user’s tokens.
• Validate the user’s session token for every protected endpoint.
1
• Endpoint to fetch the user’s menu.
• Endpoint to create an order.
• Endpoint to fetch the orders that are not completed.
• Endpoint to mark an order as completed.
• Endpoint to fetch completed orders.
• Endpoint to generate a report
References
[Squ23a] Square. Catalog API Overview. https : / / developer . squareup . com / docs /
catalog-api/what-it-does. [Online; accessed 20-June-2023]. 2023.
[Squ23b] Square. OAuth API Overview. https://developer.squareup.com/docs/oauthapi/overview. [Online; accessed 20-June-2023]. 2023.
2
