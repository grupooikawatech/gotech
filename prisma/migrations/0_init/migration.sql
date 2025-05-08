-- CreateTable
CREATE TABLE "academy" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR NOT NULL,
    "imagem" VARCHAR,
    "link_compra" VARCHAR,
    "criado_em" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "categoria_id" INTEGER,
    "descricao" VARCHAR NOT NULL DEFAULT ' ',

    CONSTRAINT "academy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias_store" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "categorias_store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store" (
    "id" INTEGER NOT NULL,
    "nome" VARCHAR NOT NULL,
    "descricao" TEXT,
    "preco" DECIMAL,
    "imagem" VARCHAR,
    "link_compra" VARCHAR,
    "categoria_id" INTEGER,

    CONSTRAINT "store_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "academy" ADD CONSTRAINT "academy_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias_store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

