# SQL

**Skills:** SQL syntax, JOINs, GROUP BY, error identification

**Success Criteria:** Correctly identify all 4 errors and explain fixes.

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

```sql
 SELECT user_id, last_name, first_name, FROM public.users;
```

### Problem 2

```sql
SELECT * FROM public.users LEFT JOIN public.orders ON user_id = user_id;
```

### Problem 3

```sql
SELECT count(user_id) AS "Count per last_name", last_name 
FROM public.users;
```

### Problem 4

```sql
SELECT * FROM public.users WHERE first_name = "test";
```
