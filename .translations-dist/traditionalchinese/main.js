"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 const translations = {
	name: "Traditional Chinese",
	strings: {
		"namelocked": "用戶名封鎖",
		"locked": "用戶封鎖",

		"autoconfirmed": "自動確認用戶",
		"trusted": "信任用戶",

		"Please follow the rules:": "請遵守規則:",
		"[TN: Link to the PS rules for your language (path after pokemonshowdown.com]/rules": "/pages/rules-tw",
		"Global Rules": "全站規則",
		"${room} room rules": "${room}房間規則",

		"<strong>Global ranks</strong>": "<strong>全服權限</strong>",
		"+ <strong>Global Voice</strong> - They can use ! commands like !groups": "+ <strong>全服信任用戶</strong> -可以使用!廣播指令，比如!groups，並可以在限制發言期間發言",
		"% <strong>Global Driver</strong> - The above, and they can also lock users and check for alts": "% <strong>全服見習管理</strong> - 同上，並可以鎖定用戶或查看他們的小號",
		"@ <strong>Global Moderator</strong> - The above, and they can globally ban users": "@ <strong>全服管理員</strong> - 同上，並可以將用戶從服務器封禁",
		"* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>全服機器人</strong> - 跟全服管理員一樣，隻不過是機器",
		"&amp; <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally": "&amp; <strong>全服總管</strong> - 可以在服務器做任何事，例如修改你現在看到的這條信息",

		"<strong>Room ranks</strong>": "<strong>房權限</strong>",
		"^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": "",
		"+ <strong>Voice</strong> - They can use ! commands like !groups": "+ <strong>信任用戶</strong> - 可以使用!廣播指令，比如!groups，並可以在限制發言期間發言",
		"% <strong>Driver</strong> - The above, and they can mute and warn": "% <strong>見習管理</strong> - 同上，並可以禁止用戶發言或警告用",
		"@ <strong>Moderator</strong> - The above, and they can room ban users": "@ <strong>管理員</strong> - 同上，並可以將用戶從房間封禁",
		"* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot": "* <strong>機器人</strong> - 跟管理員一樣，隻不過是機器",
		"# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": "# <strong>房主</strong> - 房中的領導，幾乎擁有房間的全部管理權力",

		"/help OR /h OR /? - Gives you help.": "/help 或 /h 或 /? - 尋求幫助",
		"For an overview of room commands, use /roomhelp": "想搜房裡的指令，在房裡打一下/roomhelp",
		"For details of a specific command, use something like: /help data": "若要查看具體指令的用法(如/data指令)，請以/help data的格式進行查詢",

		"COMMANDS": "指令",
		"BATTLE ROOM COMMANDS": "對戰指令",
		"OPTION COMMANDS": "設置指令",
		"INFORMATIONAL/RESOURCE COMMANDS": "資訊/資源指令",
		"DATA COMMANDS": "數據指令",
		"DRIVER COMMANDS": "見習管理指令",
		"MODERATOR COMMANDS": "管理員指令",
		"ADMIN COMMANDS": "總管指令",

		"(replace / with ! to broadcast. Broadcasting requires: + % @ # &)": "(把/換成!就可以廣播指令。廣播功能需要：+ % @ # &)",

		"<strong>Room punishments</strong>:": "<strong>房間處罰</strong>:",
		"<strong>warn</strong> - Displays a popup with the rules.": "<strong>warn</strong> - 顯示規則與警告",
		"<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": "<strong>mute</strong> - 禁言用戶（不能發言）七分鐘。",
		"<strong>hourmute</strong> - Mutes a user for 60 minutes.": "<strong>hourmute</strong> - 禁言用戶一個小時。",
		"<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": "<strong>ban</strong> - 將用戶封鎖（不能進入該房內）兩天。",
		"<strong>blacklist</strong> - Bans a user for a year.": "<strong>blacklist</strong> - 將用戶封鎖，一年之內不能進入房裡。",

		"<strong>Global punishments</strong>:": "<strong>全服處罰</strong>:",
		"<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": "<strong>lock</strong> - 封鎖用戶（無法在任何房內發言或與全服見習管理以下的用戶私信）兩天。",
		"<strong>weeklock</strong> - Locks a user for a week.": "<strong>weeklock</strong> - 封鎖用戶一個星期。",
		"<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": "<strong>namelock</strong> - 封鎖用戶ip，兩天內不能使用任何用戶名。",
		"<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": "<strong>globalban</strong> - 全服封禁（使用戶不能連接和玩游戲）一個星期。",

		"<strong>Room drivers (%)</strong> can use:": "<strong>見習管理（%）</strong> 可以使用",
		"- /warn OR /k <em>username</em>: warn a user and show the Pokémon Showdown rules": "- /warn 或 /k <em>用戶名</em>: 警告用戶並顯示Pokémon Showdown的規則",
		"- /mute OR /m <em>username</em>: 7 minute mute": "- /mute 或 /m <em>用戶名</em>: 禁言七分鐘",
		"- /hourmute OR /hm <em>username</em>: 60 minute mute": "- /hourmute 或 /hm <em>用戶名</em>: 禁言一個小時",
		"- /unmute <em>username</em>: unmute": "- /unmute <em>用戶名</em>: 解除禁言",
		"- /hidetext <em>username</em>: hide a user's messages from the room": "- /hidetext <em>用戶名</em>: 在房間中隱藏該用戶發送的消息",
		"- /announce OR /wall <em>message</em>: make an announcement": "- /announce 或 /wall <em>信息</em>: 公告信息",
		"- /modlog <em>username</em>: search the moderator log of the room": "- /modlog <em>用戶名</em>: 搜鎖用戶在房間管理檔案中的記錄",
		"- /modnote <em>note</em>: add a moderator note that can be read through modlog": "- /modnote <em>信息</em>: 在房間管理檔案中留下信息，隻有見習管理以上能閱讀",

		"<strong>Room moderators (@)</strong> can also use:": "<strong>管理員（@）</strong> 可以使用：",
		"- /roomban OR /rb <em>username</em>: ban user from the room": "- /roomban 或 /rb <em>用戶名</em>: 將用戶封鎖",
		"- /roomunban <em>username</em>: unban user from the room": "- /roomunban <em>用戶名</em>: 解除封鎖",
		"- /roomvoice <em>username</em>: appoint a room voice": "- /roomvoice <em>用戶名</em>: 提升用戶為信任用戶",
		"- /roomdevoice <em>username</em>: remove a room voice": "- /roomdevoice <em>用戶名</em>: 移除信任用戶權限",
		"- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": "- /staffintro <em>介紹</em>: 設置管理公告，會對進入房間的見習管理或以上人員顯示",
		"- /roomsettings: change a variety of room settings, namely modchat": "- /roomsettings: 顯示並修改房內的某些設置，比如modchat",

		"<strong>Room owners (#)</strong> can also use:": "<strong>房主（#）</strong> 可以使用：",
		"- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": "- /roomintro <em>介紹</em>: 設置房內公告，會對進入房間的所有用戶顯示",
		"- /rules <em>rules link</em>: set the room rules link seen when using /rules": "- /rules <em>規則鏈接</em>: 設定/rules顯示的規則鏈接",
		"- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": "- /roommod, /roomdriver <em>用戶名</em>: 升用戶為見習管理/管理員",
		"- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": "- /roomdemod, /roomdedriver <em>用戶名</em>: 移除見習管理/管理員權限",
		"- /roomdeauth <em>username</em>: remove all room auth from a user": "- /roomdeauth <em>用戶名</em>: 取消用戶所有房間權限",
		"- /declare <em>message</em>: make a large blue declaration to the room": "- /declare <em>信息</em>: 用藍色高亮發布公告信息",
		"- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": "- !htmlbox <em>HTML的代碼</em>: 在房內廣播HTML代碼框",
		"- !showimage <em>, [width], [height]</em>: show an image to the room": "- !showimage <em>[url], [寬度], [高度]</em>: 在房內顯示圖片",
		"- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": "- /roomsettings: 顯示並修改房內的某些設置，包括modchat，大寫限制等",

		"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6774654/\">roomauth guide</a>": "需要更多幫助可以閱讀 <a href=\"https://www.smogon.com/forums/posts/6774654/\">房間管理指導</a>",

		"Tournament Help:": "房賽指令",
		"- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": "- /tour create <em>分級</em>, elimination: 在房裡開單淘汰賽（報名）。",
		"- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": "- /tour create <em>分級</em>, roundrobin: 在房裡開循環賽（報名）。",
		"- /tour end: forcibly end the tournament in the current room": "- /tour end: 強行終止房裡的比賽",
		"- /tour start: start the tournament in the current room": "- /tour start: 報名完後開始比賽",
		"- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)": "- /tour banlist [寶可夢], [特性], [...]: 在比賽裡禁止某些技能，特性，寶可夢或物品（開比賽前設定）",

		"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6777489/\">tournaments guide</a>": "需要更多幫助可以閱讀 <a href=\"https://www.smogon.com/forums/posts/6777489/\">比賽指導</a>",

		"Your status cannot be updated while you are locked or semilocked.": "鎖定或半鎖定時無法更新您的狀態.",
		"Your status is too long; it must be under ${maxLength} characters.": "您的狀態太長了;它必須低於${maxLength}個字符.",
		"Your status contains a banned word.": "您的狀態裡包含禁止使用的詞.",
		"Your status has been set to: ${target}.": "您的狀態已設置為: ${target}.", "You are now marked as busy.": "您現在被標記為忙碌.",
		"You are now marked as away. Send a message or use /back to indicate you are back.": "您現在被標記為離開。發送消息或使用/back回到原來的狀態.",
		"You are already marked as back.": "您已回到原來的狀態.",
		"You are no longer marked as busy.": "您已停止標記為忙碌.",

		"You must choose a name before you can talk.": "發言之前請登錄用戶",
		"You are ${lockType} and can't talk in chat. ${lockExpiration}": "您被${lockType}封鎖，因此不能發言。${lockExpiration}",
		"Get help with [TN: your lock]this": "關於被封鎖提問，請求幫助",
		"You are muted and cannot talk in this room.": "您被暫時禁言，因此不能發言",
		"Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": "房間管控，天梯贏了一局並且注冊超過一個星期的用戶才能發言",
		"Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": "房間管控，見習管理或全服信任用戶以上的用戶才能發言",
		"Because moderated chat is set, you must be of rank ${groupName} or higher to speak in this room.": "房間管控，${groupName}權限以上的用戶才能發言",
		"Your message can't be blank.": "發言時不能留空白",
		"Your message is too long: ": "您的句子太長了",
		"Your message contains banned characters.": "發言內容包含了禁止詞匯",
		"This room has slow-chat enabled. You can only talk once every ${time} seconds.": "限速聊天，每${time}秒鐘才能發言",
		"Your username contains a phrase banned by this room.": "用戶名包含了禁止詞匯",
		"Your status message contains a phrase banned by this room.": "狀態內容包含了禁止詞匯",

		"You are ${lockType} and can only private message members of the global moderation team. ${lockExpiration}": "",
		"Get help with this": "",
		"The user \"${targetUser.name}\" is locked and cannot be PMed.": "",
		"On this server, you must be of rank ${groupName} or higher to PM users.": "",
		"This user is blocking private messages right now.": "",
		"This ${Config.groups[targetUser.group].name} is too busy to answer private messages right now. Please contact a different staff member.": "",
		"If you need help, try opening a <a href=\"view-help-request\" class=\"button\">help ticket</a>": "",
		"You are blocking private messages right now.": "",
		"You are blocking challenges right now.": "",

		"Your message contained banned words in this room.": "發言內容包含了房間內禁止詞匯",
		"You can't send the same message again so soon.": "同樣的句子不能及時發出",
		"Due to this room being a high traffic room, your message must contain at least two letters.": "由於此房間流量較大，因此您的消息必須至少包含兩個字母",

		"You are already blocking private messages! To unblock, use /unblockpms": "您已屏蔽私信。若要恢復接收私信，請使用/unblockpms",
		"You are now blocking private messages, except from staff and ${rank}.": "您已屏蔽私信，除了管理與${rank}權限以上的用戶",
		"You are now blocking private messages, except from staff and ${status} users.": "您已屏蔽私信，除了管理與${status}狀態的用戶",
		"You are now blocking private messages, except from staff.": "您已屏蔽私信，除了管理用戶",
		"You are not blocking private messages! To block, use /blockpms": "您並未屏蔽私信。若要屏蔽私信，請使用/blockpms",
		"You are no longer blocking private messages.": "您已停止屏蔽私信",
		"You are now blocking all incoming challenge requests.": "您已屏蔽所有挑戰請求",
		"You are already blocking challenges!": "您已屏蔽挑戰請求",
		"You are already available for challenges!": "您已能夠接收挑戰請求",
		"You are available for challenges from now on.": "您從現在開始接收挑戰請求",
		"You are now blocking challenges, except from staff and ${rank}.": "",
		"You are now blocking challenges, except from staff and ${status} users.": "",

		"Staff FAQ": "管理FAQ",
		"You cannot broadcast all FAQs at once.": "無法同時廣播所有FAQ",
		"A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": "自動確認用戶就是在天梯上贏了一次的還有注冊滿一周的用戶。為了避免機器與熊孩子等垃圾之類的用戶，PS大多數的聊天室都需要自動確認用戶以上的用戶才能聊天。如果你沒有得到要求，你可以私言一個在房裡的管理員（用戶名前加%，@，#號的）。總之還是要看情況，要是管理員很忙的話或者哪裡不符合要求，就隻能等待",
		"How the ladder works": "什麼叫做天梯",
		"Tiering FAQ": "分級評論FAQ",
		"Badge FAQ": "論壇徽章FAQ",
		"Common misconceptions about our RNG": "關於隨機數發生器還是運氣不好",
		"To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": "若想加入房賽，點一下<strong>Join!</strong> 或者在房內打一下<code>/tour join</code>。要是擔心隊伍有問題的話，加入房賽后可以點一下<strong>Validate</strong>。接受挑戰，點一下<strong>Ready!</strong> 。共有兩種比賽，淘汰賽（一般情況下隻有一條命），還有循環賽（每個對手較量一次）。",
		"Frequently Asked Questions": "常見問題解答",

		"pages/faq": "pages/faq",
		"pages/ladderhelp": "pages/ladderhelp",
		"pages/rng": "pages/rng",
		"pages/staff": "pages/staff",

		"- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": "",
		"- We log IPs to enforce bans and mutes.": "",
		"- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": "",
		'- For more information, you can read our <a href="https://${Config.routes.root}/privacy">full privacy policy.</a>': '',
	},
}; exports.translations = translations;

 //# sourceMappingURL=sourceMaps/main.js.map