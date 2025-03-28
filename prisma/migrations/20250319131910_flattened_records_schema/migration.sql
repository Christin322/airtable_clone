/*
  Warnings:

  - You are about to drop the `CellData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fieldId` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CellData" DROP CONSTRAINT "CellData_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "CellData" DROP CONSTRAINT "CellData_recordId_fkey";

-- AlterTable
ALTER TABLE "Record" ADD COLUMN     "fieldId" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- DropTable
DROP TABLE "CellData";

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
