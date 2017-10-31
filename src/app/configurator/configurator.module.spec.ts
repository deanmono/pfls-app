import { ConfiguratorModule } from './configurator.module';

describe('ConfiguratorModule', () => {
  let configuratorModule: ConfiguratorModule;

  beforeEach(() => {
    configuratorModule = new ConfiguratorModule();
  });

  it('should create an instance', () => {
    expect(configuratorModule).toBeTruthy();
  });
});
