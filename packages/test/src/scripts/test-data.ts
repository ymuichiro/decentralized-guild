import { QuestUpdateRequest } from '../../oas';

export namespace TestData {
  export const quest: QuestUpdateRequest = {
    title: 'test',
    deadline: new Date(Date.now() + 1000 * 60 * 2),
    description: 'test',
    reward: {
      amount: 1,
      currencyId: '72C0212E67A08BCE',
      chain: 'XYM',
    },
  };
}
