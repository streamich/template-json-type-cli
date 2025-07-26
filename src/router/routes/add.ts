import type {ObjectType} from '@jsonjoy.com/json-type/lib/type/classes/ObjectType';
import type {ObjectValue} from '@jsonjoy.com/json-type/lib/value/ObjectValue';

export default <Routes extends ObjectType<any>>(r: ObjectValue<Routes>) =>
  r.extend((t, prop) => {
    const AddRequest = t.Object(
      t.prop('a', t.num),
      t.prop('b', t.num)
    );
    const AddResponse = t.Object(t.prop('result', t.num));
    const AddFunction = t.Function(AddRequest, AddResponse).options({
      title: 'Add two numbers',
      description: 'Adds two numbers and returns the result'
    });
    const add = prop('add', AddFunction, async ({a, b}) => ({result: a + b}));

    return [add];
  });