import {MenuEntity} from "../@core/services/api.service";
import {Expose} from "class-transformer";

export class MenuItem implements MenuEntity {
  @Expose()
  icon: string;

  @Expose()
  id: number;

  @Expose()
  module: string;

  @Expose()
  title: string;

  @Expose()
  selected: boolean;

  @Expose()
  get text(): string {
    return this.title;
  }

  init(_data?: any): void {
  }

  toJSON(data?: any): any {
  }
}
