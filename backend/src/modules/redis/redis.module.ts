import { Module } from '@nestjs/common';
import * as Redis from 'ioredis';

@Module({
  providers: [
    {
      provide: 'REDIS',
      useFactory: () => {
        return new Redis({
          host: process.env.REDIS_HOST,
          port: parseInt(process.env.REDIS_PORT),
        });
      },
    },
  ],
  exports: ['REDIS'],
})
export class RedisModule {}
