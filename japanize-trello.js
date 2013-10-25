/**
 * Copyright 2013 Hiroyuki Ushito (@iso2022jp)
 */
'use strict'

!function () {

	// 本文とボタン
	var texts = {

		//
		// Log In
		//
		Email: 'メールアドレス',
		Password: 'パスワード',
		'Sign Up': '新規登録',
		'Log In': 'ログイン',
		'Forgot password?': 'パスワードを忘れた。',
		' New? ': ' 初めてですか？ ',
		'Create an Account.': 'アカウントを作成',
		' Or log in with: ': ' または、以下のアカウントでログイン: ',
		' Google Account ': ' Google アカウント ',
		'Forgot your password?': 'パスワードをお忘れですか？',
		'\n            New here? ': '初めてですか？',

		'\n              The email or password was incorrect.\n          ': 'メールアドレスまたはパスワードが違います。',

		'\n        Forgot your password?\n      ': 'パスワードをお忘れですか？',
		'\n        Submit your email address and we’ll send you a link to reset your password.\n      ': 'パスワードをリセットするためのリンクをメールでお送りします。',
		'\n          Email address:\n        ': 'メールアドレス',
		Submit: '送信',

		//
		// Sign up
		//
		'Create an Account': 'アカウントを作成',
		'\n          Name\n        ': '名前',
		'\n          Email\n        ': 'メールアドレス',
        '\n          Password\n        ': 'パスワード',
        'Create New Account': '新しいアカウントを作成',
        '\n            Already have an account? ': '既にアカウントをお持ちですか？',
		'Log In.': 'ログイン',
        ' Or sign up with: ': 'または、以下のアカウントで登録: ',
        'Google Account': ' Google アカウント ',
        '\n      By signing up, you agree to our ': 'アカウント登録の際には以下に同意してください。',
        'Privacy Policy': 'プライバシーポリシー',
        ' and ': 'と',
        'Terms of Service': '利用規約',

		//
		// Common
		//

		// Toolbar
		Help: 'ヘルプ',
		Notifications: '通知',
		Boards: 'ボード',

		// Popup Menu: Notifications
		'See All Notifications': '全ての通知を見る',
		'Change Notification Email Frequency': '通知メールの設定',

		// Popup Menu: Boards
		' My Boards': ' マイボード',
		'See All Boards': '全てのボードを見る',
		'New Board…': '新しいボード…',
		'View Closed Boards': '閉じたボードを表示',

		// Popup Form: Create Board
		Title: 'タイトル',
		Organization: '組織',
		'(none)': '（なし）',
		'This board will be ': 'このボードは',
			private: '非公開',
			'org visible': '組織内',
			public: '公開',
		'Change.': '変更',
		Create: '作成', // submit button

		// Popup Dialog: Change Visibility
		'Private ': '非公開 ',
		'Organization ': '組織内 ',
		'Public ': '公開 ',

		// Popup Dialog: Add an Organization
		'Create an Organization': '組織を作成', // link button

		// Popup Form: Create Organization
		Name: '名前',
		'Description ': '説明 ',
		'(optional)': '（オプション）',

		// Floating Window: Closed Boards
		'Closed Boards': '閉じたボード',
		'Re-open': '開き直す',

		// Popup Menu: (user)
		Cards: 'カード',
		Profile: 'プロフィール',
		'Organizations…': '組織…',
		'New board…': '新しいボード…',
		'New Organization…': '新しい組織…',
		'Share Trello': 'Trello をシェアする',
		'Account Settings…': 'アカウントの設定…',
		'Log Out': 'ログアウト',

		// Popup Menu: Organizations

		// Popup Menu: Account Settings
		'Change Name, Initials, or Bio': '名前・愛称・自己紹介の変更',
		'Change Email Address': 'メールアドレスの変更',
		'Change Avatar': 'アイコンの変更',
		'Set Password': 'パスワードの設定',
		'Change Password': 'パスワードの変更',
		'Enable Color Blind Friendly Mode': '色覚サポートを有効にする',
		'Disable Color Blind Friendly Mode': '色覚サポートを無効にする',
		'See all options': '全てのオプションを見る',

		// Popup Form: Change Name and Bio
		'Full Name': '氏名',
		Initials: '愛称',
		Username: 'ユーザー名',
		Bio: '自己紹介',
		Save: '保存', // submit button

		// Popup Form: Change Email
		' Your email address is currently ': '現在のメールアドレス',
		'New Email Address': '新しいメールアドレス',
		'Send Confirmation Email': '確認メールを送信', // submit button

		// Popup Menu: Change Avatar
		'Uploaded Picture': 'アップロードした画像',
		'Initials (no avatar)': '愛称（画像なし）',
		'Take Photo With Camera': 'カメラで写真を撮影',
		'Upload a  new  picture': '新しい画像をアップロード',

		// Popup Form: Take a Photo
		'Trying to access your computer\'s camera… Check the banner at the top of the page.': 'カメラにアクセスしています… ページ上部のバナーを確認してください。',
		'Try again': 'もう一度',
		'Snap Photo': '撮影', // submit button

		// Popup Form: Set Password / Change Password
		'Old Password': '現在のパスワード',
		' New  Password': '新しいパスワード',
		' New  Password (again)': '新しいパスワード（再入力）',

		// Popup Menu: Send Emails
		Never: 'なし',
		'Never ': 'なし ',
		Periodically: '定期的',
		'Periodically ': '定期的 ',
		Instantly: '即時',
		'Instantly ': '即時 ',
		' Don’t send emails. ': 'メールで通知しません。',
		' Send emails about once an hour. ': '1 時間毎に 1 通くらいの頻度でメールを送ります。',
		' Send emails as soon as possible. ': '通知があればすぐにメールを送ります。',

		//
		// Generic View
		//

		// Side Menu
		'Account Settings': 'アカウントの設定',

		// Boards
		'My Boards': 'マイボード',
		'My Org Boards': '参加ボード',
		'Other Org-Visible Boards': '他のボード',
		Overview: '概要',
		'New board in organization…': 'この組織の新しいボード…',

		// Organization Overview
		'Change Logo': 'ロゴの変更',
		'Add Member…': 'メンバーの追加…', // side menu
		'Organization Settings': '組織の設定', // side menu
		'Change Name and Details': '名前や詳細情報の変更', // link button
		'Add Members': 'メンバーの追加', // link button
		'No boards.': 'ボードがありません。',

			// Popup Form: Update Details
			'Orgname ': '組織ユーザー名',
			'(used in URLs)': '（URL の一部として使用）',
			'Website ': 'Web サイト',
			Update: '更新',

			// Popup Menu: Change Logo
			' Upload a new logo ': ' 新しいロゴをアップロード ',
			'Remove Logo': 'ロゴを削除',

		// Organization
		'Name and Details': '名前や詳細情報',
		'Organization Visibility': '組織の公開範囲',
		'Delete this organization?': '組織を削除',

			// Popup Dialog: Delete Organization?
			'Delete Forever': 'それでも削除する',

		// Cards
		'Sorting by ': '並び替え: ',
		'due date': '期限',
		'board': 'ボード',

			// Popup Menu: Sort and Filter Cards
			'Sort by board ': 'ボードで並び替え ',
			'Sort by due date ': '期限で並び替え ',

		// Cards (by due date)
		'Due in the Next Day': '本日中',
		'Due in the Next 7 Days': '7 日以内',
		'Due in the Next Month': '今月中',
		'Due Later': 'それ以降',
		'Overdue Cards': '期限を過ぎているカード',
		'Cards with No Due Date': '期限のないカード',

		// Profile
		'(change)': '（変更）',
		'Edit Name, Initials, or Bio': '名前・愛称・自己紹介を編集',
		Trophies: 'トロフィー',
		Organizations: '組織',
		Activity: '動き',
		'Load More Activity': '続きを読み込む',

		// Notifications
		'Load More Notifications': '続きを読み込む',
		' Don\'t send emails.    (change) ': ' メール通知なし（変更） ',
		'  Send emails periodically.   (change) ': ' 定期的にメールで通知（変更） ',
		'   Send emails instantly.  (change) ': ' 直ちにメールで通知（変更） ',

		// Account
		'Account Details': 'アカウントの詳細',
		Accessibility: 'アクセシビリティー',
		Applications: 'アプリ連携',
		' Never Expires  ': '有効期限なし',
		Revoke: '取り消す', // button
		Sessions: '接続履歴',
		'(current session)': '（現在の接続）',
		'Log Out Other Sessions': '他の接続をログアウト', // button
		'Delete your account?': 'アカウントを削除',

			// Popup Dialog: Delete Account?
			'Send the Email': 'メールを送る',
			'Never Mind': 'やっぱりやめる',

		//
		// Board View
		//

		// Toolbar
		Private: '非公開',
		'Org Visible': '組織内',
		Public: '公開',
		Calendar: 'カレンダー',
		Subscribed: '注目中',
		'Filtering is on.': '絞込み中',
		'Show sidebar': 'サイドバーを表示',

		// Floating Window: Board Information
		'Edit the board description.': 'ボードの説明を編集',
		' accepted': ' が使えます',

		// Sidebar
		Menu: 'メニュー',
		Members: 'メンバー',
		'Add Members…': 'メンバーを追加…',
		'View all activity…': '全ての動きを表示…',

		// Side Menu
		'Filter cards': 'カードを絞り込む',
		'Archived items': 'アーカイブを見る',
		'Stickers': 'ステッカー',
		'Power-Ups': '拡張機能',
		'Settings': '設定',
		'Subscribe ': '通知を受け取る',
		'Subscribed ': '注目中',
		' Pin to Header Menu ': 'ヘッダーメニューに表示する',
		'Pinned to Header Menu': 'ヘッダーメニューに表示中',
		'Copy Board…': 'コピー…',
		'Share, Print, and Export…': '共有・印刷・エクスポート…',
		'Close Board…': 'ボードを閉じる…',

		// Sub Menu: Filter Cards
		Back: '戻る',
		'Due in the next day': '今日が期限',
		'Due in the next week': '今週が期限',
		'Due in the next month': '今月が期限',
		Overdue: '期限を過ぎている',
		'Clear Filter': '絞り込みをクリア',
		' Type to filter by term or search for labels, members, or due times. ': ' タイトルやラベル・メンバーを入力して絞り込みます。 ',

		// Sub Menu: Archive
		'Switch to ': '表示の切り替え: ',
		lists: 'リスト',
		cards: 'カード',
		'No archived cards.': 'アーカイブされたカードはありません。',
		'Archived': 'アーカイブ',
		'Send to Board': 'ボードに戻す',
		'Load more cards.': '続きを読み込む',

		// Sub Menu: Power-Ups
		'Back to Power-Ups': '拡張機能に戻る',
		' Click for details… ': '詳細を見る…',
		'More…': '詳細…',
		Enabled: '有効',
		Disabled: '無効',
		Enable: '有効化',
		Disable: '無効化',
		Screenshots: 'スクリーンショット',

		Voting: '投票機能',
		' Allow people to vote on cards. ': ' カードに投票できるようになります。  ',
		'Who is allowed to vote on cards?': 'カードに投票可能な権限の設定',
		'Members and Observers': 'メンバーと参加者',
		' Available only on boards with observers. ': '参加者がいるボードの場合に選択できます。',
		'Public members': '誰でも',
		' Available on public boards. ': '公開ボードの場合に選択できます。',

		'Card Aging': 'カードの老化',
		' Cards visibly age with inactivity. ': ' 動きのないカードの見た目が変化します。  ',
		'How do you want the aged cards to look?': '古いカードの見た目の設定',
		'Regular Mode': '標準モード',
		' Older cards become more transparent. ': ' 古いカードは徐々に透明になっていきます。 ',
		'Pirate Mode': '海賊風モード',
		' Older cards crackle and tear. ': ' 古いカードはひびが入ったり裂けたりします。 ',

		' See your cards with due dates on a calendar. ': ' 期限日を使い、カレンダー上にカードを並べて表示します。  ',
		'Enable iCalendar Feed?': 'iCalendar フィードを有効にするか？',
		' Enabled': '有効',
		' Disabled': '無効',
		'Your Personal iCalendar Feed': '自分専用 iCalendar フィードの URL',
		'Regenerate Your Feed URL ': 'フィード用 URL を再作成 ',

		// Sub Menu: Settings
		'Rename Board…': '名前を変更…',
			Rename: '変更',
		'  Change Organization…  ': '  組織を変更…  ',
			Change: '変更',
		'Change Visibility…': '公開範囲を変更…',
			' Private': ' 非公開',
			' Org Visible': ' 組織内',
			' Public': ' 公開',
		' Change Background… ': '背景を変更…',
		'  Card Cover Images Enabled': '  カードのカバー画像が有効',
		' Enable Card Cover Images  ': ' カードのカバー画像を有効化  ',
		'Commenting Permissions…': 'コメント権限…',
			'Organization members': '組織のメンバー',
		'Invitations Permissions…': '招待権限…',
			Admins: '管理者',
		'Allow Org Members to Join ': '組織メンバーの参加を許可 ',
		'Email settings…': 'メールの設定…',
		'Edit label names': 'ラベル名の編集',

			// Popup Menu: Commenting Permissions
			'Disabled ': '無効 ',
			'Members ': 'メンバー ',
			'Members and Observers ': 'メンバーと参加者 ',
			'Organization members ': '組織のメンバー ',
			'Public members ': '誰でも ',

			// Popup Menu: Invitations Permissions
			'Admins ': '管理者 ',
			'All Members ': 'メンバー ',

			// Popup Menu: Add Cards via Email
			'Your email address for this board': 'このボード用のメールアドレス',
			'Generate a new email address.': '新しいメールアドレスを生成',
			'Email me this address.': 'このメールアドレスをメールで送信',
			'Your emailed cards appear in…': 'メールで送ったカードは以下に追加',

			List: 'リスト',
			Position: '位置',
			Top: '一番上',
			Bottom: '一番下',

			// Popup Form: Copy Board
			'Keep Cards': 'カードも含める',

			// Popup Menu: Share, Print, and Export
			'Link to this board': 'ボードのリンク URL',
			'visible to org': '組織内に公開',


		// Floating Window: Board Activity
		'Board Activity': 'ボードの動き',

		// List View
		'Add a list…': 'リストを追加…',
		'Add a card…': 'カードを追加…',
		Add: '追加',

		// Calendar View
		Today: '今日',
		Week: '週',
		Month: '月',
		Sun: '日',
		Mon: '月',
		Tue: '火',
		Wed: '水',
		Thu: '木',
		Fri: '金',
		Sat: '土',
		'Add a card...': 'カードを追加...',

		// Popup Menu: List Actions
		'Add Card…': 'カードを追加...',
		'Copy List…': 'リストをコピー...',
		'Move List…': 'リストを移動...',
		'Move All Cards in This List…': 'リストの全カードを移動...',
		'Archive All Cards in This List…': 'リストの全カードをアーカイブ...',
		'Archive This List': 'リストをアーカイブ',
		'Create List': 'リストを作成', // submit button
		'Archive All': '全てをアーカイブ', // submit button

		// Popup Menu: Card Actions
		'Labels…': 'ラベル…',
		'Members…': 'メンバー…',
		'Due Date…': '期限…',
		'More Actions…': 'その他の操作…',

		//
		// Floating Window: Card
		//

		// Side Menu
		Labels: 'ラベル',
		'Edit Labels…': 'ラベルを編集…',
		'No members': 'メンバーがいません',
		'Assign…': '割り当て…',
		Actions: '操作',
		'Add checklist…': 'チェックリスト追加…',
		'Due date…': '期限…',
		'Attach File…': 'ファイルを添付…',
		'Move…': '移動…',
		Subscribe: '注目',
		Vote: '投票',
		Archive: 'アーカイブ',
		'Send to board': 'ボードに戻す',

		// Popup Menu: Change Labels
		'Change label titles…': 'ラベル名を変更…',

		// Popup Form: Add Checklist
		'Copy Items From…': '以下から項目をコピー',

		// Popup Form: Change Due Date
		Date: '日付',
		Time: '時刻',
		Prev: '前へ',
		Next: '次へ',
		January: '1月',
		February: '2月',
		March: '3月',
		April: '4月',
		May: '5月',
		June: '6月',
		July: '7月',
		August: '8月',
		September: '9月',
		October: '10月',
		November: '11月',
		December: '12月',
		Su: '日',
		Mo: '月',
		Tu: '火',
		We: '水',
		Th: '木',
		Fr: '金',
		Sa: '土',
		Remove: '設定しない',

		// Popup Form: Attach From
		Computer: 'アップロード',

		// Popup Form: Move Card
		Board: 'ボード',
		Move: '移動',

		// Popup Menu: More
		'Copy…': 'コピー…',
		'Print…': '印刷…',
		'Export JSON': 'JSON でエクスポート',
		'Link to this card': 'カードのリンク URL',

		// Contents
		Comment: 'コメント',
		'Edit the card description.': 'カードの説明を編集',
		'Formatting help': '書式の説明',
		'Delete This Checklist…': 'チェックリストを削除…',
		Edit: '編集',
		Delete: '削除',
		Attachments: 'ファイル',
		Attach: '添付',
		'Convert to Card': 'カードに変換',
		'You have unsaved edits on this field. ': '保存していない編集内容があります。 ',
		'View edits': '編集内容を表示',
		discard: '編集を破棄',

		// Popup Menu: Checklist
		'Delete Checklist': 'チェックリストを削除',

		// Popup Menu: Options
		'Select Emoji…': '絵文字を選択…',
		'Mention Member…': 'メンバーへの通知をつける…',

		// Popup Menu: Mention
		'Mention All Card Members': 'カードのメンバー全員',
		'Mention All Board Members': 'ボードのメンバー全員',

		// Popup Form: Copy Card
		'Keep…': '以下を一緒にコピー…',
		'Checklists ': 'チェックリスト ',
		'Labels ': 'ラベル ',
		'Attachments ': 'ファイル ',
		'Comments ': 'コメント ',
		'Create Card': 'カードを作成', // submit button


		'  Added ': ' 追加: ', // (!?)

		Cancel: 'キャンセル', // button

		//
		// Messages
		//

		' joined                       this card.': ' がメンバーになりました。',
		' left                       this card.': ' がメンバーから外れました。',

		' made                       this board                   visible to members of its organization.': ' が、このボードが組織のメンバーだけに見えるように設定しました。',
		' made                       this board                   visible to the public.': ' が、このボードを誰でも見えるように設定しました。',

		//
		// Explanations
		//

		'Show images on front of cards.': 'カードの前に画像を表示します。',
		' Any org member can join this board without being invited.   ': ' 組織のメンバーは招待されなくてもボードに参加することができます。',
		' Don\'t share this email address. Anyone who has it can add cards as you. When composing emails, the card title goes in the subject and the card description in the body. '
				: 'このメールアドレスを共有しないでください。誰でもあなたに成りすましてカードが追加できるようになってしまいます。メールを送るとメールの題名は新しいカードのタイトルに、メールの本文は新しいカードの説明になります。',

		' Tip: You can drag and drop files from your desktop to upload them. ': ' ヒント: ファイルをドラッグドロップでアップロードすることもできます。 ',
		' Search for a person in Trello by name or email address, or enter an email address to invite someone new. ': ' ユーザーは Trello 上の名前かメールアドレスで検索できます。メールアドレスを入力することで、新しいユーザーを招待することもできます。 ',

		' Your initials are used in place of your avatar if your avatar is not set. Usernames require a minimum of 3 characters, alphanumeric only. ': ' アイコン画像を指定しない場合、代わりに愛称が使われます。ユーザー名は最低 3 文字で、英数字のみが使用できます。',
		'   Your orgname is used in various URLs. Minimum of 3 characters, alphanumeric only, no spaces.  ': ' 組織ユーザー名は URL の一部になります。最低 3 文字で、英数字のみが使用できます。空白は使用できません。',

		' This board is private.  Only people added to the board can view and edit it.  ': ' ボードを非公開にします。ボードに追加したメンバーだけが表示及び編集できます。 ',
		' This board is public. It\'s visible to anyone with the link and will show up in search engines like Google.  Only people added to the board can edit.  ': 'ボードを公開します。ボードやその URL は誰でも表示でき、Google などの検索エンジンの検索結果に表示される可能性もあります。ボードに追加したメンバーだけが編集できます。 ',

		'  An organization is a group of boards and members.   ': ' 組織はメンバーとボードのグループです。 ',
		' An organizations is a collection of members and boards. They make sharing and working within a group even easier. ': ' 組織とはメンバーとボードをまとめたものです。組織を使うとグループ作業や情報共有が簡単になります。 ',

		' This will remove all the cards in this list from the board. To view archived cards and bring them back to the board, click "Menu" > "Archived Items". '
				: 'このリストの全てのカードがアーカイブされ、非表示になります。「メニュー」→「アーカイブを見る」でアーカイブされたカードを確認したりボードに戻したりできます。',

	}

	// プレースホルダ
	var placeholders = {
		'Search your boards…': '参加ボードを検索…',
		'Untitled Board': 'タイトルのないボード',
		'Search archived cards': 'アーカイブしたカードを検索',
		'No name': '名前なし',
		'Add item': '項目を追加',
		'Write a comment…': 'コメントを書く…',
		'Enter date': '日付を入力',
		'Enter time': '時刻を入力',
		'Search members': 'メンバーを検索',
	}

	// パターン（置換パターン -> マッチする正規表現 ）

	var subNames = {
		' ボードを「$1」のメンバーだけに公開します。ボードに追加したメンバーだけが編集できます。 ': /^\s*This board is visible to members of\s+(.*?)\s*.\s*Only people added to the board can edit.\s*$/,
	}

	// TODO: use Object instead of Array
	var phenomDescPatterns = {
		' がカードを「$1」に追加し、参加しました。': /^\s*added\s+this\s+card\s+to\s+(.*?)\s+and\s+joined\.\s*$/, // added this card to $1 and joined.
		' がカードを「$1」に追加し、メンバーを追加しました。': /^\s*added\s+this\s+card\s+to\s+(.*?)\s+and\s+added\s*$/, // added this card to $1 and added
		' がカードを「$1」に追加し、以下を行いました。': /^\s*added\s+this\s+card\s+to\s+(.*?)\s+and\s*$/, // added this card to $1 and
		' がカードを「$1」に追加しました。': /^\s*added\s+this\s+card\s+to\s+(.*?)\s*\.\s*$/, // added this card to $1.
		' がカードを次のボードから持ってきました: ': /^\s*transferred\s+this\s+card\s+from\s*$/, // transferred this card from
		// ' がカードを他のボード「$1」から移動しました。': /^\s*transferred\s+this\s+card\s+from\s+(.*?)\s*\.\s*$/, // transferred this card from $1.
		' がカードを「$1」から「$2」に移動しました。': /^\s*moved\s+this\s+card\s+from\s+(.*?)\s+to\s+(.*?)\s*\.\s*$/, // moved this card from $1 to $2.
		' が「$1」を完了しました。': /^\s*completed\s+(.*?)\s+on\s+this\s+card\.\s*$/, // completed $1 on this card.
		' が「$1」を未完了に戻しました。': /^\s*marked\s+(.*?)\s+incomplete\s+on\s+this\s+card\.\s*$/, // marked $1 incomplete on this card.
	}

	// TODO: use Object instead of Array
	var phenomDescItemPatterns = {
		'カードを「$1」から「$2」に移動': /^\s*moved\s+from\s+(.+?)\s+to\s+(.+?)\s*$/, // moved from $1 to $2
		'「$1」を完了': /^\s*completed\s+(.+?)\s*$/, // completed $1
		'「$1」を未完了に': /^\s*marked\s+(.+?)\s+incomplete\s*$/, // marked $1 incomplete
		'メンバーを追加': /^\s*added\s*$/, // added (!?)
		'参加': /^\s*joined\s*$/, // joined
		'「$1」を追加': /^\s*added\s+(.+?)\s*$/, // added $1
		'「$1」を削除': /^\s*removed\s+(.+?)\s*$/, // removed $1
	}

	// ボタンの場合は半角スペースを前後に含むので、そのバリエーションも追加する
	Object.keys(texts).forEach(function (key) {
		texts[' ' + key + ' '] = ' ' +  texts[key] + ' '
	})

	var translatePattern = function (node, patterns) {
		if (node.data === null || node.data.length === 0) {
			return;
		}
		Object.keys(patterns).forEach(function (replacement) {
			var pattern = patterns[replacement];
			if (pattern.test(node.data)) {
				node.data = node.data.replace(pattern, replacement)
				return
			}
		})
	}

	var translateData = function (node) {
		if (node.data in texts) {
			node.data = texts[node.data]
		}
	}

	var translateButton = function (node) {
		if (node.value in texts) {
			node.value = texts[node.value]
		}
	}

	var translatePlaceholder = function (node) {
		var value = node.getAttribute('placeholder')
		if (value === null || value.length === 0) {
			return;
		}
		if (value in placeholders) {
			node.setAttribute('placeholder', placeholders[value])
		}
	}

	var translateNode = function (node) {

		// 単純置換可能なテキスト
		var result = document.evaluate('.//text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translateData(result.snapshotItem(i))
		}

		// ボタン類
		result = document.evaluate('.//input[@value][@type="button" or @type="submit"]', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translateButton(result.snapshotItem(i))
		}

		// プレースホルダ
		result = document.evaluate('.//*[@placeholder]', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translatePlaceholder(result.snapshotItem(i))
		}

		//
		// パターン判別が必要なテキスト
		//

		// カード「動作」
		result = document.evaluate('.//*[@class="phenom-desc"]/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translatePattern(result.snapshotItem(i), phenomDescPatterns)
		}

		// カード「動作」で複数の動きがまとめてある場合
		result = document.evaluate('.//*[@class="phenom-desc"]/ul/li/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translatePattern(result.snapshotItem(i), phenomDescItemPatterns)
		}

		result = document.evaluate('.//span[@class="sub-name"]/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translatePattern(result.snapshotItem(i), subNames)
		}


		//var list = node.getElementsByClassName('js-dpicker-date-input');
		//for (var i = 0; i < result.length; ++i) {
		//	// translateButton(result[i])
		//}

	}

	new MutationObserver(function (records, observed) {

		records.forEach(function (record) {

			switch (record.type) {

				case 'childList':
					if (record.addedNodes) {
						for (var i = 0; i < record.addedNodes.length; ++i) {
							translateNode(record.addedNodes[i])
						}
					}
					break

				case 'characterData':
					translateData(record.target)
					break

			}

		})

	}).observe(window.document, {
		subtree: true,
		childList: true,
		characterData: true
		// attribute: true
	})

}()

