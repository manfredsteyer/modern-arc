import { ColorConfig, defaultColorConfig } from './color-config';
import { ColorService, DefaultColorService } from './color.service';
import { LoggerFeature, LoggerFeatureKind } from './features';

export function withColor(config?: Partial<ColorConfig>): LoggerFeature {
  const internal = { ...defaultColorConfig, ...config };

  return {
    kind: LoggerFeatureKind.COLOR,
    providers: [
      {
        provide: ColorConfig,
        useValue: internal,
      },
      {
        provide: ColorService,
        useClass: DefaultColorService,
      },
    ],
  };
}
