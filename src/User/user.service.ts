import { Injectable } from '@nestjs/common';
import { Service } from '../Service';

@Injectable()
export class UserService extends Service {
  public getAllUsers() {
    return this.client.send<string, string>('getAllUsers', 'data');
  }
}
