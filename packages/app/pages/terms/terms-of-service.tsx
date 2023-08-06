import Link from '@/components/atom/Link';
import MarkdownParser from '@/components/atom/MarkdownParser';
import Template from '@/components/templates/Template';
import paths from '@/services/Navigaion';
import Container from '@mui/material/Container';
import { useSession } from 'next-auth/react';

export default function TermsOfService(): JSX.Element {
  const { data: session } = useSession();

  return (
    <Template>
      <Container maxWidth={'md'} style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <Link
          href={session ? paths.quest.dashboard.href : paths.root.index.href}
          style={{ textAlign: 'right', display: 'block' }}
        >
          HOME
        </Link>
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <MarkdownParser markdownText={TEXT} />
        </div>
        <Link
          href={session ? paths.quest.dashboard.href : paths.root.index.href}
          style={{ textAlign: 'right', display: 'block' }}
        >
          HOME
        </Link>
      </Container>
    </Template>
  );
}

const TEXT = `
# Decentralized Guild Terms of Service

This agreement applies to the use of "Decentralized Guild" (hereinafter referred to as "this service") provided by Decentralized Guild (hereinafter referred to as "this system"). Please read this agreement and use it after agreeing to its contents.

#### Article 1 (Application of Terms)
1. This agreement defines the terms and conditions for the provision of this service by this system and for the user to receive this service.
2. In relation to the provision of this service, in addition to this agreement, this system may establish individual agreements and other guidelines regarding the use of this service. In this case, the individual terms and other guidelines, etc. shall be applied in priority to the use of this service by the user as part of this agreement.
3. If the user uses this service, it is assumed that the user has agreed to this agreement.
4. If the user is a minor, the user must obtain the consent of a legal representative such as a person with parental authority regarding the use of this service. This system assumes that the use of this service by a minor user is done with the consent of a legal representative such as a person with parental authority.

#### Article 2 (User registration)
1. The user can register for use by registering the necessary items according to the method specified by this system.
2. The user must provide accurate and up-to-date information to the system regarding registration items.
3. If there is any change in the registered content, the user shall promptly notify the system of the changed content.
4. The system shall not be held responsible for any damages or disadvantages suffered by the user due to inaccurate or false registration information, or due to failure to report changes.

#### Article 3 (Management of ID and password)
1. When a user registers for use, this system issues an ID and password.
2. Users shall strictly manage and store their IDs and passwords, and shall not allow third parties to use them by lending, transferring, selling or otherwise using them. Even if the user suffers damage or disadvantage due to insufficient ID or password management, this system will not be held responsible.
3. If the ID or password is lost or forgotten, or if it is found that they are being used by a third party, the user shall immediately notify the system to that effect.
4. This system shall regard all use of this service by the ID and password issued to the user as the act of the user, regardless of whether it is genuine use by the user, and the user shall You shall be responsible for any and all liability arising as a result of your actions.

#### Article 4 (Purchase of Products, etc.)
1. The User shall, through the Service, purchase goods, digital contents or services (hereinafter referred to as "Products, etc.") provided by the Store Owner (meaning a person who has separately concluded a store opening agreement with the System; the same shall apply hereinafter). ), you shall apply for the purchase or use of the Products, etc.
2. When the user clicks the button to confirm the application after confirming the items entered by the user and the content of the application in the application set forth in the preceding paragraph, a contract regarding the purchase or use of the product, etc. will be concluded with the store owner. shall be
3. The system shall not be held responsible for the contents of products, delivery, or other matters related to products, etc., and shall be resolved between the exhibitor and the user. However, at the discretion of this system, it is possible to enter into consultation.

#### Article 5 (Payment Method)
1. The user shall pay the price of the products, etc. displayed in the purchase procedure of the products, etc. in the preceding article.
2. The method of payment for products, etc. shall be the method indicated in the purchase procedure or the payment method separately approved by this system.
3. In the case of payment by credit card, the user shall comply with the terms of the separate contract between the user and the credit card company. If any dispute arises between the user and the credit card company in connection with the use of the credit card, the user shall resolve the dispute at its own responsibility and expense.

#### Article 6 (Withdrawal or cancellation of contract application after purchase procedure)
When using this service, unless there is an agreement between the store owner and the user, it is not possible to withdraw or cancel the application for the contract related to the purchase or use of the product after the purchase procedure. If there is a clear defect in the product, etc., or if there is a clear difference between the product description and the actual product, etc., the store owner shall be responsible, and at the store owner's responsibility and cost, refunds, product returns, We will take measures such as replacement.

#### Article 7 (Disclaimer for Products, etc.)
1. The products, etc. sold through this service are sold and provided by the vendors, and the system shall not take any responsibility for the products, etc.
2. The System shall be responsible for the legality, usefulness, completeness, and accuracy of the display on the website of the Service, the photos and comments posted by users regarding products, etc., and the comments posted on Twitter, Instagram, and other SNS services. We make no warranties of any kind, including but not limited to accuracy, currency, reliability, and fitness for a particular purpose.

#### Article 8 (Intellectual Property Rights and Content)
Intellectual property rights, including copyrights, and all other rights related to all materials that make up this service belong to this system or third parties who own such rights. The User shall not acquire any rights with respect to any materials of the Service, and shall not perform any act that infringes on the rights regarding the materials without the permission of the right holder. Permission to use this service based on this agreement does not mean a license to use the rights of this system or third parties who have such rights regarding this service.

#### Article 9 (Posting by users)
1. Information such as posts, reviews, comments, etc. by users in this service, images, illustrations and other contents posted, uploaded or made available for viewing by users (hereinafter referred to as "user posted information") Please use this service after fully understanding that it will be accessed and viewed by an unspecified number of users of this service. The user who posted the information shall bear all responsibility.
2. Users may not post the following information.
     1. Untrue
     2. Content containing obscene expressions or obscene images such as nudity
     3. Content that damages the honor or credibility of others
     4. Infringement of privacy rights, portrait rights, copyrights and other rights of third parties
     5. Including computer viruses
     6. Links or URLs to websites other than those recognized by this system
     7. Others that the system deems inappropriate
3. The user shall permit this system to use the user-posted information free of charge. Upon granting the license, the user represents and warrants the following:
     1. Regarding copyrights, neighboring rights, portrait rights, and any other rights related to User Posted Information, the legitimate right holder, or from the legitimate right holder, all necessary for the use of User Posted Information related to this Service. have the permission of
     2. The posting of User Contributed Information and its use by the System shall not infringe on the copyrights, related rights, portrait rights, or any other rights of third parties.
4. This system shall be able to monitor the content of user posted information for the purpose of ensuring that users can use this service safely.
5. If the User Posted Information violates these Terms or falls under any of the following reasons, the System may delete the User Posted Information without prior notice to the User or limit the posting of the User. shall be able to do so.
     1. When more than a certain period of time has passed since posting
     2. When it is deemed necessary for maintenance management of this service
     3. When the capacity of User Posted Information, etc. exceeds the prescribed capacity of the equipment used by this system, or when there is a risk of doing so
6. This system is not obliged to respond to the user regarding the reason for the deletion and restriction of posting according to the preceding paragraph, and is not responsible for any damage or disadvantage caused to the user due to deletion or restriction. yeah. In addition, this system is not obligated to delete user posted information.
7. Users shall agree in advance to the monitoring, deletion and restriction of posting of User Posted Information in accordance with this Article.

#### Article 10 (Awarding Points)
1. This system shall be able to give the user the number of points specified by this system if the user satisfies the conditions specified by this system when using this service.
2. The user shall agree in advance that there is a possibility that the points held by the user may not be carried over if the model of the mobile phone terminal is changed.
3. Users shall be able to use the points they possess in a manner stipulated by this system.
4. The system may cancel all or part of the user's points if the user violates this agreement or if the system deems it appropriate.
5. This system shall not be held responsible for points that have been canceled or extinguished in accordance with this article.

#### Article 11 (Changes, Additions, Suspension of Service Contents)
This system may change, add or suspend all or part of the contents of this service without prior notice to the user, and the user shall consent to this in advance.

#### Article 12 (Personal Information)
This system will properly handle personal information obtained through the use of this service by users in accordance with the privacy policy of this system.

#### Article 13 (Prohibitions)
1. Users may not perform any of the following acts.
     1. Acts that interfere with or may interfere with the operation of the Service
     2. Acts that interfere with the use of this service by other users
     3. Acts that infringe copyrights or other rights related to the Service
     4. Acts that infringe on the rights or interests of this system, other users or third parties (including but not limited to honor rights, privacy rights and copyrights)
     5. Acts that violate public order and morals and other laws and acts that may violate them
     6. Acts that violate these Terms
     7. In addition to the preceding items, acts that the system deems inappropriate in light of the purpose of this service.
2. In the event that the System determines that the User has committed any of the acts set forth in the preceding paragraph, the System may, without prior notice to the User, suspend use of all or part of the Service or perform other actions necessary and appropriate for the System. You can take steps to determine This system shall not be held responsible for any damage or disadvantage caused to the user by the measures in this section.

#### Article 14 (Exclusion of Antisocial Forces)
The user promises the following matters to this system.
1. You are not an organized crime group, a company affiliated with an organized crime group, a corporate racketeer, or a person equivalent thereto or a member thereof (hereinafter collectively referred to as "anti-social forces").
2. One's officers (employees, directors, executive officers, or equivalent persons who execute business) are not anti-social forces.
3. Do not allow anti-social forces to use your name to conclude this Agreement.
4. Do not commit the following acts by yourself or by using a third party.
    1. Acts that use threatening behavior or violence against the other party;
    2. Unreasonable demands beyond legal responsibility
    3. Fraud or IntimidationActs that use force to interfere with the other party's business or damage the credibility of the other party

#### Article 15 (Disclaimer)
1. In the event that all or part of the Service is suspended, interrupted, or delayed due to natural disasters, wars, acts of terrorism, riots, labor disputes, epidemics, enactment or abolishment of laws and regulations, intervention by government agencies, or other force majeure, The system is not responsible for any damages or disadvantages caused to users.
2. Users shall understand that all or part of this service may be stopped, interrupted, or delayed due to communication line or computer failure, system maintenance, or other reasons, and this system may We are not responsible for any damage or disadvantage caused to the user. In addition, this system is not responsible for any damages or disadvantages caused by the user's usage environment.
3. This system does not guarantee, either explicitly or implicitly, the following matters.
    1. Usefulness, completeness, accuracy, up-to-dateness, reliability, suitability for a particular purpose of the contents of this service and information provided through this service.
    2. The information provided by this service does not infringe on the rights of third parties.
    3. That the Service will continue to exist in the future.
4. Regardless of the reason, if all or part of the data, etc. is lost, damaged, or falsified, this system shall not be obligated to restore it. We are not responsible for any damages caused to customers or third parties by
5. In the event that the System is liable to the User in connection with the use of the Service by the User, the price of the corresponding product, etc. In addition, we shall not be liable for incidental damages, indirect damages, special damages, future damages, and damages related to lost profits.
6. Notwithstanding the other provisions of this Article, if the contract between the System and the User regarding the Service constitutes a consumer contract as stipulated in the Consumer Contract Act, and due to the intentional or gross negligence of the System , the disclaimer does not apply.

#### Article 16 (Confidentiality)
When using this service, the user shall not disclose or leak any information disclosed or obtained from this system to a third party, and shall not use it for purposes other than using this service. not.

#### Article 17 (Notifications from this system)
1. When notifying the user from the system, the method of sending an e-mail to the e-mail address registered by the user, posting on the website related to the service, or other methods that the system deems appropriate method.
2. In the case where this system notifies, if it is sent to the e-mail address in the preceding paragraph, the notice of this system will be deemed to have reached the user at the time it is recorded in the mail server of the e-mail address. .
3. The user shall promptly notify this system if there is a change in the e-mail address in paragraph 1. Notifications sent by this system to the e-mail address before the change before receiving the notification of the change in this section shall be deemed to have reached the user at the time of transmission.
4. The system shall not be held responsible for any damages or disadvantages incurred by the user due to the user's failure to give notice as set forth in the preceding paragraph.

#### Article 18 (Disputes with Third Parties)
1. Regarding disputes between the user and a third party related to this service, the user shall settle it at his/her own expense and responsibility, and the system shall not be held responsible.
2. Regarding the preceding paragraph, if this system suffers damage (including attorney's fees), the user shall compensate for the damage.

#### Article 19 (Prohibition of Transfer of Rights and Obligations)
The user may assign, transfer, set up a security interest, or otherwise transfer all or part of the contractual status based on this agreement and the rights and obligations arising therefrom to a third party without the prior written consent of this system. cannot be disposed of.

#### Article 20 (Severability)
If any provision of this Agreement violates laws and regulations applicable to a contract based on this Agreement with a User and is deemed invalid, such provision shall, to the extent deemed to be in violation, be deemed to be void. shall not apply to Even in this case, the validity of other provisions of these Terms shall not be affected.

#### Article 21 (Changes to the Terms)
If it becomes necessary to change this agreement, this system can change this agreement based on Article 548-4 of the Civil Code (change of standard terms and conditions). When changing this agreement, this system will set the effective date and notify the following matters by sending e-mail or other methods by the effective date.
1. Intention to change this agreement
2. Contents of this agreement after change
3. Effective Date

#### Article 22 (Governing Law, Jurisdiction)
1. These Terms shall be interpreted in accordance with the laws of Japan.
2. Regarding the resolution of disputes arising between the system and the user regarding this service, the user shall submit the Tokyo District Court as the exclusive court of first instance from the date of delivery of the product, etc. I agree in advance to the court of jurisdiction.
`;

const TEXT_JP = `
# Decentralized Guild 利用規約

本規約は、Decentralized Guild（以下「当システム」といいます。）が提供する「Decentralized Guild」（以下「本サービス」といいます。）を利用される際に適用されます。ご利用にあたっては、本規約をお読みいただき、内容をご承諾の上でご利用ください。

#### 第1条（規約の適用）
1. 本規約は、当システムが本サービスを提供する上で、利用者が本サービスの提供を受けるにあたっての諸条件を定めたものです。
2. 当システムは、本サービスの提供に関して、本規約のほか、本サービスの利用に関する個別規約その他のガイドライン等を定めることがあります。この場合、当該個別規約その他のガイドライン等は、本規約の一部として利用者による本サービスの利用に優先して適用されるものとします。
3. 利用者が本サービスを利用された場合、利用者が本規約に同意したものとみなします。
4. 利用者が、未成年の場合、利用者は、本サービスの利用について、親権者等法定代理人の同意を得なければなりません。当システムは、未成年者の利用者による本サービスの利用については、親権者等法定代理人の同意を得て行為されたものとみなします。

#### 第2条（利用登録）
1. 利用者は、当システムが定める方法により必要事項を登録いただくことで、利用登録を行うことができます。
2. 利用者は、登録事項について、当システムに対して正確かつ最新の情報を届け出なければなりません。
3. 登録内容に変更が生じた場合、利用者は、速やかに、変更内容を当システムに届け出るものとします。
4. 登録内容が不正確若しくは虚偽であり、又は、変更内容について届出がされていないために、利用者が損害又は不利益を被ったとしても、当システムは責任を負わないものとします。

#### 第3条（ID及びパスワードの管理）
1. 利用者が利用登録を行った場合、当システムはID及びパスワードを発行します。
2. 利用者は、ID及びパスワードを厳重に管理し、保管するものとし、これを第三者に貸与、譲渡、売買その他の方法をもって利用させてはならないものとします。ID又はパスワードの管理が不十分なことにより、利用者が損害又は不利益を被ったとしても、当システムは責任を負わないものとします。
3. ID又はパスワードを紛失又は忘失した場合、又はこれらが第三者に使用されていることが判明した場合、利用者は、直ちにその旨を当システムに通知するものとします。
4. 当システムは、利用者に発行したID及びパスワードによる本サービスの利用の一切につき、利用者による真正な利用か否かにかかわらず、利用者本人の行為とみなすものとし、利用者は当該行為の結果生じる一切の責任を負担するものとします。

#### 第4条（商品等の購入）
1. 利用者は、本サービスを通して、出店者（別途当システムと出店契約を締結した者をいいます。以下同じ。）より提供される商品、デジタルコンテンツ又は役務（以下「商品等」といいます。）を購入又は利用しようとする場合、商品等の購入又は利用の申込みを行うものとします。
2. 前項の申込みにあたり、利用者が入力した事項及び申込内容を確認の上、申込みを確定するボタンをクリックした時をもって、出店者との間で当該商品等の購入又は利用に係る契約が成立するものとします。
3. 商品等の内容、配送その他商品等に関する事項については、当システムは責任を負わず、出品者及び利用者との間で解決するものとします。但し、当システムの判断により、協議に入ることができるものとします。

#### 第5条（支払方法）
1. 利用者は、前条の商品等の購入手続において表示される商品等の代金を支払うものとします。
2. 商品等の代金の支払方法は、購入手続において案内される方法又は当システムが別途認める支払方法とします。
3. クレジットカードによる支払の場合、利用者は、利用者がクレジットカード会社との間で別途契約する条件に従うものとします。クレジットカードの利用に関連して、利用者とクレジットカード会社との間で何らかの紛争が発生した場合、利用者は、自己の責任と費用において、当該紛争を解決するものとします。

#### 第6条（購入手続後の契約の申込みの撤回又は解除）
本サービスの利用にあたり、出店者及び利用者の合意がある場合を除き、商品等の購入手続後においては商品等の購入又は利用に係る契約の申込みの撤回又は解除はできないものとします。商品等に明らかな欠陥がある場合、商品説明と実際の商品等が明らかに異なるなどの場合には、出店者が責任を負うものとし、出店者の責任及び費用により、返金、商品の返品、交換等の対応を行うものとします。

#### 第7条（商品等に関する免責）
1. 本サービスを通じて販売される商品等は、出店者により販売及び提供されているものであり、商品等に関して当システムは、一切の責任を負わないものとします。
2. 当システムは、本サービスのウェブサイト上の表示及び利用者が投稿した商品等に関する写真及びコメント並びにTwitter、Instagramその他のSNSサービスに投稿したコメントについて、適法性、有用性、完全性、正確性、最新性、信頼性、特定目的への適合性を含め何らの保証をしません。

#### 第8条（知的財産権及びコンテンツ）
本サービスを構成する全ての素材に関する著作権を含む知的財産権その他の一切の権利は、当システム又は当該権利を有する第三者に帰属しています。利用者は、本サービスの全ての素材に関して、一切の権利を取得することはないものとし、権利者の許可なく、素材に関する権利を侵害する一切の行為をしてはならないものとします。本規約に基づく本サービスの利用の許諾は、本サービスに関する当システム又は当該権利を有する第三者の権利の使用許諾を意味するものではありません。

#### 第9条（利用者による投稿）
1. 本サービス内における利用者による書き込み、レビュー、コメント等の情報及び利用者が掲載、アップロード又は閲覧可能にした画像、イラストその他のコンテンツ（以下「利用者投稿情報」といいます。）は、本サービスの不特定多数の利用者からアクセス及び閲覧されることを十分に理解の上、本サービスをご利用ください。利用者投稿情報については、これを行った利用者が一切の責任を負うものとします。
2. 利用者は以下の情報の投稿を行うことはできません。
    1. 真実ではないもの
    2. わいせつな表現又はヌード等のわいせつ画像を含むもの
    3. 他人の名誉又は信用を傷つけるもの
    4. 第三者のプライバシー権、肖像権、著作権その他の権利を侵害するもの
    5. コンピュータウィルスを含むもの
    6. 当システムの認めるウェブサイト以外のウェブサイトへのリンクやURL
    7. その他当システムが不適当と判断するもの
3. 利用者は、当システムが利用者投稿情報を無償で使用することを許諾するものとします。許諾にあたり、利用者は以下を表明し保証するものとします。
    1. 利用者投稿情報に関する著作権、著作隣接権、肖像権その他一切の権利について、正当な権利者であり、又は、正当な権利者から本サービスに係る利用者投稿情報の利用に必要な一切の許諾を受けていること。
    2. 利用者投稿情報の投稿及び当システムによる利用が、第三者の著作権、著作隣接権、肖像権その他一切の権利を侵害しないこと。
4. 当システムは、利用者に安全に本サービスを利用いただくことを目的として、利用者投稿情報の内容を監視することができるものとします。
5. 当システムは、利用者投稿情報が本規約に違反する場合又は以下の事由に該当する場合、利用者への事前の通知なく利用者投稿情報を削除すること及び利用者の投稿の制限を行うことができるものとします。
    1. 投稿から一定期間以上経過した場合
    2. 本サービスの保守管理上、必要と認められる場合
    3. 利用者投稿情報等の容量が当システムの使用機器の所定容量を超過した場合又はその恐れが生じた場合
6. 当システムは、前項による削除及び投稿の制限の理由につき、利用者に対し返答する義務を負うものではなく、削除及び制限につき、利用者に発生した損害又は不利益につき、責任を負いません。また、当システムは、利用者投稿情報の削除義務を負うものではありません。
7. 利用者は、本条に係る利用者投稿情報の監視、削除及び投稿の制限について、あらかじめ同意するものとします。

#### 第10条（ポイントの付与）
1. 当システムは、利用者が本サービスの利用にあたり当システムが定めた条件を満たす場合には、当システムの定める数のポイントを利用者に付与することができるものとします。
2. 利用者は、携帯電話端末の機種変更等を行った場合には、利用者が保有していたポイントが引き継がれない可能性があることをあらかじめ承諾するものとします。
3. 利用者は、保有するポイントを当システムが定める方法で利用することができるものとします。
4. 当システムは、利用者が本規約に違反した場合その他当システムが適当と判断した場合には、利用者のポイントの全部又は一部を取り消すことができるものとします。
5. 当システムは、本条により取消又は消滅したポイントについて一切の責任を負わないものとします。

#### 第11条（サービスの内容の変更、追加、停止）
当システムは、利用者に事前の通知をすることなく、本サービスの内容の全部又は一部を変更、追加又は停止する場合があり、利用者はこれをあらかじめ承諾するものとします。

#### 第12条（個人情報）
当システムは、利用者による本サービスの利用によって取得する個人情報を、当システムのプライバシーポリシーに従い、適切に取り扱います。

#### 第13条（禁止事項）
1. 利用者は、次の行為を行うことはできません。
    1. 本サービスの運営を妨げ、又はそのおそれのある行為
    2. 他の利用者による本サービスの利用を妨害する行為
    3. 本サービスにかかる著作権その他の権利を侵害する行為
    4. 当システム、他の利用者又は第三者の権利又は利益（名誉権、プライバシー権及び著作権を含みますが、これらに限られません。）を侵害する行為
    5. 公序良俗その他法令に違反する行為及びこれに違反する恐れのある行為
    6. 本規約に違反する行為
    7. 前各号の他、本サービスの趣旨に鑑みて当システムが不適切と判断する行為
2. 利用者が前項に定める行為を行ったと当システムが判断した場合、当システムは、利用者に事前に通知することなく、本サービスの全部又は一部の利用停止その他当システムが必要かつ適切と判断する措置を講じることができます。本項の措置により利用者に生じる損害又は不利益について、当システムは、一切の責任を負わないものとします。

#### 第14条（反社会的勢力の排除）
利用者は、当システムに対し、次の事項を確約します。
    1. 自らが、暴力団、暴力団関係企業、総会屋若しくはこれらに準ずる者又はその構成員（以下総称して「反社会的勢力」といいます。）ではないこと。
    2. 自らの役員（業務を執行する社員、取締役、執行役又はこれらに準ずる者をいいます。）が反社会的勢力ではないこと。
    3. 反社会的勢力に自己の名義を利用させ、本契約を締結するものでないこと。
    4. 自ら又は第三者を利用して、次の行為をしないこと。
        1. 相手方に対する脅迫的な言動又は暴力を用いる行為
        2. 法的な責任を超えた不当な要求行為
        3. 偽計又は威力を用いて相手方の業務を妨害し、又は信用を毀損する行為

#### 第15条（免責事項）
1. 天災地変、戦争、テロ行為、暴動、労働争議、伝染病、法令の制定改廃、政府機関の介入その他不可抗力により、本サービスの全部又は一部の停止、中断、遅延が発生した場合、当システムは、利用者に生じた損害又は不利益について一切責任を負いません。
2. 利用者は、通信回線やコンピュータの障害、システムメンテナンスその他の事由による本サービスの全部又は一部の停止、中断、遅延が起こり得ることを理解しているものとし、当システムは、これらにより利用者に生じた損害又は不利益について一切責任を負いません。また、利用者の利用環境によって生じた損害又は不利益について、当システムは一切責任を負いません。
3. 当システムは、以下の掲げる事項について、明示的にも黙示的にも保証しません。
    1. 本サービスの内容及び本サービスを通じて提供される情報の、有用性、完全性、正確性、最新性、信頼性、特定目的への適合性。
    2. 本サービスで提供される情報が第三者の権利を侵害しないものであること。
    3. 本サービスが将来にわたって存続し続けること。
4. 当システムは、理由の如何を問わず、データ等の全部又は一部が滅失、毀損、又は改ざんされた場合に、これを復元する義務を負わないものとし、当該滅失、毀損、又は改ざんによりお客さま又は第三者に生じた損害等について一切の責任を負わないものとします。
5. 当システムは、利用者による本サービスの利用に関連して、利用者に対して責任を負う場合には、該当の商品等の価額過去12ヶ月間に利用者が当システムに支払った対価の金額0円を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害および逸失利益にかかる損害については、賠償する責任を負わないものとします。
6. 本条の他の条項にかかわらず、本サービスに関する当システムと利用者との間の契約が消費者契約法に定める消費者契約となる場合であって、かつ、当システムの故意又は重過失に起因するときは、免責規定は適用されません。

#### 第16条（秘密保持）
利用者は、本サービスの利用にあたり、当システムより開示を受け、又は知り得た一切の情報について、第三者に開示又は漏えいしてはならず、本サービスの利用以外の目的に使用してはなりません。

#### 第17条（当システムからの通知）
1. 当システムから利用者に対して通知を行う場合、利用者が登録した電子メールアドレス宛に電子メールを送信する方法、本サービスに係るウェブサイト上への掲示その他当システムが適当と判断する方法により行うものとします。
2. 当システムが通知を行う場合において、前項の電子メールアドレス宛に送信した場合、当該電子メールアドレスのメールサーバーに記録された時点で、当システムの通知は利用者に到達したものとみなします。
3. 利用者は、第1項の電子メールアドレスに変更がある場合、速やかに当システムに通知するものとします。本項の変更の通知を受けるまでに当システムが変更前の電子メールアドレス宛に送信した通知は、その発信の時点で利用者に到達したものとみなします。
4. 利用者が前項に定める通知を怠ったことにより、利用者に損害又は不利益が生じたとしても、当システムは何らの責任を負いません。

#### 第18条（第三者との紛争）
1. 本サービスに関連して利用者と第三者間で発生した紛争については、利用者は自らの費用と責任で解決するものとし、当システムは一切の責任を負わないものとします。
2. 前項に関し、当システムが損害（弁護士費用を含みます。）を被った場合、利用者は当該損害を賠償するものとします。

#### 第19条（権利義務の譲渡禁止）
利用者は、本規約に基づく契約上の地位及びこれにより生じる権利義務の全部または一部について、当システムの書面による事前の承諾なく、第三者に対し、譲渡、移転、担保権の設定その他の処分をすることができません。

#### 第20条（分離可能性）
本規約のいずれかの条項が利用者との本規約に基づく契約に適用される法令に違反し、無効とされる場合、当該条項は、その違反とされる限りにおいて、当該利用者との契約には適用されないものとします。この場合でも、本規約の他の条項の効力には影響しません。

#### 第21条（本規約の変更）
当システムは、本規約を変更する必要が生じた場合には、民法第548条の4（定型約款の変更）に基づき、本規約を変更することができます。本規約を変更する場合、当システムは、その効力発生日を定め、効力発生日までに、電子メールの送信その他の方法により以下の事項を周知するものとします。
1. 本規約を変更する旨
2. 変更後の本規約の内容
3. 効力発生日

#### 第22条（準拠法、裁判管轄）
1. 本規約は、日本法に準拠して解釈されます。
2. 当システム及び利用者は、本サービスに関し、当システムと利用者との間で生じた紛争の解決について、利用者は商品等の引渡しを受けた日から東京地方裁判所を第一審の専属的合意管轄裁判所とすることにあらかじめ合意します。
`;
