import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
      <div className="w-75 mx-auto mt-5">
        <div>
          <h2>What is the Difference between javascript and nodejs?</h2>
          <p>
            1. JavaScript is a simple programming language that runs in any
            browser JavaScript Engine. Whereas Node JS is an interpreter or
            running environment for a JavaScript programming language that holds
            many excesses, it requires libraries that can easily be accessed
            from JavaScript programming for better use.
          </p>
          <p>
            2. JavaScript is normally used for any client-side activity for one
            web application. An activity can be addressing business validation
            or dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system.
          </p>
          <p>
            3. JavaScript running in any engine like Spider monkey (FireFox),
            JavaScript Core (Safari), V8 (Google Chrome). So JavaScript
            programming is very easy to write, and put any running environment
            means proper browser. Whereas Node JS only support the V8 engine,
            which googles chrome specific. But whether it supports the V8
            engine, written JavaScript code can able to run in any environment.
            So there has no browser-specific constraint on it.
          </p>
          <p>
            4. JavaScript is normally following Java Programming language
            standard. There may have some different way of writing code, but at
            the same time, we can say it following the Java Programming language
            standard. Whereas node JS is written in C++ and provides a V8 engine
            base browser javascript running engine, it helps us run a written
            javascript program in any browser environment.
          </p>
        </div>
        <div>
          <h2>When should you use nodejs and when should you use mongodb ? </h2>
          <p>
            <h5>Nodejs </h5> : Nodejs is a Javascript engine that you can write
            any application you want with (by programming in the Javascript
            language). It runs your Javascript code. Most commonly, it is used
            to build servers that can respond to web requests, though it can be
            used for lots of other types of code too.
          </p>
          <p>
            <h5>MongoDB </h5> : MongoDB is a database engine. Code within some
            application or server uses MongoDB to save, query or update data in
            a database. There are many web servers built with nodejs that will
            then use MongoDB for storing data. MongoDB offers an API library
            that runs within a Nodejs application to give you programmatic
            access to MongoDB so you can create databases and then add, query,
            update or delete data from the MongoDB database. MongoDB also has
            API libraries for other programming environments such as Python,
            Java, etc...
          </p>
        </div>
        <div>
          <h2> Differences between sql and nosql databases ?</h2>
          <h6>The five critical differences between SQL vs NoSQL are:</h6>
          <p>
            1.SQL databases are relational, NoSQL databases are non-relational.
          </p>
          <p>
            2.SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
          </p>
          <p>
            3.SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </p>
          <p>
            4.SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </p>
          <p>
            5.SQL databases are better for multi-row transactions, while NoSQL
            is better for unstructured data like documents or JSON.
          </p>
        </div>
        <div>
          <h2>What is the purpose of jwt and how does it work ? </h2>
          <p>
            <h5>Purpose of JWT</h5>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p>
            <h5> Working function of JWT</h5>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
           
          </p>
        </div>
      </div>
    );
};

export default Blog;