import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { SkillModule } from './Skill/skill.module';

@Module({
  imports: [UserModule, SkillModule]
})
export class AppModule {};
