CREATE USER farm WITH PASSWORD '123';
ALTER USER farm CREATEDB;
CREATE DATABASE smart_farm;
GRANT ALL PRIVILEGES ON DATABASE smart_farm TO farm;