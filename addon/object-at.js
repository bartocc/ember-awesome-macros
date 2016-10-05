import Ember from 'ember';
import { flattenKeys, getValue } from './utils';

const {
  computed
} = Ember;

export default function(key1, key2) {
  return computed(...flattenKeys([key1, key2]), function() {
    let array = getValue(this, key1);
    if (!array) {
      return undefined;
    }
    return array.objectAt(getValue(this, key2));
  });
}
