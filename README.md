# Book Store

## About
Application for searching books in store using google books api. In the app the user can add books to cart, change their amount or delete from cart. After submit, the cart is empty. Application is based on redux library to control the state.

## Demo
https://bookstoreportfolio.herokuapp.com/

## Used technologies
Javascript<br>
React<br>
Redux<br>
CSS3<br>
Bootstrap

## Setup and run on localhost (Windows)
1 Install Node.js v.16 from website:<br>
&emsp;https://nodejs.org/en/download/<br>
2 Download repository
```bash
git clone https://github.com/lukaszsliwinski/book_store
```
3 Go into main directory
```bash
cd book_store
```
4 Install required packages
```bash
npm install
```
5 Create .env file in main directory. In this file, create variable:
```bash
API_KEY = 'your_api_key'
```
Get your own google books api key and assign to the API_KEY variable.<br>
https://support.google.com/googleapi/answer/6158841?hl=en<br><br>
6 Run application on localhost
```bash
npm start
```
7 Enter localhost:3000 in browser to run the app