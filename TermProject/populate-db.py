# UNFINISHED

import mysql.connector

# Connect to the MySQL server
db = mysql.connector.connect(
    host="localhost",
    user="cs3220_sp24",
    password="OqagokbAg9DzKZGb",
    database="your_database"
)

# Create a cursor object
cursor = db.cursor()

# Create a table (if it doesn't exist)
cursor.execute("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE)")

# Insert some data
users = [
    ('John Doe', 'john@example.com'),
    ('Jane Smith', 'jane@example.com'),
    ('Michael Johnson', 'michael@example.com'),
]

# Prepare the SQL statement
sql = "INSERT INTO users (name, email) VALUES (%s, %s)"

# Execute the SQL statement for each user
for user in users:
    try:
        cursor.execute(sql, user)
    except mysql.connector.Error as err:
        print(f"Error inserting data: {err}")
    else:
        print(f"User '{user[0]}' with email '{user[1]}' inserted successfully.")

# Commit the changes and close the connection
db.commit()
cursor.close()
db.close()