-- CREER LA DATABASE
CREATE DATABASE blogchain;
-- UTILISE LA DATABASE
USE blogchain;

-- CREER LA TABLE SOURCE
CREATE TABLE source (
	sourceId INT AUTO_INCREMENT,
    nomSource VARCHAR(255),
    urlSource VARCHAR(255),
    PRIMARY KEY(sourceId)
);

-- CREER LA TABLE ARTICLE
CREATE TABLE article (
	articleId INT AUTO_INCREMENT,
    titre VARCHAR(75),
    image VARCHAR(255),
    description VARCHAR(555),
    sourceId INT,
    PRIMARY KEY (articleId),
    FOREIGN KEY (sourceId) REFERENCES source(sourceId)
);

-- AJOUTE LES SOURCES DES ARTICLES
INSERT INTO source (nomSource,urlSource) VALUES ('Cryptonaute', 'https://cryptonaute.fr/blockchain/'),
												('Bitpanda','https://www.bitpanda.com/academy/fr/lecons/comment-fonctionne-une-blockchain/'),
												('Journal Du Net','https://www.journaldunet.com/economie/finance/1195520-blockchain-definition-et-application-de-la-techno-derriere-le-bitcoin/'),
                                                ('Bitcoin.fr','https://bitcoin.fr/la-blockchain-cest-quoi/'),
                                                ('Andreas Antonopoulos', 'https://www.youtube.com/watch?v=1MG1aR71uFg&feature=youtu.be');

-- AFFICHE LES SOURCES
SELECT * FROM source;

-- AJOUTE UN ARTICLE
INSERT INTO article (titre,image,description,sourceId)
VALUES ('La blockchain et ses applications(vidéo)', 'https://miro.medium.com/max/2160/1*cVeTQYLF5Z35yGoZ23Sfmw.png', "Si quelqu’un vient vous voir, et vous demande “Est-ce que j’ai besoin d’une blockchain pour mon business ?”, demandez leur : “Est-ce que vous avez besoin de quelque chose d’ouvert, neutre, sans frontières, que personne ne contrôle et qui résiste à la censure ? Si oui, alors vous avez besoin de Bitcoin, d’Ethereum, Monero, ou Zcash.[…] Si non, si vous n’avez pas besoin de tout cela, ce que vous demandez, c’est une base de données. Installez-en une, vous n’avez pas besoin de blockchain.", 5),
	   ('Comment fonctionne une blockchain', 'https://fi.co/system/posts/learn-blockchain.png',"Internet nous promettait une nouvelle ère de liberté décentralisée, mais aujourd’hui comme pendant l’ère analogique, nous continuons à dépendre énormément d’acteurs centralisés. Bon nombre des procédures qui régissent notre système financier mondial, mais aussi le monde en général, sont encore sur support papier et exposés par conséquent au risque d’erreur humaine des autorités centrales. La technologie blockchain intervient ici pour changer la donne.", 2),
       ('Application de la technologie', 'https://img-0.journaldunet.com/JWPC_fuXr4lsD77FTnj0QPJco1M=/600x/smart/c99554060dc24e8989964441dcc5b0d9/ccmcms-jdn/10553664.jpg', "La grande particularité de la blockchain est son architecture décentralisée, c'est-à-dire qu'elle n'est pas hébergée par un serveur unique mais par une partie des utilisateurs. Il n'y a aucun intermédiaire pour que chacun puisse vérifier lui-même la validité de la chaîne. Les informations contenues dans les blocs (transactions, titres de propriétés, contrats…) sont protégées par des procédés cryptographiques qui empêchent les utilisateurs de les modifier a posteriori.", 3),
       ('La blockchain ETH dépasse le milliard de transactions', 'https://cryptoast.fr/wp-content/uploads/2020/11/lancement-ethereum-2-0-eth-1er-decembre-2020.jpg', "La blockchain publique Ethereum reste jeune avec un lancement en 2015. Mais grâce à sa place prépondérante dans la DeFi et à l’Ether, elle s’impose comme incontournable. Ainsi, Ethereum totalise 1 milliard de transactions.", 4),
       ("Qu'est-ce qu'une blockchain ?", 'https://www.everteam.com/wp-content/uploads/2019/02/600shutterstock_1061262521.jpg', "À son niveau le plus élémentaire, la blockchain n’est littéralement qu’une chaîne de blocs, mais pas au sens traditionnel de ces mots. Lorsque nous prononçons les mots “bloc” et “chaîne” dans ce contexte, nous parlons en fait d’informations numériques (le “bloc”) stockées dans une base de données publique (la “chaîne”). Les “blocs” de la chaîne se constituent d’informations numériques.", 1);

SELECT * FROM article;