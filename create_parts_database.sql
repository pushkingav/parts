CREATE SCHEMA test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
use test;
DROP TABLE IF EXISTS PARTS;
CREATE TABLE PARTS (id INTEGER AUTO_INCREMENT PRIMARY KEY, title VARCHAR(150) NOT NULL UNIQUE, quantity INTEGER, i_required tinyint(1))
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
INSERT INTO PARTS (title, quantity, i_required) values  ('Материнская плата', 2, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('SSD-диск, 256Gb', 5, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('SSD-диск, 128Gb', 3, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Оперативная память, 16Gb', 2, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Оперативная память, 8Gb', 4, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Видеокарта', 1, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Звуковая карта', 4, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('CD-ROM', 0, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('DVD-RW', 10, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Card Reader', 15, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('FDD', 0, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Корпус', 21, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Процессор Core i3', 10, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Процессор Core i5', 14, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Процессор Core i7', 3, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Шлейф SATA', 15, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Кулер процессора', 2, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('HDD, 1Tb', 7, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('HDD, 2Tb', 3, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Вентилятор корпуса', 3, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Клавиатура Logitech', 5, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Мышь Logitech', 5, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Коврик для мыши', 9, 0);
INSERT INTO PARTS (title, quantity, i_required) values  ('Монитор 23"', 5, 1);
INSERT INTO PARTS (title, quantity, i_required) values  ('Монитор 27"', 3, 0);
COMMIT;
