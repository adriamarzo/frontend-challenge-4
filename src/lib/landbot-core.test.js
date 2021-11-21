import { landbotCore } from './landbot-core';

describe('landbotCore utils', () => {
  it('should be null when landbot library has not been initialized', () => {
    expect(landbotCore).toBeNull();
  });
});
