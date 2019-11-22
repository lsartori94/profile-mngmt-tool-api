import { Injectable } from '@nestjs/common';
import { Service } from '../Service';

@Injectable()
export class SkillService extends Service {
  public getAllSkills() {
    return this.client.send<string, string>('getAllSkills', 'data');
  }
}
