1) Explain what a token is used for.

* The token has 3 parts: <header>.<payload>.<signature>
[
    - Header: A JSON(Base64 encoded) that has info about algorithm used(like HS256, RSA) and so on.
    - Payload: A JSON(Base64 encoded) that has info about the user.
    - Signature: A String that was generated using #1 + #2 + “a secret” (that only the server knows), using the algorithm mentioned 
        in #1.

    - When the browser is refreshed, the app checks if there is a token, if so, it asks the server to verify the token and send the
        user info back (as though the user just signed in)
    - The server receives the token, decodes it using secret (JWT_SECRET environment variable), if it’s valid,
]


2) What steps can you take in your web apps to keep your data secure?
- ENCRYPT YOUR LOGIN PAGES
- BACKUP YOUR DATA
- SCAN AND TEST YOUR WEBSITE FOR VULNERABILITIES
- USE A SECURE HOST


3) Describe how web servers work.

 -A web server processes incoming network requests over HTTP and several other related protocols. The primary function of a web server is to store, process and deliver web pages to clients. The communication between client and server takes place using the Hypertext Transfer Protocol (HTTP).


4)  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

[
    Create = PUT with a new URI
            POST to a base URI returning a newly created URI
    Read   = GET
    Update = PUT with an existing URI
    Delete = DELETE

    - PUT can map to both Create and Update depending on the existence of the URI used with the PUT.
    - POST maps to Create and can also map to Update although it's typically used for Create. POST can also be a partial update so we don't need the proposed PATCH method
]