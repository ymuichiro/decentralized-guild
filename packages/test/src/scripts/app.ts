import { ChatApi, Configuration, QuestApi, QuestUpdateRequest, UserApi } from '../../oas';

export class App {
  private userApi: UserApi;
  private questApi: QuestApi;
  private chatApi: ChatApi;

  constructor(baseURL: string, cookie: string) {
    const configuration = new Configuration({ basePath: baseURL, headers: { Cookie: cookie } });
    this.userApi = new UserApi(configuration);
    this.questApi = new QuestApi(configuration);
    this.chatApi = new ChatApi(configuration);
  }

  public async getUsers() {
    const res = await this.userApi.getUsers();
    return res.data;
  }

  public async getUser(userId: string) {
    return await this.userApi.getUser({ userId });
  }

  public async createQuest(questInfo: QuestUpdateRequest) {
    return await this.questApi.postQuest({ questUpdateRequest: questInfo });
  }

  public async updateQuest(questId: string, questInfo: QuestUpdateRequest): Promise<void> {
    await this.questApi.putQuest({ questId, questUpdateRequest: questInfo });
  }

  public async getQuestInfo(questId: string) {
    return await this.questApi.getQuest({ questId });
  }
  // クエストに対して worker より申込を行う
  public async applyToQuest(questId: string) {
    return await this.questApi.postQuestWorker({ questId });
  }

  // クエストを承認する
  public async approvalToQuest(questId: string, workerId: string) {
    return await this.questApi.postQuestApproval({ questId, workerId });
  }

  // チャットルームの情報を取得する
  public async getChatRoomInfo(chatRoomId: string) {
    return await this.chatApi.getChatInfo({ chatRoomId });
  }

  // チャットルームへメッセージを送信する（フロントエンド側は一旦mutate想定）
  public async sendChatRoomMessages(chatRoomId: string, message: string) {
    return await this.chatApi.postChatRoomToMessage({ chatRoomId, postChatRoomToMessageBody: { message } });
  }

  // トランザクション発行通知を送る
  public async noticeGenerateQuestContract(questId: string, workerId: string, transactionHash: string) {
    return await this.questApi.putQuestApproval({ questId, workerId, putQuestApprovalRequest: { transactionHash } });
  }

  // 検収依頼を送信する
  public async requestCompletionToQuestOwner(questId: string, workerId: string) {
    return await this.questApi.postQuestWorkerCompletion({ questId, workerId });
  }

  // 報酬を確定する
  public async acceptDelivery(questId: string, workerId: string) {
    return await this.questApi.postQuestWorkerReward({ questId, workerId });
  }
}
