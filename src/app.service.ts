import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getShop(): string {
    return 'Webshop Test App';
  }
}
