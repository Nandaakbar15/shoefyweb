-- CreateTable
CREATE TABLE `Employee` (
    `id_karyawan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_karyawan` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_karyawan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
