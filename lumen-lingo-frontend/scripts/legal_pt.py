#!/usr/bin/env python3
"""Add Legal/Privacy/Terms translations to Portuguese (pt.json)."""
import json, pathlib

MSG = pathlib.Path(__file__).resolve().parent.parent / "messages" / "pt.json"
data = json.loads(MSG.read_text("utf-8"))

data["Legal"] = {
    "tocLabel": "Nesta página",
    "downloadPdf": "Descarregar como PDF",
    "lastUpdated": "Última atualização: 22 de março de 2026"
}

data["Privacy"] = {
    "meta": {
        "title": "Política de Privacidade",
        "description": "Saiba como a LumenShore trata os seus dados com cuidado. Conheça a nossa abordagem de privacidade em primeiro lugar, processamento no dispositivo, sincronização iCloud e os seus direitos ao abrigo do RGPD e da CCPA.",
        "ogTitle": "Política de Privacidade — LumenLingo"
    },
    "breadcrumb": "Política de Privacidade",
    "hero": {
        "heading": "Política de Privacidade",
        "subtitle": "A sua privacidade é muito importante para nós. Eis exatamente como tratamos os seus dados — em linguagem simples, não em jargão jurídico."
    },
    "overview": {
        "heading": "Visão Geral",
        "p1": "A LumenShore Ltd (\u201cLumenShore\u201d, \u201cnós\u201d ou \u201cnosso\u201d) opera a aplicação móvel LumenLingo (\u201ca Aplicação\u201d). Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos informações quando utiliza o LumenLingo.",
        "p2": "Construímos o LumenLingo com uma arquitetura de privacidade em primeiro lugar. Os seus dados de aprendizagem são processados e armazenados no seu dispositivo e na sua conta pessoal iCloud — não nos nossos servidores. Acreditamos que os seus dados são seus e assim devem permanecer."
    },
    "informationWeCollect": {
        "heading": "Informações que Recolhemos",
        "intro": "O LumenLingo recolhe os dados mínimos necessários para proporcionar uma excelente experiência de aprendizagem:",
        "li1": "<b>Dados de progresso de aprendizagem</b> — níveis de domínio de cartões, pontuações de prática, sequências, XP e histórico de sessões. Estes dados são armazenados localmente no seu dispositivo e sincronizados via iCloud.",
        "li2": "<b>Preferências da aplicação</b> — os seus pares de idiomas selecionados, preferências de paisagens sonoras, escolhas de fundos visuais e seleção de nível. Armazenados no dispositivo e sincronizados via iCloud.",
        "li3": "<b>Estado da subscrição</b> — o seu nível de membro, gerido inteiramente pela Apple através da App Store. Recebemos um estado de subscrição da Apple, mas não processamos informações de pagamento.",
        "li4": "<b>Análises anónimas</b> — podemos recolher métricas de utilização agregadas e não identificáveis (como quais funcionalidades são mais populares) para melhorar a aplicação. Nenhum dado pessoal é incluído."
    },
    "whatWeDontCollect": {
        "heading": "O que Não Recolhemos",
        "intro": "Queremos ser claros sobre o que <b>nunca</b> recolhemos:",
        "li1": "Nenhum endereço de e-mail, nome ou identificador pessoal (a aplicação não requer registo de conta)",
        "li2": "Nenhum dado de localização ou coordenadas GPS",
        "li3": "Nenhum acesso a contactos, fotos ou outras aplicações no seu dispositivo",
        "li4": "Nenhuma informação de pagamento ou cartão de crédito (a Apple trata toda a faturação)",
        "li5": "Nenhum identificador publicitário ou pixel de rastreamento",
        "li6": "Nenhum dado vendido ou partilhado com anunciantes terceiros — nunca"
    },
    "howWeUse": {
        "heading": "Como Utilizamos as suas Informações",
        "intro": "Os dados limitados que tratamos são utilizados unicamente para:",
        "li1": "<b>Personalizar a sua aprendizagem</b> — o agendamento de repetição espaçada, adaptação de dificuldade e rastreamento de progresso dependem do seu histórico de aprendizagem.",
        "li2": "<b>Sincronizar o seu progresso</b> — a sincronização iCloud garante que os seus dados o acompanham em todos os seus dispositivos Apple.",
        "li3": "<b>Gerir a sua subscrição</b> — verificamos o seu nível de membro para desbloquear as funcionalidades apropriadas.",
        "li4": "<b>Melhorar a aplicação</b> — dados anónimos agregados ajudam-nos a entender quais funcionalidades são valiosas e onde concentrar o desenvolvimento."
    },
    "dataStorage": {
        "heading": "Armazenamento e Segurança de Dados",
        "intro": "O LumenLingo utiliza uma arquitetura de privacidade baseada no dispositivo:",
        "li1": "<b>Armazenamento no dispositivo</b> — todos os dados de aprendizagem são armazenados localmente utilizando o framework SwiftData da Apple, protegidos pela encriptação integrada do seu dispositivo.",
        "li2": "<b>Sincronização iCloud</b> — os dados sincronizam-se entre os seus dispositivos através da sua conta pessoal iCloud, encriptados ponta a ponta pela Apple. Não temos acesso aos seus dados iCloud.",
        "li3": "<b>Sem servidores externos</b> — o LumenLingo não mantém servidores que armazenem os seus dados pessoais. Não existe base de dados na nuvem para proteger (ou comprometer).",
        "li4": "<b>Segurança da App Store</b> — a gestão de subscrições é tratada pela infraestrutura segura da Apple."
    },
    "thirdParty": {
        "heading": "Serviços de Terceiros",
        "intro": "O LumenLingo integra-se com um número limitado de serviços de terceiros:",
        "li1": "<b>Apple App Store</b> — para distribuição da aplicação, gestão de subscrições e processamento de pagamentos. Sujeito à <applePrivacy>Política de Privacidade da Apple</applePrivacy>.",
        "li2": "<b>Apple iCloud</b> — para sincronização de dados entre dispositivos. Sujeito aos termos do iCloud da Apple.",
        "li3": "<b>Análises respeitadoras da privacidade</b> — se utilizarmos análises, usamos ferramentas sem cookies, compatíveis com o RGPD, que não recolhem informações pessoais identificáveis.",
        "noAdNetworks": "Não utilizamos o Google Analytics, o SDK do Facebook ou quaisquer redes publicitárias."
    },
    "childrensPrivacy": {
        "heading": "Privacidade das Crianças",
        "p1": "O LumenLingo é concebido para utilizadores de todas as idades e não recolhe deliberadamente informações pessoais de crianças com menos de 13 anos (ou a idade aplicável na sua jurisdição). Uma vez que a aplicação não requer registo de conta e armazena dados localmente, nenhuma informação pessoal é transmitida a nós por qualquer utilizador, incluindo crianças.",
        "p2": "Pais e tutores podem gerir ou eliminar a aplicação e os seus dados a qualquer momento através da gestão padrão de dispositivos iOS."
    },
    "dataRetention": {
        "heading": "Retenção e Eliminação de Dados",
        "intro": "Uma vez que os seus dados residem no seu dispositivo e na sua conta iCloud, tem controlo total sobre eles:",
        "li1": "<b>Repor progresso</b> — utilize a opção Definições → Repor Progresso na aplicação para apagar todos os dados de aprendizagem.",
        "li2": "<b>Eliminar a aplicação</b> — desinstalar o LumenLingo remove todos os dados armazenados localmente.",
        "li3": "<b>Dados iCloud</b> — pode gerir o armazenamento iCloud através de Definições → ID Apple → iCloud → Gerir Armazenamento no seu dispositivo.",
        "li4": "<b>Subscrição</b> — cancele a sua subscrição através de Definições → ID Apple → Subscrições. Nenhum dado é retido por nós após o cancelamento."
    },
    "yourRights": {
        "heading": "Os Seus Direitos",
        "intro": "Dependendo da sua localização, pode ter direitos adicionais relativamente aos seus dados:",
        "gdprHeading": "Ao abrigo do RGPD (Espaço Económico Europeu e Reino Unido)",
        "gdprLi1": "Direito de acesso aos seus dados — os seus dados já estão no seu dispositivo e iCloud.",
        "gdprLi2": "Direito de retificação — pode editar as suas preferências diretamente na aplicação.",
        "gdprLi3": "Direito ao apagamento — reponha o progresso ou elimine a aplicação para remover todos os dados.",
        "gdprLi4": "Direito à portabilidade de dados — os seus dados são armazenados em formatos padrão no iCloud.",
        "gdprLi5": "Direito de oposição — contacte-nos para sair das análises anónimas.",
        "ccpaHeading": "Ao abrigo da CCPA (Califórnia)",
        "ccpaLi1": "Direito a saber que dados são recolhidos — detalhado acima; recolhemos dados mínimos.",
        "ccpaLi2": "Direito de eliminação — reponha o progresso ou elimine a aplicação.",
        "ccpaLi3": "Direito de exclusão — não vendemos informações pessoais a ninguém.",
        "ccpaLi4": "Não discriminação — não será tratado diferentemente por exercer os seus direitos."
    },
    "policyUpdates": {
        "heading": "Atualizações da Política",
        "p1": "Podemos atualizar esta Política de Privacidade de tempos a tempos, tipicamente para refletir alterações nas funcionalidades da aplicação ou requisitos legais. Quando fizermos alterações significativas, atualizaremos a data de \u201cÚltima atualização\u201d no topo desta página.",
        "p2": "Encorajamo-lo a rever esta página periodicamente. O uso continuado do LumenLingo após alterações constitui aceitação da política atualizada."
    },
    "contactUs": {
        "heading": "Contacte-nos",
        "intro": "Se tiver questões sobre esta Política de Privacidade, os seus dados ou pretender exercer os seus direitos, por favor contacte-nos:",
        "email": "<b>E-mail</b>: <emailLink>hello@lumenshore.com</emailLink>",
        "company": "<b>Empresa</b>: LumenShore Ltd, Reino Unido",
        "responseTime": "Respondemos normalmente no prazo de 48 horas."
    }
}

data["Terms"] = {
    "meta": {
        "title": "Termos de Serviço",
        "description": "Termos de Serviço do LumenLingo. Compreenda os seus direitos e responsabilidades ao utilizar a nossa aplicação de aprendizagem de idiomas — escrito em linguagem simples.",
        "ogTitle": "Termos de Serviço — LumenLingo"
    },
    "breadcrumb": "Termos de Serviço",
    "hero": {
        "heading": "Termos de Serviço",
        "subtitle": "As regras de utilização do LumenLingo — escritas de forma simples, porque os documentos legais não deviam precisar de um dicionário."
    },
    "introduction": {
        "heading": "Introdução",
        "p1": "Bem-vindo ao LumenLingo. Estes Termos de Serviço (\u201cTermos\u201d) regem a sua utilização da aplicação móvel LumenLingo (\u201ca Aplicação\u201d) operada pela LumenShore Ltd (\u201cLumenShore\u201d, \u201cnós\u201d ou \u201cnosso\u201d).",
        "p2": "Ao descarregar, instalar ou utilizar o LumenLingo, concorda em ficar vinculado por estes Termos. Se não concordar com qualquer parte destes Termos, por favor não utilize a Aplicação."
    },
    "acceptance": {
        "heading": "Aceitação dos Termos",
        "intro": "Ao aceder ou utilizar o LumenLingo, confirma que:",
        "li1": "Tem pelo menos 13 anos (ou a idade mínima exigida na sua jurisdição).",
        "li2": "Se tiver menos de 18 anos, obteve o consentimento de um pai ou tutor legal.",
        "li3": "Tem capacidade legal para celebrar um acordo vinculativo.",
        "li4": "Cumprirá estes Termos e todas as leis aplicáveis."
    },
    "yourAccount": {
        "heading": "A Sua Conta",
        "intro": "O LumenLingo não requer registo de conta tradicional. A sua identidade na Aplicação está associada ao seu ID Apple e dispositivo. É responsável por:",
        "li1": "Manter a segurança do seu ID Apple e o acesso ao seu dispositivo.",
        "li2": "Toda a atividade que ocorre através da sua utilização da Aplicação.",
        "li3": "Manter o sistema operativo do seu dispositivo atualizado para a melhor experiência e segurança."
    },
    "subscriptions": {
        "heading": "Subscrições e Faturação",
        "intro": "O LumenLingo oferece níveis de membro gratuitos e premium. As funcionalidades premium requerem uma subscrição paga.",
        "li1": "<b>Faturação</b> — todas as subscrições são processadas e geridas pela Apple através da App Store. Não tratamos pagamentos diretamente.",
        "li2": "<b>Nível gratuito</b> — proporciona acesso às funcionalidades principais de aprendizagem com pares de idiomas e modos de prática limitados.",
        "li3": "<b>Níveis premium</b> — desbloqueiam pares de idiomas adicionais, prática ilimitada, paisagens sonoras, orbes de respiração e outras funcionalidades premium descritas na Aplicação.",
        "li4": "<b>Renovação automática</b> — as subscrições renovam-se automaticamente, salvo cancelamento pelo menos 24 horas antes do fim do período de faturação atual.",
        "li5": "<b>Cancelamento</b> — pode cancelar a sua subscrição a qualquer momento através das Definições do ID Apple → Subscrições. O cancelamento entra em vigor no final do seu período de faturação atual.",
        "li6": "<b>Reembolsos</b> — os pedidos de reembolso são tratados pela Apple de acordo com as suas políticas de reembolso. Contacte o Suporte Apple para consultas de reembolso.",
        "li7": "<b>Alterações de preço</b> — podemos ajustar os preços de subscrição. Será notificado com antecedência e as alterações aplicam-se apenas ao seu próximo período de renovação."
    },
    "acceptableUse": {
        "heading": "Uso Aceitável",
        "intro": "Concorda em utilizar o LumenLingo apenas para fins legais e de acordo com estes Termos. Não deve:",
        "li1": "Fazer engenharia reversa, descompilar ou desmontar qualquer parte da Aplicação.",
        "li2": "Tentar aceder, manipular ou utilizar áreas não públicas da Aplicação ou dos seus sistemas.",
        "li3": "Copiar, modificar, distribuir ou criar obras derivadas baseadas na Aplicação.",
        "li4": "Utilizar a Aplicação de qualquer forma que possa danificar, desativar, sobrecarregar ou prejudicar a sua funcionalidade.",
        "li5": "Utilizar scripts automatizados, bots ou outras ferramentas para interagir com a Aplicação.",
        "li6": "Tentar contornar restrições de subscrição ou nível."
    },
    "intellectualProperty": {
        "heading": "Propriedade Intelectual",
        "p1": "Todo o conteúdo do LumenLingo — incluindo, entre outros, conteúdo de cartões, traduções, áudio, paisagens sonoras, designs visuais, efeitos de shaders, animações, o nome LumenLingo e a marca LumenShore — é propriedade intelectual da LumenShore Ltd e está protegido por leis de direitos de autor, marcas registadas e outras leis de propriedade intelectual.",
        "p2": "A sua subscrição concede-lhe uma licença limitada, não exclusiva, intransferível e revogável para utilizar a Aplicação para fins pessoais e não comerciais de aprendizagem de idiomas. Esta licença não inclui o direito de:",
        "li1": "Reproduzir, distribuir ou exibir publicamente qualquer conteúdo da Aplicação.",
        "li2": "Utilizar qualquer conteúdo para fins comerciais ou em produtos concorrentes.",
        "li3": "Remover ou alterar quaisquer avisos ou etiquetas de propriedade."
    },
    "userContent": {
        "heading": "Conteúdo e Dados do Utilizador",
        "p1": "Os seus dados de aprendizagem (progresso, preferências, histórico de prática) são armazenados no seu dispositivo e na sua conta pessoal iCloud. A LumenShore não reivindica a propriedade dos seus dados pessoais de aprendizagem.",
        "p2": "Para mais detalhes sobre como tratamos os dados, consulte a nossa <privacyLink>Política de Privacidade</privacyLink>."
    },
    "disclaimers": {
        "heading": "Isenções de Responsabilidade",
        "intro": "O LumenLingo é fornecido \u201ctal como está\u201d e \u201cconforme disponível\u201d. Embora nos esforcemos pela precisão e qualidade, não oferecemos garantias, expressas ou implícitas, relativamente a:",
        "li1": "A precisão ou integridade de qualquer conteúdo linguístico ou traduções.",
        "li2": "O funcionamento ininterrupto ou sem erros da Aplicação.",
        "li3": "Os resultados que possa obter ao utilizar a Aplicação.",
        "li4": "A disponibilidade de funcionalidades específicas num determinado momento.",
        "supplement": "O LumenLingo é uma ferramenta de aprendizagem complementar. Não substitui o ensino profissional de idiomas, serviços de tradução certificados ou cursos académicos."
    },
    "limitationOfLiability": {
        "heading": "Limitação de Responsabilidade",
        "intro": "Na medida máxima permitida pela lei aplicável, a LumenShore Ltd não será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos, nem por qualquer perda de lucros, dados ou fundo de comércio resultante de:",
        "li1": "A sua utilização (ou impossibilidade de utilização) da Aplicação.",
        "li2": "Quaisquer erros, omissões ou imprecisões no conteúdo.",
        "li3": "Acesso não autorizado ao seu dispositivo ou dados (não causado por nossa negligência).",
        "li4": "Qualquer interrupção ou cessação do serviço.",
        "cap": "A nossa responsabilidade total por qualquer reclamação decorrente destes Termos ou da sua utilização do LumenLingo não excederá o montante que pagou pela Aplicação nos 12 meses anteriores à reclamação."
    },
    "termination": {
        "heading": "Rescisão",
        "p1": "Pode deixar de utilizar o LumenLingo a qualquer momento eliminando a Aplicação. A sua subscrição, se ativa, deve ser cancelada separadamente através da gestão de subscrições da Apple.",
        "p2": "Reservamo-nos o direito de suspender ou rescindir o acesso à Aplicação se considerarmos razoavelmente que violou estes Termos. Em caso de rescisão:",
        "li1": "A sua licença para utilizar a Aplicação é imediatamente revogada.",
        "li2": "Os seus dados locais permanecem no seu dispositivo até que decida eliminá-los.",
        "li3": "As subscrições ativas devem ser canceladas através da Apple.",
        "li4": "As disposições que, pela sua natureza, devam sobreviver à rescisão permanecerão em vigor."
    },
    "governingLaw": {
        "heading": "Lei Aplicável",
        "p1": "Estes Termos são regidos e interpretados de acordo com as leis de Inglaterra e País de Gales, sem consideração pelos princípios de conflito de leis.",
        "p2": "Quaisquer disputas decorrentes destes Termos estarão sujeitas à jurisdição exclusiva dos tribunais de Inglaterra e País de Gales. No entanto, isto não afeta os seus direitos legais como consumidor no seu país de residência."
    },
    "changes": {
        "heading": "Alterações a estes Termos",
        "p1": "Podemos atualizar estes Termos de tempos a tempos. Quando fizermos alterações significativas, atualizaremos a data de \u201cÚltima atualização\u201d no topo da página e poderemos notificá-lo através da Aplicação.",
        "p2": "O uso continuado do LumenLingo após a publicação das alterações constitui aceitação dos Termos revistos. Se não concordar com as alterações, por favor pare de utilizar a Aplicação e cancele qualquer subscrição ativa."
    },
    "contactUs": {
        "heading": "Contacte-nos",
        "intro": "Se tiver questões sobre estes Termos ou precisar de reportar uma preocupação, por favor contacte-nos:",
        "email": "<b>E-mail</b>: <emailLink>hello@lumenshore.com</emailLink>",
        "company": "<b>Empresa</b>: LumenShore Ltd, Reino Unido",
        "responseTime": "Respondemos normalmente no prazo de 48 horas."
    }
}

MSG.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("PT: Legal/Privacy/Terms added successfully")
