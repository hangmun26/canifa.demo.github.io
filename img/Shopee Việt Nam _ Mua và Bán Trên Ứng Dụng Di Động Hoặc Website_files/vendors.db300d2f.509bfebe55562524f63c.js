/*! For license information please see vendors.db300d2f.509bfebe55562524f63c.js.LICENSE */
(window.miniJsonp=window.miniJsonp||[]).push([[4],{"2rMq":function(e,n,t){var r;!function(){"use strict";var i=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(n,t,n,e))||(e.exports=r)}()},wJd0:function(e,n,t){e.exports&&(e.exports=function(){var e=0,n=1,t=2,r=3,i=4,o=5,u=6,f=7,a=8,c=9,d=10,s=11,h=12,l=13,v=14,w=15,p=16,x=17,g=0,m=1,y=2,O=3,A=4;function C(e,n){void 0===n&&(n=0);var t=e.charCodeAt(n);if(55296<=t&&t<=56319&&n<e.length-1){var r=t;return 56320<=(i=e.charCodeAt(n+1))&&i<=57343?1024*(r-55296)+(i-56320)+65536:r}if(56320<=t&&t<=57343&&n>=1){var i=t;return 55296<=(r=e.charCodeAt(n-1))&&r<=56319?1024*(r-55296)+(i-56320)+65536:i}return t}function k(s,C,k){var b=[s].concat(C).concat([k]),B=b[b.length-2],E=k,U=b.lastIndexOf(v);if(U>1&&b.slice(1,U).every((function(e){return e==r}))&&-1==[r,l,x].indexOf(s))return y;var G=b.lastIndexOf(i);if(G>0&&b.slice(1,G).every((function(e){return e==i}))&&-1==[h,i].indexOf(B))return b.filter((function(e){return e==i})).length%2==1?O:A;if(B==e&&E==n)return g;if(B==t||B==e||B==n)return E==v&&C.every((function(e){return e==r}))?y:m;if(E==t||E==e||E==n)return m;if(B==u&&(E==u||E==f||E==c||E==d))return g;if(!(B!=c&&B!=f||E!=f&&E!=a))return g;if((B==d||B==a)&&E==a)return g;if(E==r||E==w)return g;if(E==o)return g;if(B==h)return g;var I=-1!=b.indexOf(r)?b.lastIndexOf(r)-1:b.length-2;return-1!=[l,x].indexOf(b[I])&&b.slice(I+1,-1).every((function(e){return e==r}))&&E==v?g:B==w&&-1!=[p,x].indexOf(E)?g:-1!=C.indexOf(i)?y:B==i&&E==i?g:m}function b(g){return 1536<=g&&g<=1541||1757==g||1807==g||2274==g||3406==g||69821==g||70082<=g&&g<=70083||72250==g||72326<=g&&g<=72329||73030==g?h:13==g?e:10==g?n:0<=g&&g<=9||11<=g&&g<=12||14<=g&&g<=31||127<=g&&g<=159||173==g||1564==g||6158==g||8203==g||8206<=g&&g<=8207||8232==g||8233==g||8234<=g&&g<=8238||8288<=g&&g<=8292||8293==g||8294<=g&&g<=8303||55296<=g&&g<=57343||65279==g||65520<=g&&g<=65528||65529<=g&&g<=65531||113824<=g&&g<=113827||119155<=g&&g<=119162||917504==g||917505==g||917506<=g&&g<=917535||917632<=g&&g<=917759||918e3<=g&&g<=921599?t:768<=g&&g<=879||1155<=g&&g<=1159||1160<=g&&g<=1161||1425<=g&&g<=1469||1471==g||1473<=g&&g<=1474||1476<=g&&g<=1477||1479==g||1552<=g&&g<=1562||1611<=g&&g<=1631||1648==g||1750<=g&&g<=1756||1759<=g&&g<=1764||1767<=g&&g<=1768||1770<=g&&g<=1773||1809==g||1840<=g&&g<=1866||1958<=g&&g<=1968||2027<=g&&g<=2035||2070<=g&&g<=2073||2075<=g&&g<=2083||2085<=g&&g<=2087||2089<=g&&g<=2093||2137<=g&&g<=2139||2260<=g&&g<=2273||2275<=g&&g<=2306||2362==g||2364==g||2369<=g&&g<=2376||2381==g||2385<=g&&g<=2391||2402<=g&&g<=2403||2433==g||2492==g||2494==g||2497<=g&&g<=2500||2509==g||2519==g||2530<=g&&g<=2531||2561<=g&&g<=2562||2620==g||2625<=g&&g<=2626||2631<=g&&g<=2632||2635<=g&&g<=2637||2641==g||2672<=g&&g<=2673||2677==g||2689<=g&&g<=2690||2748==g||2753<=g&&g<=2757||2759<=g&&g<=2760||2765==g||2786<=g&&g<=2787||2810<=g&&g<=2815||2817==g||2876==g||2878==g||2879==g||2881<=g&&g<=2884||2893==g||2902==g||2903==g||2914<=g&&g<=2915||2946==g||3006==g||3008==g||3021==g||3031==g||3072==g||3134<=g&&g<=3136||3142<=g&&g<=3144||3146<=g&&g<=3149||3157<=g&&g<=3158||3170<=g&&g<=3171||3201==g||3260==g||3263==g||3266==g||3270==g||3276<=g&&g<=3277||3285<=g&&g<=3286||3298<=g&&g<=3299||3328<=g&&g<=3329||3387<=g&&g<=3388||3390==g||3393<=g&&g<=3396||3405==g||3415==g||3426<=g&&g<=3427||3530==g||3535==g||3538<=g&&g<=3540||3542==g||3551==g||3633==g||3636<=g&&g<=3642||3655<=g&&g<=3662||3761==g||3764<=g&&g<=3769||3771<=g&&g<=3772||3784<=g&&g<=3789||3864<=g&&g<=3865||3893==g||3895==g||3897==g||3953<=g&&g<=3966||3968<=g&&g<=3972||3974<=g&&g<=3975||3981<=g&&g<=3991||3993<=g&&g<=4028||4038==g||4141<=g&&g<=4144||4146<=g&&g<=4151||4153<=g&&g<=4154||4157<=g&&g<=4158||4184<=g&&g<=4185||4190<=g&&g<=4192||4209<=g&&g<=4212||4226==g||4229<=g&&g<=4230||4237==g||4253==g||4957<=g&&g<=4959||5906<=g&&g<=5908||5938<=g&&g<=5940||5970<=g&&g<=5971||6002<=g&&g<=6003||6068<=g&&g<=6069||6071<=g&&g<=6077||6086==g||6089<=g&&g<=6099||6109==g||6155<=g&&g<=6157||6277<=g&&g<=6278||6313==g||6432<=g&&g<=6434||6439<=g&&g<=6440||6450==g||6457<=g&&g<=6459||6679<=g&&g<=6680||6683==g||6742==g||6744<=g&&g<=6750||6752==g||6754==g||6757<=g&&g<=6764||6771<=g&&g<=6780||6783==g||6832<=g&&g<=6845||6846==g||6912<=g&&g<=6915||6964==g||6966<=g&&g<=6970||6972==g||6978==g||7019<=g&&g<=7027||7040<=g&&g<=7041||7074<=g&&g<=7077||7080<=g&&g<=7081||7083<=g&&g<=7085||7142==g||7144<=g&&g<=7145||7149==g||7151<=g&&g<=7153||7212<=g&&g<=7219||7222<=g&&g<=7223||7376<=g&&g<=7378||7380<=g&&g<=7392||7394<=g&&g<=7400||7405==g||7412==g||7416<=g&&g<=7417||7616<=g&&g<=7673||7675<=g&&g<=7679||8204==g||8400<=g&&g<=8412||8413<=g&&g<=8416||8417==g||8418<=g&&g<=8420||8421<=g&&g<=8432||11503<=g&&g<=11505||11647==g||11744<=g&&g<=11775||12330<=g&&g<=12333||12334<=g&&g<=12335||12441<=g&&g<=12442||42607==g||42608<=g&&g<=42610||42612<=g&&g<=42621||42654<=g&&g<=42655||42736<=g&&g<=42737||43010==g||43014==g||43019==g||43045<=g&&g<=43046||43204<=g&&g<=43205||43232<=g&&g<=43249||43302<=g&&g<=43309||43335<=g&&g<=43345||43392<=g&&g<=43394||43443==g||43446<=g&&g<=43449||43452==g||43493==g||43561<=g&&g<=43566||43569<=g&&g<=43570||43573<=g&&g<=43574||43587==g||43596==g||43644==g||43696==g||43698<=g&&g<=43700||43703<=g&&g<=43704||43710<=g&&g<=43711||43713==g||43756<=g&&g<=43757||43766==g||44005==g||44008==g||44013==g||64286==g||65024<=g&&g<=65039||65056<=g&&g<=65071||65438<=g&&g<=65439||66045==g||66272==g||66422<=g&&g<=66426||68097<=g&&g<=68099||68101<=g&&g<=68102||68108<=g&&g<=68111||68152<=g&&g<=68154||68159==g||68325<=g&&g<=68326||69633==g||69688<=g&&g<=69702||69759<=g&&g<=69761||69811<=g&&g<=69814||69817<=g&&g<=69818||69888<=g&&g<=69890||69927<=g&&g<=69931||69933<=g&&g<=69940||70003==g||70016<=g&&g<=70017||70070<=g&&g<=70078||70090<=g&&g<=70092||70191<=g&&g<=70193||70196==g||70198<=g&&g<=70199||70206==g||70367==g||70371<=g&&g<=70378||70400<=g&&g<=70401||70460==g||70462==g||70464==g||70487==g||70502<=g&&g<=70508||70512<=g&&g<=70516||70712<=g&&g<=70719||70722<=g&&g<=70724||70726==g||70832==g||70835<=g&&g<=70840||70842==g||70845==g||70847<=g&&g<=70848||70850<=g&&g<=70851||71087==g||71090<=g&&g<=71093||71100<=g&&g<=71101||71103<=g&&g<=71104||71132<=g&&g<=71133||71219<=g&&g<=71226||71229==g||71231<=g&&g<=71232||71339==g||71341==g||71344<=g&&g<=71349||71351==g||71453<=g&&g<=71455||71458<=g&&g<=71461||71463<=g&&g<=71467||72193<=g&&g<=72198||72201<=g&&g<=72202||72243<=g&&g<=72248||72251<=g&&g<=72254||72263==g||72273<=g&&g<=72278||72281<=g&&g<=72283||72330<=g&&g<=72342||72344<=g&&g<=72345||72752<=g&&g<=72758||72760<=g&&g<=72765||72767==g||72850<=g&&g<=72871||72874<=g&&g<=72880||72882<=g&&g<=72883||72885<=g&&g<=72886||73009<=g&&g<=73014||73018==g||73020<=g&&g<=73021||73023<=g&&g<=73029||73031==g||92912<=g&&g<=92916||92976<=g&&g<=92982||94095<=g&&g<=94098||113821<=g&&g<=113822||119141==g||119143<=g&&g<=119145||119150<=g&&g<=119154||119163<=g&&g<=119170||119173<=g&&g<=119179||119210<=g&&g<=119213||119362<=g&&g<=119364||121344<=g&&g<=121398||121403<=g&&g<=121452||121461==g||121476==g||121499<=g&&g<=121503||121505<=g&&g<=121519||122880<=g&&g<=122886||122888<=g&&g<=122904||122907<=g&&g<=122913||122915<=g&&g<=122916||122918<=g&&g<=122922||125136<=g&&g<=125142||125252<=g&&g<=125258||917536<=g&&g<=917631||917760<=g&&g<=917999?r:127462<=g&&g<=127487?i:2307==g||2363==g||2366<=g&&g<=2368||2377<=g&&g<=2380||2382<=g&&g<=2383||2434<=g&&g<=2435||2495<=g&&g<=2496||2503<=g&&g<=2504||2507<=g&&g<=2508||2563==g||2622<=g&&g<=2624||2691==g||2750<=g&&g<=2752||2761==g||2763<=g&&g<=2764||2818<=g&&g<=2819||2880==g||2887<=g&&g<=2888||2891<=g&&g<=2892||3007==g||3009<=g&&g<=3010||3014<=g&&g<=3016||3018<=g&&g<=3020||3073<=g&&g<=3075||3137<=g&&g<=3140||3202<=g&&g<=3203||3262==g||3264<=g&&g<=3265||3267<=g&&g<=3268||3271<=g&&g<=3272||3274<=g&&g<=3275||3330<=g&&g<=3331||3391<=g&&g<=3392||3398<=g&&g<=3400||3402<=g&&g<=3404||3458<=g&&g<=3459||3536<=g&&g<=3537||3544<=g&&g<=3550||3570<=g&&g<=3571||3635==g||3763==g||3902<=g&&g<=3903||3967==g||4145==g||4155<=g&&g<=4156||4182<=g&&g<=4183||4228==g||6070==g||6078<=g&&g<=6085||6087<=g&&g<=6088||6435<=g&&g<=6438||6441<=g&&g<=6443||6448<=g&&g<=6449||6451<=g&&g<=6456||6681<=g&&g<=6682||6741==g||6743==g||6765<=g&&g<=6770||6916==g||6965==g||6971==g||6973<=g&&g<=6977||6979<=g&&g<=6980||7042==g||7073==g||7078<=g&&g<=7079||7082==g||7143==g||7146<=g&&g<=7148||7150==g||7154<=g&&g<=7155||7204<=g&&g<=7211||7220<=g&&g<=7221||7393==g||7410<=g&&g<=7411||7415==g||43043<=g&&g<=43044||43047==g||43136<=g&&g<=43137||43188<=g&&g<=43203||43346<=g&&g<=43347||43395==g||43444<=g&&g<=43445||43450<=g&&g<=43451||43453<=g&&g<=43456||43567<=g&&g<=43568||43571<=g&&g<=43572||43597==g||43755==g||43758<=g&&g<=43759||43765==g||44003<=g&&g<=44004||44006<=g&&g<=44007||44009<=g&&g<=44010||44012==g||69632==g||69634==g||69762==g||69808<=g&&g<=69810||69815<=g&&g<=69816||69932==g||70018==g||70067<=g&&g<=70069||70079<=g&&g<=70080||70188<=g&&g<=70190||70194<=g&&g<=70195||70197==g||70368<=g&&g<=70370||70402<=g&&g<=70403||70463==g||70465<=g&&g<=70468||70471<=g&&g<=70472||70475<=g&&g<=70477||70498<=g&&g<=70499||70709<=g&&g<=70711||70720<=g&&g<=70721||70725==g||70833<=g&&g<=70834||70841==g||70843<=g&&g<=70844||70846==g||70849==g||71088<=g&&g<=71089||71096<=g&&g<=71099||71102==g||71216<=g&&g<=71218||71227<=g&&g<=71228||71230==g||71340==g||71342<=g&&g<=71343||71350==g||71456<=g&&g<=71457||71462==g||72199<=g&&g<=72200||72249==g||72279<=g&&g<=72280||72343==g||72751==g||72766==g||72873==g||72881==g||72884==g||94033<=g&&g<=94078||119142==g||119149==g?o:4352<=g&&g<=4447||43360<=g&&g<=43388?u:4448<=g&&g<=4519||55216<=g&&g<=55238?f:4520<=g&&g<=4607||55243<=g&&g<=55291?a:44032==g||44060==g||44088==g||44116==g||44144==g||44172==g||44200==g||44228==g||44256==g||44284==g||44312==g||44340==g||44368==g||44396==g||44424==g||44452==g||44480==g||44508==g||44536==g||44564==g||44592==g||44620==g||44648==g||44676==g||44704==g||44732==g||44760==g||44788==g||44816==g||44844==g||44872==g||44900==g||44928==g||44956==g||44984==g||45012==g||45040==g||45068==g||45096==g||45124==g||45152==g||45180==g||45208==g||45236==g||45264==g||45292==g||45320==g||45348==g||45376==g||45404==g||45432==g||45460==g||45488==g||45516==g||45544==g||45572==g||45600==g||45628==g||45656==g||45684==g||45712==g||45740==g||45768==g||45796==g||45824==g||45852==g||45880==g||45908==g||45936==g||45964==g||45992==g||46020==g||46048==g||46076==g||46104==g||46132==g||46160==g||46188==g||46216==g||46244==g||46272==g||46300==g||46328==g||46356==g||46384==g||46412==g||46440==g||46468==g||46496==g||46524==g||46552==g||46580==g||46608==g||46636==g||46664==g||46692==g||46720==g||46748==g||46776==g||46804==g||46832==g||46860==g||46888==g||46916==g||46944==g||46972==g||47e3==g||47028==g||47056==g||47084==g||47112==g||47140==g||47168==g||47196==g||47224==g||47252==g||47280==g||47308==g||47336==g||47364==g||47392==g||47420==g||47448==g||47476==g||47504==g||47532==g||47560==g||47588==g||47616==g||47644==g||47672==g||47700==g||47728==g||47756==g||47784==g||47812==g||47840==g||47868==g||47896==g||47924==g||47952==g||47980==g||48008==g||48036==g||48064==g||48092==g||48120==g||48148==g||48176==g||48204==g||48232==g||48260==g||48288==g||48316==g||48344==g||48372==g||48400==g||48428==g||48456==g||48484==g||48512==g||48540==g||48568==g||48596==g||48624==g||48652==g||48680==g||48708==g||48736==g||48764==g||48792==g||48820==g||48848==g||48876==g||48904==g||48932==g||48960==g||48988==g||49016==g||49044==g||49072==g||49100==g||49128==g||49156==g||49184==g||49212==g||49240==g||49268==g||49296==g||49324==g||49352==g||49380==g||49408==g||49436==g||49464==g||49492==g||49520==g||49548==g||49576==g||49604==g||49632==g||49660==g||49688==g||49716==g||49744==g||49772==g||49800==g||49828==g||49856==g||49884==g||49912==g||49940==g||49968==g||49996==g||50024==g||50052==g||50080==g||50108==g||50136==g||50164==g||50192==g||50220==g||50248==g||50276==g||50304==g||50332==g||50360==g||50388==g||50416==g||50444==g||50472==g||50500==g||50528==g||50556==g||50584==g||50612==g||50640==g||50668==g||50696==g||50724==g||50752==g||50780==g||50808==g||50836==g||50864==g||50892==g||50920==g||50948==g||50976==g||51004==g||51032==g||51060==g||51088==g||51116==g||51144==g||51172==g||51200==g||51228==g||51256==g||51284==g||51312==g||51340==g||51368==g||51396==g||51424==g||51452==g||51480==g||51508==g||51536==g||51564==g||51592==g||51620==g||51648==g||51676==g||51704==g||51732==g||51760==g||51788==g||51816==g||51844==g||51872==g||51900==g||51928==g||51956==g||51984==g||52012==g||52040==g||52068==g||52096==g||52124==g||52152==g||52180==g||52208==g||52236==g||52264==g||52292==g||52320==g||52348==g||52376==g||52404==g||52432==g||52460==g||52488==g||52516==g||52544==g||52572==g||52600==g||52628==g||52656==g||52684==g||52712==g||52740==g||52768==g||52796==g||52824==g||52852==g||52880==g||52908==g||52936==g||52964==g||52992==g||53020==g||53048==g||53076==g||53104==g||53132==g||53160==g||53188==g||53216==g||53244==g||53272==g||53300==g||53328==g||53356==g||53384==g||53412==g||53440==g||53468==g||53496==g||53524==g||53552==g||53580==g||53608==g||53636==g||53664==g||53692==g||53720==g||53748==g||53776==g||53804==g||53832==g||53860==g||53888==g||53916==g||53944==g||53972==g||54e3==g||54028==g||54056==g||54084==g||54112==g||54140==g||54168==g||54196==g||54224==g||54252==g||54280==g||54308==g||54336==g||54364==g||54392==g||54420==g||54448==g||54476==g||54504==g||54532==g||54560==g||54588==g||54616==g||54644==g||54672==g||54700==g||54728==g||54756==g||54784==g||54812==g||54840==g||54868==g||54896==g||54924==g||54952==g||54980==g||55008==g||55036==g||55064==g||55092==g||55120==g||55148==g||55176==g?c:44033<=g&&g<=44059||44061<=g&&g<=44087||44089<=g&&g<=44115||44117<=g&&g<=44143||44145<=g&&g<=44171||44173<=g&&g<=44199||44201<=g&&g<=44227||44229<=g&&g<=44255||44257<=g&&g<=44283||44285<=g&&g<=44311||44313<=g&&g<=44339||44341<=g&&g<=44367||44369<=g&&g<=44395||44397<=g&&g<=44423||44425<=g&&g<=44451||44453<=g&&g<=44479||44481<=g&&g<=44507||44509<=g&&g<=44535||44537<=g&&g<=44563||44565<=g&&g<=44591||44593<=g&&g<=44619||44621<=g&&g<=44647||44649<=g&&g<=44675||44677<=g&&g<=44703||44705<=g&&g<=44731||44733<=g&&g<=44759||44761<=g&&g<=44787||44789<=g&&g<=44815||44817<=g&&g<=44843||44845<=g&&g<=44871||44873<=g&&g<=44899||44901<=g&&g<=44927||44929<=g&&g<=44955||44957<=g&&g<=44983||44985<=g&&g<=45011||45013<=g&&g<=45039||45041<=g&&g<=45067||45069<=g&&g<=45095||45097<=g&&g<=45123||45125<=g&&g<=45151||45153<=g&&g<=45179||45181<=g&&g<=45207||45209<=g&&g<=45235||45237<=g&&g<=45263||45265<=g&&g<=45291||45293<=g&&g<=45319||45321<=g&&g<=45347||45349<=g&&g<=45375||45377<=g&&g<=45403||45405<=g&&g<=45431||45433<=g&&g<=45459||45461<=g&&g<=45487||45489<=g&&g<=45515||45517<=g&&g<=45543||45545<=g&&g<=45571||45573<=g&&g<=45599||45601<=g&&g<=45627||45629<=g&&g<=45655||45657<=g&&g<=45683||45685<=g&&g<=45711||45713<=g&&g<=45739||45741<=g&&g<=45767||45769<=g&&g<=45795||45797<=g&&g<=45823||45825<=g&&g<=45851||45853<=g&&g<=45879||45881<=g&&g<=45907||45909<=g&&g<=45935||45937<=g&&g<=45963||45965<=g&&g<=45991||45993<=g&&g<=46019||46021<=g&&g<=46047||46049<=g&&g<=46075||46077<=g&&g<=46103||46105<=g&&g<=46131||46133<=g&&g<=46159||46161<=g&&g<=46187||46189<=g&&g<=46215||46217<=g&&g<=46243||46245<=g&&g<=46271||46273<=g&&g<=46299||46301<=g&&g<=46327||46329<=g&&g<=46355||46357<=g&&g<=46383||46385<=g&&g<=46411||46413<=g&&g<=46439||46441<=g&&g<=46467||46469<=g&&g<=46495||46497<=g&&g<=46523||46525<=g&&g<=46551||46553<=g&&g<=46579||46581<=g&&g<=46607||46609<=g&&g<=46635||46637<=g&&g<=46663||46665<=g&&g<=46691||46693<=g&&g<=46719||46721<=g&&g<=46747||46749<=g&&g<=46775||46777<=g&&g<=46803||46805<=g&&g<=46831||46833<=g&&g<=46859||46861<=g&&g<=46887||46889<=g&&g<=46915||46917<=g&&g<=46943||46945<=g&&g<=46971||46973<=g&&g<=46999||47001<=g&&g<=47027||47029<=g&&g<=47055||47057<=g&&g<=47083||47085<=g&&g<=47111||47113<=g&&g<=47139||47141<=g&&g<=47167||47169<=g&&g<=47195||47197<=g&&g<=47223||47225<=g&&g<=47251||47253<=g&&g<=47279||47281<=g&&g<=47307||47309<=g&&g<=47335||47337<=g&&g<=47363||47365<=g&&g<=47391||47393<=g&&g<=47419||47421<=g&&g<=47447||47449<=g&&g<=47475||47477<=g&&g<=47503||47505<=g&&g<=47531||47533<=g&&g<=47559||47561<=g&&g<=47587||47589<=g&&g<=47615||47617<=g&&g<=47643||47645<=g&&g<=47671||47673<=g&&g<=47699||47701<=g&&g<=47727||47729<=g&&g<=47755||47757<=g&&g<=47783||47785<=g&&g<=47811||47813<=g&&g<=47839||47841<=g&&g<=47867||47869<=g&&g<=47895||47897<=g&&g<=47923||47925<=g&&g<=47951||47953<=g&&g<=47979||47981<=g&&g<=48007||48009<=g&&g<=48035||48037<=g&&g<=48063||48065<=g&&g<=48091||48093<=g&&g<=48119||48121<=g&&g<=48147||48149<=g&&g<=48175||48177<=g&&g<=48203||48205<=g&&g<=48231||48233<=g&&g<=48259||48261<=g&&g<=48287||48289<=g&&g<=48315||48317<=g&&g<=48343||48345<=g&&g<=48371||48373<=g&&g<=48399||48401<=g&&g<=48427||48429<=g&&g<=48455||48457<=g&&g<=48483||48485<=g&&g<=48511||48513<=g&&g<=48539||48541<=g&&g<=48567||48569<=g&&g<=48595||48597<=g&&g<=48623||48625<=g&&g<=48651||48653<=g&&g<=48679||48681<=g&&g<=48707||48709<=g&&g<=48735||48737<=g&&g<=48763||48765<=g&&g<=48791||48793<=g&&g<=48819||48821<=g&&g<=48847||48849<=g&&g<=48875||48877<=g&&g<=48903||48905<=g&&g<=48931||48933<=g&&g<=48959||48961<=g&&g<=48987||48989<=g&&g<=49015||49017<=g&&g<=49043||49045<=g&&g<=49071||49073<=g&&g<=49099||49101<=g&&g<=49127||49129<=g&&g<=49155||49157<=g&&g<=49183||49185<=g&&g<=49211||49213<=g&&g<=49239||49241<=g&&g<=49267||49269<=g&&g<=49295||49297<=g&&g<=49323||49325<=g&&g<=49351||49353<=g&&g<=49379||49381<=g&&g<=49407||49409<=g&&g<=49435||49437<=g&&g<=49463||49465<=g&&g<=49491||49493<=g&&g<=49519||49521<=g&&g<=49547||49549<=g&&g<=49575||49577<=g&&g<=49603||49605<=g&&g<=49631||49633<=g&&g<=49659||49661<=g&&g<=49687||49689<=g&&g<=49715||49717<=g&&g<=49743||49745<=g&&g<=49771||49773<=g&&g<=49799||49801<=g&&g<=49827||49829<=g&&g<=49855||49857<=g&&g<=49883||49885<=g&&g<=49911||49913<=g&&g<=49939||49941<=g&&g<=49967||49969<=g&&g<=49995||49997<=g&&g<=50023||50025<=g&&g<=50051||50053<=g&&g<=50079||50081<=g&&g<=50107||50109<=g&&g<=50135||50137<=g&&g<=50163||50165<=g&&g<=50191||50193<=g&&g<=50219||50221<=g&&g<=50247||50249<=g&&g<=50275||50277<=g&&g<=50303||50305<=g&&g<=50331||50333<=g&&g<=50359||50361<=g&&g<=50387||50389<=g&&g<=50415||50417<=g&&g<=50443||50445<=g&&g<=50471||50473<=g&&g<=50499||50501<=g&&g<=50527||50529<=g&&g<=50555||50557<=g&&g<=50583||50585<=g&&g<=50611||50613<=g&&g<=50639||50641<=g&&g<=50667||50669<=g&&g<=50695||50697<=g&&g<=50723||50725<=g&&g<=50751||50753<=g&&g<=50779||50781<=g&&g<=50807||50809<=g&&g<=50835||50837<=g&&g<=50863||50865<=g&&g<=50891||50893<=g&&g<=50919||50921<=g&&g<=50947||50949<=g&&g<=50975||50977<=g&&g<=51003||51005<=g&&g<=51031||51033<=g&&g<=51059||51061<=g&&g<=51087||51089<=g&&g<=51115||51117<=g&&g<=51143||51145<=g&&g<=51171||51173<=g&&g<=51199||51201<=g&&g<=51227||51229<=g&&g<=51255||51257<=g&&g<=51283||51285<=g&&g<=51311||51313<=g&&g<=51339||51341<=g&&g<=51367||51369<=g&&g<=51395||51397<=g&&g<=51423||51425<=g&&g<=51451||51453<=g&&g<=51479||51481<=g&&g<=51507||51509<=g&&g<=51535||51537<=g&&g<=51563||51565<=g&&g<=51591||51593<=g&&g<=51619||51621<=g&&g<=51647||51649<=g&&g<=51675||51677<=g&&g<=51703||51705<=g&&g<=51731||51733<=g&&g<=51759||51761<=g&&g<=51787||51789<=g&&g<=51815||51817<=g&&g<=51843||51845<=g&&g<=51871||51873<=g&&g<=51899||51901<=g&&g<=51927||51929<=g&&g<=51955||51957<=g&&g<=51983||51985<=g&&g<=52011||52013<=g&&g<=52039||52041<=g&&g<=52067||52069<=g&&g<=52095||52097<=g&&g<=52123||52125<=g&&g<=52151||52153<=g&&g<=52179||52181<=g&&g<=52207||52209<=g&&g<=52235||52237<=g&&g<=52263||52265<=g&&g<=52291||52293<=g&&g<=52319||52321<=g&&g<=52347||52349<=g&&g<=52375||52377<=g&&g<=52403||52405<=g&&g<=52431||52433<=g&&g<=52459||52461<=g&&g<=52487||52489<=g&&g<=52515||52517<=g&&g<=52543||52545<=g&&g<=52571||52573<=g&&g<=52599||52601<=g&&g<=52627||52629<=g&&g<=52655||52657<=g&&g<=52683||52685<=g&&g<=52711||52713<=g&&g<=52739||52741<=g&&g<=52767||52769<=g&&g<=52795||52797<=g&&g<=52823||52825<=g&&g<=52851||52853<=g&&g<=52879||52881<=g&&g<=52907||52909<=g&&g<=52935||52937<=g&&g<=52963||52965<=g&&g<=52991||52993<=g&&g<=53019||53021<=g&&g<=53047||53049<=g&&g<=53075||53077<=g&&g<=53103||53105<=g&&g<=53131||53133<=g&&g<=53159||53161<=g&&g<=53187||53189<=g&&g<=53215||53217<=g&&g<=53243||53245<=g&&g<=53271||53273<=g&&g<=53299||53301<=g&&g<=53327||53329<=g&&g<=53355||53357<=g&&g<=53383||53385<=g&&g<=53411||53413<=g&&g<=53439||53441<=g&&g<=53467||53469<=g&&g<=53495||53497<=g&&g<=53523||53525<=g&&g<=53551||53553<=g&&g<=53579||53581<=g&&g<=53607||53609<=g&&g<=53635||53637<=g&&g<=53663||53665<=g&&g<=53691||53693<=g&&g<=53719||53721<=g&&g<=53747||53749<=g&&g<=53775||53777<=g&&g<=53803||53805<=g&&g<=53831||53833<=g&&g<=53859||53861<=g&&g<=53887||53889<=g&&g<=53915||53917<=g&&g<=53943||53945<=g&&g<=53971||53973<=g&&g<=53999||54001<=g&&g<=54027||54029<=g&&g<=54055||54057<=g&&g<=54083||54085<=g&&g<=54111||54113<=g&&g<=54139||54141<=g&&g<=54167||54169<=g&&g<=54195||54197<=g&&g<=54223||54225<=g&&g<=54251||54253<=g&&g<=54279||54281<=g&&g<=54307||54309<=g&&g<=54335||54337<=g&&g<=54363||54365<=g&&g<=54391||54393<=g&&g<=54419||54421<=g&&g<=54447||54449<=g&&g<=54475||54477<=g&&g<=54503||54505<=g&&g<=54531||54533<=g&&g<=54559||54561<=g&&g<=54587||54589<=g&&g<=54615||54617<=g&&g<=54643||54645<=g&&g<=54671||54673<=g&&g<=54699||54701<=g&&g<=54727||54729<=g&&g<=54755||54757<=g&&g<=54783||54785<=g&&g<=54811||54813<=g&&g<=54839||54841<=g&&g<=54867||54869<=g&&g<=54895||54897<=g&&g<=54923||54925<=g&&g<=54951||54953<=g&&g<=54979||54981<=g&&g<=55007||55009<=g&&g<=55035||55037<=g&&g<=55063||55065<=g&&g<=55091||55093<=g&&g<=55119||55121<=g&&g<=55147||55149<=g&&g<=55175||55177<=g&&g<=55203?d:9757==g||9977==g||9994<=g&&g<=9997||127877==g||127938<=g&&g<=127940||127943==g||127946<=g&&g<=127948||128066<=g&&g<=128067||128070<=g&&g<=128080||128110==g||128112<=g&&g<=128120||128124==g||128129<=g&&g<=128131||128133<=g&&g<=128135||128170==g||128372<=g&&g<=128373||128378==g||128400==g||128405<=g&&g<=128406||128581<=g&&g<=128583||128587<=g&&g<=128591||128675==g||128692<=g&&g<=128694||128704==g||128716==g||129304<=g&&g<=129308||129310<=g&&g<=129311||129318==g||129328<=g&&g<=129337||129341<=g&&g<=129342||129489<=g&&g<=129501?l:127995<=g&&g<=127999?v:8205==g?w:9792==g||9794==g||9877<=g&&g<=9878||9992==g||10084==g||127752==g||127806==g||127859==g||127891==g||127908==g||127912==g||127979==g||127981==g||128139==g||128187<=g&&g<=128188||128295==g||128300==g||128488==g||128640==g||128658==g?p:128102<=g&&g<=128105?x:s}return this.nextBreak=function(e,n){if(void 0===n&&(n=0),n<0)return 0;if(n>=e.length-1)return e.length;for(var t,r,i=b(C(e,n)),o=[],u=n+1;u<e.length;u++)if(r=u-1,!(55296<=(t=e).charCodeAt(r)&&t.charCodeAt(r)<=56319&&56320<=t.charCodeAt(r+1)&&t.charCodeAt(r+1)<=57343)){var f=b(C(e,u));if(k(i,o,f))return u;o.push(f)}return e.length},this.splitGraphemes=function(e){for(var n,t=[],r=0;(n=this.nextBreak(e,r))<e.length;)t.push(e.slice(r,n)),r=n;return r<e.length&&t.push(e.slice(r)),t},this.iterateGraphemes=function(e){var n=0,t={next:function(){var t,r;return(r=this.nextBreak(e,n))<e.length?(t=e.slice(n,r),n=r,{value:t,done:!1}):n<e.length?(t=e.slice(n),n=e.length,{value:t,done:!1}):{value:void 0,done:!0}}.bind(this)};return"undefined"!=typeof Symbol&&Symbol.iterator&&(t[Symbol.iterator]=function(){return t}),t},this.countGraphemes=function(e){for(var n,t=0,r=0;(n=this.nextBreak(e,r))<e.length;)r=n,t++;return r<e.length&&t++,t},this})}}]);