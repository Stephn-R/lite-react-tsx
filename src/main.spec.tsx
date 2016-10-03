import * as mocha from 'mocha';
import * as chai from 'chai';

import {x} from './main';

describe('simple test', () => {

  it('should be able to run tests', () => {
    chai.expect(x).to.equal(3);
  });

});
