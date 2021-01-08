const dbd = require("dbd.js")
const fetch = require('node-fetch')
 
const bot = new dbd.Bot({
token: "NzU3MDk3ODg1MjcwNTQwMzkw.X2bcWg.F9OfVGh1tZloEx_bCvrKt_EukBs", 
prefix: "!" 
})

bot.onMessage()
//commands


bot.command({
name: "ping", 
code: `Pong! \`$ping\`Ms` 
})


bot.command({
name: "update-1", 
code: `$title[crafting]
$description[**$username** craftou 1 **Explosive Crystal (Ignite)** <a:explosiveCrystalIgnitive:775848644271276062>

**usou:** 2 explosive crystal

\`crafts que usam ignite tem 10% de chance de que o cristal exploda e o craft destrua todos os itens usados! tome cuidado ao usar cristais ignites. eles contem muita energia comprimida\`]


$setUserVar[cristal;$sub[$getUserVar[cristal];2]]
$setUserVar[cristalignite;$sum[$getUserVar[cristalignite];1]]
$onlyIf[$getUserVar[cristal]>=2;você nao tem cristais explosivos o suficiente! (\`2\`)]
$onlyIf[$getUserVar[ciencia]>=5;você nao tem pontos de ciencia o suficiente!(\`5\`)]
` 
})

bot.command({
    name: "item-info", 
    code: `$thumbnail[https://static.wikia.nocookie.net/devilmaycry/images/d/d9/DMC3_Cerberus.png]
    $title[Ice Cerberus (Nunchaku)]
    $addField[**Descrição:**;Um nunchaku triplo, forjado à partir de aço e 3 corações de cerberus de gelo. seu ataque gélido é tão frio que lendas dizem que um demônio ja congelou o inferno com ele;no]
    $addField[**Habilidade:**;__10%__ de chance causar o efeito *congelamento*. __20%__ de chance de anular efeitos de queima no atacante ao usar (não se aplica à chamas causadas por armas de cerberus);yes]
    $addField[**Tipo:**;arma branca;yes]
    $addField[**Vida util:**;1500;yes]
    $addField[**Dano Base:**;50;yes]
    $color[7ef7d3]
    $onlyIf[$checkContains[$toLowercase[$message[1]];cerberus;cerberus-nunchaku;nunchaku;ice]==true;]` 
    })

    bot.command({
        name: "item-info", 
        code: `$thumbnail[https://static.wikia.nocookie.net/devilmaycry/images/e/e9/Yamato_DMC4.png]
        $title[Yamato Sword's]
        $addField[**Descrição:**;Uma espada lendária. suas lendas dizem que foi criada por Sparda, para seu segundo filho. dizem que poucos são capazes de usá-la com suas habilidades ativas. alguns ouvem vozes ao segurá-la;no]
        $addField[**Habilidade:**;__30%__ de causar o efeito *sangramento*, lesionando 50 de dano por turno ao inimigo em efeito(não acumulável). seu portador recebe imunidade à efeitos por \`3\` turnos ao receber o primeiro efeito da rodada. o efeito *sangramento* causado por **Yamato** não pode ser curado ou manipulado.  
        O portador de **Yamato** pode summonar clones de vácuo (max 1) para lhe oferecer suporte. um clone de vácuo lhe permite usar dois golpes por turno. clones de vácuo só podem ser derrotados por uma **Rebellion Sword's**. caso o portador perca, o clone de vácuo se desfaz;yes]
        $addField[**Tipo:**;arma branca;yes]
        $addField[**Vida util:**;1650;yes]
        $addField[**Dano Base:**;60;yes]
        $color[3a4a48]
        $onlyIf[$checkContains[$toLowercase[$message[1]];yamato]==true;]` 
        })

    bot.command({
        name: "item-info", 
        code: `$thumbnail[https://static.wikia.nocookie.net/devilmaycry/images/1/1d/Rebellion_Awakened_DMC3.png]
        $title[Rebellion Sword's]
        $addField[**Descrição:**;Uma espada lendária. suas lendas dizem que foi criada por Sparda, para seu futuro filho. dizem que alguns que a seguraram até enlouqueceram;no]
        $addField[**Habilidade:**;__80%__ de chance causar o efeito *sangramento*, lesionando 30 de dano por turno ao inimigo em efeito(acumulável). seu portador recebe imunidade à efeitos por \`2\` turnos ao receber o primeiro efeito da rodada. o efeito *sangramento* causado por **Rebellion** não pode ser curado ou manipulado (exceto por itens que limpem 100% de status - de classe A ou à cima)
        caso seja cravada em um clone de vácuo, sela o mesmo ate o fim do combate;yes]
        $addField[**Tipo:**;arma branca;yes]
        $addField[**Vida util:**;1600;yes]
        $addField[**Dano Base:**;60;yes]
        $color[400e06]
        $onlyIf[$checkContains[$toLowercase[$message[1]];rebellion;rebelion]==true;]` 
        })

        bot.command({
            name: "item-info", 
            code: `$thumbnail[https://static.wikia.nocookie.net/devilmaycry/images/8/83/DMC4_Red_Queen.png]
            $title[Red Queen Sword's]
            $addField[**Descrição:**;Uma espada forjada para o neto de Sparda. pesada, porém poderosa, **Red Queen** é criada para eliminar impurezas do mundo;no]
            $addField[**Habilidade:**;__10%__ chance de causar o efeito *sangramento*, lesionando 10 de dano por turno ao inimigo em efeito (acumulável). __5%__ de chance de causar o efeito *queima*, lesionando 30 de dano ao inimigo em efeito (não acumulavel). a cada efeito causado por **Red queen**, aumenta seu dano base em 10 até o fim da luta
            caso o inimigo use itens ou habilidades de cura, ele recebe o efeito *queima*;yes]
            $addField[**Tipo:**;arma branca;yes]
            $addField[**Vida util:**;650;yes]
            $addField[**Dano Base:**;10;yes]
            $color[c72424]
            $onlyIf[$checkContains[$toLowercase[$message[1]];red;red-queen;queen;nero;neros]==true;]` 
            })

            bot.command({
                name: "item-info", 
                code: `$thumbnail[https://gbf.wiki/images/thumb/3/32/Weapon_b_1020200400.png/462px-Weapon_b_1020200400.png]
                $title[Fire Cerberus (Spear)]
                $addField[**Descrição:**;Uma lança poderosa, que queima até mesmo o inimigo mais caloroso. forjada com aço e 4 corações de cerberus de fogo;no]
                $addField[**Habilidade:**;__10%__ chance de causar o efeito *sangramento*, lesionando 10 de dano por turno ao inimigo em efeito (acumulável). __50%__ de chance de causar o efeito *queima*, lesionando 70 de dano ao inimigo em efeito (não acumulavel). o efeito de *queima* causado por **Fire Spear** nao pode ser curado por itens ou habilidades de cura. a lança tem um cooldown de __1__ turno para ser utilizada novamente (so pode ser usada turno sim - turno não - turno sim - turno não...);yes]
                $addField[**Tipo:**;arma branca;yes]
                $addField[**Vida util:**;650;yes]
                $addField[**Dano Base:**;30;yes]
                $color[c76b24]
                $onlyIf[$checkContains[$toLowercase[$message[1]];fire-spear;fire;spear;fire-cerberus;lansa;lança]==true;]` 
                })
    

bot.command({
name: "update-2", 
code: `$title[crafting]
$description[**$username** craftou 1 **ômega Explosive Crystal** <:OmegaExplosiveCrystal:775848760278122516>

**usou:** 2 explosive crystal (ignite)]


$setUserVar[omegacristal;$sum[$getUserVar[omegacristal];1]]
$setUserVar[cristalignite;$sub[$getUserVar[cristalignite];2]]
$onlyIf[$getUserVar[cristalignite]>=2;você nao tem cristais explosivos (ignite) o suficiente! (\`2\`)]
$onlyIf[$getUserVar[ciencia]>=10;você nao tem pontos de ciencia o suficiente!(\`10\`)]
` 
})

bot.command({
name: "update-3", 
code: `$title[crafting]
$description[**$username** craftou 1 **ômega Explosive Crystal (ignite)** <a:OmegaExplosiveCrystalIgnitive:775848832595525642>

**usou:** 2 omega explosive crystal ]


$setUserVar[omegacristalignite;$sum[$getUserVar[omegacristalignite];1]]
$setUserVar[cristalignite;$sub[$getUserVar[omegacristal];2]]
$onlyIf[$getUserVar[omegacristal]>=2;você nao tem cristais explosivos omega o suficiente! (\`2\`)]
$onlyIf[$getUserVar[ciencia]>=15;você nao tem pontos de ciencia o suficiente!(\`15\`)]
` 
})

bot.command({
name: "craft", 
code: `$title[LANÇA TROVÃO]
$description[**$username#$discriminator[$authorID]** craftou uma **lança trovão** para **$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]**]



$giveRoles[$mentioned[1;yes];775860024093310976]


$setUserVar[ferro;$sub[$getUserVar[ferro];20]]
$setUserVar[omegacristalignite;$sub[$getUserVar[omegacristalignite];2]]

$onlyIf[$getUserVar[inteligencia]>=10;você nao é inteligente o suficente para criar isto (\`10\`)]
$onlyIf[$getUserVar[ciencia]>=30;você nao tem pontos de ciencia o suficiente!(\`30\`)]
$onlyIf[$getUserVar[ferro]>=20;você nao tem aço o suficiente! (\`20\`)]
$onlyIf[$getUserVar[omegacristalignite]>=2;você nao tem cristais ômega explosivos (ignite) o suficiente! (\`2\`)]
$suppressErrors[]
$argsCheck[1;]
$onlyIf[$message[1]==lança-trovao;]
` 
})

bot.command({
name: "tt.", 
code: `$attachment[https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700]
`})

bot.command({
name: "crafts", 
code: `$title[itens craftaveis]
$description[**Itens evolutivos**

<:explosiveCrystal:775848531453804634> \`Explosive Crystal\` > <a:explosiveCrystalIgnitive:775848644271276062> \`Explosive Crystal (Ignite)\` > <:OmegaExplosiveCrystal:775848760278122516> \`Ômega Explosive Crystal\` > <a:OmegaExplosiveCrystalIgnitive:775848832595525642> \`Ômega Explosive Crystal (Ignite)\` 

<a:explosiveCrystalIgnitive:775848644271276062> \`Explosive Crystal (Ignite)\` (\`!update-1\`)
<:OmegaExplosiveCrystal:775848760278122516> \`Ômega Explosive Crystal\` (\`!update-2\`)
<a:OmegaExplosiveCrystalIgnitive:775848832595525642> \`Ômega Explosive Crystal (Ignite)\` (\`!update-3\`)

**Equipamentos**

~ \`lança-trovao\`
~ \`bala-trovao\`]
$footer[use '!craft <itemname>' para craftar um item! | o nome do item deve ser escrito em minusculo | voce pode verificar seus itens em '!mochila']
$color[a167ff]
` 
})





bot.command({
name: "spin-cavalo", 
code: `
$setMessageVar[SpinCavalo;;$splitText[1]]

$giveRoles[$authorID;$replaceText[$replaceText[$checkContains[$getMessageVar[SpinCavalo;$splitText[1]];<:cavalo:792505920349405264><:cavalo:792505920349405264><:cavalo:792505920349405264>];false;771071490640445482];true;778632902204325888]]

$setUserVar[cavalomortes;5]

$editMessage[$splitText[1];<:cantoSUP1:792509096057110554><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoSUP2:792508922212646992>
<:cantosSs:781029224743305257>$getMessageVar[SpinCavalo;$splitText[1]]<:cantosS:781029173450768424>
<:cantoEsq:781028922744766484><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoDir:781029022195777537>]

$wait[3s]

$setMessageVar[SpinCavalo;$getMessageVar[SpinCavalo;$splitText[1]]$randomText[<:nao:792505976934760448>;<:cavalo:792505920349405264>;<:nao:792505976934760448>;<:nao:792505976934760448>;<:nao:792505976934760448>;<:nao:792505976934760448>];$splitText[1]]

$editMessage[$splitText[1];<:cantoSUP1:792509096057110554><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoSUP2:792508922212646992>
<:cantosSs:781029224743305257>$getMessageVar[SpinCavalo;$splitText[1]]<a:spin:792505839403139092><:cantosS:781029173450768424>
<:cantoEsq:781028922744766484><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoDir:781029022195777537>]

$wait[3s]

$setMessageVar[SpinCavalo;$getMessageVar[SpinCavalo;$splitText[1]]$randomText[<:nao:792505976934760448>;<:nao:792505976934760448>;<:cavalo:792505920349405264>];$splitText[1]]

$editMessage[$splitText[1];<:cantoSUP1:792509096057110554><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoSUP2:792508922212646992>
<:cantosSs:781029224743305257>$getMessageVar[SpinCavalo;$splitText[1]]<a:spin:792505839403139092><a:spin:792505839403139092><:cantosS:781029173450768424>
<:cantoEsq:781028922744766484><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoDir:781029022195777537>]

$wait[3s]

$setMessageVar[SpinCavalo;$randomText[<:nao:792505976934760448>;<:cavalo:792505920349405264>];$splitText[1]]
$textSplit[$sendMessage[<:cantoSUP1:792509096057110554><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoSUP2:792508922212646992>
<:cantosSs:781029224743305257><a:spin:792505839403139092><a:spin:792505839403139092><a:spin:792505839403139092><:cantosS:781029173450768424>
<:cantoEsq:781028922744766484><:meio:781029076990558209><:meio:781029076990558209><:meio:781029076990558209><:cantoDir:781029022195777537>;yes]; ]

$setUserVar[ingot;$sub[$getUserVar[ingot];30]]
$cooldown[10s;opa. espere %time%]
$onlyIf[$getUserVar[ingot]>=30;voce é fraco. lhe falta ingot. obtenha mais em \`!ingot-market\`]
$onlyIf[$hasRole[$authorID;771113534867767347]==false;voce ja tem esse cavalo]
$onlyIf[$hasRole[$authorID;778632902204325888]==false;voce ja tem esse cavalo]` 
})

bot.command({
name: "aptdao", 
code: `**__Aptdão de $username[$mentioned[1;yes]]__**: \`$divide[$sum[$getUserVar[atkp;$mentioned[1;yes]];$getUserVar[esquivap;$mentioned[1;yes]];$getUserVar[agilidade;$mentioned[1;yes]];$getUserVar[força;$mentioned[1;yes]];$getUserVar[defesa;$mentioned[1;yes]];$getUserVar[resistencia;$mentioned[1;yes]];$getUserVar[velocidade;$mentioned[1;yes]];$getUserVar[inteligencia;$mentioned[1;yes]];$getUserVar[crit;$mentioned[1;yes]];$getUserVar[ciencia;$mentioned[1;yes]];$getUserVar[tiro;$mentioned[1;yes]]];2]\`

$suppressErrors[ops...algo de errado nao está certo]` 
})

bot.command({
name: "cavalo", 
code: `
$thumbnail[https://i.pinimg.com/originals/34/f4/15/34f415c27aebaa88cb3e142a3465db01.png]

$color[ffffff]



$author[🏇 CAVALO 🏇]
$title[→ ]



$addField[🎒Inventário;\`•\` *Tanque de gás (10)*]






$addField[♀♂Sex;Macho]

$addField[🌟Habilidade especial;Um cavalo especial contendo um fervor em seus olhos!
tem 5 vidas, após morto uma vez, ele ficará 5horas sem uso (RP)
pode aquecer o coração dos cavalo aliados!
(habilidade:
(apenas uma vez por missão)
**Lealdade**
caso seu dono esteja a beira da morte o cavalo pode se jogar na frente, gastando uma de suas 5 vidas!(semelhante ao cavalo X (o dono do cavalo pode escolher não usar a vida do animal))
 (\`!sacrificar\`)]

$addField[🌬️Stamina maxima;300%]


$addField[★Classe;Ômega]

$addField[Vidas;$getUserVar[cavalomortes]]

$footer[cavalo de $username;$userAvatar[$authorID]]

$onlyForRoles[778632902204325888;771113534867767347;voce nao tem um cavalo omega]` 
})


bot.command({
name: "sacrificar", 
code: `
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$getUserVar[cavalomortes]<=0];false;780220687788146699];true;778632902204325888]]


$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$getUserVar[cavalomortes]<=0];false;780220687788146699];true;771113534867767347]]
$setUserVar[cavalomortes;$sub[$getUserVar[cavalomortes];1]]

$username usou a vida de seu cavalo para que nao morresse!!
(só pode ser usado uma vez por missao)

$onlyForRoles[778632902204325888;771113534867767347;voce nao tem um cavalo omega]
`
})


bot.command({
name: "copy-habs", 
  aliases: ['copyhabs','copy-hab','copyhab','copy'],
code: `$description[$username copiou as habilidades de $username[$message[1]]#$discriminator[$message[1]]]

$setUserVar[hp;$getUserVar[hp;$message[1]];$authorID]


$setUserVar[atkp;$getUserVar[atkp;$message[1]];$authorID]

$setUserVar[esquivap;$getUserVar[esquivap;$message[1]];$authorID]

$setUserVar[agilidade;$getUserVar[agilidade;$message[1]];$authorID]

$setUserVar[força;$getUserVar[força;$message[1]];$authorID]

$setUserVar[defesa;$getUserVar[defesa;$message[1]];$authorID]

$setUserVar[resistencia;$getUserVar[resistencia;$message[1]];$authorID]

$setUserVar[velocidade;$getUserVar[velocidade;$message[1]];$authorID]

$setUserVar[inteligencia;$getUserVar[inteligencia;$message[1]];$authorID]

$setUserVar[crit;$getUserVar[crit;$message[1]];$authorID]

$setUserVar[ciencia;$getUserVar[ciencia;$message[1]];$authorID]

$setUserVar[tiro;$getUserVar[tiro;$message[1]];$authorID]

$suppressErrors[voce deve colar o ID de quem vai copiar (apenas ID, sem mençao)]

$onlyPerms[admin;nop]
$deletecommand` 
})


bot.command({
name: "tiro-ak",
code: `$title[˜”°•.˜”°• 𝓽𝓲𝓻𝓸 𝓪𝓴 47 •°”˜.•°”˜]
$thumbnail[https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$sub[$getUserVar[balasak];15]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true]

$description[➨ <@!$authorID> dispara varios tiros potentes no inimigo.

➨ um tiro critico em humano é hit kill

➨ nao afeta titas

➨  deve cair 550 para acertar

➨ a cada tiro disparado, a arma atira 15 balas! 

➨ velocidade: 60

➨ só pode usar comando de desvio casa sua velocidade seja maior que a velocidade da arma]
 $image[https://64.media.tumblr.com/8cc51364ca99ff9d5901e67d2aa0aebe/tumblr_n9whrdmfp21s44glwo1_400.gif]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[tiro]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=550];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=550];true;$random[100;200];1];false;nulo;1]***)]

$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[tiro](maestria: tiro)\`]
$setUserVar[balasak;$sub[$getUserVar[balasak];15]]

$onlyIf[$getUserVar[balasak]>=15;você está sem balas. \`!recarregar-ak\`]
$onlyIf[$getUserVar[inteligencia]>=4;você precisa ter pelo menos 4 de inteligencia para usar essa arma! \`!habs\`]`
})

bot.command({
name: "tiro-sniper",
code: `$title[˜”°•.˜”°• 𝓽𝓲𝓻𝓸 𝓼𝓷𝓲𝓹𝓮𝓻 •°”˜.•°”˜]

$thumbnail[$getUserVar[silenciador]]

$description[➨ <@!$authorID> dispara um tiro potente no inimigo.

➨ um tiro em humano é hit kill

➨ o dano só é usado em tita. caso caia critico, o tita morre, tendo acertado e perfurado a nuca(exceto se a nuca estiver endurecida)


➨ deve cair 700 para acertar

➨ a sniper só pode dar um tiro por vez. por isso, após o tiro, deve ser recarregada com \`!recarregar-sniper\`

➨ caso a arma esteja silenciada, a morte nao é notada pelo inimigo. caso voce ainda nao foi visto, com um silenciador, o inimigo nao pode desviar, idependente de velocidade

➨ **velocidade: 90**

➨ **só pode usar comando de desvio casa sua velocidade seja maior que a __velocidade da arma__**]
 $image[https://cdn.discordapp.com/attachments/771167724755484722/773648949458239548/sinon.gif]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=700];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=700];true;$random[200;300];1];false;nulo;1]***)]

$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[tiro](maestria: tiro)\`]
$setUserVar[balassniper;$sub[$getUserVar[balassniper];1]]

$onlyIf[$getUserVar[balassniper]>=1;você está sem balas. \`!recarregar-sniper\`]



$onlyIf[$getUserVar[inteligencia]>=6;você precisa ter pelo menos 6 de inteligencia para usar essa arma! \`!habs\`]`
})



bot.command({
name: "tiro-pistola",
code: `$title[˜”°•.˜”°• 𝓽𝓲𝓻𝓸 𝓹𝓲𝓼𝓽𝓸𝓵𝓪 •°”˜.•°”˜]

$thumbnail[https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$sub[$getUserVar[balas];1]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true]

$description[➨ <@!$authorID> dispara um tiro potente no inimigo.

➨ um tiro critico em humano é hitk ill

➨ deve cair 500 para acertar

➨ **velocidade: 20**

➨ **só pode usar comando de desvio casa sua velocidade seja maior que a __velocidade da arma__**]
 $image[https://cdn.discordapp.com/attachments/771167724755484722/773356015542337546/1457908165_revy.gif]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[tiro]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=500];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=500];true;$random[50;150];1];false;nulo;1]***)]

$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[tiro](maestria:arma)\`]
$setUserVar[balas;$sub[$getUserVar[balas];1]]

$onlyIf[$getUserVar[balas]>=1;você está sem balas. \`!recarregar-pistola\`]


$onlyIf[$getUserVar[inteligencia]>=3;você precisa ter pelo menos 3 de inteligencia para usar essa arma! \`!habs\`]`
})

bot.command({
name: "recarregar-pistola",
code: `$thumbnail[https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=5&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true]

$title[recarregando!]

$description[você está recarregando sua arma. aguarde...]
$editIn[5s;você recarregou sua arma!]

$image[https://media1.tenor.com/images/236b60b48a685ecf7d522f80daa65be1/tenor.gif?itemid=17031430]

$setUserVar[balas;5]`
})

bot.command({
name: "recarregar-sniper",
code: `$title[recarregando!]

$description[você está recarregando sua arma. aguarde...]
$editIn[5s;você recarregou sua arma!]

$image[https://animecosplaykawaii.files.wordpress.com/2014/09/tumblr_na271qiryg1s5h198o1_500.gif]

$setUserVar[balassniper;1]`
})


bot.command({
name: "recarregar-ak",
code: `$thumbnail[https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=200&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true]

$title[recarregando!]

$description[você está recarregando sua arma. aguarde...]
$editIn[5s;você recarregou sua arma!]

$image[https://64.media.tumblr.com/9e10f4822510ba4adf4de253f8505c70/tumblr_ourlvhRbMt1v1fssvo1_500.gif]

$setUserVar[balasak;200]`
})

bot.command({
name: "$alwaysExecute",
code: `$addCmdReactions[👍;👎]
$onlyIf[$checkContains[$message[1];/;>]!=true;]

$onlyForChannels[770991088089038858;]`
})


bot.command({
name: "first-tp", 
code: `$setUserVar[tp;15]

**$username** obteve seu TP inicial! (\`verifique seu '!tp'\`)

$onlyIf[$getUserVar[tp]==0;voce ja obteve o tp inicial]
$onlyIf[$getUserVar[atkp]==0;voce ja obteve o tp inicial]
$onlyIf[$getUserVar[esquivap]==0;voce ja obteve o tp inicial]` 
})

bot.command({
name: "mochila",
aliases: ['inventario','invent','bag'], 
code: `$author[$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$title[seu inventário de itens]
$description[<:cantosSs:781029224743305257>**----ITENS UTILIZAVEIS----**<:cantosS:781029173450768424> 

$replaceText[$replaceText[$checkCondition[$getUserVar[totem;$mentioned[1;yes]]>=1];false;;1];true;<:espolioDivino:742515022864973945> Totem da vida · **$getUserVar[totem;$mentioned[1;yes]]**
;1]
$replaceText[$replaceText[$checkCondition[$getUserVar[totemc;$mentioned[1;yes]]>=1];false;;1];true;<:TotemCavalo:762172316795797505> Totem da vida (cavalo) · **$getUserVar[totemc;$mentioned[1;yes]]**
;1]
<:cantosSs:781029224743305257>**----ITENS NAO UTILIZAVEIS----**<:cantosS:781029173450768424> 
$replaceText[$replaceText[$checkCondition[$getUserVar[cerberusheartfire;$mentioned[1;yes]]>=1];false;;1];true;
<:FireCerberusHeart:772952066918187038> Cerberus Heart (fire) ~ $getUserVar[cerberusheartfire;$mentioned[1;yes]]
;1]$replaceText[$replaceText[$checkCondition[$getUserVar[chavepm;$mentioned[1;yes]]>=1];false;;1];true;<:chavepm:784252844471615498>  Chave do porão (QG-PM)
(use \`!abrir porão\` no QG da PM)
;1]
<:cantosSs:781029224743305257>**----MINÉRIOS---**<:cantosS:781029173450768424> 

$replaceText[$replaceText[$checkCondition[$getUserVar[cristal;$mentioned[1;yes]]>=1];false;;1];true;<:explosiveCrystal:775848531453804634> \`Explosive Crystal\` ($getUserVar[cristal;$mentioned[1;yes]]);1]
$replaceText[$replaceText[$checkCondition[$getUserVar[cristalignite;$mentioned[1;yes]]>=1];false;;1];true;<a:explosiveCrystalIgnitive:775848644271276062> \`Explosive Crystal (Ignite)\` ($getUserVar[cristalignite;$mentioned[1;yes]]);1]
$replaceText[$replaceText[$checkCondition[$getUserVar[omegacristal;$mentioned[1;yes]]>=1];false;;1];true;<:OmegaExplosiveCrystal:775848760278122516> \`Ômega Explosive Crystal\` ($getUserVar[omegacristal;$mentioned[1;yes]]);1]
$replaceText[$replaceText[$checkCondition[$getUserVar[omegacristalignite;$mentioned[1;yes]]>=1];false;;1];true;<a:OmegaExplosiveCrystalIgnitive:775848832595525642> \`Ômega Explosive Crystal (Ignite)\` ($getUserVar[omegacristalignite;$mentioned[1;yes]]);1]
$replaceText[$replaceText[$checkCondition[$getUserVar[ferro;$mentioned[1;yes]]>=1];false;;1];true;<:IngotFerro:776793681369890837> \`Ingot de Aço\` ($getUserVar[ferro;$mentioned[1;yes]]);1]]
$color[43cedd]

$footer[use '!use <item>' | digite o nome do item completo e em minúsculo! | use '!crafts' para ver os itens craftaveis]
` 
})

bot.command({
name: "add", 
code: `$setUserVar[$replaceText[$noMentionMessage[2];aço;ferro;1];$sum[$getUserVar[$replaceText[$noMentionMessage[2];aço;ferro;1];$mentioned[1;yes]];$noMentionMessage[1]];$mentioned[1;yes]]

> ✅ **__$username[$mentioned[1;yes]]__ obteve \`$noMentionMessage[1]\` $replaceText[$replaceText[$noMentionMessage[2];cristal;cristais explosivos<:explosiveCrystal:775848531453804634>;1];aço;ingots de aço<:IngotFerro:776793681369890837>;1]!**


$suppressErrors[]
$onlyIf[$checkContains[$noMentionMessage[2];aço;cristal]==true;]
$onlyIf[$isNumber[$noMentionMessage[1]]==true;]
$onlyForRoles[771398898815467560;você não é um cartografo]` 
})


////

bot.command({
name: "awaitedReaction",
code: `$awaitReaction[everyone;1m;1️⃣;reactionMessage;An error has occured`
})

bot.awaitedCommand({
name: "$reactionMessage",
code: `Hi, You reacted to 1️⃣ and now i responded!`
})

///
bot.command({
name: "gave", 
aliases: ['dar','doar'],
code: `$setUserVar[$replaceText[$noMentionMessage[1];aço;ferro;1];$sum[$getUserVar[$replaceText[$noMentionMessage[1];aço;ferro;1];$mentioned[1]];$noMentionMessage[2]];$mentioned[1]]


$setUserVar[$replaceText[$noMentionMessage[1];aço;ferro;1];$sub[$getUserVar[$replaceText[$noMentionMessage[1];aço;ferro;1]];$noMentionMessage[2]]]

> ✅ **__$username#$discriminator[$authorID]__ deu \`$noMentionMessage[2]\` $replaceText[$replaceText[$noMentionMessage[1];cristal;cristais explosivos<:explosiveCrystal:775848531453804634>;1];aço;ingots de aço<:IngotFerro:776793681369890837>;1] para $username[$mentioned[1]]#$discriminator[$mentioned[1]]!**

$suppressErrors[oops! verifique a ortografia! \`!gave <cristal/aço> <quantidade> @user\`]


$onlyIf[$getUserVar[$replaceText[$noMentionMessage[1];aço;ferro;1]]>=$noMentionMessage[2];você nao tem tantos materiais]
$onlyIf[$checkContains[$noMentionMessage[1];aço;cristal]==true;]
$onlyIf[$isNumber[$noMentionMessage[2]]==true;]` 
})

bot.command({
name: "gave", 
aliases: ['dar','doar'],
code: `$setUserVar[balatrovao;$sum[$getUserVar[balatrovao;$mentioned[1]];$noMentionMessage[2]];$mentioned[1]]


$setUserVar[balatrovao;$sub[$getUserVar[balatrovao];$noMentionMessage[2]]]

> ✅ **__$username#$discriminator[$authorID]__ deu \`$noMentionMessage[2]\` balas trovao para $username[$mentioned[1]]#$discriminator[$mentioned[1]]!**

$suppressErrors[]


$onlyIf[$getUserVar[$replaceText[$noMentionMessage[1];bala;balatrovao;1]]>=$noMentionMessage[2];você nao tem tantos materiais]
$onlyIf[$checkContains[$noMentionMessage[1];bala;bala-trovao]==true;]
$onlyIf[$isNumber[$noMentionMessage[2]]==true;]` 
})

bot.command({
name: "say", 
code: `$message
$deletecommand
$onlyPerms[admin;nop]` 
})

bot.command({
name: "set-prefix", 
code: `$setServerVar[prefixu;$message[1]]
**$username alterou o prefixo deste servidor para \`$message[1]\`**
$onlyPerms[admin;ei. só admin pode usar isso aí<:PaimonShock:786819516172075019>]` 
})


bot.command({
name: "eval", 
code: `$eval[$message]
$onlyForIDs[409427651099492352;178461453420986368;comando restrito]` 
})
//

bot.command({
name: "status",
aliases: ['stats','estatus','vida','stamina'], 
code: `⚔️**__$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]__**⚔️
$attachment[https://bravywad.sirv.com/status.png?text.0.text=$getUserVar[gas;$mentioned[1;yes]]%2F8&text.0.position.x=-115&text.0.position.y=-50&text.0.size=16&text.0.color=6cc4c5&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.0.outline.color=95fff0&text.0.outline.width=3&text.0.outline.blur=6&text.1.text=$getUserVar[hp;$mentioned[1;yes]]&text.1.position.x=-41%25&text.1.position.y=-50%25&text.1.size=14&text.1.color=082d29&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$mentioned[1;yes]]%25&text.2.position.x=-84%25&text.2.position.y=-10%25&text.2.size=11&text.2.color=082d29&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700]
$suppressErrors[erro(chama batata)]
$botTyping` 
})

bot.command({
name: "recarregar-ev", 
code: `$title[recarregando!]
$description[você está recarregando sua arma. aguarde...]
$editIn[5s;você recarregou sua arma!]
$thumbnail[https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=1&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true]
$channelSendMessage[778202277097111574;🔫 **$username#$discriminator[$authorID]** recarregou seu **equipamento vertical** em <#$channelID>]
$image[https://64.media.tumblr.com/c0b2d840838830aca66d55361a618b0a/tumblr_p7u96qQ97D1ra3pgjo3_500.gif]
$setUserVar[balaev;1]` 
})

bot.command({
name: "tiro-ev", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝒯𝒾𝓇𝑜 𝐸𝓆𝓊𝒾𝓅𝒶𝓂𝑒𝓃𝓉𝑜 𝒱𝑒𝓇𝓉𝒾𝒸𝒶𝓁 •°”˜.•°”˜]

$description[➨ <@$authorID> pega a sua arma que já vem em conjunto com o equipamento e atira no oponente.

➨+roll 1000 (deve cair mais de 650 para acertar), caso caia menos ele erra.

➨ Junto com o +roll 1000 é somado os seus Pontos de Treino.

➨ Caso acerte da um +roll 200 de dano.

➨ __**Velocidade 10**__

➨ É possível desviar com o !desviar caso sua velocidade seja maior que a da bala (debuff de +10 em desvio para desviar)

!recarregar-ev para recarregar)]

$image[https://media.giphy.com/media/TdXEZlPlbdRYa9pmkJ/giphy.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[tiro]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;$random[1;200];1];false;nulo;1]***)
$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]
$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[tiro](maestria: tiro)\`]
$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;$random[1;200];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
$footer[balas;https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true]
$setUserVar[balaev;$sub[$getUserVar[balaev];1]]
$setUserVar[gas;$sub[$getUserVar[gas];1]]
$onlyIf[$getUserVar[balaev]>=1;voce está sem balas]
$onlyIf[$getUserVar[gas]>=1;voce está sem gas]
$onlyIf[$getUserVar[inteligencia]>=1;voce nao é inteligente o suficiente para usar esta arma(\`1\`)]
$onlyIf[$checkContains[$hasRole[$authorID;771065526964715541];true]==true;você não está usando um **DMV**]
$argsCheck[>1;]` 
})

bot.command({
name: "descansar", 
code: `$title[˜”°•.˜”°•𝒟𝑒𝓈𝒸𝒶𝓃𝓈𝒶𝓇 •°”˜.•°”˜]
$description[➨ <@$authorID> fica o turno sem atacar e recupera um +roll 40 de stamina, funciona para titãs ou humanos.
**__$usernameID recuperou $random[1;40] em stamina__**]
$setUserVar[stamina;$sum[$getUserVar[stamina];$random[1;40]]]
$image[https://64.media.tumblr.com/b6edfe733e4c9109b2212111cb4d767a/tumblr_oq9cvi4dNO1qeq1xno1_500.gif]
$onlyIf[$getUserVar[stamina]<=40;sua stamina deve estar em pelo menos \`40\` para descansar]` 
})

bot.command({
name: "arremessar", 
code: `$setUserVar[preso;false]
$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]

$title[˜”*°•.˜”*°•𝒜𝓇𝓇𝑒𝓂𝑒𝓈𝓈𝒶𝓇 •°*”˜.•°*”˜]

$description[➨ <@$authorID> após utilizar o !agarrar (obrigatório) arremessa seu adversário sobre o chão com toda força (+roll 120 de dano)

➨+roll 1000 (deve cair mais de 450 para acertar), caso caia menos não consegue segura-lo.

➨ Junto com o +roll 1000 é somado os seus Pontos de Treino.

➨ Stamina gasta: 5% (se errar o roll também conta)

➨ nao é possivel esquivar]

$image[https://media.giphy.com/media/h7A5U4nU301rWX3caz/giphy.gif]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=450];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=450];true;$sum[$getUserVar[força];$random[1;120]];1];false;nulo;1]***)]

$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=450];true;$getUserVar[força](força) + $random[1;120](roll);1];false;nulo;1]\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];5]]

$setUserVar[hpcombate;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=450];false;$getUserVar[hpcombate;$getUserVar[preso]];1];true;$sub[$getUserVar[hpcombate;$getUserVar[preso]];$sub[$sum[$getUserVar[força];$random[1;120]];$getUserVar[defesa;$getUserVar[preso]]]];1];$getUserVar[preso]]



$setUserVar[atacante;none;$getUserVar[preso]]

$onlyIf[$getUserVar[stamina]>=5;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$getUserVar[preso]]>=1;$username[$getUserVar[preso]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]` 
})

bot.command({
name: "agarrar", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝒜𝑔𝒶𝓇𝓇𝒶𝓇•°”˜.•°”˜]

$description[➨ <@$authorID> agarra seu adversário, impedindo que ambos se mexam no próximo turno, para solta-lo basta usar !arremessar

➨+roll 1000 (deve cair mais de 650 para acertar), caso caia menos não consegue segura-lo.

➨ Junto com o +roll 1000 é somado os seus Pontos de Treino.

➨ Stamina gasta: 10% (se errar o roll também conta)]

$image[https://media.giphy.com/media/dWgLvQQZSX6IFfDjNa/giphy.gif]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;acertou;1];false;errou;1]***}

$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`yes\`/\`no\`;1];false; ;1]]

$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];10]]

$setUserVar[dano;0;$mentioned[1]]

$setUserVar[preso;$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=10;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]

$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano] ` 
})

bot.command({
name: "voadora", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝒱𝑜𝒶𝒹𝑜𝓇𝒶 •°”˜.•°”˜]

$description[➨ <@$authorID> se joga em cima do adversário dando no mesmo uma forte voadora, que em titãs não causa efeitos, mas em humanos caso acerte causa um +roll 100 de dano (caso de mais de 60 causa atordoamento no adversário no próximo turno, retirando uma ação dele).

➨+roll 1000 (deve cair mais de 650 para acertar), caso caia menos erra o golpe.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o +roll 1000 é somado os seus Pontos de Treino.

➨ Stamina gasta: 20% (se errar o roll também conta)]

$image[https://media1.tenor.com/images/ab7a39bbd78dff52ab6839780b07f7da/tenor.gif?itemid=11632032]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;$sum[$getUserVar[força];$random[1;100]];1];false;nulo;1]***)

$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]

$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;$getUserVar[força](força) + $random[1;100](roll);1];false;nulo;1]\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];20]]

$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;$sum[$getUserVar[força];$random[1;100]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=20;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]` 
})

bot.command({
name: "chute", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝒞𝒽𝓊𝓉𝑒 •°”˜.•°”˜]

$description[➨ <@$authorID> desfere um chute em seu adversário, em titãs não faz nenhum efeito, caso for em outro humano causa um +roll 90 de dano caso acerte

➨+roll 1000 (deve cair mais de 600 para acertar), caso caia menos erra o golpe.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o +roll 1000 é somado os seus Pontos de Treino.

➨ Stamina gasta: 15% (se errar o roll também conta)]

$image[https://media.giphy.com/media/J5M4OT2hzHk7xvreXa/giphy.gif]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$sum[$getUserVar[força];$random[1;90]];1];false;nulo;1]***)

$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]

$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$getUserVar[força](força) + $random[1;90](roll);1];false;nulo;1]\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];15]]

$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$sum[$getUserVar[força];$random[1;90]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=15;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
` 
})


bot.command({
name: "faca", 
aliases: ['facada'],
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝐹𝒶𝒸𝒶 •°”˜.•°”˜]

$description[➨ <@$authorID> pega sua faca e corre na direção do adversário tentando acerta-lo, dando assim um +roll 150 de dano.

➨ deve cair mais de 600 para acertar, caso caia menos erra o golpe.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o +roll é somado os seus Pontos de Treino.

➨ Stamina gasta: 15% (se errar o roll também conta]

$image[https://i.pinimg.com/originals/89/8f/f5/898ff5751010590ab4db0d1be78ce23d.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$sum[$getUserVar[força];$random[1;60]];1];false;nulo;1]***)
$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]
$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$getUserVar[força](força) + $random[1;60](roll);1];false;nulo;1]\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];15]]

$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$sum[$getUserVar[força];$random[1;60]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=15;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
$onlyIf[$hasRole[$authorID;771065528449237033]==true;voce precisa de uma faca(\`!shop\`)]
$onlyIf[$mentioned[1]!=757097885270540390;tá doido? querendo me bater. te fiz nada doido]` 
})

bot.command({
name: "soco", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝒮𝑜𝒸𝑜 •°”˜.•°”˜]
$description[➨ <@$authorID> desfere um poderoso soco, que em titãs não causa efeitos, mas em humanos caso acerte causa um +roll 80 de dano 

➨+roll 1000 (deve cair mais de 550 para acertar), caso caia menos erra o golpe.

➨ o dano é sua força + o roll 80

➨ Junto com o +roll 1000 é somado os seus AP

➨ Stamina gasta: 10% (se errar o roll também conta)]

$image[https://media.giphy.com/media/dWfXd6PxOFJN2a0Ipv/giphy.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;$sum[$getUserVar[força];$random[1;60]];1];false;nulo;1]***)
$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]
$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;$getUserVar[força](força) + $random[1;60](roll);1];false;nulo;1]\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];10]]

$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;$sum[$getUserVar[força];$random[1;60]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=10;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
$onlyIf[$mentioned[1]!=757097885270540390;tá doido? querendo me bater. te fiz nada doido]` 
})


bot.command({
name: "spin", 
code: `

$giveRoles[$authorID;$roleID[$randomText[Dot;Dot;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reiss;Reeves;Reeves;Reeves;Reiss;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Yeager;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Zoe;Zoe;Zoe;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Ackerman;Bott;Bott;Xaver;Xaver;Xaver;Nenhuma;Xaver;Xaver;Nenhuma;Xaver;Xaver;Ackerman;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Ackerman;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Reiss]]]


$editMessage[$splitText[1];**$username agora é um $randomText[Dot;Dot;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Dot;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Inocencio;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Lenz;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Shadis;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reiss;Reeves;Reeves;Reeves;Reiss;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Reeves;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Berner;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Forster;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Arlert;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Braun;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Leonhart;Yeager;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Yeager;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Braus;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Hoover;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Zoe;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Zoe;Zoe;Zoe;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Kirstein;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Springer;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Bott;Ackerman;Bott;Bott;Xaver;Xaver;Xaver;Nenhuma;Xaver;Xaver;Nenhuma;Xaver;Xaver;Ackerman;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Xaver;Ackerman;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Nenhuma;Reiss]!!!**]

$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▰▰]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▰▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▱▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▱▱▱▱▱▱▱]
$wait[4s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▱▱▱▱▱▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▱▱▱▱▱▱▱▱▱▱]
$wait[4s]
$editMessage[$splitText[1];Loading…
▰▰▱▱▱▱▱▱▱▱▱▱▱]
$wait[3s]
$editMessage[$splitText[1];Loading…
▰▱▱▱▱▱▱▱▱▱▱▱▱]
$wait[1s]
$textSplit[$sendMessage[Loading…
▱▱▱▱▱▱▱▱▱▱▱▱▱;yes]; ]

$takeRoles[$authorID;789321359007678466;789321429502001192;789321668493443112;789321725690511400;789321793131380747;789321877297692693;789321928937832479;789322006574923777;789322092847956048;789322179200155689;789322265552355398;789322370179137538;789322431898583041;789322483483279360;789322547144818728;789322596843257867;789322648165154877;771124684272042004;771124679419232266;771071638367895553]

$setUserVar[spins;$sub[$getUserVar[spins];1]]
$cooldown[1m;oopa! calma %time%]
$onlyIf[$getUserVar[spins]>=1;voce nao tem spins o suficiente]
$onlyPerms[admin;nop]
` 
})



bot.command({
name: "add-spin", 
code: `$suppressErrors[pops! algo errado. use assim \`!add spins <valor> <@user>\`]
$setUserVar[spins;$sum[$getUserVar[spins;$mentioned[1;yes]];$noMentionMessage[1]];$mentioned[1;yes]]
✅ foi adicionado \`$noMentionMessage[1]\` spins à **$username[$mentioned[1;yes]]**
$onlyPerms[admin;nop]` 
})

bot.command({
name: "ingot-shop", 
code: `$author[$username#$discriminator[$authorID]]
$description[compre o item com o comando \`buy-ingot <name>\`.
para mais informações sobre o item use o comando \`item-ingot-info <name>\`.
ao utilizar o comando, use tudo em minúsculo e sem acento

]

$addField[

<:ingot:759096474713063464>800 - Passe de Batalha (vip);<:left_green_arrow:753962888510570547> obtenha o passe de batalha da temporada atual por *ingots*(você também pode comprar por dinheiro em \`!ingot market\`)

]

$addField[<:ingot:759096474713063464>50 - Key Lootbox (madeira)<:mkey:760783413983576074>;<:left_green_arrow:753962888510570547> abra uma lootbox de classe *madeira*! podendo ser obtido itens aleatórios]

$addField[<:ingot:759096474713063464>150 - Key pet <:pKey:776808256337084436>;<:left_green_arrow:753962888510570547> abra uma lootbox de classe *pet*! podendo ser obtido pets aleatórios!(alguns pets dão um grande bonus! voce pode obter até duas chaves gratúitas por dia com \`!daily key\`)]


$addField[<:ingot:759096474713063464>500 - Pó de treino<:PoDeTreino:760795334783270922>;<:left_green_arrow:753962888510570547> ao ser utilizado, upa seu training Points em **4**]

$addField[<:ingot:759096474713063464>5 - Nametag;<:left_green_arrow:753962888510570547> renomeie seu cavalo! ao comprar, use o comando \`!rename horse <novo nome>\`]

$addField[<:ingot:759096474713063464>100 - Air Drop;<:left_green_arrow:753962888510570547> spawne um **Air Drop** no servidor! qualquer um pode reclamar. use \`!claim drop\` para reclamar. ao ser comprado é spawnado]


$addField[(\`!spin-cavalo\`)<:ingot:759096474713063464>30 - 🐎Cavalo (Classe Ômega);<:left_green_arrow:753962888510570547> obtenha o cavalo único de classe Ômega! 
use \`spin-cavalo\` para reclamar seu cavalo
(\`spin-cavalo\`)]


$addField[<:ingot:759096474713063464>100 - mensal (500)<:cupom:741126135890313318>;<:left_green_arrow:753962888510570547> durante 30 dias você receberá **500** de cash por dia de forma automática]




$footer[Page 1/1]
$color[fef009]
` 
})

bot.command({
name: "ingot-market", 
code: `$thumbnail[https://cdn.discordapp.com/attachments/724886644225736764/759100720761798656/20200925_141447.jpg]

$author[Ingot Market]
$title[🔸$username]
$description[você tem \`$getUserVar[ingot]\` ingots<:ingot:759096474713063464>

*clique no valor que desejar comprar*

**__Loja de Ingots__**

<:ingot:759096474713063464> [350 - R$4,99\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-6edf8545-695b-43cc-87ec-d16988e85b81)

<:ingot:759096474713063464> [790 - R$9,99 (bônus 90+)\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-2e9381e5-5278-4e2a-a351-47df2006f368)

<:ingot:759096474713063464> [1100 - R$14,99 (bônus 50+)\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-5a21c590-0cdf-4fc4-8059-56f0f6f340fd)

<:ingot:759096474713063464> [1500 - R$19,99 (bônus 100+)\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-3106cadd-447e-4e56-9c3a-a45ce456fd5f)

<:ingot:759096474713063464> [4.000 - R$49,99 (bônus 500+)\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-9b168032-1f2e-4e34-ab12-053d9056ecd1)

<:ingot:759096474713063464> [9.000 - R$99,99 (bônus 2000+)\\](https://mpago.la/2Hc5HoY)


**__Assinaturas__**
💎 [Assinatura de ouro - R$55,00\\](https://mpago.la/2jjMnxu) (receba 8120 ingots, reclamando 280 ingots por dia com o comando \`!claim ingot\`!)
**{a assinatura se encerra todo dia 29, idependente do dia em que foi iniciada}**
**{caso perca o claim de algum dia, o valor perdido jamais retornará}**


**__Passe de batalha__**

[Passe de batalha VIP - R$ 17,99\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-2ec59c0f-7eac-4825-950b-79704179ead4)

[Passe de Batalha VIP: em chamas! - R$19,99(comece com 3 pontos)\\](https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=509236372-c3dc14c0-b066-4e17-ab65-442f08fc1f00)

\`pagamentos via boleto levam até 3 dias úteis para ser creditado. por medidas de segurança, o produto é entregue após o recebimento do pagamento\`]
$footer[moeda paga]
$color[fad971]` 
})

bot.command({
name: "pvp", 
code: `
**modo combate**
\`!combate\`
**comandos possiveis para luta corpo a corpo**
\`!soco\`, \`!faca\`, \`!chute\`, \`!voadora\`, \`!agarrar\`-\`!arremessar\`
**Usando DMV(dispositivo de manobra vertical)**
\`!tiro-ev\` (\`!recarregar-ev\`)
**usando DMT(dispositivo de manobra tridimensional)**
\`!corte-dmt\`

**passivo**
\`!descansar\`` 
})


bot.command({
name: "no", 
code: `⚔️**__STATS__**⚔️
❤️**$username HP:** $getUserVar[hpcombate]
🌀**$username STAMINA:** $getUserVar[stamina]%
$description[➨ <@$authorID> recebe o dano!]
$setUserVar[atacante;none]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sub[$getUserVar[dano];$getUserVar[defesa]]]]
$suppressErrors[]
$onlyIf[$getUserVar[atacante]!=none;]` 
})

bot.command({
name: "yes", 
code: `⚔️**__STATS__**⚔️
❤️**$username HP:** $getUserVar[hpcombate]
🌀**$username STAMINA:** $getUserVar[stamina]%
$title[˜”°•.˜”°•𝒟𝑒𝓈𝓋𝒾𝒶𝓇 •°”˜.•°”˜]
$description[➨ <@$authorID> tenta desviar do golpe de seu adversário.

➨+roll 1000 (deve cair mais de 650 para desviar), caso não atinja o requerido recebe um dos golpes do adversário do turno. Se for tentar desviar de um titã sem DMT utilize +roll 1000 (deve cair mais de 800 para desviar).

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o +roll 1000 é somado os seus Pontos de Treino.

➨ Stamina gasta: 15% (se errar o roll também conta)

\`\`\`roll + EP - velocidade adversária\`\`\`]
$image[https://78.media.tumblr.com/1287d60adb7592c92dd22ea3b7f0e250/tumblr_odvatckqXO1ukoc83o1_500.gif]
$addField[Resultado;$sub[$sum[$random[1;1000];$getUserVar[esquivap]];$getUserVar[velocidade;$getUserVar[atacante]]]
{**você *$replaceText[$replaceText[$checkCondition[$sub[$sum[$random[1;1000];$getUserVar[esquivap]];$getUserVar[velocidade;$getUserVar[atacante]]]>=650];true;desviou;1];false;levou;1]***}]
$addField[Detalhe;\`(roll)$random[1;1000] + $getUserVar[esquivap](EP) - $getUserVar[velocidade;$getUserVar[atacante]] (VEL inimigo)\`]
$setUserVar[atacante;none]
$setUserVar[stamina;$sub[$getUserVar[stamina];15]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$replaceText[$replaceText[$checkCondition[$sub[$sum[$random[1;1000];$getUserVar[esquivap]];$getUserVar[velocidade;$getUserVar[atacante]]]>=650];true;0;1];false;$sub[$getUserVar[dano];$getUserVar[defesa]];1]]]
$onlyIf[$getUserVar[stamina]>=15;você está cansado de mais para desviar]
$onlyIf[$getUserVar[atacante]!=none;]` 
})

bot.command({
name: "combate", 
code: `
⚔️**$username definiu suas informações de combate iniciais. pronto para luta**⚔️
$attachment[https://bravywad.sirv.com/status.png?text.0.text=$getUserVar[gas;$mentioned[1;yes]]%2F8&text.0.position.x=-115&text.0.position.y=-50&text.0.size=16&text.0.color=6cc4c5&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.0.outline.color=95fff0&text.0.outline.width=3&text.0.outline.blur=6&text.1.text=$getUserVar[hp;$mentioned[1;yes]]&text.1.position.x=-41%25&text.1.position.y=-50%25&text.1.size=14&text.1.color=082d29&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$mentioned[1;yes]]%25&text.2.position.x=-84%25&text.2.position.y=-10%25&text.2.size=11&text.2.color=082d29&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700]
$setUserVar[stamina;$sum[100;$replaceText[$replaceText[$hasRole[$authorID;771124679419232266];false;0;1];true;20;1];$getUserVar[resistencia]]]
$setUserVar[preso;false]
$setUserVar[hpcombate;$getUserVar[hp]]
$onlyIf[$getUserVar[hp]>0;voce ainda nao tem um hp. faça rp]
$onlyIf[$getUserVar[aceito]!=yes;voce está em um combate npc! nao pode usar esse comando]` 
})


bot.command({
name: "corte-dmt", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°• CORTE DMT •°”˜.•°”˜]
$description[➨ <@$authorID> Utiliza uma de suas lâminas do equipamento manobra 3D para desferir um corte em seu oponente.

➨+roll 1000 (deve cair mais de 750 para acertar), caso caia menos ele erra.

➨ Junto com o +roll 1000 é somado os seus AP.

➨ Caso acerte da um +roll 200 de dano.

➨ Junto com o +roll 200 é somado os sua força.

➨ Stamina gasta: 25% (se errar o roll também conta)]
$image[https://cdn.discordapp.com/attachments/755978998940434473/784153365298020442/tenor_1.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;$sum[$getUserVar[força];$random[1;200]];1];false;nulo;1]***)
$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]
$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;$getUserVar[força](força) + $random[1;200](roll);1];false;nulo;1]\`]
$setUserVar[stamina;$sub[$getUserVar[stamina];25]]
$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;$sum[$getUserVar[força];$random[1;200]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]
$onlyIf[$getUserVar[stamina]>=25;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
$onlyForRoles[$roleName[771066821213552692];voce precisa de uma lâmina para utilizar essa habilidade]
$onlyIf[$mentioned[1]!=757097885270540390;tá doido? querendo me bater. te fiz nada doido]` 
})



bot.command({
name: "retirar-humano", 
code: `$title[˜”°•.˜”°•𝓻𝓮𝓽𝓲𝓻𝓪𝓻 𝓱𝓾𝓶𝓪𝓷𝓸•°”˜.•°”˜]
$description[➨ **<@$authorID> utiliza seu equipamento para retirar o humano da nuca do titã. atacando sem intenção de mata-lo**

➨ **roll 1000 (deve cair mais de 850 para cortar), caso caia menos que o número requerido o titã pode atacar.**

➨ **Junto com o roll 1000 é somado os seus Pontos de Treino.**

➨ **voce retira o humano da nuca caso acerte o golpe.**

➨ **só pode ser usado contra titãs inteligentes**]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=850];true;expos o humano!;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media.giphy.com/media/vV1qe0h3AFr32/giphy.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;80]<=4];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

bot.command({
name: "ataque-nuca", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝓃𝒶 𝒩𝓊𝒸𝒶 •°”˜.•°”˜]
$description[➨ **<@$authorID> utiliza seu equipamento para tentar cortar a nuca do titã.**

➨**deve cair mais de 700 para cortar, caso caia menos que o número requerido o titã pode atacar.**

➨ **Junto com o roll é somado os seus Pontos de Treino.**

➨ **O titã morre na hora caso acerte o golpe.**]

$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=700];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://eleaemedemaria.files.wordpress.com/2013/09/shingeki-no-kyojin-attack-on-titan-killing-titan.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;$replaceText[$replaceText[$guildID;747167255686676581;771066821213552692;1];768546895818653717;775501453187350558;1];1];false;$replaceText[$replaceText[$guildID;747167255686676581;780220687788146699;1];770799447441145856;780215559819100191;1];1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
$onlyIf[$authorID!=425487238961430538;]` 
})

bot.command({
name: "ataque-mandibula",
aliases: ['corte-mandibula'], 
code: `
$author[˜”°•.˜”°•Ataque Mandíbula •°”˜.•°”˜]
$description[➨ <@$authorID> utiliza seu equipamento para tentar cortar um dos lados da mandíbula do titã (é necessário cortas os dois para que ele abra a boca)

➨deve cair mais de 600 para cortar, caso caia menos que o número requerido o titã pode atacar.

➨ Junto com o roll é somado os seus Pontos de Ataque.

➨ o tita nao pode usar \`!mordida\` até que se regenere (padrao: 3 turnos)

➨ Essa habilidade serve para abrir a boca do titã, é útil para tirar alguém lá de dentro caso ele não devore a pessoa, e sim, use para guardar.
Detalhes]


$image[https://media.giphy.com/media/HqRFTqG0zfdUdCF4TM/giphy.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;acertou;1];false;errou;1]***}]

$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](AP)\`]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;$replaceText[$replaceText[$guildID;747167255686676581;771066821213552692;1];768546895818653717;775501453187350558;1];1];false;$replaceText[$replaceText[$guildID;747167255686676581;780220687788146699;1];770799447441145856;780215559819100191;1];1]]

$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
` 
})

bot.command({
name: "set-idade", 
code: `
$argsCheck[>1;diga sua idade]
$setUserVar[idade;$message]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou sua idade para __$message__**
$onlyIf[$message[1]<=99;puts...muito velho, da não]` 
})

bot.command({
name: "set-historia", 
code: `
$setUserVar[historia;$message]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou sua historia para. verifique sua \`!ficha\`** {\`nao use ponto virgula para quebrar paragrafos continuos ( ; )\`}
$argsCheck[>1;diga sua historia]
` 
})

bot.command({
name: "set-sexo", 
code: `$giveRoles[$authorID;$replaceText[$replaceText[$message[1];masculino;771064839421820928;1];feminino;771063899083898901;1]]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou seu sexo para __$message[1]__**
$argsCheck[>1;diga seu genero]
$onlyIf[$hasRole[$authorID;771063899083898901]!=true;você ja escolheu um sexo]
$onlyIf[$hasRole[$authorID;771064839421820928]!=true;você ja escolheu um sexo]
$onlyIf[$hasRole[$authorID;770799447441145856]!=false;você ja foi registrado]
$onlyIf[$checkContains[$message[1];masculino;feminino]!=false;você deve escolher um sexo válido(\`masculino, feminino\`)]` 
})

bot.command({
name: "set-muralha", 
code: `
$setUserVar[muralha;$message[1]]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou sua muralha para __$message[1]__**
$onlyIf[$hasRole[$authorID;770799447441145856]==true;você ja foi registrado]
$onlyIf[$checkContains[$message[1];sina;maria;rose]!=false;você deve escolher uma muralha válida(\`maria, rose, sina\`)]
$argsCheck[>1;diga sua muralha]` 
})


bot.command({
name: "set-aparencia", 
code: `$setUserVar[imagem;$getMessageAttachment]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou sua img para:** 
\`para voltar à imagem de icone, use '!set imagem none'\`
$attachment[$getMessageAttachment]

$onlyPerms[admin;esse comando está temporariamente desabilitado]

` 
})
//

bot.command({
name: "dispositivo-de-manobra-3d", 
aliases: ['dmt','dispositivo-3d'],
code: `$thumbnail[$replaceText[$replaceText[$checkContains[$getUserVar[gas];8];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604177330176/gasMAX.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];7];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604390584330/gasSete.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];6];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604575395840/gasSeis.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];5];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604793761802/gasCinco.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];4];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605090639892/gasQuatro.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];3];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605380833320/gasTres.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];2];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605552537631/gasDois.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];1];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605863440424/gasUm.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];0];false;;1];true;https://cdn.discordapp.com/attachments/762825547868799047/762825606328746004/gasVazio.png;1]]
$title[˜”°•.˜”°•𝐸𝓆𝓊𝒾𝓅𝒶𝓇 𝐸𝓆𝓊𝒾𝓅𝒶𝓂𝑒𝓃𝓉𝑜 3D •°”˜.•°”˜]
$description[➨ ***<@$authorID> equipa seu equipamento de manobra 3D, assim ganhando mais mobilidade em lugares com estruturas altas.***]
$addField[➨ **Duração do gás:**;\`8 turnos\`]
$addField[➨ __**Movimentos Liberados:**__;

**Para movimentação:**
➢ !movimentar
➢ !fuga
➢ !ajudar-aliado	

**Atacar titãs:**
➢ !investida

**Atacar humanos:**
➢ !corte-dmt
\`(Coming Soon)\`]
$image[https://media.giphy.com/media/SoEt67TWnWmBi/giphy.gif]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
$suppressErrors[]` 
})
//

//poe ackerman
bot.command({
name: "teste", 
code: `
$onlyIf[$hasRole[$authorID;771124679419232266]==true;]
$setUserVar[ackerman;$sum[$getUserVar[furia];50]]
$onlyIf[$hasRole[$authorID;771124679419232266]==true;]` 
})
//

//tira ackerman
//
bot.command({
name: "teste", 
code: `
$onlyIf[$hasRole[$authorID;771124679419232266]==false;]
$setUserVar[ackerman;0]
$onlyIf[$hasRole[$authorID;771124679419232266]==false;]` 
})

//

//
bot.command({
name: "tp-help", 
code: `⚔️**__Training Points__**🛡️

> Training Points(TP) são pontos que voce recebe em missões (com retorno de tp). você pode depositar esses pontos em \`atk points\`, que irão somar com seu roll de ataque; ou \`esquiva Points\`, que irão somar com seus Rolls de desvio. há muitas habs alem dessas duas, veja \`!help habs\`` 
})

//
//ingots
bot.command({
name: "add-ingot", 
code: `$suppressErrors[pops! algo errado. use assim \`!add ingot <valor> <@user>\`]
$setUserVar[ingot;$sum[$getUserVar[ingot;$mentioned[1;yes]];$noMentionMessage[1]];$mentioned[1;yes]]
✅ foi adicionado \`$noMentionMessage[1]\`<:ingot:759096474713063464> à carteira de **$username[$mentioned[1;yes]]**
$onlyPerms[admin;nop]` 
})

bot.command({
name: "remove-ingot", 
code: `$suppressErrors[pops! algo errado. use assim \`!remove ingot <valor> <@user>\`]
$setUserVar[ingot;$sub[$getUserVar[ingot;$mentioned[1;yes]];$noMentionMessage[1]];$mentioned[1;yes]]
✅ foi removido \`$noMentionMessage[1]\`<:ingot:759096474713063464> da carteira de **$username[$mentioned[1;yes]]**
$onlyPerms[admin;nop]` 
})
//
//morte

bot.command({
name: "add-morte", 
code: `
$setUserVar[mortes;$sum[$getUserVar[mortes;$mentioned[1;yes]];1];$mentioned[1;yes]]
> ✅ **__$username[$mentioned[1;yes]]__ morreu \`$sum[$getUserVar[mortes;$mentioned[1;yes]];1]\` vezes!**

$onlyForRoles[771398898815467560;você não é um cartografo]
$onlyIf[$getUserVar[mortes;$mentioned[1;yes]]<=2;esse usuário já atingiu o máximo de mortes..tá na hora do...BITES THE DUST]` 
})
bot.command({
name: "reset-morte", 
aliases: ['reset-mortes'],
code: `
$setUserVar[mortes;0;$mentioned[1;yes]]
> ✅ **__$username[$mentioned[1;yes]]__ morreu \`0\` vezes!**

$onlyForRoles[771398898815467560;você não é um cartografo]` 
})
bot.command({
name: "remove-morte", 
code: `
$setUserVar[mortes;$sub[$getUserVar[mortes;$mentioned[1;yes]];1];$mentioned[1;yes]]
> ✅ **__$username[$mentioned[1;yes]]__ morreu \`$sub[$getUserVar[mortes;$mentioned[1;yes]];1]\` vezes!**
$onlyForRoles[771398898815467560;você não é um cartografo]` 
})
//
//tp
bot.command({
name: "remove-tp", 
code: `
$setUserVar[tp;$sub[$getUserVar[tp;$mentioned[1;yes]];$noMentionMessage[1]];$mentioned[1;yes]]
> ✅ **__$username[$mentioned[1;yes]]__ perdeu \`$noMentionMessage[1]\`trainingPoints!**
$onlyIf[$hasRole[$authorID;771398898815467560]==true;você não é um cartografo]` 
})

bot.command({
name: "set-domador", 
code: `
$setUserVar[domador;$noMentionMessage[1];$replaceText[$replaceText[$isNumber[$noMentionMessage[2]];true;$noMentionMessage[2];1];false;$mentioned[1;yes];1]]
> ✅ **__$username[$replaceText[$replaceText[$isNumber[$noMentionMessage[2]];true;$noMentionMessage[2];1];false;$mentioned[1;yes];1]]__ obteve \`$noMentionMessage[1]\` leveis domador!**
$onlyPerms[admin;nop]` 
})

bot.command({
name: "add-tp", 
code: `
$setUserVar[tp;$sum[$getUserVar[tp;$mentioned[1;yes]];$noMentionMessage[1]];$mentioned[1;yes]]
> ✅ **__$username[$mentioned[1;yes]]__ obteve \`$noMentionMessage[1]\` trainingPoints!**
$onlyIf[$checkContains[$hasRole[$authorID;771398898815467560] $hasRole[$authorID;790395302120128542];true]==true;você não é um cartografo]` 
})



//sistema de pet
bot.command({
name: "pet", 
code: `$author[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$title[$getGlobalUserVar[pet;$mentioned[1;yes]] $replaceText[$replaceText[$checkContains[$getGlobalUserVar[pet;$mentioned[1;yes]];Sasha];true;(Garota da Batata);1];false; ;1]]

$color[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;f7a481;1];Jibril;f041b0;1];Historia;fff480;1];Ymir;85572c;1];Hanji;ff922b;1];Mikasa;14171c;1];Eren;8f5328;1];Levi;000001;1];Kanna;ffc7e1;1];Shiro;be33ff;1];Sasha;7a3012;1];Connie;acb1bd;1];Mori;f1fff3;1]]

$thumbnail[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Character_Paimon_Portrait.png;1];Jibril;https://comicvine1.cbsistatic.com/uploads/original/11132/111329607/7071538-9624077819-78cb8.jpg;1];Historia;https://cdn.discordapp.com/attachments/478285069752991744/779473624000102400/aot___historia_reiss___render___by_mailyse_dbzdhfa-fullview.png;1];Ymir;https://img.cartoongoodies.com/wp-content/uploads/2020/02/Attack-on-Titan-character-Ymir-with-weapons.png;1];Hanji;https://i.pinimg.com/originals/1f/cf/25/1fcf25d4365f906cf41f1312c43f2c80.png;1];Mikasa;https://static.wikia.nocookie.net/starocean/images/8/8c/MikasaAckerman.png;1];Eren;https://cdn.discordapp.com/attachments/478285069752991744/779481351267155968/340.png;1];Levi;https://i.pinimg.com/originals/f7/80/02/f78002eb18f53497ea4224e2c4521c83.png;1];Kanna;https://static.wikia.nocookie.net/all-worlds-alliance/images/c/c7/Kanna_png_744979.png;1];Shiro;https://vignette.wikia.nocookie.net/no-game-no-life-brasil/images/0/09/Shiro.png/revision/latest?cb=20140615052759&path-prefix=pt-br;1];Sasha;https://cdn.discordapp.com/attachments/478285069752991744/779509626366328893/ddfxnhr-f6e84bb3-4f5e-4b94-8422-50bbbf55c093.png;1];Connie;https://cdn.discordapp.com/attachments/478285069752991744/779512680552857630/341487536049201.png;1];Mori;https://static.wikia.nocookie.net/liberproeliis/images/f/fa/Jin_Mo-Ri-1.png/revision/latest?cb=20171224214422&path-prefix=pt-br;1]]

$description[*❝$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;$randomText[ola! como vao?;posso ajudar?;hmmmm.. estou entediada :(;você quer brincar comigo?;você pode brincar comigo?;hwooooo...estou com sono;hmmm..;titãs me dão medo...;eu sei algumas coisas, mas nao gosto de lutas...;eu posso ajudar muito meu dono com magia!;eu nao vou deixar meu dono morrer!;com minha magia de cura, posso ser muito util!;eu sou muito util!;doces ou travessura!;hehe..;soube que há muitos bandidos por aí...devemos tomar cuidado;titãs me dão medo...;aquelas coisas gigantes podem ser perigosas..];1];Jibril;$randomText[os humanos são inferiores... mas titãs são ainda mais fracos...;eu vou limpar este mundo;eu vou exterminar todos os titãs!;hmhmhmhm...sua inferioridade me enoja...];1];Historia;Eu lutarei pelo meu povo!;1];Ymir;De alguma forma, nesse mundo somos apenas pedaços de carne fazendo barulho e movendo em círculos, não temos nenhum significado em especial;1];Hanji;Mesmo em momentos de profundo desespero, acho que ainda podemos encontrar esperança, não é?;1];Mikasa;Enquanto você estiver comigo, eu posso fazer tudo;1];Eren;Eu irei aniquilar... todos, um por um... da face da terra!;1];Levi;eu vou eliminar aquele macaco..;1];Kanna;kobayashi-san?..;1];Shiro;vamos jogar um jogo?...;1];Sasha;Está certo... Tome um pedaço da minha batata...;1];Connie;Eu vingarei todos da minha vila!;1];Mori;Eu quero enfrentar oponentes de todos os tipos e ficar mais forte!;1]❞*]


$addField[<:domador_de_animais:740077493100347475>lvl Domador;<:domador_de_animais:740077493100347475>$getUserVar[domador;$mentioned[1;yes]]]



$addField[Habilidade;cooming $replaceText[$replaceText[$checkContains[$getGlobalUserVar[pet;$mentioned[1;yes]];Jibril;Kanna;Levi;Paimon;Shiro;Mikasa;Eren;Mori];true;| \`!daily tp\`;1];false; ;1]]




$addField[🛡Defense;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;500;1];Jibril;400;1];Historia;600;1];Ymir;300;1];Hanji;650;1];Mikasa;400;1];Eren;400;1];Levi;500;1];Kanna;350;1];Shiro;450;1];Sasha;150;1];Connie;200;1];Mori;400;1]\`;yes]

$addField[⚔️Attack;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;400;1];Jibril;1000;1];Historia;250;1];Ymir;550;1];Hanji;200;1];Mikasa;600;1];Eren;600;1];Levi;900;1];Kanna;800;1];Shiro;300;1];Sasha;250;1];Connie;100;1];Mori;1000;1]\`;yes]

$addField[🏷Type;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;defensivo;1];Jibril;Ofensivo;1];Historia;Defensivo;1];Ymir;Ofensivo;1];Hanji;Defensivo;1];Mikasa;Ofensivo;1];Eren;Ofensivo;1];Levi;Ofensivo;1];Kanna;Ofensivo;1];Shiro;Defensivo;1];Sasha;Ofensivo;1];Connie;Defensivo;1];Mori;Ofensivo;1]\`]

$addField[🌟Stars;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Jibril;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Historia;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Ymir;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Hanji;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Mikasa;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Eren;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Levi;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Kanna;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Shiro;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Sasha;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Connie;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1];Mori;<:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071><:estrela:775953551205335071>;1]]

$addField[❤️Health;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;400;1];Jibril;350;1];Historia;400;1];Ymir;400;1];Hanji;450;1];Mikasa;500;1];Eren;450;1];Levi;300;1];Levi;350;1];Shiro;350;1];Sasha;250;1];Connie;250;1];Mori;600;1]\`]


$image[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;https://cdn.discordapp.com/attachments/762825547868799047/775950261167587358/Paimon.gif;1];Jibril;https://static.wikia.nocookie.net/character-stats-and-profiles/images/f/fe/Jibril_Render.png;1];Historia;https://i.pinimg.com/originals/59/86/13/59861396b1a58d55c2fab68faf237341.png;1];Ymir;https://i.pinimg.com/originals/19/55/23/19552399d7ed86c83171df49c82e1550.png;1];Hanji;https://cdn.discordapp.com/attachments/478285069752991744/779476755227475978/output-onlinepngtools_6.png;1];Mikasa;https://i.pinimg.com/originals/8c/d9/4d/8cd94d684040447cdfe08f929f62acc2.gif;1];Eren;https://i.pinimg.com/originals/7c/9c/b4/7c9cb40ab343ca66724df90b33d5f387.gif;1];Levi;https://pa1.narvii.com/6771/ff8849df3f0008e314f80adcde723a6c07a71323_hq.gif;1];Kanna;https://cdn.discordapp.com/attachments/478285069752991744/779493620939227146/transparent_png___kanna_kamui__dragon_maid__by_anastasiya_v_ddu95go-pre.png;1];Shiro;https://cdn.discordapp.com/attachments/478285069752991744/779494594839576586/image-removebg-preview_2.png;1];Sasha;https://i.pinimg.com/originals/87/01/8a/87018a8e6279f79e2162d2f7ba732529.png;1];Connie;https://i.pinimg.com/originals/59/a9/b7/59a9b7ca523920a756bd149762e800c8.png
;1];Mori;https://cutewallpaper.org/21/mori-jin-god-of-highschool/The-God-of-High-School-441-441-.png;1]]

$footer[ID: #$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[pet;$mentioned[1;yes]];Paimon;00001;1];Jibril;00002;1];Historia;00003;1];Ymir;00004;1];Hanji;00005;1];Mikasa;00006;1];Eren;00007;1];Levi;00008;1];Kanna;00009;1];Shiro;00010;1];Sasha;00011;1];Connie;00012;1];Mori;00013;1]]

$onlyIf[$getGlobalUserVar[pet;$mentioned[1;yes]]!=nenhum;$username[$mentioned[1;yes]] ainda nao tem um pet!]` 
})

bot.command({
name: "set-pet", 
code: `
$suppressErrors[pet inválido(\`!set pet <pet> <@user>\`)]
$deletecommand
$setGlobalUserVar[pet;$noMentionMessage[1];$mentioned[1;yes]]


✅**$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]** obteve o pet **$noMentionMessage[1]**
$onlyIf[$checkContains[$message[1];Levi;Paimon;Historia;Hanji;Mikasa;Eren;Ymir;Jibril;Kanna;Shiro;Sasha;Connie;Mori]==true;pet inválido]

$onlyPerms[admin;nop]` 
}) 

bot.command({
name: "set-frag", 
code: `$setUserVar[$noMentionMessage[1]frag;$noMentionMessage[2];$replaceText[$replaceText[$isNumber[$noMentionMessage[3]];true;$noMentionMessage[3];1];false;$mentioned[1;yes];1]]
**__$username[$replaceText[$replaceText[$isNumber[$noMentionMessage[3]];true;$noMentionMessage[3];1];false;$mentioned[1;yes];1]] agora tem \`$noMentionMessage[2]\` frags de \`$noMentionMessage[1]\`__**
$onlyPerms[admin;nop]
$cooldown[3s;espere %time%. nao spamme]
$suppressErrors[]
$onlyIf[$checkContains[$message[1];Levi;Paimon;Historia;Hanji;Mikasa;Eren;Ymir;Jibril;Kanna;Shiro;Sasha;Connie;Mori]==true;pet inválido]` 
})


bot.command({
name: "frags",
aliases: ['frags','fragmentos'], 
code: `$title[FRAGMENTOS]
$author[$username[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]#$discriminator[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]

$description[use \`!form <petName>\` para escolher um pet. voce nao perde um pet ao escolher outro.]

$color[78ffff]

$addField[**────━ RAROS ━────**;<:fragmentoSasha:779529054571069441>  **Sasha** (\`$getUserVar[Sashafrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoConnie:779529018961690624> **Connie** (\`$getUserVar[Conniefrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)]

$addField[**────━ EPICOS ━────**;
<:fragmentoEren:776460552544714792> **Eren** (\`$getUserVar[Erenfrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoMikasa:776460466896633916> **Mikasa** (\`$getUserVar[Mikasafrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`) 
<:fragmentoHanji:776460503240540191> **Hanji** (\`$getUserVar[Hanjifrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoYmir:776466323437649940> **Ymir** (\`$getUserVar[Ymirfrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoHistoria:776468229757337610> **Historia** (\`$getUserVar[Historiafrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`);yes]

$addField[**────━ LENDARIOS ━────**;
<:fragmentoMoriJin:780238571705073724> **Mori** (\`$getUserVar[Morifrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoJibril:776439443375652875> **Jibril** (\`$getUserVar[Jibrilfrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoPaimon:776443169176813568> **Paimon** (\`$getUserVar[Paimonfrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoKanna:776445289279520769> **Kanna** (\`$getUserVar[Kannafrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`) 
<:fragmentoShiro:776450253032652801> **Shiro** (\`$getUserVar[Shirofrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`)
<:fragmentoLevi:776460406340059176> **Levi** (\`$getUserVar[Levifrag;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`);yes]` 
}) 
/////////////////////////////

bot.command({
name: "set-nome", 
code: `
$setUserVar[nome;$message]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou seu nome para __$message__**
$onlyIf[$checkContains[$message;Ackerman;ackerman;reiss;Reiss;reis;Reis;fritz;Fritz;frits;Frits;friits;friitz;Friitz;Friits;Leonhart;leonhart;tybur;Tybu;braun;Braun;braum;Braum;Jeager;jeager;Yeager;yeager;uzumabito;Uzumabito;uzubumaito;Uzubumaito;arlert;Arlert;springer;Springer]==false;você nao pode colocar familias especiais em seu nome]
$argsCheck[>1;diga seu novo nome]` 
})



bot.command({
name: "teste", 
code: `

$editMessage[$splitText[1];{description:<@$mentioned[1;yes]>, Sua ficha foi criada! busque um adm para lhe verificar}
{image:https://thumbs.gfycat.com/BadBitesizedAlpaca-size_restricted.gif}]

$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▰▰]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▰▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▱▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▱▱▱▱▱▱▱]
$wait[4s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▱▱▱▱▱▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▱▱▱▱▱▱▱▱▱▱]
$wait[4s]
$editMessage[$splitText[1];Loading…
▰▰▱▱▱▱▱▱▱▱▱▱▱]
$wait[3s]
$editMessage[$splitText[1];Loading…
▰▱▱▱▱▱▱▱▱▱▱▱▱]
$wait[1s]
$textSplit[$sendMessage[Loading…
▱▱▱▱▱▱▱▱▱▱▱▱▱;yes]; ]
` 
})


bot.command({
name: "feito", 
code: `$takeRoles[$authorID;770799447441145856]
$giveRoles[$mentioned[1;yes];771111786459299883]
$giveRoles[$mentioned[1;yes];771060675354558474]
$giveRoles[$mentioned[1;yes];770799444899135498]
$giveRoles[$mentioned[1;yes];771060676260397067]
$giveRoles[$mentioned[1;yes];771064204462391326]
$giveRoles[$mentioned[1;yes];771062121856499713]
$giveRoles[$mentioned[1;yes];771069972427702342]
$giveRoles[$mentioned[1;yes];771070045513973800]
$giveRoles[$mentioned[1;yes];771060674708373536]
$giveRoles[$mentioned[1;yes];771071485980311604]
$giveRoles[$mentioned[1;yes];771065521793663007]
$giveRoles[$mentioned[1;yes];771071490640445482]
$giveRoles[$mentioned[1;yes];771071638367895553]
$giveRoles[$mentioned[1;yes];771067619192733716]
$giveRoles[$mentioned[1;yes];771068794395164722]
$giveRoles[$mentioned[1;yes];$replaceText[$replaceText[$replaceText[$getUserVar[muralha];maria;771020468480114698;1];sina;770845953573781525;1];rose;770997653525626891;1]]


$editMessage[$splitText[1];{description:<@$mentioned[1;yes]>, Sua ficha foi criada! busque um adm para lhe verificar}
{image:https://thumbs.gfycat.com/BadBitesizedAlpaca-size_restricted.gif}]

$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▰▰]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▰▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▰▰▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▰▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▰▰▱▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▰▰▱▱▱▱▱▱▱]
$wait[4s]
$editMessage[$splitText[1];Loading…
▰▰▰▰▱▱▱▱▱▱▱▱▱]
$wait[1s]
$editMessage[$splitText[1];Loading…
▰▰▰▱▱▱▱▱▱▱▱▱▱]
$wait[4s]
$editMessage[$splitText[1];Loading…
▰▰▱▱▱▱▱▱▱▱▱▱▱]
$wait[3s]
$editMessage[$splitText[1];Loading…
▰▱▱▱▱▱▱▱▱▱▱▱▱]
$wait[1s]
$textSplit[$sendMessage[Loading…
▱▱▱▱▱▱▱▱▱▱▱▱▱;yes]; ]


$onlyIf[$checkContains[$getUserVar[muralha];maria;sina;rose]==true;voce ainda nao setou uma muralha disponível. tente \`!set-muralha <rose, sina, maria>\`]
$onlyIf[$getUserVar[nome]!=none;voce ainda nao definiu um nome válido. tente \`!set-nome <seu nome>\`]
$onlyIf[$getUserVar[idade]<=17;voce ainda nao definiu uma idade válida. tente \`!set-idade <um numero>\` (a idade deve ser entre 15 e 17)]
$onlyIf[$getUserVar[idade]>=15;voce ainda nao definiu uma idade válida. tente \`!set-idade <um numero>\` (a idade deve ser entre 15 e 17)]
$onlyIf[$checkContains[$hasRole[$authorID;771064839421820928] $hasRole[$authorID;771063899083898901];true]==true;voce ainda nao definiu um gênero disponível. tente \`!set-sexo <feminino, masculino>\`]
$onlyIf[$hasRole[$authorID;770799447441145856]==true;você ja foi registrado]` 
})

bot.command({
name: "ficha", 
code: `$thumbnail[$replaceText[$replaceText[$checkContains[$getUserVar[imagem;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]];∆¶];true;$userAvatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]];1];false;$getUserVar[imagem;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]];1]]
$author[$getUserVar[nome;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]] $replaceText[$replaceText[$replaceText[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771124679419232266]$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771124684272042004];truefalse; Ackerman;1];falsetrue; Reiss;1];falsefalse;;1]]
$title[🔱FICHA DE USUÁRIO]
$description[ficha:$getUserVar[ficha;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$addField[☠**__Mortes__**;
\`$getUserVar[mortes;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/3\` $replaceText[$replaceText[$checkCondition[$getUserVar[mortes;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]>=3];true;<:reset:759083194712064051>;1];false; ;1]]
$addField[**__Habilidades__**;\`•\` ——
\`•\` ——
\`•\` ——]
$addField[**__Historia__**
resumo;$getUserVar[historia;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$addField[⚔️ATK Points;$getUserVar[atkp;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$addField[🌬️Esquiva Points;$getUserVar[esquivap;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$addField[**__Status__**
❤Hp;$getUserVar[hp;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$addField[Sexo; $replaceText[$replaceText[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771064839421820928];false; ;1];true;Masculino*;1]$replaceText[$replaceText[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771063899083898901];false; ;1];true;Feminino;1] $replaceText[$replaceText[$checkContains[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771064839421820928]$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771063899083898901];falsefalse];true;none(crie sua ficha);1];false; ;1] ]
$addField[Tropa; $replaceText[$replaceText[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771063909967855647];false; ;1];true;<:exploracao:755336461074563174> *Tropa de Exploração*;1]$replaceText[$replaceText[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771063911822131201];false; ;1];true;<:estacionaria:755336329545383989> *Tropa de Estacionária*;1] $replaceText[$replaceText[$checkContains[$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771063911822131201]$hasRole[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1];771063909967855647];falsefalse];true;none(complete o treino diario);1];false; ;1] ]
$addField[Naturalidade;$getUserVar[muralha;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$addField[**__Info__**
Idade;$getUserVar[idade;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$footer[ficha privada | use '!set help' para alterar sua ficha]
$suppressErrors[o filho da puta, eu disse sem ponto & virgula. arruma isso ai. burro pkct]
$color[97ACCB]
$suppressErrors[nao encontrei esse user]` 
})



bot.command({
name: "carteira", 
code: `$author[Ingots]
$title[🔸$username[$mentioned[1;yes]]]
$description[você tem \`$getUserVar[ingot;$mentioned[1;yes]]\` ingots<:ingot:759096474713063464>]
$footer[use '!ingot market' para comprar ingots | use '!top ingot' e verifique sua posição]
$color[fad971]` 
})
//

//
bot.command({
name: "set-hab", 
code: `$setUserVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];agil;agilidade;1];for;força;1];def;defesa;1];res;resistencia;1];vel;velocidade;1];int;inteligencia;1];cien;ciencia;1];esq;esquivap;1];atk;atkp;1];$noMentionMessage[2];$mentioned[1;yes]]
**__$username[$mentioned[1;yes]] depositou \`$replaceText[$replaceText[$isNumber[$noMentionMessage[2]];true;$noMentionMessage[2];1];false;1;1]\` Training Points em \`$noMentionMessage[1]\`__**
$onlyIf[$checkContains[$noMentionMessage[1];agil;for;def;res;vel;int;crit;cien;tiro;atk;esq]==true;]
$onlyPerms[admin;nop]
$cooldown[3s;espere %time%. nao spamme]
$suppressErrors[]` 
})

bot.command({
name: "set-id-hab", 
code: `$setUserVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];agil;agilidade;1];for;força;1];def;defesa;1];res;resistencia;1];vel;velocidade;1];int;inteligencia;1];cien;ciencia;1];esq;esquivap;1];atk;atkp;1];$noMentionMessage[2];$replaceText[$replaceText[$isNumber[$noMentionMessage[3]];true;$noMentionMessage[3];1];false;$mentioned[1;yes];1]]
**__$username[$replaceText[$replaceText[$isNumber[$noMentionMessage[3]];true;$noMentionMessage[3];1];false;$mentioned[1;yes];1]] depositou \`$replaceText[$replaceText[$isNumber[$noMentionMessage[2]];true;$noMentionMessage[2];1];false;1;1]\` Training Points em \`$noMentionMessage[1]\`__**
$onlyIf[$checkContains[$noMentionMessage[1];agil;for;def;res;vel;int;crit;cien;tiro;atk;esq]==true;]
$onlyPerms[admin;nop]
$cooldown[3s;espere %time%. nao spamme]
$suppressErrors[erro]` 
})

//

//
bot.command({
name: "div", 
code: `$setUserVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];agil;agilidade;1];for;força;1];def;defesa;1];res;resistencia;1];vel;velocidade;1];int;inteligencia;1];cien;ciencia;1];esq;esquivap;1];atk;atkp;1];$sum[$getUserVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];agil;agilidade;1];for;força;1];def;defesa;1];res;resistencia;1];vel;velocidade;1];int;inteligencia;1];cien;ciencia;1];esq;esquivap;1];atk;atkp;1]];$replaceText[$replaceText[$isNumber[$message[2]];true;$message[2];1];false;1;1]];$authorID]
$setUserVar[tp;$sub[$getUserVar[tp];$replaceText[$replaceText[$isNumber[$message[2]];true;$message[2];1];false;1;1]]]
**__$username depositou \`$replaceText[$replaceText[$isNumber[$message[2]];true;$message[2];1];false;1;1]\` Training Points em \`$message[1]\`__**
$onlyIf[$getUserVar[tp]>=$replaceText[$replaceText[$isNumber[$message[2]];true;$message[2];1];false;1;1];você não tem **Training Points** restantes]
$onlyIf[$checkContains[$message[1];agil;for;def;res;vel;int;crit;cien;tiro;atk;esq]==true;]
$cooldown[5s;espere %time%. nao spamme]
$suppressErrors[]` 
})

//

//
bot.command({
name: "tp", 
aliases: ['habs','tree','arvore'] , 
code: `$color[ffd970]
$thumbnail[https://cdn.discordapp.com/attachments/724886644225736764/736215118936801351/GS20200724101209.gif]
$title[🔸$username[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$author[Árvore de Habilidades]
$description[use \`!tp help\` para entender mais sobre os pontos de treino
use \`!help habs\` para entender a função e cada habilidade upável]

$addField[<:atk:758920873763012618>**__Atk__**
(\`div atk\`);\`$getUserVar[atkp;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/500\`;yes]

$addField[<:esquiva:758919917998964776>**__Esquiva__**
(\`div esq\`);\`$getUserVar[esquivap;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/500\`;yes]

$addField[🏃Agilidade
(\`div agil\`);\`$getUserVar[agilidade;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`;yes]
$addField[💪Força
(\`div for\`);\`$getUserVar[força;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`;yes]
$addField[🛡 Defesa
(\`div def\`);\`$getUserVar[defesa;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/50\`;yes]
$addField[😤 Resistência
(\`div res\`);\`$getUserVar[resistencia;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/10\`;yes]
$addField[<:velocidade:758922424359583745>Velocidade
(\`div vel\`);\`$getUserVar[velocidade;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`;yes]
$addField[🧠 Inteligencia
(\`div int\`);\`$getUserVar[inteligencia;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`;yes]
$addField[🗡 Chance de Crit
(\`div crit\`);\`$getUserVar[crit;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`;yes]
$addField[🔬 Ciencia
(\`div cien\`);\`$getUserVar[ciencia;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`;yes]
$addField[MAESTRIAS
<:oggun:773384428713279508> Maestria em tiro
(\`div tiro\`);\`$getUserVar[tiro;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]/100\`]
$addField[🍲 Maestria em Culinária;\`??/??\`;yes]
$footer[Training Points para uso: $getUserVar[tp;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$suppressErrors[nao encontrei esse usuario]` 
})

//

//
bot.command({
name: "reset-points", 
code: `$setUserVar[esquivap;$divide[$getUserVar[esquivap;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[atkp;$divide[$getUserVar[atkp;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[tp;$divide[$getUserVar[tp;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[agilidade;$divide[$getUserVar[agilidade;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[força;$divide[$getUserVar[força;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[defesa;$divide[$getUserVar[defesa;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[resistencia;$divide[$getUserVar[resistencia;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[velocidade;$divide[$getUserVar[velocidade;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[inteligencia;$divide[$getUserVar[inteligencia;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[crit;$divide[$getUserVar[crit;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[ciencia;$divide[$getUserVar[ciencia;$mentioned[1;yes]];2];$mentioned[1;yes]]
$setUserVar[tiro;$divide[$getUserVar[tiro;$mentioned[1;yes]];2];$mentioned[1;yes]]
> ✅ **você resetou todos os Points de __$username[$mentioned[1;yes]]__**
$onlyIf[$checkContains[$hasRole[$authorID;771398898815467560] $hasRole[$authorID;790395302120128542];true]==true;você não é um cartografo]
` 
})

//

//
bot.command({
name: "remove-tp", 
code: `$setUserVar[xppasse;$replaceText[$replaceText[$checkCondition[$getUserVar[xppasse;$mentioned[1;yes]]>=20];true;$getUserVar[xppasse;$mentioned[1;yes]];1];false;$replaceText[$replaceText[$getGlobalUserVar[passe;$mentioned[1;yes]];false;$getUserVar[xppasse;$mentioned[1;yes]];1];true;$sub[$getUserVar[xppasse;$mentioned[1;yes]];$message[1]];1];1];$mentioned[1;yes]]
$setUserVar[tp;$sub[$getUserVar[tp;$mentioned[1;yes]];$message[1]];$mentioned[1;yes]]
> ✅ **você removeu \`$message[1]\` tp em __$username[$mentioned[1;yes]]__**
$onlyIf[$message[1]<=35;oops! o tp máximo é \`35\`]
$argsCheck[>1;diga a quantia de tp]
$onlyIf[$checkContains[$hasRole[$authorID;771398898815467560] $isAdmin[$authorID];true]==true;você não é um cartografo]
` 
})

//

//
bot.command({
name: "ajudar-aliado", 
code: `
$title[˜”°•.˜”°•𝒜𝒿𝓊𝒹𝒶𝓇 𝒜𝓁𝒾𝒶𝒹𝑜 •°”˜.•°”˜]
$description[➨ <@$authorID> tenta salvar o seu colega de ser morto por algum titã.

➨ devera cair +550 pro usuário salvar o seu amigo, caso caia menos o seu amigo infelizmente morrerá (Caso o amigo tenta usar o !desviar-equipamento-3d antes esse comando não terá utilidade).

➨ Isso só poder se usado 2 vezes por pessoa (EX: @aleatorio salvou seu amigo, agora ele só poderá salvar +1 vez. O mesmo serve pra outros jogadores).

➨Junto com o roll é somado os seus Pontos de Treino.]
$addField[Stamina gasta:; 20% (Se erra o roll também conta)]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]>=550];true;salvou seu aliado;1];false;não conseguiu salvar seu aliado;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[esquivap](esquivaPoints)+$getUserVar[ackerman](bônus ackerman)\`]
$setUserVar[gas;$sub[$getUserVar[gas];1]]
$setUserVar[stamina;$sub[$getUserVar[stamina];20]]
$image[https://media4.giphy.com/media/SWiTvy4dTONFdO23vT/giphy.gif]
$onlyIf[$getUserVar[stamina]>=20;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

//

//
bot.command({
name: "fuga", 
aliases: ['fulga','fuga'] ,
code: `$title[˜”°•.˜”°•𝐹𝓊𝑔𝒶  •°”˜.•°”˜]
$description[➨ <@$authorID> tenta fugir da batalha.

➨ tirar pelo menos 400 no dado, caso consiga ele faz o titã ou humano parar de segui-lo e foge (É necessário equipamento 3D). Não é possível fugir de lugares que não tenham estruturas, como campos abertos, florestas com árvores pequenas, etc.]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]>=400];true;fugiu;1];false;não conseguiu escapar;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[esquivap](esquivaPoints)+$getUserVar[ackerman](bônus ackerman)\`]
$setUserVar[gas;$sub[$getUserVar[gas];1]]
$setUserVar[stamina;$sub[$getUserVar[stamina];20]]
$image[https://media4.giphy.com/media/ejIsgScq9uwit0QhrW/giphy.gif]
$onlyIf[$getUserVar[stamina]>=20;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$hasRole[$authorID;771066513461346335]==true;você não está usando um **DMT**]
$onlyIf[$checkContains[$message[1];fuga-cavalo;cavalo]!=true;]` 
})

//

//
bot.command({
name: "ataque-duplo", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝒟𝓊𝓅𝓁𝑜 •°”˜.•°”˜]
$description[➨ <@$authorID> Realizou uma manobra em dupla com <@$mentioned[1]>. 

➨ <@$authorID> e um aliado da sua escolha, que ainda não tenha atacado no turno dão roll (caso tirem 550 ambos conseguem atacar duas regiões do titã de uma vez), caso tirem menos do número requisitado os dois são atacados.

 Junto com o roll é somado seus pontos de treino (do seu amigo também)]
$addField[__**RESULTADO FINAL**__; vocês $replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=550]$checkCondition[$sum[$random[1;999];$getUserVar[atkp;$mentioned[1]];$getUserVar[ackerman;$mentioned[1]]]>=550];truetrue;acertaram!;1];falsefalse;erraram;1];falsetrue;erraram;1];truefalse;erraram;1]!]
$addField[$username[$mentioned[1]] Resultado;$sum[$random[1;999];$getUserVar[atkp;$mentioned[1]];$getUserVar[ackerman;$mentioned[1]]]
{**$username[$mentioned[1]] *$replaceText[$replaceText[$checkCondition[$sum[$random[1;999];$getUserVar[atkp;$mentioned[1]];$getUserVar[ackerman;$mentioned[1]]]>=550];true;acertou;1];false;errou;1]***}]
$addField[$username[$mentioned[1]] Detalhes;\`(roll)$random[1;999]+$getUserVar[atkp;$mentioned[1]](atkpoints)+$getUserVar[ackerman;$mentioned[1]](bônus ackerman)\`]
$addField[$username Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**$username *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=550];true;acertou;1];false;errou;1]***}]
$addField[$username Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media1.tenor.com/images/078fe351635f539546da7fcf00d7bea2/tenor.gif?itemid=13852894]
$takeRoles[$mentioned[1];$replaceText[$replaceText[$checkCondition[$random[1;999]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$hasRole[$mentioned[1];771066821213552692]==true;seu parceiro esta sem lâminas]
$onlyIf[$getUserVar[gas;$mentioned[1]]>0;seu parceiro está sem gás]
$onlyIf[$hasRole[$mentioned[1];771066513461346335]==true;seu parceiro não está usando um **DMT**]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$hasRole[$authorID;771066821213552692]==true;você esta sem lâminas]
$onlyIf[$hasRole[$authorID;771066513461346335]==true;você não está usando um **DMT**]
$argsCheck[>1;mencione seu parceiro]
$suppressErrors[verifique a ortografia. o comando deve ser usado da seguinte forma: \`!ataque-duplo <@user>\`]` 
})

//

//
bot.command({
name: "ataque-olhos", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝒪𝓁𝒽𝑜𝓈 •°”˜.•°”˜]
$description[➨ <@$authorID> utiliza seu equipamento para tentar cortar os olhos do titã.

➨ deve cair mais de 600 para cortar, caso caia menos que o número requerido o titã pode atacar.

➨ Junto com o roll é somado os seus Pontos de Treino.

➨ A chance de matar o titã com golpe na nuca aumenta em 70 no roll e o titã deve tirar +10 em todos os roll para acertar por 3 turnos.]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=600];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media4.giphy.com/media/XBEbKbE1aqo6s3U03I/giphy.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

//

//
bot.command({
name: "ataque-panturrilhas", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝒫𝒶𝓃𝓉𝓊𝓇𝓇𝒾𝓁𝒽𝒶𝓈 •°”˜.•°”˜]
$description[➨ <@$authorID> ataca as panturrilhas do titã, o deixando impossibilitado de atacar por dois turnos, caso acerte (se tiver alguma habilidade de defesa dos titãs primordiais pode se defender apenas).

➨ deve cair mais de 500 para cortar, caso caia menos que o número requerido o titã pode atacar.

➨ Junto com o roll é somado os seus Pontos de Treino.]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=500];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media4.giphy.com/media/ky8tWYRbtacizCzRnq/giphy.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
` 
})

//

//
bot.command({
name: "set-imagem", 
code: `$setUserVar[imagem;$replaceText[$message;none;∆¶;1]]
$setUserVar[ficha;<:no:738233839893086243>]
> ✅ **você alterou sua img para:** 
\`para voltar à imagem de icone, use '!set imagem none'\`
$image[$replaceText[$message;none;$userAvatar[$authorID];1]]
$footer[nao esta vendo sua imagem? verifique o link que usou!]
$deletecommand
$onlyIf[$checkContains[$message;http;://;https;none]==true;hmmm não reconheço esse link...tente algo assim \`http://imagem/imagem.png\`]
$argsCheck[>1;qual sua nova imagem? \`!set imagem http://image/image.png\`]

$onlyPerms[admin;esse comando está temporariamente desabilitado]` 
})

//

//
bot.command({
name: "chute-tita", 
code: `$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]
$title[˜”°•.˜”°•𝒞𝒽𝓊𝓉𝑒 𝒯𝒾𝓉ã •°”˜.•°”˜]
$description[➨ O Titã desfere um poderoso chute sobre seu inimigo, que caso for algum humano e acerte o golpe causa a morte instantânea, caso for em algum titã causa um roll 100 de dano caso acerte

➨ deve cair mais de 600 para acertar, caso caia menos erra o golpe.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o roll é somado os seus Pontos de Treino.]

$addField[➨ Stamina gasta:; 15% (se errar o roll também conta)]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$random[1;100];1];false;nulo;1]***)]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`]
$image[https://media4.giphy.com/media/PlUBMvi5Sj8Kj45f0K/giphy.gif]
$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]` 
})

//

//
bot.command({
name: "pisar", 
code: `$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]
$title[˜”°•.˜”°•𝒫𝒾𝓈𝒶𝓇 •°”˜.•°”˜]
$description[➨ O Titã tenta esmagar seu adversário, só pode ser usado em humanos (caso acerte mata na hora).

➨ deve cair mais de 600 para acertar, caso caia menos erra.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o roll é somado os seus Pontos de Treino.]

$addField[➨ Stamina gasta:; 10% (se errar o roll também conta)]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`]
$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]
` 
})

//

//
bot.command({
name: "girar", 
code: `$title[˜”°•.˜”°•𝒢𝒾𝓇𝒶𝓇 •°”˜.•°”˜]
$description[➨ <@$authorID> utiliza seu equipamento para girar em velocidade e arrancar os dedos do titã que o seguraram (caso consiga o titã fica sem poder segurar com aquela mão por 4 turnos).

➨  deve cair mais de 650 para cortar, caso caia menos que o número requerido o titã pode de devorar o levar com ele sem que você consiga revidar ou se mexer.

➨ Após fazer isso suas lâminas quebram e é obrigatório trocar.

➨ Junto com o roll é somado os seus Pontos de Treino.]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]>=650];true;se salvou;1];false;foi pego;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[esquivap](esquivaPoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media4.giphy.com/media/JO3exrMB8jiNmH9kXy/giphy.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;80]<=4];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
` 
})

//
//
bot.command({
name: "segurar", 
code: `$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]
$title[˜”°•.˜”°•𝒮𝑒𝑔𝓊𝓇𝒶𝓇 •°”˜.•°”˜]
$description[➨ O Titã agarra seu adversário. caso consiga, impossibilita ele de fazer qualquer outro movimento além do !girar, para escapar (caso não faça nada ficará preso até utilizar o comando ou será devorado), só funciona com humanos.

➨ deve cair mais de 650 para acertar, caso caia menos a pessoa consegue desviar.

➨ Junto com o roll  é somado os seus Pontos de Treino.]
$addField➨ Stamina gasta:; 10% (se errar o roll também conta)]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=650];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`]
$image[https://media4.giphy.com/media/VDeH6FUGl5TOTnxHNA/giphy.gif]
$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]` 
})

//

//
bot.command({
name: "mordida", 
code: `$sendMessage[{image:https://bravywad.sirv.com/in%20battle%20bar.png?text.0.text=$getUserVar[hpcombate;$authorID]&text.0.position.x=-30%25&text.0.position.y=-60%25&text.0.size=9&text.0.color=1d2f35&text.0.font.family=Alfa%20Slab%20One&text.0.font.weight=700&text.1.text=$getUserVar[hpcombate;$mentioned[1]]&text.1.position.x=-8%25&text.1.position.y=-27%25&text.1.size=9&text.1.color=16292b&text.1.font.family=Alfa%20Slab%20One&text.1.font.weight=700&text.2.text=$getUserVar[stamina;$authorID]%25&text.2.position.x=-79%25&text.2.position.y=-34%25&text.2.size=8&text.2.color=78e1c7&text.2.font.family=Alfa%20Slab%20One&text.2.font.weight=700&text.3.text=$getUserVar[stamina;$mentioned[1]]%25&text.3.position.x=-58%25&text.3.position.y=-2%25&text.3.size=8&text.3.color=a7edeb&text.3.font.family=Alfa%20Slab%20One&text.3.font.weight=700 };no]
$title[˜”°•.˜”°•𝑀𝑜𝓇𝒹𝒾𝒹𝒶 •°”˜.•°”˜]
$description[➨ O Titã tenta morder ou engolir (caso for humano) seu adversário. Caso acerte é um roll 40 de dano + força. 

➨ deve cair mais de 500 para acertar, caso caia menos erra o golpe.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o roll é somado os seus Pontos de Treino.]

$image[https://www.acasadocogumelo.com/wp-content/uploads/2013/11/attack_on_titan_gif_by_inele1-d6b2u6y.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$sum[$getUserVar[força];$random[1;60]];1];false;nulo;1]***)
$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;**<@$mentioned[1]> deseja tentar esquivar??**
\`!yes\`/\`!no\`;1];false; ;1]]
$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$getUserVar[força](força) + $random[1;60](roll);1];false;nulo;1]\`]

$setUserVar[stamina;$sub[$getUserVar[stamina];5]]

$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$sum[$getUserVar[força];$random[1;60]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=5;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
$onlyIf[$mentioned[1]!=757097885270540390;tá doido? querendo me bater. te fiz nada doido]
$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]
$onlyIf[$checkContains[$hasRole[$authorID;771068930546335784];true;true]!=true;seu titã nao possui essa habilidade]` 
})

//

//
bot.command({
name: "desviar-equipamento-3d", 
aliases: ['desviar-dmt','desvio-dmt'] ,
code: `$title[˜”°•.˜”°•𝒟𝑒𝓈𝓋𝒾𝒶𝓇 𝒸𝑜𝓂 𝐸𝓆𝓊𝒾𝓅𝒶𝓂𝑒𝓃𝓉𝑜 𝟥𝒟 •°”˜.•°”˜]
$description[➨ <@$authorID> tenta desviar do golpe do titã com seu equipamento 3D.

➨ deve cair mais de 550 para cortar, caso caia menos que o número requerido a pessoa morrerá

➨ Junto com o roll é somado os seus Pontos de Treino.]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[esquivap];$getUserVar[ackerman]]>=550];true;esquivou;1];false;foi pego;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[esquivap](esquivaPoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media4.giphy.com/media/JoDTNMiDgC2CAXAOp9/giphy.gif]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

//

//
bot.command({
name: "soco-tita", 
code: `
$title[˜”°•.˜”°•𝒮𝑜𝒸𝑜 𝒯𝒾𝓉ã •°”˜.•°”˜]
$description[**➨ O Titã desfere um poderoso golpe sobre seu inimigo, que caso for algum humano e acerte o golpe causa a morte instantânea, caso for em algum titã causa um roll 60 de dano+força caso acerte**

➨ **deve cair mais de 500 para acertar, caso caia menos erra o golpe.**

➨ **O valor que dar o dado é o dano dado pelo golpe caso acerte.**

➨ **Junto com o roll é somado os seus Pontos de Treino.**

➨ caso critique, aumenta o dano em +50]
$addField[➨ Stamina gasta:;10% (se errar o roll também conta)]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$sum[$getUserVar[força];$random[1;60]];1];false;nulo;1]***)]
$addField[Detalhes;acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$getUserVar[força](força) + $random[1;60](roll);1];false;nulo;1]\`]
$image[https://i.pinimg.com/originals/01/cd/7f/01cd7f19bff586469491c685bc7d046c.gif]
$onlyIf[$checkContains[$hasRole[$authorID;771131250022416394]$hasRole[$authorID;771070208734658561]$hasRole[$authorID;772269039841443841];true;true]==true;você não é um Tita ou narrador]` 
})

//

//
bot.command({
name: "ataque-perna-direita", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝒫𝑒𝓇𝓃𝒶 𝒟𝒾𝓇𝑒𝒾𝓉𝒶 •°”˜.•°”˜]
$description[➨ **<@$authorID> utiliza seu equipamento para tentar cortar a perna direita do titã**

➨**roll deve cair mais de 600 para cortar, caso caia menos que o número requerido o titã pode atacar.**

➨ **Junto com o roll é somado os seus Pontos de Treino.*"

➨ **A chance de matar o titã com golpe na nuca aumenta em 70 no roll.**]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=600];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://64.media.tumblr.com/df1d7b776073177bc765084bfd094130/tumblr_ps4fvfbWu21vfdmp1o5_500.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
` 
})

//

//
bot.command({
name: "ataque-perna-esquerda", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝒫𝑒𝓇𝓃𝒶 𝐸𝓈𝓆𝓊𝑒𝓇𝒹𝒶 •°”˜.•°”˜]
$description[➨ **<@$authorID> utiliza seu equipamento para tentar cortar a perna esquerda do titã**

➨**roll deve cair mais de 600 para cortar, caso caia menos que o número requerido o titã pode atacar.**

➨ **Junto com o roll é somado os seus Pontos de Treino.*"

➨ **A chance de matar o titã com golpe na nuca aumenta em 70 no roll.**]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=600];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://64.media.tumblr.com/df1d7b776073177bc765084bfd094130/tumblr_ps4fvfbWu21vfdmp1o5_500.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

//

bot.command({
name: "ataque-braco-esquerdo", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝐵𝓇𝒶ç𝑜 𝐸𝓈𝓆𝓊𝑒𝓇𝒹𝑜 •°”˜.•°”˜]

$description[➨ **<@$authorID> utiliza seu equipamento para tentar cortar o braço esquerdo do titã**

➨**deve cair mais de 500 para cortar, caso caia menos que o número requerido o titã pode atacar.**

➨ **Junto com o roll é somado os seus Pontos de Treino.*"

➨ **A chance de matar o titã com golpe na nuca aumenta em 50 no roll.**]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=500];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://media4.giphy.com/media/Z9VwCPePsPLOV6N9sU/giphy.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

//

bot.command({
name: "ataque-braco-direito", 
code: `$title[˜”°•.˜”°•𝒜𝓉𝒶𝓆𝓊𝑒 𝐵𝓇𝒶ç𝑜 𝒟𝒾𝓇𝑒𝒾𝓉𝑜 •°”˜.•°”˜]
$description[➨ **<@$authorID> utiliza seu equipamento para tentar cortar o braço direito do titã**

➨**deve cair mais de 500 para cortar, caso caia menos que o número requerido o titã pode atacar.**

➨ **Junto com o roll é somado os seus Pontos de Treino.*"

➨ **A chance de matar o titã com golpe na nuca aumenta em +50 no roll.**]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp];$getUserVar[ackerman]]>=500];true;acertou;1];false;errou;1]***}]
$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)+$getUserVar[ackerman](bônus ackerman)\`]
$image[https://cdn.discordapp.com/attachments/762825547868799047/768507211512938496/tenor.gif]
$takeRoles[$authorID;$replaceText[$replaceText[$checkCondition[$random[1;1000]<=40];true;771066821213552692;1];false;770799447441145856;1]]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]
` 
})
//

bot.command({
name: "carregar-gas" , 
code: `
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]

$setUserVar[gas;8]

$title[˜”°•.˜”°•𝒞𝒶𝓇𝓇𝑒𝑔𝒶𝓇 𝒢á𝓈 •°”˜.•°”˜]

$description[➨ **<@$authorID> carrega seu gás.**

➨ **Após carregar seu gás com seu dispositivo de carregamento a duração dele volta para oito turnos.** 

➨ **É necessário ter um dispositivo próximo.**]

$channelSendMessage[778202277097111574;💨 **$username#$discriminator[$authorID]** recarregou seu gás em <#$channelID>]

$image[https://media4.giphy.com/media/W5NMi78xqYXwuSSVdw/giphy.gif]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

//


//


bot.command({
name: "set-hp", 
code: `
$setUserVar[hp;$message[1]]
> ✅ **você alterou sua quantia de hp para __$message[1]__**
$suppressErrors[]
$onlyIf[$message[1]<=800;oops! o hp máximo é \`800\`]
$argsCheck[>1;diga sua quantia de hp]
` 
})
//

bot.command({
name: "set-help", 
code: `
$description[__**set help**__

\`\`\`voce pode configurar seu perfil livremente com o comando '!set <item> <novo valor>'. ex: '!set hp 500'\`\`\`

***opções de item***

> · \`hp\`
> 
> · \`idade\`
> 
> · \`nome\`
> 
> · \`imagem\`
> 
> · \`historia\`


*especiais*
__**Apenas Cartografos**__

> · \`tp\`
\`\`\`!add tp <valor> <@user>
!remove tp <valor> <@user>\`\`\`

use \`!reset points <@user>\` para resetar todos seus pontos(tp,atk,esquiva)

__**contador de mortes**__

\`\`\`!add morte <@user>
 -vai adicionar uma morte ao usuário mencionado

!remove morte <@user> 
 -Vai remover uma morte do usuário mencionado

!reset morte <@user>
 -vai resetar as mortes do usuário mencionado (volta pra 0)\`\`\`]
` 
})
//

bot.command({
name: "perfil",
aliases: ['profile','prf'] , 
code: `
$image[https://cdn.discordapp.com/attachments/724886644225736764/762436341740208128/1601849343474.png]
$thumbnail[$replaceText[$replaceText[$checkContains[$getUserVar[imagem;$mentioned[1;yes]];∆¶];true;$userAvatar[$mentioned[1;yes]];1];false;$getUserVar[imagem;$mentioned[1;yes]];1]]
$author[Perfil]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$addField[<:capuz:759076569670746122>Veste;**$replaceText[$replaceText[$hasRole[$mentioned[1;yes];755783382612574248];true;Capuz;1];false;none;1]**]

$addField[☠**__Mortes__**;
\`$getUserVar[mortes;$mentioned[1;yes]]/3\` $replaceText[$replaceText[$checkCondition[$getUserVar[mortes;$mentioned[1;yes]]>=3];true;<:reset:759083194712064051>;1];false; ;1]]

$addField[🌬️Stamina Maxima;$sum[$replaceText[$replaceText[$hasRole[$mentioned[1;yes];771124679419232266];true;120;1];false;100;1];$getUserVar[resistencia;$mentioned[1;yes]]]%]

$addField[<:tp:758911817191391232>**__Training Points__**(\`!tp\`);
\`$getUserVar[tp;$mentioned[1;yes]]\`;yes]

$addField[<:hp:758912836708990986>**__Vida__**;
\`$getUserVar[hp;$mentioned[1;yes]]\`;yes]

$addField[<:ingot:759096474713063464>Ingots(\`!carteira\`);\`$getUserVar[ingot;$mentioned[1;yes]]\`]
$addField[**__Idade__**;
**$getUserVar[idade;$mentioned[1;yes]]**;yes]
$addField[**__Nome__**;
**$getUserVar[nome;$mentioned[1;yes]] $replaceText[$replaceText[$replaceText[$hasRole[$mentioned[1;yes];771124679419232266]$hasRole[$mentioned[1;yes];771124684272042004];truefalse;Ackerman;1];falsetrue;Reiss;1];falsefalse;;1]**;yes]
$color[FCDA51]
$footer[use '!set help' para customizar seu perfil]` 
})

//

bot.command({
name: "investida", 
code: `
$setUserVar[gas;$sub[$getUserVar[gas];1]]
$setUserVar[uso;$sub[$getUserVar[uso];1]]
$thumbnail[$replaceText[$replaceText[$checkContains[$getUserVar[gas];8];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604177330176/gasMAX.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];7];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604390584330/gasSete.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];6];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604575395840/gasSeis.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];5];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604793761802/gasCinco.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];4];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605090639892/gasQuatro.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];3];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605380833320/gasTres.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];2];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605552537631/gasDois.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];1];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605863440424/gasUm.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];0];false;;1];true;https://cdn.discordapp.com/attachments/762825547868799047/762825606328746004/gasVazio.png;1]]
$addField[**__Ataques em conjunto (necessário pelo menos duas pessoas):__**;
➢ !ataque-duplo]
$addField[**__➨ Movimentos__**;
➢ !ataque-perna-direita
➢ !ataque-perna-esquerda
➢ !ataque-braco-direito
➢ !ataque-braco-esquerdo
➢ !ataque-nuca
➢ !ataque-olhos
➢ !ataque-panturrilhas
➢ !ataque-mandibula
➢ !retirar-humano

·]
$title[˜”°•.˜”°•𝐼𝓃𝓋𝑒𝓈𝓉𝒾𝒹𝒶 •°”˜.•°”˜]
$description[➨ **<@$authorID> utiliza seu equipamento de manobra 3D para atacar um titã**

·]
$image[https://eleaemedemaria.files.wordpress.com/2013/09/shingeki-no-kyojin-attack-on-titan-three-dimensiona-maneuver-gear-2.gif]
$onlyIf[$getUserVar[gas]>0;você está sem gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066821213552692] $hasRole[$authorID;775501453187350558];true]==true;você esta sem lâminas]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

bot.command({
name: "buy-spin", 
code: `$setUserVar[spins;$sum[$getUserVar[spins];1]]
$setUserVar[ingot;$sub[$getUserVar[ingot];200]]

**$username[$authorID] comprou 1 spin!**
 **agora tem $sum[$getUserVar[spins];1] spins; pode roletar uma nova familia! (\`!spin\`)**

$onlyIf[$getUserVar[ingot]>=200;voce é fraco. lhe falta ingot. obtenha mais em \`!ingot-market\`]` 
})




bot.command({
name: "spins",
aliases: ['my-spins','familas'] , 
code: `**$username[$mentioned[1;yes]] tem $getUserVar[spins;$mentioned[1;yes]] spins de familia**` 
})

bot.command({
name: "buy-key-pet", 
code: `$setUserVar[petkey;$sum[$getUserVar[petkey];1]]
$setUserVar[ingot;$sub[$getUserVar[ingot];150]]

$description[**$username[$authorID]** comprou **key pet**<:pKey:776808256337084436>!!
(use \`!open-loot-pet\`)]

$onlyIf[$getUserVar[ingot]>=150;voce é fraco. lhe falta ingot! adiquira mais em \`!ingot market\`]` 
})

bot.command({
name: "daily-key", 
code: `$setUserVar[petkey;$sum[$getUserVar[petkey];$random[1;2]]]
<:pKey:776808256337084436>**$username[$authorID]** obteve **$random[1;2]** keys pet! use \`!open-loot-pet\`
$globalCooldown[24h;aguarde \`%time%\`]
` 
})

bot.command({
name: "open-loot-pet", 
code: `$setUserVar[evento;$sum[$getUserVar[evento];1]]

$description[<:loot4:743615560004403300>**__Lootbox PET__**<:loot4:743615560004403300>
🎉 **parabéns** 🎉

__$username obteve:__ **$replaceText[$replaceText[$checkCondition[$random[0;100]<=80];false; ;1];true;<:fragmentoConnie:779529018961690624>$random[5;10] Connie frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;101]<=70];false; ;1];true;<:fragmentoSasha:779529054571069441>$random[5;11] Sasha Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;102]<=30];false; ;1];true;<:fragmentoHistoria:776468229757337610>$random[5;9] Historia Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;103]<=30];false; ;1];true;<:fragmentoYmir:776466323437649940>$random[5;8] Ymir Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;104]<=30];false; ;1];true;<:fragmentoHanji:776460503240540191>$random[5;7] Hanji Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;105]<=20];false; ;1];true;<:fragmentoMikasa:776460466896633916>$random[4;6] Mikasa Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;106]<=25];false; ;1];true;<:fragmentoEren:776460552544714792>$random[6;11] Eren Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;107]<=8];false; ;1];true;<:fragmentoJibril:776439443375652875>$random[3;6] Jibril Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;108]<=8];false; ;1];true;<:fragmentoPaimon:776443169176813568>$random[3;8] Paimon Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;109]<=8];false; ;1];true;<:fragmentoKanna:776445289279520769>$random[3;7]Kanna Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;110]<=8];false; ;1];true;<:fragmentoShiro:776450253032652801>$random[3;9]Shiro Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;112]<=5];false; ;1];true;<:fragmentoLevi:776460406340059176>$random[3;10]Levi Frags,;1] $replaceText[$replaceText[$checkCondition[$random[0;111]<=5];false; ;1];true;<:fragmentoMoriJin:780238571705073724>$random[3;5] Mori Frags,;1]**]
$footer[use "!frags" para verificar seus fragmentos]


$setUserVar[Conniefrag;$replaceText[$replaceText[$checkCondition[$random[0;100]<=80];false;$getUserVar[Conniefrag];1];true;$sum[$getUserVar[Conniefrag];$random[5;10]];1]]

$setUserVar[Sashafrag;$replaceText[$replaceText[$checkCondition[$random[0;101]<=70];false;$getUserVar[Sashafrag];1];true;$sum[$getUserVar[Sashafrag];$random[5;11]];1]]

$setUserVar[Historiafrag;$replaceText[$replaceText[$checkCondition[$random[0;102]<=30];false;$getUserVar[Historiafrag];1];true;$sum[$getUserVar[Historiafrag];$random[5;9]];1]]

$setUserVar[Ymirfrag;$replaceText[$replaceText[$checkCondition[$random[0;103]<=30];false;$getUserVar[Ymirfrag];1];true;$sum[$getUserVar[Ymirfrag];$random[5;8]];1]]

$setUserVar[Hanjifrag;$replaceText[$replaceText[$checkCondition[$random[0;104]<=30];false;$getUserVar[Hanjifrag];1];true;$sum[$getUserVar[Hanjifrag];$random[5;7]];1]]

$setUserVar[Mikasafrag;$replaceText[$replaceText[$checkCondition[$random[0;105]<=20];false;$getUserVar[Mikasafrag];1];true;$sum[$getUserVar[Mikasafrag];$random[4;6]];1]]

$setUserVar[Erenfrag;$replaceText[$replaceText[$checkCondition[$random[0;106]<=25];false;$getUserVar[Erenfrag];1];true;$sum[$getUserVar[Erenfrag];$random[6;11]];1]]

$setUserVar[Jibrilfrag;$replaceText[$replaceText[$checkCondition[$random[0;107]<=8];false;$getUserVar[Jibrilfrag];1];true;$sum[$getUserVar[Jibrilfrag];$random[3;6]];1]]

$setUserVar[Paimonfrag;$replaceText[$replaceText[$checkCondition[$random[0;108]<=8];false;$getUserVar[Paimonfrag];1];true;$sum[$getUserVar[Paimonfrag];$random[3;8]];1]]

$setUserVar[Kannafrag;$replaceText[$replaceText[$checkCondition[$random[0;109]<=8];false;$getUserVar[Kannafrag];1];true;$sum[$getUserVar[Kannafrag];$random[3;7]];1]]

$setUserVar[Shirofrag;$replaceText[$replaceText[$checkCondition[$random[0;110]<=8];false;$getUserVar[Shirofrag];1];true;$sum[$getUserVar[Shirofrag];$random[3;9]];1]]

$setUserVar[Levifrag;$replaceText[$replaceText[$checkCondition[$random[0;112]<=5];false;$getUserVar[Levifrag];1];true;$sum[$getUserVar[Levifrag];$random[3;10]];1]]

$setUserVar[Morifrag;$replaceText[$replaceText[$checkCondition[$random[0;111]<=5];false;$getUserVar[Morifrag];1];true;$sum[$getUserVar[Morifrag];$random[3;5]];1]]

$setUserVar[petkey;$sub[$getUserVar[petkey];1]]
$onlyIf[$getUserVar[petkey]>=1;voce é fraco. lhe falta key! adiquira mais em \`!ingot shop\`]
` 
})


bot.command({
name: "daily-tp", 
code: `**$username[$authorID]** reclamou **$random[4;5]** TP referente a seu pet lendario!

$setUserVar[tp;$sum[$getUserVar[tp];$random[4;5]]]

$cooldown[24h;volte em %time%]

$onlyIf[$getUserVar[domador]>=4;voce precisa de pelo menos 4 leveis de domador para utilizar desta perk (use \`!sacrifice <pet>\`)]
$onlyIf[$checkContains[$getGlobalUserVar[pet;$authorID];Jibril;Kanna;Levi;Paimon;Shiro;Mikasa;Eren;Mori]!=false;apenas pet lendários podem reclamar esse premio]
` 
})

bot.command({
name: "sacrifice", 
code: `$setGlobalUserVar[pet;nenhum;$authorID]
$setUserVar[$message[1]frag;$sub[$getUserVar[$message[1]frag];100]]

$setUserVar[domador;$sum[$getUserVar[domador];1]]

$setUserVar[petkey;$sum[$getUserVar[petkey];1]]

**$username** sacrificou 100 frags do pet **$message[1]** para upar seu lvl de domador! 

$suppressErrors[diga o pet que deseja sacrificar. isso lhe fará consumir 100 frags desse pet e lhe dará 1 lvl em domador. ex: \`!sacrifice Connie\`
(ao sacrificar um pet, voce terá seu pet descelecionado. nao se preocupe, apenas use \`!form <pet>\` nele novamente)]` 
})




bot.command({
name: "form", 
code: `$setGlobalUserVar[pet;$message[1];$authorID]


$title[pet summonado!]
$description[**$username** summonou o pet **$message[1]**!! verifique seu \`!pet\`]

$color[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];Paimon;f7a481;1];Jibril;f041b0;1];Historia;fff480;1];Ymir;85572c;1];Hanji;ff922b;1];Mikasa;14171c;1];Eren;8f5328;1];Levi;000001;1];Kanna;ffc7e1;1];Shiro;be33ff;1];Sasha;7a3012;1];Connie;acb1bd;1]]


$thumbnail[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];Paimon;https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Character_Paimon_Portrait.png;1];Jibril;https://comicvine1.cbsistatic.com/uploads/original/11132/111329607/7071538-9624077819-78cb8.jpg;1];Historia;https://cdn.discordapp.com/attachments/478285069752991744/779473624000102400/aot___historia_reiss___render___by_mailyse_dbzdhfa-fullview.png;1];Ymir;https://img.cartoongoodies.com/wp-content/uploads/2020/02/Attack-on-Titan-character-Ymir-with-weapons.png;1];Hanji;https://i.pinimg.com/originals/1f/cf/25/1fcf25d4365f906cf41f1312c43f2c80.png;1];Mikasa;https://static.wikia.nocookie.net/starocean/images/8/8c/MikasaAckerman.png;1];Eren;https://cdn.discordapp.com/attachments/478285069752991744/779481351267155968/340.png;1];Levi;https://i.pinimg.com/originals/f7/80/02/f78002eb18f53497ea4224e2c4521c83.png;1];Kanna;https://static.wikia.nocookie.net/all-worlds-alliance/images/c/c7/Kanna_png_744979.png;1];Shiro;https://vignette.wikia.nocookie.net/no-game-no-life-brasil/images/0/09/Shiro.png/revision/latest?cb=20140615052759&path-prefix=pt-br;1];Sasha;https://cdn.discordapp.com/attachments/478285069752991744/779509626366328893/ddfxnhr-f6e84bb3-4f5e-4b94-8422-50bbbf55c093.png;1];Connie;https://cdn.discordapp.com/attachments/478285069752991744/779512680552857630/341487536049201.png;1]]

$onlyIf[$getUserVar[$message[1]frag]>=100;voce ainda nao tem frags o suficente para summonar esse pet!(faltam \`$sub[100;$getUserVar[$message[1]frag]]\`)]
$onlyIf[$checkContains[$message[1];Levi;Paimon;Historia;Hanji;Mikasa;Eren;Ymir;Jibril;Kanna;Shiro;Sasha;Connie;Mori]==true;]
$suppressErrors[pet inválido! tente digitar o nome exatamente como está em \`!frags\`! exemplo: \`!form Mikasa\`]
$argsCheck[>1;qual pet voce deseja summonar? digite o nome exatamente como está em \`!frags\`]
` 
})



bot.command({
name: "horarios",
aliases: ['horários','horas','hora','cronograma'] , 
code: `$title[Horários missões]
$description[<:exploracao:757839079131054120> <@&771063909967855647>
Possíveis horários de missão:
<:left_green_arrow:753962888510570547> 13h30
<:left_green_arrow:753962888510570547> 16h30
<:left_green_arrow:753962888510570547> 21h

<:estacionaria:757839054799896639><@&771063911822131201>
<:left_green_arrow:753962888510570547> 15h
<:left_green_arrow:753962888510570547> 18h30 
<:left_green_arrow:753962888510570547> 20h

*Normalmente são duas missões por dia, então um desses horários praticamente todo dia ficará desativado (mas nem sempre <:zero_yay:757837638982959134>)*]
$color[89fde8]` 
})

bot.command({
name: "lança-trovao",
aliases: ['lanca-trovao','lançatrovao','lancatrovao','tiro-trovao','tirotrovao'], 
code: `
$author[»»———-𝖑𝖆𝖓𝖈𝖆 𝖙𝖗𝖔𝖛𝖆𝖔———-««]
$description[➥ <@$authorID> utiliza de sua **lança trovão** contra o titã inimigo! um tiro tão potente quanto um raio

➥ o tiro só pode perfurar superfices rigidas(\`endurecer\`) caso seja mais de uma pessoa atirando no mesmo ponto e ambas acertarem!

➥ caso acerte, o tiro é hit kill idependente do tita (a regra de titãs endurecidos ainda se aplica. o tita martelo de guerra pode ser perfurado por sua armadura nao ser forte o suficiente)

➥ apenas titãs inteligentes podem desviar

➥ ~~500~~ 400

➥ apenas titãs cuja velocidade seja maior que a da lança podem desviar

➥ **__Velocidade: 15__**
**\`$getUserVar[balatrovao] balas sobrando\`**]


$image[https://i.pinimg.com/originals/6d/98/2b/6d982bc3cf873be85351b9d07a4cd361.gif]
$addField[Resultado;$sum[$random[1;1000];$getUserVar[tiro]]
{**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=400];true;acertou;1];false;errou;1]***}
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=400];true;hit kill;1];false;nulo;1]***)]

$addField[Detalhes;\`(roll)$random[1;1000]+$getUserVar[tiro](maestria:arma)\`]

$setUserVar[balatrovao;$sub[$getUserVar[balatrovao];1]]
$onlyIf[$getUserVar[balatrovao]>=1;voce esta sem balas trovao]
$onlyForRoles[775860024093310976;voce nao tem essa arma.]
` 
})


bot.command({
name: "regras", 
code: `**REGRAS DO SERVIDOR**
$attachment[https://cdn.discordapp.com/attachments/760570633536012380/760782319295397908/PSX_20200930_053649.jpg]` 
})

bot.command({
name: "keys", 
code: `**__Suas chaves__**
<:mkey:760783413983576074>\`$getUserVar[mkey]\` <:ckey:760783753156100096>\`$getUserVar[ckey]\` <:pkey:760784021281570856>\`$getUserVar[pkey]\` <:gkey:760784203540463647>\`$getUserVar[gkey]\` <:pKey:776808256337084436>\`$getUserVar[petkey]\`` 
})

bot.command({
name: "gas", 
code: `$description[você pode recarrega-lo com \`!carregar-gas\`]
$title[Estado de Gás]
$thumbnail[$replaceText[$replaceText[$checkContains[$getUserVar[gas];8];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604177330176/gasMAX.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];7];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604390584330/gasSete.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];6];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604575395840/gasSeis.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];5];true;https://cdn.discordapp.com/attachments/762825547868799047/762825604793761802/gasCinco.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];4];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605090639892/gasQuatro.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];3];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605380833320/gasTres.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];2];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605552537631/gasDois.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];1];true;https://cdn.discordapp.com/attachments/762825547868799047/762825605863440424/gasUm.png;1];false;;1]$replaceText[$replaceText[$checkContains[$getUserVar[gas];0];false;;1];true;https://cdn.discordapp.com/attachments/762825547868799047/762825606328746004/gasVazio.png;1]]
$footer[contagem de gas | você tem $getUserVar[gas] niveis de gás]
$onlyIf[$checkContains[$hasRole[$authorID;771066513461346335] $hasRole[$authorID;775501412414521414];true]==true;você não está usando um **DMT**]` 
})

bot.command({
name: "tell", 
code: `$deletecommand
$title[$getUserVar[nome] $replaceText[$replaceText[$replaceText[$hasRole[$authorID;749499896926568526]$hasRole[$authorID;749499896423514182];truefalse;Ackerman;1];falsetrue;Reiss;1];falsefalse;;1]]
$thumbnail[$replaceText[$getUserVar[imagem];∆¶;$authorAvatar;1]]
$description[$splitText[1]]
$image[$replaceText[$splitText[2]; ;]]

$textSplit[$message;%link%]

$onlyIf[$getUserVar[nome]!=none;você não configurou seu perfil ainda!]` 
})


bot.command({
name: "jardim", 
code: `$author[🎐Jardim de ouro🎐]
$title[$username[$mentioned[1;yes]]]
$description[você pode depositar até \`1\` ingot por dia na arvore de um amigo. quando a avore atinge **50** ingots depositados, ela te presenteará com o dobro dos ingots!

para depositar na árvore de um amigo use \`!regar <@usuario>\`

para reclamar o prêmio da árvore use \`!colher\`]
$addField[🎐Estado da árvore;nível **$getUserVar[ouro;$mentioned[1;yes]]**]
$thumbnail[https://lh3.googleusercontent.com/proxy/0362jCyQiTqwLxstnlC-UzWNS88rumquJtT2iMM06dsIGvcOQ4_zNhTJBTt0wL1auUjKcPFbQutyGEn0Qmh1csjU5Z14LZECDunDqpzvhzt4pC7zUcun29cxRZ-jDu6FKKrl]
$footer[valores depositados não podem ser retirados até que atinja o necessário]
$color[f8ef56]
$image[https://cdn.discordapp.com/attachments/724886644225736764/760567841207484416/66a8a00e8182c8bf16fdf0ca3d31c1e5752a6a08_hq-1.gif]` 
})

bot.command({
name: "craft", 
code: `$title[BALA TROVÃO]
$description[**$username#$discriminator[$authorID]** craftou uma **bala trovão**]





$setUserVar[balatrovao;$sum[$getUserVar[balatrovao];1]]
$setUserVar[ferro;$sub[$getUserVar[ferro];10]]
$setUserVar[cristal;$sub[$getUserVar[cristal];2]]

$onlyIf[$getUserVar[inteligencia]>=20;você nao é inteligente o suficente para criar isto (\`20\`)]
$onlyIf[$getUserVar[ciencia]>=30;você nao tem pontos de ciencia o suficiente!(\`30\`)]
$onlyIf[$getUserVar[ferro]>=10;você nao tem aço o suficiente! (\`10\`)]
$onlyIf[$getUserVar[cristal]>=2;você nao tem cristais explosivos o suficiente! (\`2\`)]
$suppressErrors[]
$argsCheck[1;]
$onlyIf[$message[1]==bala-trovao;]
` 
})

bot.command({
name: "jardim", 
code: `
$title[jardim de ouro]
$description[**$username** regou a árvore de <@$mentioned[1]>!]
$color[fffd57]
$setUserVar[ingot;$sub[$getUserVar[ingot];1]]
$setUserVar[ouro;$sum[$getUserVar[ouro;$mentioned[1]];1];$mentioned[1]]
$cooldown[24h;você só pode regar uma árvore denovo após \`%time%\`]
$onlyIf[$getUserVar[ingot]>=1;você não tem ingots o suficiente]
$onlyIf[$authorID!=$mentioned[1];você não pode regar sua própria árvore]
$onlyIf[$userExists[$mentioned[1]]==true;não encontrei esse usuário]
$argsCheck[>1;você deve mencionar o usuário do qual regará a arvore]
` 
})

bot.command({
name: "colher", 
code: `
$title[jardim de ouro]
$description[**$username** colheu os frutos de sua árvore! obete **100** ingots]
$color[fffd57]
$setUserVar[ingot;$sum[$getUserVar[ingot];100]]
$setUserVar[ouro;$sub[$getUserVar[ouro];50]]
$cooldown[7d;você só pode reclamar o prêmio da árvore denovo após \`time%\`]
$onlyIf[$getUserVar[ouro]>=50;seu jardim não foi regado o suficiente]` 
})

bot.command({
name: "prestigio", 
aliases: ['rep','reputação','reputaçao'] ,
code: `$author[🌟PRESTIGIO]
$title[Staff Points]
$description[
use \`!help-prestigio\` para entender mais]
$addField[🌟Nível de prestígio;**$getUserVar[prestigio;$mentioned[1;yes]]** pontos]
$image[https://cdn.discordapp.com/attachments/762825547868799047/765048373832450048/1602472073094.png]
$footer[os staffs com mais pontos no fim do mês são premiados | $username[$mentioned[1;yes]]]
$color[ff615d]
$onlyIf[$hasRole[$mentioned[1;yes];771159551981649921]==true;apenas staffs tem um contador de prestígio]` 
})


bot.command({
name: "verificar", 
code: `
$setUserVar[ficha;<:verificado:737122358040592474>;$mentioned[1;yes]]
> <:verificado:737122358040592474> $username verificou a ficha de $username[$mentioned[1;yes]] <:verificado:737122358040592474>
$onlyIf[$hasRole[$authorID;770799798647390217]==true;você não é um aprovador]` 
})

bot.command({
name: "roll",
code: `<:dice:745245907225673839> **$username** rolou __$random[1;100]__ [verifique \`!ordem\`]
$setUserVar[ordem$replaceText[$replaceText[$isNumber[$message[1]];false;1;1];true;$message[1];1];$random[1;100]]
$onlyIf[$replaceText[$replaceText[$isNumber[$message[1]];false;1;1];true;$message[1];1]<=4;essa pag nao existe {1-4}]`
})

bot.command({
name: "reset-order", 
code: `comando temporariamente desabilitado` 
})

bot.awaitedCommand({
  name: "awaitReaction1",
  code: `
  $editMessage[$message[1];
**Pagina1**
$userLeaderboard[ordem1;asc;{top} - {username} - {value}]

\`!reset-order\` **para resetar**]`})


bot.awaitedCommand({
  name: "awaitReaction2",
  code: `
  $editMessage[$message[1];**Pagina2**
$userLeaderboard[ordem2;asc;{top} - {username} - {value}]

\`!reset-order\` **para resetar**]`})


bot.awaitedCommand({
  name: "awaitReaction3",
  code: `
  $editMessage[$message[1];**Pagina3**
$userLeaderboard[ordem3;asc;{top} - {username} - {value}]

\`!reset-order\` **para resetar**}]`})


bot.awaitedCommand({
  name: "awaitReaction4",
  code: ` 
  $editMessage[$message[1];**Pagina4**
$userLeaderboard[ordem4;asc;{top} - {username} - {value}]

\`!reset-order\` **para resetar**]`})




bot.command({
  name: "ordem",
  code: `
$reactionCollector[$splitText[1];$authorID;1h;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
$textSplit[$sendMessage[**Pagina1**
$userLeaderboard[ordem1;asc;{top} - {username} - {value}]

\`!reset-order\` **para resetar**;yes]; ]`
})








///////ladrao////////


bot.command({
name: "aceitar-quest", 
code: `$title[quest aceita!]
$description[**$username#$discriminator[$authorID]** aceitou a quest! prepare-se para o combate!]

$thumbnail[$userAvatar[$authorID]]
$color[34eb74]

$setUserVar[hpinimigo;$replaceText[$replaceText[$replaceText[$getServerVar[dificuldade];facil;150;1];medio;350;1];dificil;450;1]]

$setUserVar[hpcombate;$getUserVar[hp]]

$setUserVar[aceito;yes]
$onlyIf[$checkContains[$hasRole[$authorID;771065526964715541] $guildID;true;768546895818653717]==true;você precisa estar equipado com um **equipamento de manobra vertical** para esse combate!]
$onlyIf[$channelID==$getServerVar[channelquest]; nao existem quests nesse chat, mas parece que existe um ladrao em <#$getServerVar[channelquest]>!]
$onlyIf[$getServerVar[etapa]==1;nao existem quests nesse chat!]` 
})





bot.awaitedCommand({
  name: "awaitReaction1",
  code: `
  $editMessage[$message[1];
{title:ação 1} {color:RANDOM} {description:ação 1}]`})


bot.awaitedCommand({
  name: "awaitReaction2",
  code: `
  $editMessage[$message[1];
{title:ação 2} {color:RANDOM} {description:ação 2}]`})


bot.awaitedCommand({
  name: "awaitReaction3",
  code: `
  $editMessage[$message[1];
{title:ação 3} {color:RANDOM} {description:ação 3}]`})


bot.awaitedCommand({
  name: "awaitReaction4",
  code: ` 
  $editMessage[$message[1];
{title:ação 4} {color:RANDOM} {description:ação 4}]`})


bot.awaitedCommand({
  name: "awaitReaction5",
  code: `
  $editMessage[$message[1];
{title:ação 5} {color:RANDOM} {description:ação 5}]

$clearReactions[$channelID;$message[1];all]`})


bot.command({
  name: "aceitar-quest",
  code: `
$reactionCollector[$splitText[1];$authorID;1h;🔫,🏃,🔧,👊🏻,👻;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4,awaitReaction5;yes]
$textSplit[$sendMessage[{title:⚔️COMBATE⚔️} {color:34eb74} {thumbnail:https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd2us1v-2b73f7d2-fe7f-4ae2-a1ce-7602cbd38836.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDJ1czF2LTJiNzNmN2QyLWZlN2YtNGFlMi1hMWNlLTc2MDJjYmQzODgzNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.q0VUhoIuqp2DzZTwKa6s4740jpvPvtm3XmJqGFvPYrE} {description:**TURNO: 1**

**Inimigo:** *$randomText[então você acha que é capaz de me deter...; tsc....você me dá pena..vem pra cima;..oque? um soldado qualquer?..isso será mais facil do que pensei...;..nao me atrapalhe, suma, ou farei você sumir;alá o bobão achando que vai salvar o dia;..nao tenho tempo para você, vamos acabar logo;tsc...saia da frente, otário;hahaha, isto estava mesmo sem graça. VEM PRA CIMA!;então eu chamei atenção hein? hmhmhmh serei mais cuidadoso na proxima;aaaah eu odeio isso...mais pessoas irritantes..;isso é...irritante;você seria oque? o heroi que salva o dia? hoje nao..;puta merda, mais um;AAAH NAO FODE! SAIA DO MEIO!;FILHO DA PUTA, MEU DIA NAO ESTÁ BOM! NAO ME ATRAPALHE!]*

🩸 **$username** HP: \`$getUserVar[hpcombate]\`

🩸 **Inimigo** HP: \`$getUserVar[hpinimigo]\`


**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
**╚──────────¤◎¤──────────╝**} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true};yes]; ] 
$setUserVar[turno;1]
$setServerVar[etapa;0]
$channelSendMessage[778202277097111574;📜**$username#$discriminator[$authorID]** aceitou uma quest em <#$channelID>]
$setServerVar[quest;on]
$onlyIf[$channelID==$getServerVar[channelquest];]
$onlyIf[$getUserVar[aceito]==yes;]
$onlyIf[$getServerVar[etapa]==1;]`})










bot.command({
name: "summon-ladrao", 
code: `$deletecommand
$setServerVar[etapa;1]
$setServerVar[channelquest;$channelID]
comando temporariamente desabilitado
$color[eb3434]
$setServerVar[dificuldade;$randomText[facil;medio;dificil]]
$thumbnail[https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd2us1v-2b73f7d2-fe7f-4ae2-a1ce-7602cbd38836.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDJ1czF2LTJiNzNmN2QyLWZlN2YtNGFlMi1hMWNlLTc2MDJjYmQzODgzNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.q0VUhoIuqp2DzZTwKa6s4740jpvPvtm3XmJqGFvPYrE]
$title[Nova quest!!]
$description[um ladrao apareceu pelas ruas!! peguem-no antes que fuja!

**level:**$randomText[facil;medio;dificil]]
$footer[!aceitar-quest]

$setServerVar[quest;waiting]

$onlyIf[$getServerVar[quest]==off;ja existe uma quest ativa! use \`/unsummon-ladrao\` para desabilita-la]
$onlyPerms[admin;no]` 
})


bot.command({
name: "unsummon-ladrao", 
code: `$deletecommand
$setServerVar[etapa;0]
$setUserVar[turno;1]
$setUserVar[balaev;0]
$setServerVar[quest;off]
o ladrao se foi!
$onlyPerms[admin;no]` 
})


/////////////////////////

bot.awaitedCommand({
  name: "chamarrp",
  code: `$giveRoles[$authorID;771368738448605225]
  $channelSendMessage[$channelID;{description: **$username[$authorID] obteve o cargo __Chamar Rp__**} {color:$getRoleColor[771368738448605225]}]`
})

bot.awaitedCommand({
  name: "avisos",
  code: `$giveRoles[$authorID;771369181626236971]
  $channelSendMessage[$channelID;{description: **$username[$authorID] obteve o cargo __Avisos__**} {color:$getRoleColor[771369181626236971]}]`
})

bot.awaitedCommand({
  name: "sorteios",
  code: `$giveRoles[$authorID;771370543857139713]
  $channelSendMessage[$channelID;{description: **$username[$authorID] obteve o cargo __Sorteios__**} {color:$getRoleColor[771370543857139713]}]`
})

bot.awaitedCommand({
  name: "anuncios",
  code: `$giveRoles[$authorID;771369185032667186]
  $channelSendMessage[$channelID;{description: **$username[$authorID] obteve o cargo __Anuncios__**} {color:$getRoleColor[771369185032667186]}]`
})

bot.awaitedCommand({
  name: "parcerias",
  code: `$giveRoles[$authorID;771369188219813979]
  $channelSendMessage[$channelID;{description: **$username[$authorID] obteve o cargo __Parcerias__**} {color:$getRoleColor[771369188219813979]}]`
})

bot.awaitedCommand({
  name: "clima",
  code: `$giveRoles[$authorID;771369196771737602]
  $channelSendMessage[$channelID;{description: **$username[$authorID] obteve o cargo __Clima__**} {color:$getRoleColor[771369196771737602]}]`
})

bot.command({
  name: "auto-role",
  aliases: ['autorole','roles','auto-hole'],
  code: `
$reactionCollector[$splitText[1];everyone;1h;📢,❗,🎉,📥,🤝,⏰;chamarrp,avisos,sorteios,anuncios,parcerias,clima;yes]
$textSplit[$sendMessage[{author:Auto Role}{title:pegue aqui seus cargos para receber as notificações}{description:⚠️ Roles importantes para quem joga: <@&771369181626236971>, <@&771369185032667186>

📢 **Chamar-Rp** ( essa role é muito marcada, por isso só pegue caso realmente queira ser notificado para quando alguém )
❗ **Avisos**
🎉 **Sorteios**
📥 **Anuncios**
🤝 **Parcerias**
⏰ **Clima**
\`voce pode retirar os cargos em\` <#770834388581482576>
} {color:b6d7e3};yes]; ]`
}) 

//////
bot.awaitedCommand({
  name: "desvio",
  code: `⚔️**__STATS__**⚔️
❤️**$username HP:** $getUserVar[hpcombate]
🌀**$username STAMINA:** $getUserVar[stamina]%
  $title[˜”°•.˜”°•𝒟𝑒𝓈𝓋𝒾𝒶𝓇 𝒯𝒾𝓉ã •°”˜.•°”˜]
$description[➨ <@$authorID> em sua forma titã tenta desviar de golpes direcionados do peito pra cima (braço e olhos, exceto a nuca).

➨+roll 80 (deve cair mais de 60 para desviar), caso não atinja o requerido recebe um dos golpes do adversário do turno.

➨ O valor que dar o dado é o dano dado pelo golpe caso acerte.

➨ Junto com o +roll 80 é somado os seus Pontos de Treino.

➨ Só é possível desviar de golpes de outros titãs, não de humanos.

➨ Stamina gasta: 15% (se errar o roll também conta)]

$image[https://giphy.com/gifs/J53eCuDdIT0MtuBHq1]

$setUserVar[atacante;none]
$setUserVar[stamina;$sub[$getUserVar[stamina];15]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$replaceText[$replaceText[$checkCondition[$sub[$sum[$random[1;1000];$getUserVar[esquivap]];$getUserVar[velocidade;$getUserVar[atacante]]]>=650];true;0;1];false;$sub[$getUserVar[dano];$getUserVar[defesa]];1]]]
$onlyIf[$getUserVar[stamina]>=15;você está cansado de mais para desviar. reaja em não]
$onlyIf[$getUserVar[atacante]!=none;]`
})

bot.awaitedCommand({
  name: "nao",
  code: `⚔️**__STATS__**⚔️
❤️**$username HP:** $getUserVar[hpcombate]
🌀**$username STAMINA:** $getUserVar[stamina]%
$description[➨ <@$authorID> recebe o dano!]
$setUserVar[atacante;none]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sub[$getUserVar[dano];$getUserVar[defesa]]]]
$suppressErrors[]
$onlyIf[$getUserVar[atacante]!=none;]`
})


bot.command({
  name: "teste-mordida",
  code: `
$reactionCollector[$splitText[1];$mentioned[1];1h;✅,❌;devio,nao;yes]
$textSplit[$sendMessage[⚔️**__STATS__**⚔️
❤️**$username HP:** $getUserVar[hpcombate]
🌀**$username STAMINA:** $getUserVar[stamina]%
--
❤️**$username[$mentioned[1]] HP:** $getUserVar[hpcombate;$mentioned[1]]
🌀**$username[$mentioned[1]] STAMINA:** $getUserVar[stamina;$mentioned[1]]%
{title:˜”°•.˜”°•𝑀𝑜𝓇𝒹𝒾𝒹𝒶 •°”˜.•°”˜}{description:➨ <@$authorID> desfere um poderoso soco, que em titãs não causa efeitos, mas em humanos caso acerte causa um +roll 80 de dano 

➨+roll 1000 (deve cair mais de 550 para acertar), caso caia menos erra o golpe.

➨ o dano é sua força + o roll 80

➨ Junto com o +roll 1000 é somado os seus AP

➨ Stamina gasta: 10% (se errar o roll também conta)} {field:Resultado:$sum[$random[1;1000];$getUserVar[atkp]]
(**você *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;acertou;1];false;errou;1]***)
(**Dano: *$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$sum[$getUserVar[força];$random[1;60]];1];false;nulo;1]***)
$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;**<@$mentioned[1]> deseja tentar esquivar??**
✅ / ❌;1];false; ;1]}
{field:Detalhes:acerto: \`(roll)$random[1;1000]+$getUserVar[atkp](atkpoints)\`
dano: \`$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$getUserVar[força](força) + $random[1;60](roll);1];false;nulo;1]\`}{image:https://www.acasadocogumelo.com/wp-content/uploads/2013/11/attack_on_titan_gif_by_inele1-d6b2u6y.gif};yes]; ]

$setUserVar[stamina;$sub[$getUserVar[stamina];5]]

$setUserVar[dano;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=500];true;$sum[$getUserVar[força];$random[1;60]];1];false;0;1];$mentioned[1]]
$setUserVar[atacante;$authorID;$mentioned[1]]

$onlyIf[$getUserVar[stamina]>=5;você está cansado de mais para usar essa habilidade. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate;$mentioned[1]]>=1;$username[$mentioned[1]] ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$onlyIf[$getUserVar[hpcombate]>=1;você ja está morto ou sem hp. você pode usar \`!combate\` para setar suas informações iniciais de combate]
$suppressErrors[ops! voce deve marcar àquele em quem irá diferir o dano]
$onlyIf[$mentioned[1]!=757097885270540390;tá doido? querendo me bater. te fiz nada doido]`
}) 
//////////////////////
bot.awaitedCommand({
  name: "morrer",
  aliases: ['tiro','fuga','recarregar','soco','desviar','faca','cortedmt','descansar','atadura','revigorar'],
  code: `$sendMessage[**$username morreu em combate!**]
  $editMessage[$getUserVar[treinomessage];{description:treino encerrado}]
  $clearReactions[$channelID;$getUserVar[treinomessage];all]
  $onlyIf[$getUserVar[hpcombate]<=0;]`
})

//exec
bot.awaitedCommand({
  name: "cortar",
  code: `$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[20;220]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];50]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sum[$sub[$random[20;220];$getUserVar[defesa]]]]]
`
})
bot.awaitedCommand({
  name: "cortfaca",
  code: `$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[20;170]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];10]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sum[$sub[$random[20;170];$getUserVar[defesa]]]]]
`
})
bot.awaitedCommand({
  name: "uphp",
  code: `$setUserVar[hpinimigo;$sum[$getUserVar[hpinimigo];100]]
`
})
bot.awaitedCommand({
  name: "socar",
  code: `$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sum[$sub[$random[20;100];$getUserVar[defesa]]]]]]
`
})
bot.awaitedCommand({
  name: "atirar",
  code: `$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[0;200]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];30]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$random[0;200]]]

`
})


bot.awaitedCommand({
  name: "tiro",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username difere um tiro! $replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;acertando e causando;1];false;errando;1]$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;$random[1;200] de dano;1];false; ;1]
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[bala;0]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]

$setUserVar[hpinimigo;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=650];true;$sub[$getUserVar[hpinimigo];$random[1;200]];1];false;$getUserVar[hpinimigo];1]]

$onlyIf[$getUserVar[balaev]>=1;]`
})

bot.awaitedCommand({
  name: "fuga",
  code: `
  $setUserVar[turno;0]
  $deleteIn[5s]
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username fugiu
**Reação:** o inimigo riu da sua cara

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
 -> chorar
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$clearReactions[$channelID;$getUserVar[treinomessage];all]`
})

bot.awaitedCommand({
  name: "recarregar",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username recarregou sua arma
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[bala;1]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]

$onlyIf[$getUserVar[balaev]<=0;]`
})

bot.awaitedCommand({
  name: "soco",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username difere um soco! $replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=550];true;acertando e causando;1];false;errando;1]$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;$random[1;80] de dano;1];false; ;1]
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[stamina;$sub[$getUserVar[stamina];10]]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]

$setUserVar[hpinimigo;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=550];true;$sub[$getUserVar[hpinimigo];$sum[$random[1;80];$getUserVar[força]]];1];false;$getUserVar[hpinimigo];1]]

$onlyIf[$getUserVar[stamina]>=10;]`
})

bot.awaitedCommand({
  name: "desviar",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username usou desvio! **Reação:** o inimigo usou **$reandomText[corteDMT;soco;tiro]! mas voce desviou**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[stamina;$sub[$getUserVar[stamina];15]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]


$onlyIf[$getUserVar[stamina]>=15;]`
})

bot.awaitedCommand({
  name: "faca",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username difere uma facada! $replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=600];true;acertando e causando;1];false;errando;1]$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$random[1;150] de dano;1];false; ;1]
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[stamina;$sub[$getUserVar[stamina];15]]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]

$setUserVar[hpinimigo;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=600];true;$sub[$getUserVar[hpinimigo];$sum[$random[1;150];$getUserVar[força]]];1];false;$getUserVar[hpinimigo];1]]

$onlyIf[$getUserVar[stamina]>=15;]`
})

bot.awaitedCommand({
  name: "cortedmt",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username difere um corte com seu dmt! $replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[tiro]]>=750];true;acertando e causando;1];false;errando;1]$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;$random[1;200] de dano;1];false; ;1]
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[stamina;$sub[$getUserVar[stamina];25]]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]

$setUserVar[hpinimigo;$replaceText[$replaceText[$checkCondition[$sum[$random[1;1000];$getUserVar[atkp]]>=750];true;$sub[$getUserVar[hpinimigo];$sum[$random[1;200];$getUserVar[força]]];1];false;$getUserVar[hpinimigo];1]]

$onlyIf[$getUserVar[stamina]>=25;]`
})


bot.awaitedCommand({
  name: "decansar",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username descansou! obteve $random[1;40] de stamina
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[stamina;$sum[$getUserVar[stamina];$random[1;40]]]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]
`
})


bot.awaitedCommand({
  name: "atadura",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username utilizou de ataduras! seus sangramentos pararam
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[efeito;0]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]
`
})

bot.awaitedCommand({
  name: "revigorar",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username comeu e se recuperou! obteve $random[1;40] de hp
**Reação:** o inimigo usou **$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar]! $replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;];false;$randomText[acertando;errando]]**

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[hpcombate;$sum[$getUserVar[hpcombate];$random[1;40]]]

$replaceText[$replaceText[$checkContains[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];revigorar];true;{execute:uphp}];false;$replaceText[$replaceText[$randomText[acertando;errando];acertando;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$reandomText[corteDMT;soco;revigorar;corteDMT;tiro;faca;corteDMT;tiro;revigorar];corteDMT;{execute:cortar}];faca;{execute:cortfaca}];revigorar;{execute:uphp}];soco;{execute:socar}];tiro;{execute:atirar}]];errando;]]
$onlyIf[$getUserVar[hpcombate]<$getUserVar[hp];]`
})


bot.awaitedCommand({
  name: "reenviar",
  code: `
$reactionCollector[$splitText[1];$authorID;1h;🔫,🏃,🔧,👊🏻,👻,🔪,🗡,🌕,🧻,🥣,🔁;tiro,fuga,recarregar,soco,desviar,faca,cortedmt,descansar,atadura,revigorar,reenviar;yes]
$setUserVar[treinomessage;$splitText[1]]
$textSplit[$sendMessage[{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**


❤️ **$username** HP: \`$getUserVar[hpcombate]\` 
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝** 

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true};yes]; ]

$clearReactions[$channelID;$getUserVar[treinomessage];all]
`
})

bot.command({
  name: "treinamento",
  code: `
$reactionCollector[$splitText[1];$authorID;1h;🔫,🏃,🔧,👊🏻,👻,🔪,🗡,🌕,🧻,🥣,🔁;tiro,fuga,recarregar,soco,desviar,faca,cortedmt,descansar,atadura,revigorar,reenviar;yes]
$setUserVar[treinomessage;$splitText[1]]
$textSplit[$sendMessage[{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: 1**


❤️ **$username** HP: \`$getUserVar[hpcombate]\` 
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝** 

**INFO: COMANDOS QUE LHE CAUSEM CORTE - CASO O DANO SEJA MAIOR QUE SUA DEFESA, VOCÊ RECEBE O EFEITO \`sangramento\`, QUE PODE SER ACUMULADO. CADA ARMA (branca ou de fogo) ADICIONA UM DANO DIFERENTE AO SANGRAMENTO (essa regra se aplica na maioria dos efeitos)**

***efeito: sangramento - lhe causa um dano a cada turno. caso voce receba duas facadas (causando 10 de sangramento cada), elas acumulam e voce recebe 20 de sangramento por turno.***
***efeito: queima - lhe causa um dano a cada turno. nao acumula e nao pode ser anulado por cura. se mantém até o fim da luta***
***efeito: fúria - lhe torna imune à queima e sangramento por 3 turnos, consome 50% de stamina, e anula os efeitos pendentes assim que obtido(caso esteja sangrando, seu sangramento é anulado)***

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true};yes]; ] 
$setUserVar[turno;1]
$setUserVar[efeito;0]
$setUserVar[stamina;$sum[100;$replaceText[$replaceText[$hasRole[$authorID;771124679419232266];false;0;1];true;20;1];$getUserVar[resistencia]]]
$setUserVar[hpcombate;$getUserVar[hp]]
$setGlobalUserVar[hpinimigo;$message[1]]
$setUserVar[hpinimigo;$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]];facil;400];medio;600];dificil;800]]
$onlyIf[$checkContains[$toLowercase[$message[1]];facil;medio;dificil]==true;voce nao definiu uma dificuldade válida (\`facil, medio, dificil\`)]
$argsCheck[1;voce nao definiu uma dificuldade válida (\`facil, medio, dificil\`)]`
})

bot.awaitedCommand({
  name: "soco",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username tenta diferir um soco, porém está muito cansado para isso. por isso, acaba recebendo um soco!

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sum[$sub[$random[20;100];$getUserVar[defesa]];$getUserVar[efeito]]]]]
$onlyIf[$getUserVar[stamina]<10;]`
})


//tiro-ev
bot.awaitedCommand({
  name: "tiro",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username tenta diferir um tiro, porém está sem bala para isso. por isso, acaba recebendo um tiro!

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[0;200]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];30]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$random[0;200];$getUserVar[efeito]]]
$onlyIf[$getUserVar[balaev]<=0;]`
})

//recarregar
bot.awaitedCommand({
  name: "recarregar",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username tenta recarregar seu ev, mas parece que já está carregada. por isso, acaba recebendo um tiro!

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[0;200]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];30]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$random[0;200];$getUserVar[efeito]]]
$onlyIf[$getUserVar[balaev]>=1;]`
})

//faca
bot.awaitedCommand({
  name: "faca",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username tenta diferir uma facada, porém está muito cansado para isso. por isso, acaba recebendo uma facada!

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[20;170]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];10]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sum[$sub[$random[20;170];$getUserVar[defesa]];$getUserVar[efeito]]]]
$onlyIf[$getUserVar[stamina]<15;]`
})

//corte-dmt
bot.awaitedCommand({
  name: "cortedmt",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username tenta diferir um corte com dmt, porém está muito cansado para isso. por isso, acaba recebendo um corte!

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[efeito;$replaceText[$replaceText[$checkCondition[$random[20;220]>=$getUserVar[defesa]];false;$getUserVar[efeito]];true;$sum[$getUserVar[efeito];50]]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$sum[$sub[$random[20;220];$getUserVar[defesa]];$getUserVar[efeito]]]]
$onlyIf[$getUserVar[stamina]<25;]`
})

//revigorar
bot.awaitedCommand({
  name: "revigorar",
  code: `
  $editMessage[$getUserVar[treinomessage];{author:⚔️TREINAMENTO⚔️} {title:dificuldade - $setGlobalUserVar[hpinimigo]} {color:34eb74} {description:**TURNO: $getUserVar[turno]**

**TURNO:$getUserVar[turno]**

**Ação:** $username tenta comer, para revigorar, mas parece que está cheio. seu inimigo aproveita a chance e se recupera!

❤️ **$username** HP: \`$getUserVar[hpcombate]\` $replaceText[$replaceText[$checkCondition[$getUserVar[efeito]>=1];false;];true;(sangrando)]
  🌀 STAMINA: \`$getUserVar[stamina]\`%

❤️ **Inimigo** HP: \`$getUserVar[hpinimigo]\`

**__OPÇOES__**
**╔──────────¤◎¤──────────╗**
⊱⋅🔫 - \`tiro\`
⊱⋅🏃 - \`fuga\`
⊱⋅🔧 - \`recarregar ev\`
⊱⋅👊🏻 - \`soco\`
⊱⋅👻‍ - \`desviar\`
⊱⋅🔪 - \`faca\`
⊱⋅🗡 - \`corte dmt\`
⊱⋅🌕 - \`descansar\`
⊱⋅🧻 - \`atadura\`
⊱⋅🥣 - \`revigorar\`
**╚──────────¤◎¤──────────╝**

*clique em 🔁 para re-enviar o embed*} {footer:balas:https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=$getUserVar[balaev]&fontsize=26&backgroundRadio=0&100geHeight=100&autocrop=on&_loc=generate&imageoutput=true}]
$setUserVar[turno;$sum[$getUserVar[turno];1]]
$setUserVar[hpcombate;$sub[$getUserVar[hpcombate];$getUserVar[efeito]]]
$setUserVar[hpinimigo;$sum[$getUserVar[hpinimigo];100]]
$onlyIf[$getUserVar[hpcombate]>=$getUserVar[hp];]`
})

///////////////////

bot.variables({
    ackerman: "0",
    atkp: "0" ,
    gas: "8" ,
    resistencia: "0" ,
    cerberusheartfire: "0" ,
    ingot: "0" ,
    mortes: "0" ,
    imagem: "∆¶" ,
    hp: "0" ,
    tp: "0" ,
    idade: "0" ,
    nome: "none" ,
    uso: "0" ,
    vida: "100" ,
    buffnuca: "0" ,
    lamina: "yes" ,
    atkp: "0" ,
    esquivap: "0" ,
    força: "0" ,
    agilidade: "0" ,
    mortes: "0" ,
    velocidade: "0" ,
    ingot: "0" ,
    passe: "false" ,
    xppasse: "0" ,
    nivelp: "none" ,
    furia: "0" ,
    uso: "0" , 
    premio: "5000" ,
    gkey: "0" ,
    mkey: "0" ,
    pkey: "0" ,
    ckey: "0" ,
    peitoral: "**none**" ,
    dropado: "false" ,
    totem: "0" ,
    totemc: "0" ,
    claim: "false" ,
    npcicon: "",
    npcnome: "∆∆¶" ,
    ouro: "0" ,
    prestigio: "50" ,
    votep: "false" ,
    passeclaim: "false" ,
    acessorio: "**none**" ,
    capa: "**none**" ,
    colete: "**none**" ,
    cabeca: "**none**" ,
    rosto: "**none**" ,
    calca: "**none**" ,
    pes: "**none**" ,
    conquistas: "**none**" ,
    ficha: "<:no:738233839893086243>" ,
    muralha: "none(crie sua ficha)" ,
    historia: "none" ,
    ataques: "0" ,
    ordem1: "0" ,
    ordem2: "0" ,
    ordem3: "0" ,
    ordem4: "0" ,
    imgcavalo: "" ,
    invent: "" ,
    balas: "0" ,
    balassniper: "0" ,
    silenciador: "" ,
    balasak: "0" ,
    defesa: "0" ,
    resistencia: "0" ,
    inteligencia: "0" ,
    crit: "0" ,
    ciencia: "0" ,
    tiro: "0" ,
    etapa: "0" ,
    aceito: "no" ,
    hpinimigo: "350" ,
    dificuldade: "facil" ,
    hpcombate: "10" ,
    turno: "1" ,
    balaev: "1" ,
    channelquest: "772911174060212246" ,
    cristal: "0" ,
    cristalignite: "0" ,
    omegacristal: "0" ,
    omegacristalignite: "0" ,
    pet: "nenhum" ,
    Jibrilfrag: "0" ,
    Paimonfrag: "0" ,
    Kannafrag: "0" ,
    Shirofrag: "0" ,
    Levifrag: "0" ,
    Mikasafrag: "0" ,
    Erenfrag: "0" ,
    Hanjifrag: "0" ,
    Ymirfrag: "0" ,
    Historiafrag: "0" ,
    Sashafrag: "0" ,
    Conniefrag: "0" ,
    ferro: "0" ,
    petkey: "0" ,
    stamina: "0" ,
    preso: "false" ,
    dano: "none" ,
    atacante: "none" ,
    hemorragia: "0" ,
    domador: "0" ,
    Morifrag: "0" ,
    evento: "0" ,
    channeldrop: "772911174060212246" ,
    spins: "1" ,
    quest: "off" ,
    chavepm: "0" ,
  cavalomortes: "5" ,
  SpinCavalo: "",
    obelisco1: "5",
  balatrovao: "0",
  efeito: "0",
  treinomessage: ""
  })


  setInterval(async () => {
  await fetch('https://snkbt1.glitch.me').then(console.log('online e operante!'))
}, 20000)

//You can add more variables :)
//Join our Support Server & read Documentation for help


