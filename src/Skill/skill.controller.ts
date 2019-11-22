import { Controller, Get } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {};

  @Get('all')
  async getAllSkills() {
    return this.skillService.getAllSkills();
  }
}
