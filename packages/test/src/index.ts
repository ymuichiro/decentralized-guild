import { User } from '../oas';
import { App } from './scripts/app';
import { debugLog } from './scripts/log';
import { signIn } from './scripts/signIn';
import { signToAggregateTransaction } from './scripts/symbol';
import { TestData } from './scripts/test-data';

async function app() {
  const requester = new App('http://localhost:3000/api', await signIn('aaa'));
  const worker = new App('http://localhost:3000/api', await signIn('bbb'));
  const other = new App('http://localhost:3000/api', await signIn('ccc'));
  // set public key
  await fetch('http://localhost:3000/api/test-data', { method: 'GET' });

  // 通常であれば session より user id を取得するが、使えないので今回はfindで
  const users = await requester.getUsers();
  const requesterInfo = users.find((user) => user.name === 'aaa') as User;
  const workerInfo = users.find((user) => user.name === 'bbb') as User;
  const otherInfo = users.find((user) => user.name === 'ccc') as User;

  // get user info
  debugLog('requester', await requester.getUser(requesterInfo.id));
  debugLog('worker', await worker.getUser(workerInfo.id));
  debugLog('other', await other.getUser(otherInfo.id));

  // set quest
  const quest = await requester.createQuest(TestData.quest);
  debugLog('new quest', quest);

  // update quest
  await requester.updateQuest(quest.id, {
    ...TestData.quest,
    title: 'quest title updated',
  });

  // apply to quest
  const chatRoom = await worker.applyToQuest(quest.id);
  debugLog('chat room', chatRoom);
  const incorrectApply = await requester.applyToQuest(quest.id).catch(() => null);
  if (incorrectApply !== null) throw new Error('incorrectApply');

  // set chat messsage from requester + worker
  await requester.sendChatRoomMessages(chatRoom.id, 'from requester');
  await worker.sendChatRoomMessages(chatRoom.id, 'from worker');
  await requester.getChatRoomInfo(chatRoom.id);
  await worker.getChatRoomInfo(chatRoom.id);
  const incorrectChatAccess = await other.sendChatRoomMessages(chatRoom.id, 'from other').catch(() => null);
  if (incorrectChatAccess !== null) throw new Error('incorrectChatAccess');
  debugLog('chat post result', 'ok');

  // create data
  const updatedQuest = await requester.getQuestInfo(quest.id);
  debugLog('quest info', updatedQuest);

  // contract
  const targetWorkerId = updatedQuest.workers.find((e) => e.worker?.name === 'bbb')?.id;
  if (!targetWorkerId) throw new Error('targetWorkerId not found');
  const approvalQuestResult = await requester.approvalToQuest(quest.id, targetWorkerId);
  debugLog('quest approval', approvalQuestResult);

  // 契約処理
  const transactionHash = await signToAggregateTransaction(
    approvalQuestResult.transaction,
    'CC59EA75C5F9FBC787212EC3983BE4731117DD3385EAA383E86D606545F491A2'
  );
  debugLog('transaction hash', 'https://testnet.symbol.fyi/transactions/' + transactionHash);

  // Tx へ署名し、完了したことを伝達する
  await requester.noticeGenerateQuestContract(quest.id, targetWorkerId, transactionHash);

  debugLog('request completion', 'start');
  await worker.requestCompletionToQuestOwner(quest.id, targetWorkerId);
  console.log('completion ok');

  debugLog('request reward', 'start');
  console.log('wating...');

  await new Promise((resolve) => {
    setTimeout(async () => {
      await requester.acceptDelivery(quest.id, targetWorkerId);
      console.log('succesfully secret proof transaction!!!');
      resolve('ok');
    }, 10000);
  });
}

app().then(() => console.log('---- done ----'));
