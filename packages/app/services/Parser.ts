import type { QuestWorkerField, RewardField, User as UserField } from '@prisma/client';
import formidable from 'formidable';
import { NextApiRequest } from 'next';
import type { ChainTypeEnum, QuestWorker, QuestWorkerStatusEnum, Reward, User } from 'oas/types';

type FormParseForFileUpload = {
  fields: formidable.Fields;
  files: formidable.Files;
};

export async function formParseForFileUpload(req: NextApiRequest): Promise<FormParseForFileUpload> {
  const form = new formidable.IncomingForm();
  return await new Promise<FormParseForFileUpload>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
}

type _UserField = Pick<UserField, 'id' | 'name' | 'createdAt' | 'image' | 'publicKey'>;
type _UNW<T> = T extends null ? undefined : User;
/** Database 側の UserField を OAS 向けの User へ変換する */
export function userFieldToUser<T extends _UserField | null>(userField: T): _UNW<T> {
  if (userField === null) {
    return <_UNW<T>>undefined;
  } else {
    return <_UNW<T>>{
      id: userField.id,
      name: userField.name ?? undefined,
      createdAt: userField.createdAt,
      image: userField.image ?? undefined,
      publicKey: userField.publicKey ?? undefined,
    };
  }
}

type _UserFieldWithEmail = Pick<UserField, 'id' | 'name' | 'createdAt' | 'image' | 'publicKey' | 'email'>;
type _UNWE<T> = T extends null ? undefined : User & { email: string };
/** Database 側の UserField を OAS 向けの User へ変換する */
export function userFieldToUserWithEmail<T extends _UserFieldWithEmail | null>(userField: T): _UNWE<T> {
  if (userField === null) {
    return <_UNWE<T>>undefined;
  } else {
    return <_UNWE<T>>{
      id: userField.id,
      name: userField.name ?? undefined,
      createdAt: userField.createdAt,
      image: userField.image ?? undefined,
      publicKey: userField.publicKey ?? undefined,
      email: userField.email ?? undefined,
    };
  }
}

/** Database 側の QuestWorkerField を OAS 向けの QuestWorker へ変換する */
export function questWorkerFieldToQuestWorker(
  questWorkerField: QuestWorkerField,
  worker: UserField | null
): QuestWorker {
  let user: User | undefined = undefined;
  if (worker) {
    user = {
      id: worker.id,
      name: worker.name ?? undefined,
      createdAt: worker.createdAt,
      image: worker.image ?? undefined,
      publicKey: worker.publicKey ?? undefined,
    };
  }

  return {
    id: questWorkerField.id,
    questId: questWorkerField.questId,
    createdAt: questWorkerField.createdAt,
    status: questWorkerField.status as QuestWorkerStatusEnum,
    userId: questWorkerField.userId ?? undefined,
    worker: user,
  };
}

/** Database 側の RewardField を OAS 合の Reward に変換する */
export function rewardFieldToReward(rewardField: RewardField): Reward {
  return {
    amount: rewardField.amount,
    chain: rewardField.chain as ChainTypeEnum,
    currencyId: rewardField.currencyId,
  };
}

/** OAS側の Reward を Database 側の RewardField に変換する */
export function rewardToRewardField(reward: Reward): Pick<RewardField, 'amount' | 'chain' | 'currencyId'> {
  return {
    amount: reward.amount,
    chain: reward.chain as string,
    currencyId: reward.currencyId,
  };
}
