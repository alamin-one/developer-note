/* import 'dotenv/config';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export { prisma }; */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

/** @type {{ prisma?: PrismaClient }} */
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export { prisma };
