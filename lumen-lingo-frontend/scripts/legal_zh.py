#!/usr/bin/env python3
"""Add Legal/Privacy/Terms translations to Chinese Simplified (zh.json)."""
import json, pathlib

MSG = pathlib.Path(__file__).resolve().parent.parent / "messages" / "zh.json"
data = json.loads(MSG.read_text("utf-8"))

LQ = "\u201c"  # left double quotation mark
RQ = "\u201d"  # right double quotation mark

data["Legal"] = {
    "tocLabel": "本页内容",
    "downloadPdf": "下载PDF",
    "lastUpdated": "最后更新：2026年3月22日"
}

data["Privacy"] = {
    "meta": {
        "title": "隐私政策",
        "description": f"了解LumenShore如何谨慎处理您的数据。了解我们以隐私为先的理念、设备端处理、iCloud同步，以及您在GDPR和CCPA下的权利。",
        "ogTitle": "隐私政策 — LumenLingo"
    },
    "breadcrumb": "隐私政策",
    "hero": {
        "heading": "隐私政策",
        "subtitle": "您的隐私对我们非常重要。以下是我们如何处理您数据的详细说明——用通俗的语言，而非法律术语。"
    },
    "overview": {
        "heading": "概述",
        "p1": f"LumenShore Ltd（以下简称{LQ}LumenShore{RQ}、{LQ}我们{RQ}或{LQ}本公司{RQ}）运营LumenLingo移动应用程序（以下简称{LQ}本应用{RQ}）。本隐私政策解释了在您使用LumenLingo时，我们如何收集、使用、存储和保护信息。",
        "p2": "LumenLingo采用隐私优先的架构设计。您的学习数据在您的设备和个人iCloud账户上处理和存储——而非我们的服务器。我们相信您的数据属于您，也应当如此。"
    },
    "informationWeCollect": {
        "heading": "我们收集的信息",
        "intro": "LumenLingo仅收集提供优质学习体验所需的最少数据：",
        "li1": "<b>学习进度数据</b> — 单词卡掌握程度、练习分数、连续天数、经验值和会话历史。这些数据存储在您的本地设备上，并通过iCloud同步。",
        "li2": "<b>应用偏好设置</b> — 所选语言对、声景偏好、视觉背景选择和等级选择。存储在设备上并通过iCloud同步。",
        "li3": "<b>订阅状态</b> — 您的会员等级，完全由Apple通过App Store管理。我们从Apple接收订阅状态，但不处理付款信息。",
        "li4": "<b>匿名分析数据</b> — 我们可能收集汇总的、不可识别的使用指标（例如哪些功能最受欢迎）以改进应用。不包含任何个人数据。"
    },
    "whatWeDontCollect": {
        "heading": "我们不收集的信息",
        "intro": "我们要明确说明我们<b>绝不</b>收集的内容：",
        "li1": "不收集电子邮件地址、姓名或个人标识符（应用不需要创建账户）",
        "li2": "不收集位置数据或GPS坐标",
        "li3": "不访问通讯录、照片或您设备上的其他应用",
        "li4": "不收集付款信息或信用卡信息（Apple处理所有账单）",
        "li5": "不使用广告标识符或跟踪像素",
        "li6": "不向第三方广告商出售或共享任何数据——绝不"
    },
    "howWeUse": {
        "heading": "我们如何使用您的信息",
        "intro": "我们处理的有限数据仅用于以下目的：",
        "li1": "<b>个性化学习</b> — 间隔重复调度、难度调整和进度跟踪依赖于您的学习历史。",
        "li2": "<b>进度同步</b> — iCloud同步确保您的数据在所有Apple设备上同步。",
        "li3": "<b>订阅管理</b> — 我们验证您的会员等级以解锁相应功能。",
        "li4": "<b>应用改进</b> — 匿名汇总数据帮助我们了解哪些功能有价值以及发展重点。"
    },
    "dataStorage": {
        "heading": "数据存储和安全",
        "intro": "LumenLingo采用设备优先的隐私架构：",
        "li1": "<b>设备端存储</b> — 所有学习数据使用Apple的SwiftData框架在本地存储，受设备内置加密保护。",
        "li2": "<b>iCloud同步</b> — 数据通过您的个人iCloud账户在设备间同步，由Apple端到端加密。我们无法访问您的iCloud数据。",
        "li3": "<b>无外部服务器</b> — LumenLingo不维护存储您个人数据的服务器。没有需要保护（或可能泄露）的云数据库。",
        "li4": "<b>App Store安全性</b> — 订阅管理通过Apple的安全基础设施处理。"
    },
    "thirdParty": {
        "heading": "第三方服务",
        "intro": "LumenLingo与少量第三方服务集成：",
        "li1": "<b>Apple App Store</b> — 用于应用分发、订阅管理和支付处理。受<applePrivacy>Apple隐私政策</applePrivacy>管辖。",
        "li2": "<b>Apple iCloud</b> — 用于跨设备数据同步。受Apple iCloud条款管辖。",
        "li3": "<b>隐私友好的分析</b> — 如果我们使用分析工具，我们会使用不使用Cookie、符合GDPR规范且不收集个人身份信息的工具。",
        "noAdNetworks": "我们不使用Google Analytics、Facebook SDK或任何广告网络。"
    },
    "childrensPrivacy": {
        "heading": "儿童隐私",
        "p1": "LumenLingo面向所有年龄段用户设计，不会故意收集13岁以下（或您所在司法管辖区适用年龄以下）儿童的个人信息。由于应用不需要创建账户且数据存储在本地，包括儿童在内的任何用户的个人信息都不会传输给我们。",
        "p2": "家长和监护人可以通过标准iOS设备管理随时管理或删除应用及其数据。"
    },
    "dataRetention": {
        "heading": "数据保留和删除",
        "intro": "由于您的数据存储在您的设备和iCloud账户上，您可以完全控制：",
        "li1": "<b>重置进度</b> — 使用应用中的设置 → 重置进度选项清除所有学习数据。",
        "li2": "<b>删除应用</b> — 卸载LumenLingo将删除所有本地存储的数据。",
        "li3": "<b>iCloud数据</b> — 通过设备的设置 → Apple ID → iCloud → 管理存储空间管理iCloud存储。",
        "li4": "<b>订阅</b> — 通过设置 → Apple ID → 订阅取消订阅。取消后我们不保留任何数据。"
    },
    "yourRights": {
        "heading": "您的权利",
        "intro": "根据您的所在地，您可能拥有关于数据的额外权利：",
        "gdprHeading": "根据GDPR（欧洲经济区和英国）",
        "gdprLi1": "数据访问权 — 您的数据已在您的设备和iCloud上。",
        "gdprLi2": "更正权 — 您可以直接在应用中编辑设置。",
        "gdprLi3": "删除权 — 重置进度或删除应用以删除所有数据。",
        "gdprLi4": "数据可携带权 — 您的数据以标准格式存储在iCloud中。",
        "gdprLi5": "反对权 — 如需退出匿名分析，请联系我们。",
        "ccpaHeading": "根据CCPA（加利福尼亚州）",
        "ccpaLi1": "知情权 — 如上详述；我们仅收集最少数据。",
        "ccpaLi2": "删除权 — 重置进度或删除应用。",
        "ccpaLi3": "退出权 — 我们不向任何人出售个人信息。",
        "ccpaLi4": "不受歧视权 — 行使权利不会受到不同对待。"
    },
    "policyUpdates": {
        "heading": "政策更新",
        "p1": f"我们可能不时更新本隐私政策，通常是为了反映应用功能的变化或法律要求。当我们进行重大更改时，我们会更新本页顶部的{LQ}最后更新{RQ}日期。",
        "p2": "建议您定期查看本页。在更改后继续使用LumenLingo即表示接受更新后的政策。"
    },
    "contactUs": {
        "heading": "联系我们",
        "intro": "如果您对本隐私政策、您的数据有任何疑问，或希望行使您的权利，请联系我们：",
        "email": "<b>电子邮件</b>：<emailLink>hello@lumenshore.com</emailLink>",
        "company": "<b>公司</b>：LumenShore Ltd，英国",
        "responseTime": "我们通常在48小时内回复。"
    }
}

data["Terms"] = {
    "meta": {
        "title": "服务条款",
        "description": "LumenLingo的服务条款。了解使用我们语言学习应用时的权利和义务——以通俗的语言撰写。",
        "ogTitle": "服务条款 — LumenLingo"
    },
    "breadcrumb": "服务条款",
    "hero": {
        "heading": "服务条款",
        "subtitle": "LumenLingo的使用规则——因为法律文件不应该需要词典来理解，所以用通俗的语言撰写。"
    },
    "introduction": {
        "heading": "简介",
        "p1": f"欢迎使用LumenLingo。本服务条款（以下简称{LQ}本条款{RQ}）规范您使用由LumenShore Ltd（以下简称{LQ}LumenShore{RQ}、{LQ}我们{RQ}或{LQ}本公司{RQ}）运营的LumenLingo移动应用程序（以下简称{LQ}本应用{RQ}）。",
        "p2": "通过下载、安装或使用LumenLingo，您同意受本条款约束。如果您不同意本条款的任何部分，请不要使用本应用。"
    },
    "acceptance": {
        "heading": "条款的接受",
        "intro": "通过访问或使用LumenLingo，您确认：",
        "li1": "您已年满13岁（或您所在司法管辖区要求的最低年龄）。",
        "li2": "如果您未满18岁，您已获得父母或法定监护人的同意。",
        "li3": "您具有签订具有约束力的合同的法律行为能力。",
        "li4": "您将遵守本条款和所有适用法律。"
    },
    "yourAccount": {
        "heading": "您的账户",
        "intro": "LumenLingo不需要传统的账户注册。您在应用中的身份与您的Apple ID和设备关联。您有责任：",
        "li1": "维护Apple ID和设备访问的安全性。",
        "li2": "通过使用本应用产生的所有活动。",
        "li3": "保持设备操作系统更新以获得最佳体验和安全性。"
    },
    "subscriptions": {
        "heading": "订阅和计费",
        "intro": "LumenLingo提供免费和高级会员等级。高级功能需要付费订阅。",
        "li1": "<b>计费</b> — 所有订阅均通过App Store由Apple处理和管理。我们不直接处理付款。",
        "li2": "<b>免费等级</b> — 提供有限语言对和练习模式的基本学习功能访问。",
        "li3": "<b>高级等级</b> — 解锁额外语言对、无限练习、声景、呼吸球和应用中描述的其他高级功能。",
        "li4": "<b>自动续订</b> — 除非在当前计费周期结束前至少24小时取消，否则订阅将自动续订。",
        "li5": "<b>取消</b> — 您可以通过Apple ID设置 → 订阅随时取消订阅。取消在当前计费周期结束时生效。",
        "li6": "<b>退款</b> — 退款请求由Apple根据其退款政策处理。有关退款事宜请联系Apple支持。",
        "li7": "<b>价格变更</b> — 我们可能会调整订阅价格。您将提前收到通知，变更仅在下一个续订周期生效。"
    },
    "acceptableUse": {
        "heading": "可接受的使用",
        "intro": "您同意仅出于合法目的使用LumenLingo，并遵守本条款。您不得：",
        "li1": "对本应用的任何部分进行逆向工程、反编译或反汇编。",
        "li2": "试图访问、篡改或使用本应用或其系统的非公开区域。",
        "li3": "复制、修改、分发或创建本应用的衍生作品。",
        "li4": "以可能损害、禁用、过载或影响本应用功能的方式使用本应用。",
        "li5": "使用自动化脚本、机器人或其他工具与本应用交互。",
        "li6": "试图绕过订阅或等级限制。"
    },
    "intellectualProperty": {
        "heading": "知识产权",
        "p1": "LumenLingo中的所有内容——包括但不限于单词卡内容、翻译、音频、声景、视觉设计、着色器效果、动画、LumenLingo名称和LumenShore品牌——均为LumenShore Ltd的知识产权，受版权法、商标法和其他知识产权法保护。",
        "p2": "您的订阅授予您有限的、非独占的、不可转让的、可撤销的许可，用于个人非商业语言学习目的使用本应用。本许可不包括以下权利：",
        "li1": "复制、分发或公开展示本应用的任何内容。",
        "li2": "将任何内容用于商业目的或竞争产品。",
        "li3": "删除或更改任何所有权通知或标签。"
    },
    "userContent": {
        "heading": "用户内容和数据",
        "p1": "您的学习数据（进度、偏好设置、练习历史）存储在您的设备和个人iCloud账户上。LumenShore不声称对您的个人学习数据拥有所有权。",
        "p2": "有关我们如何处理数据的更多详细信息，请参阅我们的<privacyLink>隐私政策</privacyLink>。"
    },
    "disclaimers": {
        "heading": "免责声明",
        "intro": f"LumenLingo按{LQ}现状{RQ}和{LQ}可用性{RQ}提供。尽管我们力求准确和高质量，但我们不对以下方面作出任何明示或暗示的保证：",
        "li1": "任何语言内容或翻译的准确性或完整性。",
        "li2": "本应用的不间断或无错误运行。",
        "li3": "使用本应用可能获得的结果。",
        "li4": "任何特定时间点特定功能的可用性。",
        "supplement": "LumenLingo是辅助学习工具。它不能替代专业语言教学、认证翻译服务或学术课程。"
    },
    "limitationOfLiability": {
        "heading": "责任限制",
        "intro": "在适用法律允许的最大范围内，LumenShore Ltd不对以下原因造成的间接的、附带的、特殊的、后果性的或惩罚性损害，或利润、数据、商誉损失承担责任：",
        "li1": "使用（或无法使用）本应用。",
        "li2": "内容中的任何错误、遗漏或不准确之处。",
        "li3": "对您设备或数据的未经授权访问（非因我们的疏忽造成）。",
        "li4": "服务的任何中断或停止。",
        "cap": "我们因本条款或使用LumenLingo而产生的任何索赔的总责任不超过您在索赔前12个月内为本应用支付的金额。"
    },
    "termination": {
        "heading": "终止",
        "p1": "您可以随时通过删除本应用来停止使用LumenLingo。如果您有活跃的订阅，应通过Apple的订阅管理另行取消。",
        "p2": "如果我们有合理理由认为您违反了本条款，我们保留暂停或终止您对本应用访问的权利。终止后：",
        "li1": "您使用本应用的许可立即撤销。",
        "li2": "您的本地数据保留在您的设备上，直到您将其删除。",
        "li3": "活跃的订阅应通过Apple取消。",
        "li4": "按其性质应在终止后继续有效的条款将继续有效。"
    },
    "governingLaw": {
        "heading": "管辖法律",
        "p1": "本条款受英格兰和威尔士法律管辖并据此解释，不考虑法律冲突原则。",
        "p2": "因本条款引起的任何争议受英格兰和威尔士法院的专属管辖。但这不影响您作为居住国消费者的法定权利。"
    },
    "changes": {
        "heading": "条款变更",
        "p1": f"我们可能不时更新本条款。当我们进行重大变更时，我们将更新页面顶部的{LQ}最后更新{RQ}日期，并可能通过本应用通知您。",
        "p2": "在变更发布后继续使用LumenLingo即表示接受修订后的条款。如果您不同意变更，请停止使用本应用并取消任何活跃的订阅。"
    },
    "contactUs": {
        "heading": "联系我们",
        "intro": "如果您对本条款有任何疑问或需要报告问题，请联系我们：",
        "email": "<b>电子邮件</b>：<emailLink>hello@lumenshore.com</emailLink>",
        "company": "<b>公司</b>：LumenShore Ltd，英国",
        "responseTime": "我们通常在48小时内回复。"
    }
}

MSG.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("ZH: Legal/Privacy/Terms added successfully")
