import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center text-3xl border-b-8 border-indigo-700 w-1/2 mx-auto">
        Blog FAQ and Answer!
      </h2>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <h2 className="text-4xl font-mono font-bold text-white">
            FAQ:1. What is an access token and refresh token? How do they work
            and where should we store them on the client-side?
          </h2>
          <p>
            Answer: An access token and a refresh token are commonly used in
            authentication systems.let us discuss how they work and how is their
            type : 1.Access Token: An access token is a credential that is
            issued by an authentication server after a user successfully
            authenticates. It represents the users authorization to access
            specific resources or perform certain actions within a system or
            application. Access tokens are typically short-lived and have an
            expiration time. <br />
            2.Refresh Token: A refresh token is a credential that is also issued
            by the authentication server alongside an access token. Its purpose
            is to obtain a new access token when the current one expires without
            requiring the user to reauthenticate. Refresh tokens are long-lived
            and have a longer expiration time compared to access tokens. and
            this is how they work as follow: 1.The user provides their
            credentials such as username and password to the authentication
            server.
            <br />
            2.The authentication server verifies the credentials and, if valid,
            generates an access token and a refresh token. <br />
            3.The access token is returned to the client and is included in
            subsequent requests to the server to access protected resources.
          </p>
        </div>
        <div id="item2" className="carousel-item w-full">
          <h2 className="text-4xl font-mono font-bold text-white">
            FAQ:2. Compare SQL and NoSQL databases
          </h2>
          <p>
            Answer: SQL and NoSQL are two different types of databases that
            differ in their data models, query languages, scalability, and usage
            patterns. Here is a comparison of SQL and NoSQL databases: <br />
            a. Data model: SQL as relational databases: SQL databases follow a
            structured, tabular data mode. <br />
            NoSQL as non-relational databases: NoSQL databases have a flexible
            and schema-less data model. <br />
            b. Query languages: SQL: SQL databases use the Structured Query
            Language as SQL to perform operations like querying, inserting,
            updating, and deleting data.
            <br />
            NoSQL: NoSQL databases have their own query languages, which can
            vary depending on the specific database type.
          </p>
        </div>
        <div id="item3" className="carousel-item w-full">
          <h2 className="text-4xl font-mono font-bold text-white">
            FAQ:3.What is express js? What is Nest JS
          </h2>
          <p>
            Answer: Express.js and Nest.js are both popular frameworks used for
            building server-side applications, but they differ in their design
            philosophy and approach.Both Express.js and Nest.js have their
            strengths and are suitable for different use cases. Express.js
            offers simplicity and flexibility, while Nest.js provides a more
            structured and opinionated approach. The choice between the two
            depends on the project requirements, team preferences, and the
            desired level of abstraction and architecture.
          </p>
        </div>
        <div id="item4" className="carousel-item w-full">
          <h2 className="text-4xl font-mono font-bold text-white">
            FAQ:4.What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            Answer: In MongoDB, the aggregate operation is a powerful and
            flexible method for processing and analyzing data within a
            collection. It allows you to perform advanced data transformations,
            aggregations, and computations on the documents in your collection.
            <br />
            1.stage:A stage represents a specific operation or transformation
            applied to the documents in the collection. 2.pipeline: The
            aggregate pipeline is an array of stages that are executed
            sequentially. 3.Operators:Operators are used within stages to
            perform specific operations on the data. MongoDB provides a rich set
            of operators that can be used for various purposes, such as
            filtering documents, transforming data, grouping, calculating
            aggregations, and more
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Blog;
