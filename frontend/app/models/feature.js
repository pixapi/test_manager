import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  test_status: DS.attr('string')
});
