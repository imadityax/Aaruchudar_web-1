/*
  Warnings:

  - You are about to drop the column `submittedAt` on the `ExamAttempt` table. All the data in the column will be lost.
  - Added the required column `percentage` to the `ExamAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `ExamAttempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamAttempt" DROP COLUMN "submittedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "percentage" INTEGER NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL;
