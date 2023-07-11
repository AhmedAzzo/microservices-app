import { SettingsRepository } from '@app/common/dbhelper';
import { Injectable } from '@nestjs/common';


@Injectable()
export class SettingsService {
    constructor(private readonly settingsRepository: SettingsRepository) { }
}
