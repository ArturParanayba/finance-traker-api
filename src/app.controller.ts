import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/database.service';

@Controller('app')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('database_test')
  async getDatabaseTest() {
    const user = await this.prisma.user.create({
      data: {
        id: '11a2b',
        name: 'Artur',
        email: 'artur.paranayba@gmail.com',
        password: '123456',
      },
    });

    return {
      user,
    };
  }
}
