-- Active: 1674785692405@@127.0.0.1@3306@orange_tree

create table
    products(
        id bigint AUTO_INCREMENT not null primary key,
        name varchar(255) not null default 'item',
        description text,
        image varchar(255) default 'product-image.jpg',
        updated_at timestamp
    );

CREATE TABLE
    inventory(
        id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
        company_id bigint,
        name VARCHAR(255),
        category varchar(255) not null,
        buy_price float not null default 0,
        sell_price float not null default 0,
        active boolean not null default true,
        amount int not null default 0,
        images_allowed boolean default 0,
        max_images int,
        images_json text,
        files_allowed boolean default 0,
        max_files int,
        files_json text,
        create_time DATETIME,
        updated_at timestamp
    ) COMMENT '';

insert into
    products(name, description)
values ('TV', 'This is a TV');