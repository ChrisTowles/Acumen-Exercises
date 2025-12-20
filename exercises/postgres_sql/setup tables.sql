
/*   
DROP TABLE users;
DROP TABLE orders;
*/

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY NOT null ,
   first_name character varying(255) NOT NULL,
   last_name character varying(255) NOT null
);

CREATE table orders (
   order_id SERIAL PRIMARY key NOT NULL,
   order_name character varying(255) NOT NULL,
   user_id int NOT null,
   CONSTRAINT "FK_orders_user_id" FOREIGN KEY (user_id) REFERENCES users(user_id)
);


