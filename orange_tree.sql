-- Active: 1674785692405@@127.0.0.1@3306@orange_tree

create table
    products(
        id bigint AUTO_INCREMENT not null primary key,
        name varchar(255) not null default 'item',
        description text,
        image varchar(255) default 'product-image.jpg',
        updated_at timestamp
    );

insert into
    products(name, description)
values ('TV', 'This is a TV');