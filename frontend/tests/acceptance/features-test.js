import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | features');

test('visiting /features', function(assert) {
  visit('/features');

  andThen(function() {
    assert.equal(currentURL(), '/features');
  });
});
