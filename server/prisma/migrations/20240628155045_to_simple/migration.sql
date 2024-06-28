/*
  Warnings:

  - You are about to drop the column `workId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Work` DROP FOREIGN KEY `Work_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `WorkDetail` DROP FOREIGN KEY `WorkDetail_workId_fkey`;

-- AlterTable
ALTER TABLE `Invoice` DROP COLUMN `workId`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Work` DROP COLUMN `projectId`,
    ADD COLUMN `comment` VARCHAR(191) NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `payment` INTEGER NOT NULL DEFAULT 0,
    MODIFY `approval` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `Project`;

-- DropTable
DROP TABLE `WorkDetail`;

-- AddForeignKey
ALTER TABLE `Work` ADD CONSTRAINT `Work_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
