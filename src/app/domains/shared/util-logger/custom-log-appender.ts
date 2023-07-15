import { Injectable } from '@angular/core';
import { LogAppender } from './log-appender';
import { LogLevel } from './log-level';

@Injectable()
export class CustomLogAppender implements LogAppender {
  logs: string[] = [];

  append(level: LogLevel, category: string, msg: string): void {
    this.logs.push(msg);
  }
}
