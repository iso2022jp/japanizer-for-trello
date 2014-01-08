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
		' New here? ': '初めてですか？',
		'   The email or password was incorrect.  ': 'メールアドレスかパスワードが違います。',
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
			'Initials must contain 1-4 characters': '愛称は 1～4 文字で入力して下さい。',
			'Full Name must be at least 1 character': '氏名は 1 文字以上で入力して下さい。',
			'Username must be at least 3 characters': 'ユーザー名は 3 文字以上で入力して下さい。',
			'Username is taken': 'そのユーザー名は既に使われています。',

		// Popup Form: Change Email
		' Your email address is currently ': '現在のメールアドレス',
		'New Email Address': '新しいメールアドレス',
		'Send Confirmation Email': '確認メールを送信', // submit button
			'invalid email address': '無効なメールアドレスです。',

		// Popup Menu: Change Avatar
		'Uploaded Picture': 'アップロードした画像',
		'Initials (no avatar)': '愛称（画像なし）',
		'Take Photo With Camera': 'カメラで写真を撮影',
		'Upload a  new  picture': '新しい画像をアップロード',

		// Popup Form: Take a Photo
		'Trying to access your computer\'s camera… Check the banner at the top of the page.': 'カメラにアクセスしています… ページ上部のバナーを確認してください。',
		'Couldn\'t find a camera to connect to…': '接続できるカメラが見つかりません。',
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
		'Billing': '課金情報', // Gold

		// Boards / Main
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

			// Popup Form: (User)
			'(Admin)': '（管理者）',
			'(Normal)': '（一般）',
			'Edit profile info': 'プロフィールを編集',
			' Change permissions… ': '権限を変更…',
			'  Leave Organization…   ': '組織から外れる…',
			'   Remove from Organization…  ': '組織から外す…',
			'Leave Organization': '組織から外れる',
			'Remove Member': 'メンバーを外す',

			// Popup Form: Change Permissions
			' Admin  ': '管理者',
			' Admin ': '管理者',
			' Normal  ': '一般',
			' Normal ': '一般',
			'Can view, create and edit org boards, and change settings for the organization.'
					: '組織のボードを表示・作成・編集することができます。また組織の設定を変更することができます。',
			'Can view, create, and edit org boards, but not change settings.'
					: '組織のボードを表示・作成・編集することができますが、組織の設定を変更することはできません。',

		// Organization (account)
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

		// Billing (Gold)
		'Trello Gold is  active! ': 'Trello Gold は有効です！',
		' Your credits will expire on ': '有効期限が切れる日: ',
		'Add Billing Information': '支払情報の追加', // button
		'Billing History': '課金履歴',
		// ' Keep using Trello in style, even after your credits expire! ': '有効期限が切れても、Trello の基本機能は使えます！',
		'Cancel Trello Gold…': 'Trello Gold をキャンセルする…',
		'Cancel Trello Gold': 'Trello Gold をキャンセル',

		// Credit Card for account (Gold)
		'Credit Card for account': 'クレジットカード情報',
		' Name: ': '名前:',
		'(as it appears on the credit card)': '（クレジットカードに表示されている通りに）',
		'Card Number:': 'カード番号:',
		'CVV:': 'セキュリティコード',
		' Expiration date: ': '有効期限',
		'Billing Address': '請求先',
		'Company Name:': '会社名:',
		'Street Address 1:': '住所1:',
		'Street Address 2:': '住所2:',
		'City:': '市区町村:',
		'State/Province/Region:': '都道府県:',
		'ZIP/Postal Code:': '郵便番号:',
		'Country:': '国:',
		'I accept the ': '私は以下に同意します。',
		' and the ': ' および ',
		'Continue': '続行',

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

		// Popup Form: Member
		'Can view and edit cards, remove members, and change settings for the board.'
				: 'カードの表示・編集、メンバーの削除、ボードの設定の変更ができます。',
		'Can view and edit cards. Can\'t change settings.'
				: 'カードの表示・編集はできますが、ボードの設定を変更することはできません。',
		'View Member’s Board Activity': 'メンバーの動きを表示',
		'  Leave Board…   ': 'ボードから外れる…',
		'Leave Board': 'ボードから外れる',
		' You can’t leave because you are the only admin. To make another user an admin, click their avatar, select “Change permissions…”, and select “Admin”. '
				: 'あなたは唯一の管理者のため、ボードから外れることはできません。他の利用者を管理者にするためには、アイコンをクリックして「権限を変更…」から管理者にしてください。',

		'   Remove from Board…  ': 'ボードから外す…',

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
		'Leave Board…': 'ボードのメンバーから外れる',

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

		// Sub Menu: Stickers
		'Taco Pack': 'Taco パック',
		'Pete the Computer': 'コンピュータ',
		'Custom Stickers': 'カスタムステッカー',
		' Deleting a sticker is permanent. There is no undo. ': 'ステッカーの削除は元に戻せません。',

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
		'Members and Observers': 'メンバーと観察者',
		' Available only on boards with observers. ': '観察者がいるボードの場合に選択できます。',
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

			// Sub Menu: Change Background
			Photos: '写真',
			'Patterns and Textures': 'パターンやテクスチャ',
			Custom: 'カスタム',
			'Uploading…': 'アップロード中…', // Gold
			Options: 'オプション', // Gold

			// Sub Menu: Background Options (Gold)
			'Display Type': '表示種別',
			' Cover  ': 'カバー',
			' Tile  ': 'タイル',
			'Board Text': 'ボードの文字',
			' Light  ': '明るめ',
			' Dark  ': '暗め',
			'Delete background.': '背景を削除',
			' Deleting a background is permanent. There is no undo. ': '背景の削除は元に戻せません。',

			// Popup Menu: Commenting Permissions
			'Disabled ': '無効 ',
			'Members ': 'メンバー ',
			'Members and Observers ': 'メンバーと観察者 ',
			'Organization members ': '組織のメンバー ',
			'Public members ': '誰でも ',

			' No one is allowed to comment. ': '誰もコメントすることができません。',
			' Allow admins and normal members to comment. ': '管理者とメンバーがコメントできます。',
			' Allow admins, normal members, and observers to comment. ': '管理者・メンバー・観察者がコメントできます。',
			' Allow admins, normal members, observers, and org members to comment. ': '管理者・メンバー・観察者・組織のメンバーがコメントできます。',
			' Allow any Trello member to comment. ': 'Trello の利用者は誰でもコメントできます。',

			// Popup Menu: Invitations Permissions / Add Member Permissions
			'Admins ': '管理者 ',
			'All Members ': 'メンバー ',

			' Allow only admins to add and invite others. ': '管理者だけが、新しいメンバーを追加または招待できます。',
			' Allow members and admins to add and invite others. ': 'メンバーと管理者が、新しいメンバーを追加または招待できます。',

			// Popup Menu: Add Cards via Email
			'Your email address for this board': 'このボード用のメールアドレス',
			'Generate a new email address.': '新しいメールアドレスを生成',
			'Email me this address.': 'このメールアドレスをメールで送信',
			'Your emailed cards appear in…': 'メールで送ったカードは以下に追加…',
			'More email formatting tips.': 'メールの書式について',

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
		'Add Card…': 'カードを追加…',
		'Copy List…': 'リストをコピー…',
		'Move List…': 'リストを移動…',
		'Move All Cards in This List…': 'リストの全カードを移動…',
		'Archive All Cards in This List…': 'リストの全カードをアーカイブ…',
		'Archive This List': 'リストをアーカイブ',
		'Create List': 'リストを作成', // submit button
		'Archive All': '全てをアーカイブ', // submit button

		// Popup Menu: Card Actions
		'Labels…': 'ラベル…',
		'Members…': 'メンバー…',
		'Due Date…': '期限…',
		'More Actions…': 'その他の操作…',

		'Edit sticker.': '調整', // レイアウトの幅の制限
		'Rotate': '回転',



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

		// Popup Form: Member
		'Remove from Card': 'カードから外す',

		// Popup Menu: Change Labels
		'Change label titles…': 'ラベル名を変更…',

		// Popup Form: Add Checklist
		'Copy Items From…': '以下から項目をコピー…',

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
		'Upload Custom Emoji…': 'カスタム絵文字のアップロード…', // Gold

		// Popup Form: Upload Emoji (Gold)
		'Upload Image': '画像のアップロード',
		'Emoji Name': '絵文字の名前',
		'The name will default to the name of the uploaded file. You can change it here, though.'
				: '絵文字の名前はアップロードしたファイルの名前になりますが、変更することもできます。',
		'Preview': 'プレビュー',
		'Create Custom Emoji': 'カスタム絵文字を作成',


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
		// Help
		//

		' What’s Trello? How do I add a user? How do I file a bug report? All your questions answered at help.trello.com. '
				: 'Trello とは？ どうやってユーザーを追加するの？ どうやってバグ報告すればいい？ 質問の答えは help.trello.com にあります。',

		' Keyboard Shortcuts ': 'キーボードショートカット',
		' Trello is packed with keyboard shortcuts so you can work faster. Press “?” to bring them up at any time. '
				: 'Trello はキーボードショートカットによる手早い操作をサポートしています。いつでも「?」を押すと説明を表示します。',
		' Trello Development Board ': ' Trello 開発ボード ',
		' Trello is built in public using Trello. See what’s next at trello.com/dev. '
				: 'Trello は Trello を使って作られています。次に trello.com でどのような機能が開発されるかどうか見ることができます。',

		//
		// Shortcuts
		//

		' Shortcuts ': 'ショートカット',
		'Navigate Cards': 'カードを閲覧',
		' Pressing the arrow keys will select adjacent cards on a board. Pressing “j” will select the card below the current card. Pressing “k” will select the card above the current card. '
				: '矢印キーを押してその方向の隣のカードを選択します。「J」を押して現在の下のカードを選択します。「K」を押して現在の上のカードを選択します。',
		'Open Header Boards Menu': 'ヘッダーのボードメニューを開く',
		' Pressing “b” opens the boards menu in the header. You can search for boards and navigate boards with the up and down arrows. Pressing enter with a board selected will open it. '
				: '「B」を押してヘッダーにあるボードメニューを開きます。ボードの検索と上下矢印キーによるボードの選択ができます。Enter を押して選択したボードを開きます。',
		'Archive Card': 'カードをアーカイブ',
		' Pressing “c” will archive a card. ': '「C」を押してカードをアーカイブします。',
		'Due Date': 'カードの期限を変更',
		' Pressing “d” will open the due date picker for a card. ': '「D」を押してカードの期限ウィンドウを開きます。',
		'Edit the Card Description': 'カード説明を編集',
		' If viewing a card, pressing “e” will edit the description. If hovering over a card, pressing “e” will open the card and edit the description. '
				: '「E」を押してカードの説明を編集します。カードを選択している場合はカードが開きます。',
		'Close Menu / Cancel Editing': 'メニューを閉じる / 編集をキャンセル',
		' Pressing “esc” will close an open dialog window or pop-over or cancel edits and comments you are composing. '
				: 'Esc を押してダイアログやポップアップウィンドウを閉じます。また、記述中のコメントや編集をキャンセルします。',
		'Open Card': 'カードを開く',
		' Pressing “enter” will open the currently selected card. Pressing “shift + enter” while submitting a card will open it immediately after creating it. '
				: 'Enter を押して現在選択しているカードを開きます。カードを追加する際に Shift + Enter を押すとカードを作成して直ちに開きます。',
		'Open Card Filter Menu': 'カードの絞込みメニューを開く',
		' Use “f” to open the card filter menu. The search by title input is automatically focused. '
				: '「F」を押してカード絞り込みメニューを開きます。タイトル入力欄に自動的にフォーカスが移動します。',
		Label: 'ラベル',
		' Pressing “l” opens a pop-over of the available labels. Clicking a label will add or remove it from the card. '
				: '「L」を押してラベルウィンドウが開きます。ラベルをクリックしてカードに追加・削除します。',
		' Pressing one of the following number keys, will apply or remove that label. '
				: '下記の番号キーを押してラベルを適用・削除します。',
		Key: 'キー',
		'Label Color': 'ラベルの色',
		Green: '緑',
		Yellow: '黄',
		Orange: '橙',
		Red: '赤',
		Purple: '紫',
		Blue: '青',

		'Add / Remove Members': 'メンバーの追加と削除',
		' Pressing “m” opens the add / remove members menu. Clicking a member’s avatar will assign or unassign that person. '
				: '「M」を押してメンバーの追加と削除メニューを開きます。メンバーのアイコンをクリックして割り当て・解除します。',
		'Insert New Card': '新しいカードを挿入',
		' Pressing “n” opens a pop-over that allows you to add a card after the currently selected card. '
				: '「N」を押して現在選択中のカードの次にカードを追加する画面を開きます。',

		'Move Card to Adjacent List': 'カードを隣のリストに移動',
		' Pressing the left or right angle brackets (< and >) will move a card to the adjacent left or right list. '
				: '「<」や「>」を押して、カードを左や右のリストに移動します。',
		'My Cards Filter': '',
		' Pressing the “q” key toggles the “cards assigned to me” filter. '
				: '「Q」を押して、自分が担当しているカードの絞込みをオン・オフします。',

		'Pressing “s” will subscribe you to, or unsubscribe you from, a card. Subscribing to a card will give you notifications for most actions to that card.'
				: '「S」を押して、カードの注目をオン・オフします。カードを注目しておくと、カードの動きが通知されます。',
		'Assign Self': '自分を割り当てる',
		' Pressing “space” will assign (or unassign) yourself to a card. '
				: 'Space を押して、カードに自分を割り当て・解除します。',
		'Edit Title': 'タイトルを編集 ',
		' If viewing a card, pressing “t” will edit the title. If hovering over a card, pressing “t” will open the card and edit the title. '
				: '「T」を押してカードのタイトルを編集します。カードを選択している場合はカードが開きます。',

		' Pressing “v” will add (or remove) your vote on a card. ': '「V」を押してカードに投票・取り消しします。',
		'Toggle Board Sidebar': 'サイドバーを開閉',
		' Pressing “w” will collapse or expand the board sidebar. ': '「W」を押してボードのサイドバーを開閉します。',
		'Clear All Filters': '絞込みを解除',
		' Use “x” to clear all active card filters. ': '「X」を押して現在の絞込み条件を全て解除します。',
		'Open Shortcuts Page': 'ショートカットページを開く',
		' Pressing “?” will open the shortcuts page. ': '「?」を押してショートカットの説明ページを開きます。',
		'Autocomplete Members': 'メンバーの入力補助',
		' When writing a comment, you can type “@” plus a member’s name, username, or intials and get a list of matching members. You can navigate that list with the up and down arrows. Pressing enter or tab with a member selected will mention that user in the comment. The mentioned user will get a notification once submitted. '
				: 'コメントを記入時に「@」に続きメンバーの名前、ユーザー名、愛称を入力すると、一致するメンバーの一覧がリスト表示されます。このリストは上下キーで移動でき、Enter か Tab を押すとコメント内でそのメンバーに言及することができます。言及されたメンバーにはコメント登録後に通知が届きます。',
		' When adding a new card, you can use the same method to assign members to cards before submitting them. '
				: '新しいカードを追加する際にも、カードを登録する前に同じ方法でメンバーを割り当てることができます。',
		'Autocomplete Labels': 'ラベルの入力補助',
		' When adding a new card, you can type “#” plus the label’s color or title and get a list of matching labels. You can use the up and down arrows to navigate the resulting list. Pressing enter or tab will add the label to the composed card. The labels will be added to the card when you submit. '
				: '新しいカードを追加する際に「#」に続きラベルの色、タイトルを入力すると、一致するラベルの一覧がリスト表示されます。このリストは上下キーで移動でき、Enter か Tab を押すとそのラベルを作成中のカードに追加することができます。ラベルはカードを登録した時に一緒に追加されます。',
		'Autocomplete Position': '場所の入力補助',
		' When adding a new card, you can type “^” plus a list name or position in a list. You can also type “top” or “bottom” to add to the top or bottom of the current list. You can use the up and down arrows to navigate the resulting list. Pressing enter or tab will automatically change the position of the composed card. '
				: '新しいカードを追加する際に「^」に続きリストの名前または位置を入力すると、場所の一覧がリスト表示されます。番号の代わりに「top」や「bottom」と入力し、現在のリストの一番上や一番下を指定することもできます。このリストは上下キーで移動でき、Enter か Tab を押すと作成中のカードの場所を変更することができます。',

		//
		// Explanations
		//

		' This board is private.  Only people added to the board can view and edit it.  '
				: ' ボードを非公開にします。ボードに追加したメンバーだけが表示及び編集できます。 ',
		' This board is public. It\'s visible to anyone with the link and will show up in search engines like Google.  Only people added to the board can edit.  '
				: 'ボードを公開します。ボードやその URL は誰でも表示でき、Google などの検索エンジンの検索結果に表示される可能性もあります。ボードに追加したメンバーだけが編集できます。 ',
		' The board must be added to an org to enable this. '
				: 'ボードを組織に追加すると選択できます。',

		'   Your orgname is used in various URLs. Minimum of 3 characters, alphanumeric only, no spaces.  '
				: ' 組織ユーザー名は URL の一部になります。最低 3 文字で、英数字のみが使用できます。空白は使用できません。',
		'  An organization is a group of boards and members.   '
				: ' 組織はメンバーとボードのグループです。 ',
		' An organizations is a collection of members and boards. They make sharing and working within a group even easier. '
				: ' 組織とはメンバーとボードをまとめたものです。組織を使うとグループ作業や情報共有が簡単になります。 ',

		' Search for a person in Trello by name or email address, or enter an email address to invite someone new. '
				: ' ユーザーは Trello 上の名前かメールアドレスで検索できます。メールアドレスを入力することで、新しいユーザーを招待することもできます。 ',
		' This change will take effect after you click on the link in the confirmation email sent to the new email address. '
				: '新しいメールアドレスに届く確認メールに記載しているリンクをクリックすると、メールアドレスの変更が完了します。',

		'Show images on front of cards.'
				: 'カードの前に画像を表示します。',
		' Any org member can join this board without being invited.   '
				: ' 組織のメンバーは招待されなくてもボードに参加することができます。',
		' Don\'t share this email address. Anyone who has it can add cards as you. When composing emails, the card title goes in the subject and the card description in the body. '
				: 'このメールアドレスを共有しないでください。誰でもあなたに成りすましてカードが追加できるようになってしまいます。メールを送るとメールの題名は新しいカードのタイトルに、メールの本文は新しいカードの説明になります。',

		' Tip: You can drag and drop files from your desktop to upload them. '
				: ' ヒント: ファイルをドラッグドロップでアップロードすることもできます。 ',

		' Your initials are used in place of your avatar if your avatar is not set. Usernames require a minimum of 3 characters, alphanumeric only. '
				: ' アイコン画像を指定しない場合、代わりに愛称が使われます。ユーザー名は最低 3 文字で、英数字のみが使用できます。',

		' This will remove all the cards in this list from the board. To view archived cards and bring them back to the board, click "Menu" > "Archived Items". '
				: 'このリストの全てのカードがアーカイブされ、非表示になります。「メニュー」→「アーカイブを見る」でアーカイブされたカードを確認したりボードに戻したりできます。',

		' This will cancel your paid account. We will keep your data and your account will still be usable. You can reinstate the paid account at any time by re-entering credit card information. '
				: '有料アカウントをキャンセルします。アカウント情報やデータは引き続き利用できます。クレジットカード情報を入力することでいつでも有料アカウントに戻すことができます。',

		' Enable this power-up to allow users to vote on your cards. Votes are stored and synchronized between all users sharing this board. Choose between multiple permission levels for which users can vote on cards. View the number of votes on each card from the main Trello list pane or in a card\'s detail pane.  '
				: 'この拡張機能を有効にすると利用者がカードに投票することができるようになります。投票はボードの利用者全員で共有・同期されます。カードに投票する権限は数種類から選択できます。投票数は一覧画面や詳細画面に表示されます。',
		' Enable the calendar power-up to gain access to the Trello calendar view. Display cards with due dates in a weekly or monthly format for a time-based overview of cards. Most useful for time-sensitive projects and projects with multiple due dates.  '
				: 'この拡張機能を有効にするとカレンダー表示が使えるようになります。期限を持つカードが時間に沿って週または月単位に表示されます。期限を重視するプロジェクト等で便利です。',
		' Cards will visibly “age” as time passes without any activity. Regular mode will cause old cards to become progressively more transparent. Pirate mode will cause old cards to crack and tear like an old treasure map. Once cards have new activity on them, their age counter is reset and they appear new again. Age thresholds are 1, 2, and 4 weeks.  '
				: '時間が経過しても動きがないカードは表示が「古く」なっていきます。標準モードでは古いカードは徐々に透明になっていきます。海賊風モードでは古いカードは昔の宝の地図のようにひびが入ったり割けたりします。カード上で動きがあると古さはリセットされ新しい表示に戻ります。古さの閾値は 1, 2, 4 週間です。',

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
		' ボードを「$1」のメンバーだけに公開します。ボードに追加したメンバーだけが編集できます。 '
				: /^\s*This board is visible to members of\s+(.*?)\s*.\s*Only people added to the board can edit.\s*$/,
	}

	// Popup (pop-over) messages
	var popupMessagePatterns = {
		' 「$1」から外れますか？ 現在自分が参加している組織のボードには引き続き参加した状態になります。 '
				: /^\s*Leave (.*?)\? You will remain on all your boards in this organization.\s*$/,
		' 「$1」($2) を「$3」から外しますか？ このメンバーが参加している組織のボードは引き続き参加した状態になります。メンバーには通知が届きます。'
				: /^\s*Remove (.*?) \((.*?)\) from (.*?)\? The member will remain on all their boards in this organization. They will receive a notification.\s*$/,
		' 「$1」から外れますか？ このボードのカードからも削除されます。 '
				: /^\s*Leave (.*?)\? You will be removed from all cards on this board.\s*$/,
		' 「$1」($2) を「$3」から外しますか？ このメンバーはこのボードのカードからも削除されます。メンバーには通知が届きます。'
				: /^\s*Remove (.*?) \((.*?)\) from (.*?)\? The member will be removed from all cards on this board. They will receive a notification.\s*$/,
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

		// sub-name
		result = document.evaluate('.//span[@class="sub-name"]/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translatePattern(result.snapshotItem(i), subNames)
		}

		// popupMessagePatterns
		//result = document.evaluate('.//div[contains(concat(" ", @class, " "), " pop-over ")]//p/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		result = document.evaluate('p[parent::div/parent::div/@class="content clearfix"]/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result)
		for (var i = 0; i < result.snapshotLength; ++i) {
			translatePattern(result.snapshotItem(i), popupMessagePatterns)
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

