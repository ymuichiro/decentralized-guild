import { recievedQuestAggregateTransaction } from '../contracts/recievedQuestAggregateTransaction';
import { completeQuestTransaction } from '../contracts/completeQuestTransaction';
import { Network, NodeInfo } from '../models/Network';
import { SystemFee } from '../models/Tax';
import { Evaluation } from '../models/Quest';
import SystemService from './SystemService';
import { ApiService } from './ApiService';
export default class QuestService extends SystemService {
  constructor() {
    super();
  }

  /**
   * クエストを登録する
   */
  public static async request() {
    
    // コントラクト不要。サーバーに登録するだけ
  }

  /**
   * クエストを受注する
   */
  public static async receivedQuest(
    contractId: string,
    workerPublicKey: string,
    fee: SystemFee,
    network: Network,
  ): Promise<string> {

    const requesterAccount = this.getActivePublicAccount();
    const systemAccount = this.getSystemPublicAccount();
    const aggregateTransaction = recievedQuestAggregateTransaction(
      contractId,
      requesterAccount.publicKey,
      workerPublicKey,
      systemAccount.publicKey,
      fee.deposit,
      network,
    );

    // アグボンアナウンス --> ハッシュロック
    const signedTransaction = await this.sendAggregateTransaction(
      aggregateTransaction,
      network,
    );

    return signedTransaction.hash
    // ここでDBのQuestを編集する --> API を用意しておくのでAPIを叩く想定で
    // ハッシュを登録しておくと後ほど検索に便利
    // insert...quest table, hash colom -> signedAggTransaction.hash
    // 書き方全然分からないのでこんなイメージでｗ
  }

  /**
   * クエストを完了する
   */
  public static async completeQuest(
    workerPublicKey: string,
    reward: number,
    requesterJudgement: Evaluation,
    workerJudgement: Evaluation,
    fee: SystemFee,
    node: NodeInfo,
    network: Network,
  ) {
    const aggregateTransaction = completeQuestTransaction(
      this.getActivePublicAccount().publicKey,
      workerPublicKey,
      this.getGuildOwnerPublicKey(),
      this.getSystemPublicAccount().publicKey,
      reward,
      this.getWrpMosaicId(),
      this.getGuildPointMosaicId(),
      requesterJudgement,
      workerJudgement,
      fee,
      network,
    );

    // 起案者の署名をSSSで求る
    const signedTransaction = await this.sign(aggregateTransaction);
    // APIでSystemの自動署名を得て、アグリゲートコンプリートでアナウンス
    await this.sendWithCosigBySystemTransaction(signedTransaction, node, network)
    
    // ここでDBのQuestを編集する --> API を用意しておくのでAPIを叩く想定で
    // Questステータスを完了とする
  }
}
