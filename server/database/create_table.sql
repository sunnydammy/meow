CREATE DATABASE OUR_DB;

USE OUR_DB;

-- DROP TABLE USER;
CREATE TABLE USER
(
    ID                  INT            UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    NICK_NAME           VARCHAR(255)   NOT NULL,                         
    EMAIL_ADDR          VARCHAR(50)    NOT NULL,            
    PWD                 VARCHAR(255),                       
    KAKAO_ID            VARCHAR(255),                        
    KAKAO_ACCESS_TOKEN  VARCHAR(255),                        
    KAKAO_REFRESH_TOKEN VARCHAR(255),                        
    FRST_REGS_DTM       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LAST_REGS_DTM       TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into user (
    nick_name,
    email_addr,
    pwd
)
values (
    'test',
    'test@naver.com',
    'test'
);

insert into user (
    nick_name,
    email_addr,
    pwd
)
values (
    'test2',
    'test2@naver.com',
    'test2'
);