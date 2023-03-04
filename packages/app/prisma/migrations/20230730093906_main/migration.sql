-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "publicKey" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "QuestField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerPublicKey" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'WANTED',
    "deadline" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rewardFieldId" TEXT,
    "questTransactionInfoId" TEXT,
    CONSTRAINT "QuestField_rewardFieldId_fkey" FOREIGN KEY ("rewardFieldId") REFERENCES "RewardField" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "QuestField_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "QuestField_questTransactionInfoId_fkey" FOREIGN KEY ("questTransactionInfoId") REFERENCES "QuestTransactionInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "QuestTransactionInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'UNCONFIRMED',
    "questId" TEXT NOT NULL,
    "transactionHash" TEXT,
    "secret" TEXT NOT NULL,
    "proof" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "RewardField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chain" TEXT NOT NULL DEFAULT 'XYM',
    "currencyId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "QuestWorkerField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "questId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'APPLYING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "QuestWorkerField_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "QuestWorkerField_questId_fkey" FOREIGN KEY ("questId") REFERENCES "QuestField" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChatRoomField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastPostedUserId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ChatRoomUnread" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "updatedAt" DATETIME NOT NULL,
    "chatRoomId" TEXT NOT NULL,
    "isUnread" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ChatRoomUnread_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ChatRoomUnread_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoomField" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChatMemberField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "chatRoomId" TEXT NOT NULL,
    CONSTRAINT "ChatMemberField_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoomField" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ChatMemberField_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChatMessageField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chatRoomId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ChatMessageField_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoomField" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ChatMessageField_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PushSubscriptionField" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "expirationTime" INTEGER,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,
    CONSTRAINT "PushSubscriptionField_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_refresh_token_key" ON "Account"("refresh_token");

-- CreateIndex
CREATE UNIQUE INDEX "Account_access_token_key" ON "Account"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "Account_id_token_key" ON "Account"("id_token");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_publicKey_key" ON "User"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "QuestField_rewardFieldId_key" ON "QuestField"("rewardFieldId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestField_questTransactionInfoId_key" ON "QuestField"("questTransactionInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "PushSubscriptionField_userId_key" ON "PushSubscriptionField"("userId");
