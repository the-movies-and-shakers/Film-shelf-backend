


# Film-shelf-backend


A website for tracking and rating all the films you watch.


<!-- Setting up - Coding and repository  -->

To set up the serverless deploy, the stages are as follows:

1) Create a git repository called Film-Shelf-backend.

2) Clone a repo using `git clone .....` and made sure you `cd` into the directory

3) Created an IAM user for each group member and downloaded the API access keys as a CSV file  (https://www.youtube.com/watch?v=KngM5bfpttA)

4) Configure our serverless command with the credentials
`serverless config credentials --provider aws --key YOURKEY --secret YOURSECRET`

5) Generate our serverless boiler plate code
`serverless create --template hello-world`

6) Initialise node (to create our package.json file)

`npm init -f`

7) Update our package.json in order to introduce the express framework and a serverless helper dependency

`npm install --save express serverless-http`

8) Code written into films.js and databaseservice.js , updating the `serverless.yaml` adding in the functions in as created.  


9) Checking code in Postman-
    URL obtained for each function by running this command in the backend repository in terminal; 

`serverless deploy --RDS_HOST filmshelf.cumx1fonobcm.eu-west-2.rds.amazonaws.com --RDS_USER film --RDS_PASSWORD ********* --RDS_DATABASE filmdatabase`
*********This needs running every time the code is updated/resaved*********

10) Use the corresponding URL to check each function is working correctly.  




<!-- Creating the Mysql database  -->


1) Installing Mysql- 

`npm install--save mysql`

`git status` to check. 


2) Run command:

`mysql -u film -p -h 'copy end point from AWS filmshelf'`

3) Then enter Password as prompted by Command Line on Terminal, to give access to the database. 
 Overview of Database structure at present: 
+------------------------+
| Tables_in_filmdatabase |
+------------------------+
| filmdata               |
| filmshelf              |
| user                   |
+------------------------+

filmdata Table  

-----+--------+
| filmTitle                 | genre    | rating | filmId |
+---------------------------+----------+--------+--------+
| Loch Ness                 |  Drama   |      5 |      8 |
| Desperately Seeking Susan |  Drama   |      5 |     11 |
| Ferris Buellers Day off   |  Comdey  |      5 |     12 |
| Con Air                   |  Drama   |      5 |     13 |
| It                        | Horror   |      1 |     14 |
| The Silence of the Lambs  | Thriller |      3 |     15 |
| Anchorman                 | Comedy   |      5 |     16 |
| Goonies                   | Comedy   |      5 |     17 |
+---------------------------+----------+--------+--------+
(subject to change)

<!-- AWS Set up   -->

 4 Users set up for database access- each with own key/secret key generated and password.  

Details: 
Master username: film 
DBInstance: filmshelf

Need to make sure that number 4) from list above is carried in to configure this. 




