import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div>
                <h2>1. Difference between Javascript and NodeJS?</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Javascript</th>
                        <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Javascript is used in frontend development.	</td>
                            <td>Javascript is used in frontend development.	</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <h2>2. When should you use nodejs and when should you use mongodb?</h2>
                <p>Ans: Node.js is an open source server environment which uses JavaScript on the server to develop backend applications. </p>
                <p>Mainly there are two types of database management systems (DBMS): Relational and NoSQL DBMS.</p>
                <p>Relational DBMS manages the databases that store data in a structured format, using rows and columns</p>
                <p>NoSQL DBMS manages the database that stores unstructured data in forms of collections and documents</p>
                <p>MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following reasons:</p>
                <ul>
                    <li>NoSQL Database Management Systems are more flexible than RDBMS</li>
                    <li>The expense of maintaining and even setting up a RDBMS is relatively high</li>
                    <li>MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data</li>
                    <li>It holds a set of collections and stores data as document</li>
                    <li>Can handle variety of data and huge amount of data</li>
                    <li>It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database</li>
                    <li>All you have to do is install NPM -mongodb package in your Application Code</li>
                </ul>
                
            </div>
            <div>
                <h2>3. Differences between SQL and NoSQL databases?</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>SQL</th>
                        <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>These databases are best suited for complex queries	</td>
                            <td>These databases are not so good for complex queries</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Vertically Scalable	</td>
                            <td>Horizontally scalable</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <h2>4. What is the purpose of jwt and how does it work?</h2>
                <p>Ans: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. </p>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>

                <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                
            </div>
        </div>
    );
};

export default Blogs;