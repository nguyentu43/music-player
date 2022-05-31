INSERT INTO "role" ("id", "name") VALUES
	(1, 'ROLE_ADMIN'),
	(2, 'ROLE_USER');

INSERT INTO "_user" ("id", "email", "password", "created_at", "name", "oauth2_provider") VALUES
	(1, 'admin@admin.com', '$2a$10$j7GMU0HTsC7ir7EqdF7R7uYroBBQVEjEMJV2mo92iVfdm0n1yKfCW', '2022-05-16 18:41:15.162799+00', 'Admin', NULL);

INSERT INTO "user_role" ("role_id", "user_id") VALUES
	(1, 1);