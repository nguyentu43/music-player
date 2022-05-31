
    create table _user (
       id  bigserial not null,
        created_at timestamptz default now(),
        email varchar(255) not null,
        name varchar(255) not null,
        oauth2_provider varchar(255),
        password varchar(255) not null,
        primary key (id)
    );

    create table attribute (
       id  bigserial not null,
        name varchar(255) not null,
        primary key (id)
    );

    create table attribute_value (
       id  bigserial not null,
        value varchar(255) not null,
        attribute_id int8,
        primary key (id)
    );

    create table comment (
       commentable_type varchar(31) not null,
        id  bigserial not null,
        content varchar(255),
        created_at timestamptz default now(),
        enable boolean default true,
        user_id int8 not null,
        commentable_id int8,
        parent_id int8,
        primary key (id)
    );

    create table playlist (
       id  bigserial not null,
        name varchar(255),
        slug varchar(255),
        user_id int8,
        primary key (id)
    );

    create table post (
       id  bigserial not null,
        content varchar(255) not null,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        slug varchar(255),
        title varchar(255) not null,
        user_id int8,
        primary key (id)
    );

    create table role (
       id  bigserial not null,
        name varchar(255),
        primary key (id)
    );

    create table song (
       id  bigserial not null,
        cover varchar(255),
        created_at timestamp,
        enable boolean default true,
        lyric varchar(255),
        name varchar(255) not null,
        slug varchar(255),
        user_id int8,
        primary key (id)
    );

    create table song_attribute (
       song_id int8 not null,
        attribute_value_id int8 not null
    );

    create table song_file (
       id  bigserial not null,
        created_at timestamptz default now(),
        enable boolean default true,
        filename varchar(255),
        url varchar(255),
        song_id int8,
        user_id int8,
        primary key (id)
    );

    create table song_playlist (
       playlist_id int8 not null,
        song_id int8 not null,
        _order int8 not null,
        primary key (playlist_id, song_id)
    );

    create table tag (
       id  bigserial not null,
        name varchar(255) not null,
        slug varchar(255),
        primary key (id)
    );

    create table tag_item (
       taggable_type varchar(31) not null,
        id  bigserial not null,
        tag_id int8,
        taggable_id int8,
        primary key (id)
    );

    create table user_role (
       user_id int8 not null,
        role_id int8 not null
    );

    alter table _user 
       add constraint UK_k11y3pdtsrjgy8w9b6q4bjwrx unique (email);

    alter table playlist 
       add constraint UK_5l7ddo7oxolxj3jprkwjbuq37 unique (slug);

    alter table post 
       add constraint UK_1cg7fr7ckgm878v5j9bwjixis unique (slug);

    alter table role 
       add constraint UK_8sewwnpamngi6b1dwaa88askk unique (name);

    alter table song 
       add constraint UK_kp69b2s2nwsbibcxdrm43otm4 unique (slug);

    alter table tag 
       add constraint UK_1afk1y1o95l8oxxjxsqvelm3o unique (slug);

    alter table attribute_value 
       add constraint FK59xqw12tl928rqcdu2h9o6mau 
       foreign key (attribute_id) 
       references attribute;

    alter table comment 
       add constraint FKoo5phijy22unidgkw0sipcs74 
       foreign key (user_id) 
       references _user;

    alter table comment 
       add constraint FKghr47gfbntrc9k8vtpheqdngf 
       foreign key (commentable_id) 
       references playlist;

    alter table comment 
       add constraint FKde3rfu96lep00br5ov0mdieyt 
       foreign key (parent_id) 
       references comment;

    alter table playlist 
       add constraint FKeufsdcfjh5lesch4io44cp93f 
       foreign key (user_id) 
       references _user;

    alter table post 
       add constraint FKrh90w2rgxa8jj5r0kjlaims1y 
       foreign key (user_id) 
       references _user;

    alter table song 
       add constraint FKfbthpaxaw7fbm2qxbsh1y7413 
       foreign key (user_id) 
       references _user;

    alter table song_attribute 
       add constraint FKjq2ajma0cwuxrnnlpx2w6y3jh 
       foreign key (attribute_value_id) 
       references attribute_value;

    alter table song_attribute 
       add constraint FKn6w6ij3ttuw1tik2067w312pc 
       foreign key (song_id) 
       references song;

    alter table song_file 
       add constraint FK8ocdfs4jynvb9ccihwvvgb3rg 
       foreign key (song_id) 
       references song;

    alter table song_file 
       add constraint FKd7yoh3hmqsfv57j99mmioae9k 
       foreign key (user_id) 
       references _user;

    alter table song_playlist 
       add constraint FKbo28ki79m3naf7970431wrls6 
       foreign key (playlist_id) 
       references playlist;

    alter table song_playlist 
       add constraint FK1ct80f4nsi2lts6j4pmd4ric8 
       foreign key (song_id) 
       references song;

    alter table tag_item 
       add constraint FKdcju6d5cogkpljtenvpi4ckhj 
       foreign key (tag_id) 
       references tag;

    alter table tag_item 
       add constraint FKic9r89236r7el0ipor63468ad 
       foreign key (taggable_id) 
       references playlist;

    alter table user_role 
       add constraint FKa68196081fvovjhkek5m97n3y 
       foreign key (role_id) 
       references role;

    alter table user_role 
       add constraint FKniaqoclrvx138sjw9hsollqav 
       foreign key (user_id) 
       references _user;
