
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"(
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (80) NOT NULL,
"email" VARCHAR (250),
"username" VARCHAR (80) UNIQUE NOT NULL,
"password" VARCHAR (1000) NOT NULL,
"profile_url" VARCHAR (250)
);

CREATE TABLE "type"(
"id" SERIAL PRIMARY KEY,
"type" VARCHAR (80) 
);

--starter types
INSERT INTO "type"("type") VALUES ('pants'), ('jacket'), ('blazer'), ('dress'), ('vest'), ('sweater'), ('tank'), ('sweatpants'), ('blouse'), ('shirt'), ('jeans');

CREATE TABLE "clothing"(
"id" serial PRIMARY KEY,
"user_id" INT REFERENCES "user",
"type" VARCHAR (100),
"kind" VARCHAR (80),
"brand" VARCHAR (100),
"image_url" TEXT,
"color" VARCHAR (100),
"material" VARCHAR (100),
"description" TEXT,
"date_worn" DATE
);

--starter clothing
INSERT INTO "clothing" ("user_id", "type", "kind", "brand", "image_url", "color", "material", "description", "date_worn") 
VALUES 
	(1, 'skirt', 'bottom', 'Bergdorf Goodman', 'https://d1nr5wevwcuzuv.cloudfront.net/product_photos/68222484/file_d74ddb7f42_400w.png', 'red', 'cotton', 'Dry clean only', '7-19-1995'),
    (1, 'shirt', 'top', 'Fred Segal', 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/194246/item/goods_00_194246.jpg?width=2000', 'white', 'linen', 'Dry clean only', '7-19-1995'),
	(1, 'tank', 'top', 'Benneton', 'https://img.romwe.com/images/romwe.com/201703/1488503763001770650_thumbnail_600x.webp',	'Pink',	'Rayon', 'Ren and Stimpy are way existential', '7-19-1995'),
	(1, 'blouse', 'top', 'Georgio Armani', 'https://ae01.alicdn.com/kf/H9e90586f2fcb42968f4a6bf36ce8daa34/ArtSu-Mesh-Top-Transparent-V-neck-T-shirts-for-Women-Puff-Sleeve-Black-White-Tshirt-Sexy.jpg_q50.jpg', 'black', 'mesh', 'Total Betty attire', '7-19-1995'), 
	(1, 'blazer', 'top', 'Dolce & Gabanna', 'https://i.ibb.co/VWFjz2f/903a3ec0b277101716f9c87fbedc3667-3.jpg', 'yellow', 'wool', 'May I please remind you that it does not say ''R.S.V.P.'' on the Statue of Liberty.', '7-19-1995'),
	(1, 'dress', 'outfit', 'Calvin Klein', 'https://www.hautelookcdn.com/products/DDSK1989IMK/large/13874587.jpg', 'white', 'cotton', 'A great party dress.', '7-19-1995'),
	(1, 'jeans', 'bottom', 'Levis', 'http://picture-cdn.wheretoget.it/2m3gr4-l-610x610-jeans-vintage+levis+jeans-levi+516+jeans-90s+levis.jpg', 'blue', 'denim', 'Machine wash', '7-19-1995'),
	(1, 'pants', 'bottom', 'Prada', 'https://www.prada.com/content/dam/pradanux_products/2/22H/22H823/1WQ8F0002/22H823_1WQ8_F0002_S_202_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp', 'black', 'cotton', 'Machine wash with like colors', '7-19-1995'),
	(1, 'skirt', 'bottom', 'Fendi', 'https://i.ibb.co/rmL2h6Y/download-1.jpg', 'black', 'cotton', 'Dry clean only', '7-19-1995'), 
	(1, 'skirt', 'bottom', 'Dolce & Gabanna', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF-9p8iN-ZjAhjJ0RNdhxPbVVtCclCoAgVeg&usqp=CAU', 'yellow', 'wool', 'I am totally buggin', '7-19-1995'),
    (1, 'vest', 'top', 'Chanel', 'https://i.etsystatic.com/5299633/r/il/87bdb7/2540778326/il_794xN.2540778326_rt4s.jpg', 'black', 'cashmere', 'Dry clean only', '7-19-1995'),
	(1, 'pants', 'bottom', 'Chanel', 'https://i.ibb.co/x7yGCFJ/download.jpg', 'pink', 'polyester', 'Dry clean only', '7-19-1995'),
	(1, 'skirt', 'bottom', 'Gucci', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY2IoqnCpMmnEAJbTq-lvOGX50zAe1vi-TDA&usqp=CAU', 'grey', 'wool', 'Dry clean only', '7-19-1995'),
	(1, 'sweater', 'top', 'Fendi', 'https://img.emmacloth.com/images/emmacloth.com/201611/8b/14780478354888563278.jpg', 'yellow', 'cotton', 'Dry clean only', '7-19-1995'), 
	(1, 'dress', 'outfit', 'Alaïa', 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_29572331499149182716/2957233_l.jpg', 'red', 'silk', 'Searching for a boy in high school is as useless as searching for meaning in a Pauly Shore movie.', '7-21-1995'),
	(1,	'sweater', 'Top', 'Espirit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXiXPCt61bhfzMGDK_bA4R1alE_a_LoWa0Jg&usqp=CAU', 'Purple',	'Cotton', 'Wash with like colors', '7-19-1995');

