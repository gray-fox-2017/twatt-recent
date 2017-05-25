# Twatt Recent
API practice app to get home and user twitter timeline using respective user screen name. This app is using two GET API from twitter to gather user's home and timeline.

## Routes
List of routes for books:

Route | HTTP | Description
------|------|------------
/books | GET | Get all books
/books | POST | Add new book to the collection
/books/:id | GET | Get book with suited id params
/books/:id | PUT | Update book with suited id params
/books/:id | DELETE | Remove book with suited id params

List of routes for customers:

Route | HTTP | Description
------|------|------------
/customers | GET | Get all customers
/customers | POST | Add new customer to the collection
/customers/:id | GET | Get customer with suited id params
/customers/:id | PUT | Update customer with suited id params
/customers/:id | DELETE | Remove customer with suited id params

List of routes for transactions:

Route | HTTP | Description
------|------|------------
/transactions | GET | Get all transactions
/transactions | POST | Create new transaction with automatic date calculation
/transactions/:id | GET | Get transactions with suited id params
/transactions/:id | PUT | Update transactions with suited id params (add fine and in_date)
/transactions/:id | DELETE | Remove transactions with suited id params
