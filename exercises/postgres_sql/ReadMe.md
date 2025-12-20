# Postgres SQL

**Skills:** SQL syntax, JOINs, GROUP BY, error identification, indexing

**Success Criteria:** Correctly identify the errors and explain fixes.

## Tables

### Users

| Field        | Type    | Description                                   |
| ------------ | ------- | --------------------------------------------- |
| `user_id`    | int     | Primary Key and Unique identifier of the user |
| `first_name` | varchar | user First Name                               |
| `last_name`  | varchar | User Last Name                                |

### Orders

| Field        | Type    | Description                                    |
| ------------ | ------- | ---------------------------------------------- |
| `order_id`   | int     | Primary Key and Unique identifier of the order |
| `order_name` | varchar | Order name                                     |
| `user_id`  | varchar | User who submitted order                       |

## Diagram

![](images/db-diagram.png)

## Task

Talk through each of the following SQL statements and what the problem with each is.

### Problem 1

This query should return all users but throws a syntax error. What's wrong?

```sql
 SELECT user_id, last_name, first_name, FROM public.users;
```

### Problem 2

This query tries to join users with their orders but fails. Why?

```sql
SELECT * FROM public.users LEFT JOIN public.orders ON user_id = user_id;
```

### Problem 3

We want to count how many users share each last name. This query doesn't work.

```sql
SELECT count(user_id) AS "Count per last_name", last_name
FROM public.users;
```

*Hint: Think about how you work with one column to another column.*

### Problem 4

The `users` table has 10 million rows. This query runs slowly - how would you improve it? Show me how.

```sql
SELECT * FROM public.users WHERE last_name = 'Smith';
```

