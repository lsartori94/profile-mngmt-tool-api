import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

export class Service {
  protected client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    });
  }
}
