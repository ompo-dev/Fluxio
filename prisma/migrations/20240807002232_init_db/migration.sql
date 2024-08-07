/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Shop` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shop_phone_key" ON "Shop"("phone");
