/* ´úÂëÕûÀí£ºÀÁÈËÖ®¼Ò www.lanrenzhijia.com */
$(document).ready(function(){


  var playlist = [{
	 title:"My love",
	 artist:"westlife",
	 //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/my%20love.mp3",
	 mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/dfe60648f73621bad2e5909355a7c06a0eacc8c562aa8bb9b45501c60fee104320ecbfd26ea30614c2fec469cb7dcc99a5465e46b4cd8e60ee9a4e20b4c56c17/?fname=Westlife%20-%20My%20Love(320).mp3&k=63663331b86c149bc24dc2941739574b07510453005d54521e5103020414510155561e50060f5349025302060109525306505100312265335615475d585f00441e467e4811750a12564e000301104b094355330c&fr=00&&txf_fid=885a22648eba31309b38ed20e64fb4daa628d0a8&xffz=9349751",
	 poster: "https://33.media.tumblr.com/0b35eb42176eedbf4a96e52efa760875/tumblr_mxp7a0v3fr1rqx86wo1_500.png"

    },{
	  title:"My will",
      artist:"犬夜叉",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/my%20will.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/a2da12ae21868b0bc39fc8444dafeb3a3f23cbc7b403c41de735a0454c3fb6235ac97ccee83fb13087b81418a794df381e703016ced68e339b5f3ffb11c83f31/?fname=%E5%92%8C%E7%94%B0%E8%96%AB%20-%20My%20Will%20-%20%E7%BA%AF%E9%9F%B3%E4%B9%90%E7%89%88(320).mp3&k=6e616632623915cac64a97971f30061a530304040b050c011a5552535d1d005107564b535f52511800530403015357055604000b3914348ffaad89f9591019157a184665505c58151a41d28debc4f4e387874e010b001d1b5a11553204&fr=00&&txf_fid=da3bb90ab207208630f76a671ca75bdf5c26d8a5&xffz=14612133",
      //oga:"https://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://33.media.tumblr.com/0b35eb42176eedbf4a96e52efa760875/tumblr_mxp7a0v3fr1rqx86wo1_500.png"
    },{
      title:"巴赫旧约",
      artist:"汪苏泷",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%B7%B4%E8%B5%AB%E6%97%A7%E7%BA%A6.mp3",
      mp3:"http://hz-ctfs.ftn.qq.com/ftn_handler/7870e8d2da238d20f5e018ee4e6b2d24e1103b674dab1f1eb5e2b0cc54b626797052b0b27a9f92a20fc3cfd688054531e133263a49ad155021caae4add1ca673/?fname=%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E5%B7%B4%E8%B5%AB%E6%97%A7%E7%BA%A6(320).mp3&k=7c663465990c439ec24dc5c01238044e5005575100090f071e045256501502515751195c500f044c01545600000c005957070253342236acc7ade186c5181b4183ab8eb08af1e2dd1b5506551d165b11006609&fr=00&&txf_fid=abcf852325e2c6323583e16d2ba407e6be5290fb&xffz=9096019",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"with you",
      artist:"犬夜叉",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/with%20you.mp3",
      mp3:"http://hz-ctfs.ftn.qq.com/ftn_handler/2871b82a2f7f8d8054ae82323ab60d5299f1bee96ff97d6eb484c7436b834febe362873fdf88b607a72d84b07b3a840eb7221790a8d3f94b6c98045add58cacd/?fname=AAA%20-%20With%20you(320).mp3&k=2e64393666a757ca934fc8931164051a01510f550f05510c4f060104554903040454140f565c0118045609045102560157020b00377337742325191b17335e410a444059424c0407524d175b47573708&fr=00&&txf_fid=ff3cb35d31e5c2b48f0f68b96493708892343424&xffz=10435759",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"三国杀",
      artist:"汪苏泷",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E4%B8%89%E5%9B%BD%E6%9D%80.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/26de383af69b622e1b9d73c56350169f3813a1f1e9aebb28210176d1bc6bd24314faecb31cf32595676323da28014cbb86e74f5dee38badff89bea3ad33b8c49/?fname=%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E4%B8%89%E5%9B%BD%E6%9D%80(320).mp3&k=2e35353726ce45ce921ec4921332031e54060252515102534e075306021f05005350180e5304071c010d04050651050801560500352a31fc97fee0d4c4121c11abc88ccdfc83190251051c19584202315e&fr=00&&txf_fid=9b38cb35fef55cc2b2429a7129525d0d11a6cd71&xffz=9110509",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"every heart",
      artist:"犬夜叉",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/every%20heart.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/9dee8714df3c7e5f94caeae3684e3b2df84b8f12139bdf75cbe7cd8101511af6fab4ad3f255084e7dd8bcc660db33a0dabbe80c8f02a36c0ce60b072a875ed03/?fname=%E5%92%8C%E7%94%B0%E8%96%AB%20-%20Every%20Heart%20-%E3%83%9F%E3%83%B3%E3%83%8A%E3%83%8E%E3%82%AD%E3%83%A2%E3%83%81-%20-%20%E7%BA%AF%E9%9F%B3%E4%B9%90%E7%89%88(320).mp3&k=583366624bab30c8c71897c712355418020b02000d5055011b5655070518520006004b5a0300021a535700070d0605550304575b340c668dfbff89a954154b17734503104d152e52574112421990b992c596acc7fa90cb92d496a74f1418468389e192a2e285801f0501564b1a581604360e&fr=00&&txf_fid=2c2380ac8fbc8658dbe1e3d1d27dc5c3dab42eca&xffz=11100545",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"不分手的恋爱",
      artist:"汪苏泷",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E4%B8%8D%E5%88%86%E6%89%8B%E7%9A%84%E6%81%8B%E7%88%B1.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/dd4f10180b0382c638c8a780686e77045db202773685bd51a47da02e3cca929989c99439b0b6cc5c814488a88ec7432c1037799516ee8a8a12ab4d76c1bfb4d4/?fname=%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E4%B8%8D%E5%88%86%E6%89%8B%E7%9A%84%E6%81%8B%E7%88%B1(320).mp3&k=35383766dd5ab6c69713c6c31f3606165101025f5b0355004b5d03050b1b0009505a1a5f0b525614030d04550006505d560a5103392834f492f3e285c8161919d48380b0f3e081fda78d87c8110506094f165a160a3609&fr=00&&txf_fid=f17467e1a7e611b3d23544827b9ff2148787aa8d&xffz=8229660",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"桃花扇",
      artist:"汪苏泷",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E6%A1%83%E8%8A%B1%E6%89%87.mp3",
      mp3:"http://sz-btfs.ftn.qq.com/ftn_handler/defb28b3ea2dae43abd02c92a842b166ae1da29446de44f2f4041eeaeec1927e20203b761c04fe2c2cdb0567025046d34d94851ac565a700cc36aa89ff869045/?fname=%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E6%A1%83%E8%8A%B1%E6%89%87(320).mp3&k=2c646266f90e5c99904f93c31f370a49560151545c535a544c0257570b1a0c5454024f040e510d4b000604530d5201575352555f392f38ab95afb785c8171546adb6d9cef0ff105553544b4854470b665c&fr=00&&txf_fid=69257472e3650a922b92751f239861eda200f97d&xffz=10208832",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"风度",
      artist:"汪苏泷",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E9%A3%8E%E5%BA%A6.mp3",
      mp3:"http://cd-ctfs.ftn.qq.com/ftn_handler/bec338483030c1049374b02a6211d5963b4f1c4866cf0226e7e8cac15099c131d0ee1d96ceb9dcca566159038651a747d98bf595c6f747614d51f4c2d4f9bca1/?fname=%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E9%A3%8E%E5%BA%A6(320).mp3&k=7e35343252d9139ec41ec5971761574e05005150065256591857570a504c51590d06190b0253044c5305565153025d5754570254317765acc1fee1d1c041484182d282fa195257511c1b5942026158&fr=00&&txf_fid=a919bd7ad8b88fc042ef0aac701c93b9e2edab03&xffz=8996765",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"攻心",
      m4a: "https://raw.githubusercontent.com/3xp10it/mv/master/gongxin.mp4",
      oga: "https://raw.githubusercontent.com/3xp10it/mv/master/gongxin.mp4",
      poster: "https://31.media.tumblr.com/810b1125a8b9e9f192d009ef58dceb07/tumblr_nbe8wsmKuz1rknpqyo1_500.jpg"
    },{
      title:"美丽的神话",
      artist:"成龙金喜善",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E6%88%90%E9%BE%99%E3%80%81%E9%87%91%E5%96%9C%E5%96%84%20-%20%E7%BE%8E%E4%B8%BD%E7%9A%84%E7%A5%9E%E8%AF%9D.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/069e4ccdf6c35acc2f98aa8713467e33ea03c33a8e7cf54684a37c19f388027b6ea2de002b33265e0946d5534dcece2e7578ea92d68f9cc3d4732a3af0ee44f2/?fname=%E6%88%90%E9%BE%99%E3%80%81%E9%87%91%E5%96%9C%E5%96%84%20-%20%E7%BE%8E%E4%B8%BD%E7%9A%84%E7%A5%9E%E8%AF%9D(320).mp3&k=63376465f18f7b9ac51c95c01662064a515456065456505419045755534f00500104495c0550564805060551035a030305040501304034d6fdf69ec492dfc4aa86fea2451d42f7a5f4c1d1a1f9938fd51c045655194c5915073759&fr=00&&txf_fid=bc269a8e5f8f6407a2b957806a15a45696c4fe95&xffz=11539007",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"风云永远永远",
      artist:"",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E9%A3%8E%E4%BA%91%20-%20%E9%9B%84%E9%9C%B8%E5%A4%A9%E4%B8%8B%20-%20%E6%B0%B8%E8%BF%9C%E6%B0%B8%E8%BF%9C.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/d4b81b247e361e8d347db81aaa33c5e92058763cca9f6ff27caaf41ee2424249a5092e226029ca61894f4f827718ac03060fd9f47a74882a803a2a0057717470/?fname=%E6%9D%8E%E7%BF%8A%E5%90%9B%20-%20%E6%B0%B8%E8%BF%9C%E6%B0%B8%E8%BF%9C(320).mp3&k=7b37633262b650cac51c92971262501a500e01020200530d190e5a05524f560402064e500c060618050307005551535652000702347862f5dac6d78cc9424f15e7f7b784e7a2b6831c0451021d4c0f4507375e&fr=00&&txf_fid=7b0ec1f4d0491458d82ddd08c8dff3ebec92112d&xffz=13446058",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"古天乐 - 神雕侠侣",
      artist:"古天乐",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%8F%A4%E5%A4%A9%E4%B9%90%20-%20%E7%A5%9E%E9%9B%95%E4%BE%A0%E4%BE%A3%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/e6b9d1e9935e205d80c12dd164c016791c1259c7414b82438f90d88efc7043b804eaf36b0596bffc7a7729bd55540437756aae62b2632f40ea330cbd2aee5640/?fname=%E8%83%A1%E5%85%B5%E3%80%81%E5%B8%8C%E8%8E%89%E5%A8%9C%E4%BE%9D%20-%20%E5%BD%92%E5%8E%BB%E6%9D%A5(320).mp3&k=3430326588febc9e901bc3c04461014e57075354065605534c560a50064c075407031f0753560a4c030500005655025353070155624133db9b81cac4c0ae90a193f4fab7a2411e41d8d9fac0a2d51b5253001b4b0f1100615c&fr=00&&txf_fid=ddc7c55faecda67255e1ee161bcea71a2aff19d6&xffz=7364630",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"月光 - 日本",
      artist:"",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E9%AC%BC%E6%9D%9F%E5%8D%83%E5%AF%BB%20-%20%E6%9C%88%E5%85%89%20-%20%E6%97%A5%E6%9C%AC%E7%BB%8F%E5%85%B8%E7%88%B1%E6%83%85%E7%94%B5%E8%A7%86%E5%89%A7%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3",
      mp3:"http://sh-ctfs.ftn.qq.com/ftn_handler/a8867978c58b5a8021d8faa67b5280f1bf8e7b9a7430b4c639b0c7fe9afe027c42c9d9265c797787c0c7495b682b80222dff06ca77dbcdbb917bd90f9a137f3c/?fname=%E9%AC%BC%E6%9D%9F%E3%81%A1%E3%81%B2%E3%82%8D%20-%20%E6%9C%88%E5%85%89(320).mp3&k=76623932bff924cec849c8974539571e5a045d51000d0154140158005b1451040f5a1450565d571c08555854010804015a54090263236588d4a8c196a29db795d4421412b7fbdcd311510b024a1708410a6204&fr=00&&txf_fid=8f17ba4606cf914e0de4352a49df0c39d4a54fa0&xffz=12468004",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"假如爱有天意",
      artist:"",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%81%87%E5%A6%82%E7%88%B1%E6%9C%89%E5%A4%A9%E6%84%8F%20More%20Than%20Love.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/f186f4c3973e2f9f51ca5434263ad3e0dc20e0dd498d9401f7682ea426fe75a56b05d887831d2d7066462572edaa53d3db43e28ddfd318cc79871aba5ae011c1/?fname=%E5%81%87%E5%A6%82%E7%88%B1%E6%9C%89%E5%A4%A9%E6%84%8F%20%E5%B0%8F%E6%8F%90%E7%90%B4%20%E7%85%BD%E6%83%85%E8%83%8C%E6%99%AF(320).mp3&k=6c39393332df539cc712c8961437024c035a0e56065103571b5a0a01041a0451030014515153034e065b5a50535303530f5d5f05321230dfeff1de839ce4e0afdaebdb13e296fc82f1e019fa8df0d9d28587891b0105004a18544900320a&fr=00&&txf_fid=c6358c5bb52d99e3d44a0fa067da62fafd8fea5b&xffz=10229760",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"星月神话",
      artist:"金莎",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E9%87%91%E8%8E%8E%20-%20%E6%98%9F%E6%9C%88%E7%A5%9E%E8%AF%9D.mp3",
      mp3:"http://sz-btfs.ftn.qq.com/ftn_handler/dd3a799d33b808dd01ac35f08c39ddb1802d2ec62518ca3f541996a4d189d8672eed15ff5eca1b8ec08cf9f4123717d4b9cc6926c797b3030fa047ef7478392c/?fname=%E9%87%91%E8%8E%8E%20-%20%E6%98%9F%E6%9C%88%E7%A5%9E%E8%AF%9D(320).mp3&k=283463369c8f529d941f92931235064d06555b0556010655485000040518005b07024e570c02034f555707020300565103555504342d34df95fdcc161915e4a5b1f6aac78f851c5157044a185945076258&fr=00&&txf_fid=374ae66abe40b62f9a3995c2ca5bfb13a73479d8&xffz=10044760",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"爱死了昨天",
      artist:"李慧珍",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E6%9D%8E%E6%85%A7%E7%8F%8D%20-%20%E7%88%B1%E6%AD%BB%E4%BA%86%E6%98%A8%E5%A4%A9.mp3",
      mp3:"http://cd-btfs.ftn.qq.com/ftn_handler/2d96e023be22934bd55438ae5de95b2fcc5598fe28f6f6a1bac5b00e11cd272444c2fa2208daa2310fc30dada3cc140f1a59cdca2c11c4b3b9a6233ee828923c/?fname=%E6%9D%8E%E6%85%A7%E7%8F%8D%20-%20%E7%88%B1%E6%AD%BB%E4%BA%86%E6%98%A8%E5%A4%A9(320).mp3&k=306638330277389a904dc9961462574a53500e52015503074c5e0c02564f51010204150a56525d48545359510a57540657550b06327e65a58fdde3e6d6424845d1c8f3f3f3a9b297ad8a100000524c4b0c160b330f&fr=00&&txf_fid=05e25bc7c60e7d10df8aa4235d8ec6c90251752d&xffz=10676944",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"我欲成仙",
      artist:"刘欢",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%88%98%E6%AC%A2%20-%20%E6%88%91%E6%AC%B2%E6%88%90%E4%BB%99.mp3",
      mp3:"http://hz-ctfs.ftn.qq.com/ftn_handler/7c8c6553a4e113ba040aaa066f1f1512d2fd071a0f1b9d466f9720966338e3cd01b786e3345a63a1b819fa724b86165670b60b72f96ef2c20b9f8e1c02d20226/?fname=%E5%88%98%E6%AC%A2%20-%20%E6%88%91%E6%AC%B2%E6%88%90%E4%BB%99(320).mp3&k=786661633ea2b09cc44d90c64038014c54520552005d50061854035a54150755075f4c0152000a4e56550354035e50060c045056662033a2c0ddd7434b18fdb1e69dd2aaa9f11b500756484d0b48006308&fr=00&&txf_fid=034367bd7910491b73ef0848f3dd523d6e23cf79&xffz=8152488",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"相思",
      artist:"毛阿敏",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E6%AF%9B%E9%98%BF%E6%95%8F%20-%20%E7%9B%B8%E6%80%9D.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/4468bd47d2d85b48277450f00c6d4d6896ce459ec8b15539b055a1bbb3c6de7e209a1a4b6bea1c378d32f0e171ca0e5f08cc726b77c1b1846a9a84fcfe492c88/?fname=%E6%AF%9B%E9%98%BF%E6%95%8F%20-%20%E7%9B%B8%E6%80%9D(320).mp3&k=723238334860f09ec819c9964462534e08055e5551045205140a5d52574f55580053150b0600054c5b510b57000454540c010a56627461a292829af096424c41f6d2f38f4a515351101c554351625c&fr=00&&txf_fid=ce4f00c344d082a806c77c982234ef278b009f86&xffz=7273942",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"此生不换",
      artist:"青鸟飞鱼",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E9%9D%92%E9%B8%9F%E9%A3%9E%E9%B1%BC-%E6%AD%A4%E7%94%9F%E4%B8%8D%E6%8D%A2.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/7365f4aeb59d58c2ab16c4ebd59ff558f0013f169aac70d5a48bd098909c905e657e24e6ed32ac99d012baa6209dba48f260d1af5da2cb3e1d3334c613d56a6b/?fname=%E9%9D%92%E9%B8%9F%E9%A3%9E%E9%B1%BC%20-%20%E6%AD%A4%E7%94%9F%E4%B8%8D%E6%8D%A2(320).mp3&k=303362367d9c649e9018939340300b4e560152015e560b594c035454041d0d5100064f0e00560c4c5703530251520f5654570706662c39a681f79381afe3da414c13d6fdafca8bdada884a055400104f0c4351365b&fr=00&&txf_fid=ddf863d0829fc3415ca8a23daf796a65fb3e9d55&xffz=10638309",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"转弯",
      artist:"吴奇隆",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%90%B4%E5%A5%87%E9%9A%86%20-%20%E8%BD%AC%E5%BC%AF.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/0ad46444495a5ea5909bd169fa4abc75fe24d4043d33c88ee2a65e42f4c056c77b541c2220a433784d644262da4ee0560fc3b85e2f795c305f2606b3a0464eb4/?fname=%E5%90%B4%E5%A5%87%E9%9A%86%20-%20%E8%BD%AC%E5%BC%AF(320).mp3&k=72623939b31e54cec849c89c12380a1e0a070d5d00095b5214065f0b51150c555a531458560a5a1c5a520158075b5c040e060a0f342e38ffdba4dffb95181511eec8f4dd1c0b0a01104c5449073805&fr=00&&txf_fid=0053304bb8c48645c562b00b39dd1e3d66456da1&xffz=9689465",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"生生世世爱",
      artist:"吴雨霏",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%90%B4%E9%9B%A8%E9%9C%8F%20-%20%E7%94%9F%E7%94%9F%E4%B8%96%E4%B8%96%E7%88%B1.mp3",
      mp3:"http://sz-btfs.ftn.qq.com/ftn_handler/0c9dc35483451e9b64fed6517c46bb2ab24e7a74812e492d212c125b4662485e0483fdb73cc856cddcb929749ba79ec4ba9c2aa78e381e8024dd899e5cccf19e/?fname=%E5%90%B4%E9%9B%A8%E9%9C%8F%20-%20%E7%94%9F%E7%94%9F%E4%B8%96%E4%B8%96%E7%88%B1(320).mp3&k=643336308cb735c9c418c79513625419540101540506500118575007504f52540c501b510403511b020b53080d06560402575303357e66f8d7e0dcc698424b16fcc9ffcaffa2acf6859d1e0307524f185843053008&fr=00&&txf_fid=f55d92fd2149269f9b1b4a66ced7c8256b7858f6&xffz=11283015",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"月光",
      artist:"胡彦斌",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E6%9C%88%E5%85%89.mp3",
      mp3:"http://szmail-tfs.ftn.qq.com/ftn_handler/f94a6dd4a1ee462d5924335093de84e0e056148973f672e9e137eb6d9deb7f308408926f99c1e5e5d386fb0162407671a08c5324ea0f4e761e6425173f87d0c8/?fname=%E8%83%A1%E5%BD%A6%E6%96%8C%20-%20%E6%9C%88%E5%85%89(320).mp3&k=7e3662630fdc68cdc41d93c61131031d0d03575a0253000b180e0353041c05070d534f5b5601021f01555156040606545007060637273188cfe787d2c4111c12e1f4db811f0203021c180f1304310c&fr=00&&txf_fid=02722921425a3d8d2d35cde78c76f634dc9ba15a&xffz=10883784",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"绝世",
      artist:"张克帆",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%BC%A0%E5%85%8B%E5%B8%86%20-%20%E7%BB%9D%E4%B8%96.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/8f8c64555b42543558af11b40d1548ffcaeb521fbbe9a2599ca0c04fe88fa0fb41e7a6154a940316095edd9816efa257bdf02448d6a1fcafa5bff10221db9d8c/?fname=%E5%BC%A0%E5%85%8B%E5%B8%86%20-%20%E7%BB%9D%E4%B8%96%20-%20KTV%E7%89%88%E4%BC%B4%E5%A5%8F.m4a&k=6239303684c5c0c6c112c19315360616535b550407040c0c1d0e0450031b0058035a1d5750050c14010d51505603560c530d5301332b34ecf586fb81981619198ec1faf6131b1472646f80d083dfe3d91e540457330b&fr=00&&txf_fid=d7f4e1ee077a3e6d25ed5f7dfe4aba8b0e32aba8&xffz=724041",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"美丽的神话",
      artist:"孙楠韩红",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E5%AD%99%E6%A5%A0%E9%9F%A9%E7%BA%A2%E7%BE%8E%E4%B8%BD%E7%9A%84%E7%A5%9E%E8%AF%9D.mp3",
      mp3:"http://sz-btfs.ftn.qq.com/ftn_handler/b95dcfdb04563f5a8ca775b56a4c8413ce63e85f4e5061a5921b09b580367f40d7872a9d79700153277945b8af3e84c6136544922462649537f857f1c9dac989/?fname=%E5%AD%99%E6%A5%A0%E3%80%81%E9%9F%A9%E7%BA%A2%20-%20%E7%BE%8E%E4%B8%BD%E7%9A%84%E7%A5%9E%E8%AF%9D(320).mp3&k=61363432e52c29c8c51dc597453154180d00065302530352190156565b1c52045253190b0555501a01530357570257560c06040b631166fcdbdf9e93c18bcd8dd8161912a0f1a6c181f2fdc3d8814e0406061d1c0e41553709&fr=00&&txf_fid=4b4d984765b248857b87c7007e17b8c4dd9e1cf0&xffz=11592314",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"爱的灵魂",
      artist:"范朋飞",
      //mp3:"https://raw.githubusercontent.com/3xp10it/music/master/%E8%8C%83%E6%9C%8B%E9%A3%9E%20-%20%E7%88%B1%E7%9A%84%E7%81%B5%E9%AD%82.mp3",
      mp3:"http://sz-ctfs.ftn.qq.com/ftn_handler/5a97392380b0f6cc207c2517818b9ffb9e617dd8fe0462ca5ffdb7daf0e7a391af25f6a68e5c1ac45a49206ff424d7848c1e70a3caaec3ca8bc1fc08d3f68026/?fname=%E8%8C%83%E6%9C%8B%E9%A3%9E%20-%20%E7%88%B1%E7%9A%84%E7%81%B5%E9%AD%82(320).mp3&k=7a386265724045cdc41393c01437051d570c005c56060e02180a5157061a0305565e4f5d5403561f0c5c56065006560a51000350322d378583fd91d2fb171a128596d7a1f3de8cd81d0b50551b195a4206385f&fr=00&&txf_fid=8d342c50e284d2ecfcd2c6cfc56fbf5654f8dd8f&xffz=9275584",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"偷功",
      artist:"胡伟立",
      mp3:"http://sz-btfs.ftn.qq.com/ftn_handler/f5fc95e359a92b1ef2826877e8dd2b9c3181759d0b7bb658f8f87b22d82962e140a23fe1cb07946a3644363cf0e8a82f55dbd8d20f9787433acd0a13a8fee407/?fname=%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E5%81%B7%E5%8A%9F%20-%20%E7%BA%AF%E9%9F%B3%E4%B9%90%E7%89%88(320).mp3&k=60316364abd8a1cbc71a92c14263571b57095655520704001b505a5c064e510601084e0556060719025357025c57070c545005016442658eccffd3a5c6434814fb84dac2444e458089e397a4b2d3831c0503534d4a0e1507360c&fr=00&&txf_fid=033a3c5d30e712aacf0124425d63ac78b6649e19&xffz=3884081",
      //oga:"https://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    }];

  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };

  var options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3, wma"
  };

  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

});
