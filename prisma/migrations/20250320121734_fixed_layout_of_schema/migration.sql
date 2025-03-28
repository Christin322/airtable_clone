/*
  Warnings:

  - You are about to drop the column `fieldId` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Record` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_fieldId_fkey";

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "fieldId",
DROP COLUMN "value";

-- CreateTable
CREATE TABLE "CellData" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,

    CONSTRAINT "CellData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CellData" ADD CONSTRAINT "CellData_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellData" ADD CONSTRAINT "CellData_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
