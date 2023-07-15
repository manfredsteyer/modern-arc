import { Provider } from '@angular/core';

export enum LoggerFeatureKind {
  COLOR,
  OTHER_FEATURE,
  ADDITIONAL_FEATURE,
}

export interface LoggerFeature {
  kind: LoggerFeatureKind;
  providers: Provider[];
}
