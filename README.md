<h1>Project Overview</h1>
<p> This project provides a user interface for managing and interacting with ice cream product data stored on the server. It incorporates features for adding, deleting, and categorizing products, providing a comprehensive view of Milma's ice cream offerings.</h2>
<ol>
  
  <li>
     <h3>Fetching Products</h3>
    <ul>
    <li>http://localhost:3000/products/all</li>
    </ul>
   
  </li>
  <li>
    <h3>User Adding Products</h3>
    <ul>
      <li>http://localhost:3000/products/add</li>
    </ul>
  </li>
  <li>
    <h3>Deleting Products</h3>
    <ul>
      <li>http://localhost:3000/products/delete/:id</li>
    </ul>
  </li>
  <li>
    <h3>Categorization and Display</h3>
    <ul>
      <li>Products are categorized into different sections based on their flavors: Chocolate, Vanilla, and Pista.</li>
      <li>Product cards are displayed in a grid layout with details such as product name, quantity, price, and an option to delete.</li>
    </ul>
  </li>
  <li>
</ol>
<h2>Getting Started</h2>
<p>To run the project, follow these steps:</p>
<ol>
  <li>Clone the repository: <code>git clone(https://github.com/Arjun-Vishnu/Commute-.git)</li>
  <li>Navigate to the project directory: <code>cd (if server or client)</code></li>
  <li>Install dependencies:
    <ul>
      <li>Server: <code>cd server && nodemon</code></li>
      <li>Client: <code>cd client && npm install</code></li>
    </ul>
  </li>
  <li>Configure the necessary environment variables (e.g., MongoDB connection string).</li>
  <li>Start the backend server: <code>cd server && npm start or nodemon</code></li>
  <li>Start the frontend development server: <code>cd client && npm start</code></li>
  <li>Access the application in your browser at <a href="http://localhost:3000">http://localhost:3000</a>.</li>
   <li>if you run both server and client change client to <a href="http://localhost:3001">http://localhost:3001</a>.</li>
</ol>

