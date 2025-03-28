/*
  Warnings:

  - You are about to drop the column `userId` on the `Base` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[createdBy]` on the table `Base` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdBy` to the `Base` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Base" DROP CONSTRAINT "Base_userId_fkey";

-- DropIndex
DROP INDEX "Base_userId_key";

-- AlterTable
ALTER TABLE "Base" DROP COLUMN "userId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Base_createdBy_key" ON "Base"("createdBy");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Base" ADD CONSTRAINT "Base_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
