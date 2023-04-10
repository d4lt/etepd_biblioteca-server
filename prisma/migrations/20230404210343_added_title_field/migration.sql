/*
  Warnings:

  - You are about to drop the column `name` on the `books` table. All the data in the column will be lost.
  - Added the required column `title` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "isbn" TEXT NOT NULL
);
INSERT INTO "new_books" ("author", "id", "isbn") SELECT "author", "id", "isbn" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_isbn_key" ON "books"("isbn");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
