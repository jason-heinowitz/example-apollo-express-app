import { GraphQLScalarType } from 'graphql';
import moment from 'moment';

export default new GraphQLScalarType({
  name: 'DateTime',
  description: 'RFC 3339 compliant date-time',
  serialize(value) {
    // Re-assign to shorthand value; no intent to deep-copy
    const v = value;
    if (!(v instanceof Date) && typeof v !== 'string' && typeof v !== 'number') {
      throw new TypeError('Argument passed is not valid.');
    }

    const date = moment(v);
    return date.utc().format();
  },
  parseValue(value) {
    const date = moment(value);
    return date;
  },
  parseLiteral(ast) {
    const date = moment(ast.value);
    return date;
  },
});
