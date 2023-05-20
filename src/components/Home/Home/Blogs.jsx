

const Blogs = () => {
  return (
    <div className="mx-auto bg-indigo-100 text-center">
      <h1 className=" text-2xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
      <p>An access token and refresh token are commonly used in authentication and authorization systems.

An access token is a credential that grants access to protected resources on a server. It is typically short-lived and is used to authenticate and authorize API requests. When a user logs in or authenticates, they receive an access token that they include in their API requests as proof of their identity.

A refresh token is a long-lived credential that is used to obtain new access tokens when the current one expires. Instead of storing user credentials or passwords, a refresh token is stored securely on the client-side. When the access token expires, the client sends the refresh token to the server to obtain a new access token, allowing the user to stay authenticated without having to re-enter their credentials.

To store these tokens on the client-side, it is recommended to use secure storage mechanisms such as HTTP-only cookies or secure local storage. Cookies are often used for storing refresh tokens, as they can be set with the "httpOnly" flag to prevent access from JavaScript. This helps protect against cross-site scripting (XSS) attacks. Access tokens, on the other hand, are typically stored in memory or a short-term storage mechanism like a client-side session.

        It's crucial to follow best practices and security guidelines when handling access and refresh tokens to prevent unauthorized access to user accounts and sensitive data.</p>
      <h1 className=" text-2xl">Compare SQL and NoSQL databases?</h1>
      <p>SQL databases are based on a structured, predefined schema, and use SQL as the query language. They are good for complex queries, strong consistency, and transactions.

NoSQL databases offer flexibility in data models, don't rely on a fixed schema, and have their own query languages/APIs. They are suitable for scalability, high availability, and handling unstructured or changing data.

        The choice depends on the application's needs: SQL for structured data and complex queries, NoSQL for flexible data models and scalability.</p>
      <h1 className=" text-2xl">What is express js? What is Nest JS ?</h1>
      <p>
Express.js is a minimalistic and flexible web application framework for Node.js. It provides a set of features and utilities for building web applications and APIs. Express.js allows developers to handle HTTP requests, define routes, manage middleware, and implement various server-side functionalities. It is known for its simplicity, speed, and extensive community support, making it popular for building lightweight and fast web applications.

        NestJS, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and incorporates concepts from both object-oriented programming and functional programming. NestJS follows a modular architecture and provides a set of powerful features like dependency injection, middleware, decorators, and more. It is designed to help developers build highly maintainable and testable applications by providing a structured and organized approach to development.</p>
      <h1 className=" text-2xl">What is MongoDB aggregate and how does it work</h1>
      <p>
MongoDB's aggregate function is used for advanced data processing and analysis. It takes an array of stages as input and performs operations on documents in a collection. Stages include filtering, grouping, projecting, sorting, limiting, and more. By combining these stages, you can perform complex queries and aggregations on your data efficiently. It provides a flexible and powerful way to manipulate and analyze data in MongoDB.</p>
    </div>
  );
};

export default Blogs;