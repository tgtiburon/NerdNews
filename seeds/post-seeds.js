const { Post } = require('../models');

const postdata = [
  {
    title: 'Creative Title',
    post_content: 'Do deserunt aliquip fugiat ipsum dolore voluptate aute eiusmod ad aliqua cupidatat aute duis. Exercitation sint aliquip nisi esse deserunt reprehenderit magna amet labore amet. Enim duis ex nisi dolore laboris adipisicing est esse dolore qui laborum est qui proident. Id et laborum adipisicing proident fugiat commodo commodo dolor pariatur aute velit laborum amet pariatur. Do tempor ullamco officia do officia laborum do proident deserunt do. ',
    user_id: 1
  },
  {
    title: 'Creative Title',
    post_content: 'Minim laboris sit non id do exercitation culpa eiusmod. Sint cillum sint officia aliqua aliqua nostrud excepteur anim sit id incididunt aute do. Ex cillum occaecat fugiat aliqua cillum est. Veniam commodo veniam ea enim culpa incididunt. Aute sint anim do eiusmod ad id.',
    user_id: 2
  },
  {
    title: 'Creative Title',
    post_content: 'Occaecat cillum irure non voluptate tempor amet ipsum dolore anim duis veniam ut incididunt elit. Proident ea consequat ullamco ad labore. Magna anim velit pariatur excepteur id in qui deserunt. Voluptate non veniam officia ut consequat exercitation deserunt ullamco adipisicing dolor eiusmod amet laboris. Occaecat tempor excepteur cillum irure. Sit sunt quis esse enim tempor eu cillum. Officia est minim aliquip culpa.',
    user_id: 3
  },
  {
    title: 'Creative Title',
    post_content: 'Reprehenderit ullamco ex minim qui cupidatat veniam cillum. Et irure id aliquip ea laborum dolore minim nisi cillum amet id nisi. Aliquip eiusmod minim occaecat ut elit aute aliqua tempor Lorem adipisicing. Incididunt ea minim quis officia ex aliquip irure officia ea elit ex laboris eiusmod.',
    user_id: 4
  },
  {
    title: 'Creative Title',
    post_content: 'Nulla nostrud laboris qui voluptate proident aliquip. Consequat mollit ad adipisicing quis non id culpa fugiat amet fugiat. Nostrud ipsum consequat velit amet ut officia. Ad velit cillum incididunt consequat laborum consequat incididunt dolor. Sunt id reprehenderit veniam non est culpa non pariatur. Non consectetur tempor in aute est est Lorem magna eu ipsum elit velit qui labore. Laborum laboris duis quis non eu sunt ex.',
    user_id: 5
  },
  {
    title: 'Normal Title',
    post_content: 'Tempor irure commodo laborum nostrud ad sit cupidatat anim ad ullamco. Velit do labore consectetur incididunt dolore proident est minim. Culpa eiusmod sit minim incididunt eu ea tempor magna voluptate minim occaecat et.',
    user_id: 6
  },
  {
    title: 'Normal Title',
    post_content: 'Officia duis consectetur consequat laboris pariatur reprehenderit fugiat veniam. Sint ex nulla anim nisi irure fugiat ex Lorem. Ex minim ut velit dolor quis eiusmod consectetur sit. Laborum reprehenderit qui ex mollit laborum eiusmod ut elit minim duis labore nisi. Dolore fugiat amet culpa aliquip ad sit. Commodo adipisicing proident aliqua laborum aute.',
    user_id: 7
  },
  {
    title: 'Normal Title',
    post_content: 'Excepteur voluptate adipisicing exercitation Lorem. Excepteur ipsum deserunt id fugiat. Officia incididunt mollit et est veniam anim amet ex dolore ullamco aute. Culpa anim deserunt dolor ipsum laboris Lorem est fugiat mollit cillum reprehenderit. Consequat sint officia deserunt veniam ipsum tempor occaecat id eiusmod irure irure velit nostrud pariatur. Non aliquip labore dolor incididunt eiusmod consequat deserunt consectetur aliqua irure esse velit voluptate mollit. Officia magna excepteur pariatur pariatur velit fugiat ex.',
    user_id: 8
  },
  {
    title: 'Normal Title',
    post_content: 'Non aliqua in ea pariatur ex consequat commodo eiusmod cillum duis aliqua. Sint non magna et ipsum non tempor proident nisi in mollit exercitation magna labore. In sint qui esse reprehenderit ex qui esse non. Eiusmod minim eu enim qui dolore aliqua minim. Aliquip amet magna eu nisi duis consectetur incididunt id. Ut est elit aliqua incididunt incididunt irure exercitation culpa irure et id quis culpa. Dolore ad ad irure dolore ea.',
    user_id: 9
  },
  {
    title: 'Normal Title',
    post_content: 'Culpa in Lorem proident do excepteur tempor ex irure occaecat proident nostrud. Enim culpa culpa minim aliqua ea ut laborum ex irure commodo elit duis aliquip. Quis nulla ipsum enim sunt qui aliquip sint nulla ipsum. Sunt non voluptate tempor nisi mollit sint laboris consequat. Tempor Lorem labore deserunt aliqua deserunt eiusmod irure magna minim irure eu sunt voluptate.',
    user_id: 10
  },
  {
    title: 'Normal Title',
    post_content: 'Tempor non quis enim veniam ex veniam eiusmod ut amet minim dolore mollit Lorem commodo. Ad laborum culpa exercitation excepteur ut nisi aliqua eu ex et dolor do ex consectetur. Ut enim dolor veniam in deserunt nisi nulla aliquip excepteur consectetur est. Mollit sint nostrud quis nisi id pariatur in occaecat sit ullamco eu commodo nulla adipisicing. Anim culpa ullamco pariatur veniam magna mollit. Amet nostrud velit do dolor dolor culpa minim laborum in nulla reprehenderit eiusmod.',
    user_id: 10
  },
  {
    title: 'Normal Title',
    post_content: 'Tempor eu culpa aliqua aliqua proident adipisicing. Cillum quis irure incididunt et nisi cillum elit nostrud incididunt velit sunt. Laborum veniam incididunt amet pariatur ex tempor deserunt tempor adipisicing. Id irure adipisicing amet veniam minim voluptate et excepteur qui cupidatat et aute id exercitation. Aliquip consectetur magna dolore ea. Labore laboris nisi elit aliqua deserunt cillum minim proident duis exercitation qui quis.',
    user_id: 9
  },
  {
    title: 'Boring Title',
    post_content: 'Consectetur tempor ad et sunt. Proident culpa quis ullamco qui. Qui occaecat irure eu cupidatat. Ad nulla aliquip esse amet sint. Consequat mollit reprehenderit ullamco do incididunt non esse incididunt. Duis qui aute consequat Lorem ex cupidatat enim aliquip irure nisi proident ea sit laborum. Nulla do pariatur quis consectetur excepteur dolor deserunt dolor voluptate.',
    user_id: 8
  },
  {
    title: 'Boring Title',
    post_content: 'Commodo duis amet culpa nisi deserunt pariatur nostrud anim cupidatat est sit quis aute non. Exercitation officia aliqua incididunt excepteur exercitation excepteur minim. Commodo exercitation reprehenderit velit dolor pariatur adipisicing ex ex aliqua sunt cupidatat consectetur nisi do. Exercitation ipsum ad elit labore magna qui veniam occaecat nostrud dolore elit ex et. Amet exercitation qui ea aliqua. Aliquip irure do esse excepteur reprehenderit officia esse laboris incididunt. Aliqua tempor esse excepteur laborum et aute proident pariatur cillum nisi sint qui proident cupidatat.',
    user_id: 7
  },
  {
    title: 'Boring Title',
    post_content: 'Aliquip ut enim id velit Lorem nostrud aliqua. Eu id id eu pariatur eu. Magna labore aute aute est anim adipisicing ut eu anim labore minim ipsum. Ea excepteur irure sint nisi dolore enim non excepteur laboris adipisicing consequat elit. Eiusmod ad proident velit anim ex. Ullamco in ad ad labore incididunt ea sint esse.',
    user_id: 6
  },
  {
    title: 'Boring Title',
    post_content: 'Labore aute pariatur ea occaecat ipsum laboris adipisicing voluptate eu commodo velit cillum aliquip. Velit velit exercitation eu commodo duis quis eu ullamco. Qui cillum consequat veniam Lorem ea sint. Ullamco eu consequat laborum veniam Lorem aliquip consectetur magna cillum mollit. Anim magna deserunt consequat sunt dolor consequat adipisicing ex irure amet eiusmod veniam et.',
    user_id: 5
  },
  {
    title: 'Supernatural Title',
    post_content: 'Mollit duis velit consectetur et do qui voluptate quis. Qui tempor eiusmod amet anim consectetur enim fugiat cillum mollit proident eiusmod tempor amet. Quis magna officia ex aute eu veniam est do qui nisi ullamco occaecat. Magna sint Lorem incididunt anim. Officia elit officia mollit cillum sit tempor do in.',
    user_id: 4
  },
  {
    title: 'Amazing Title',
    post_content: 'Aute nisi laboris est ad. Ipsum in nisi ad pariatur minim et velit eiusmod incididunt dolor incididunt veniam. Reprehenderit excepteur excepteur dolore nisi anim velit culpa velit magna est nulla ullamco. Dolore anim nisi aute aliqua id aliquip laborum amet ipsum. Dolore consequat pariatur velit in minim commodo veniam tempor incididunt do nostrud ullamco elit ipsum. Deserunt nisi tempor aute dolor proident tempor laborum et.',
    user_id: 3
  },
  {
    title: 'Amazing Title ',
    post_content: 'Velit proident et sit tempor. Dolor consequat deserunt elit magna veniam eiusmod deserunt ipsum. Ad et amet sint velit ea excepteur incididunt culpa occaecat deserunt anim ex. Ut laborum esse consequat magna elit eiusmod velit. Aute veniam cillum eiusmod eu ex exercitation. Officia magna veniam anim magna deserunt eu nulla commodo excepteur consectetur dolor anim enim sint.',
    user_id: 2
  },
  {
    title: 'Amazing Title',
    post_content: 'Do et Lorem dolore culpa nisi ipsum velit. Et dolore ad proident ullamco cupidatat consectetur commodo pariatur. Incididunt aliquip ullamco cupidatat adipisicing irure veniam mollit nulla tempor deserunt enim. Quis occaecat nisi aliqua incididunt irure voluptate. Eu eu voluptate reprehenderit irure. Ad ipsum magna commodo id elit. Quis culpa elit commodo voluptate amet.',
    user_id: 1
  },
  {
    title: 'Amazing Title',
    post_content: 'Laborum voluptate ad amet sint non ex commodo nostrud aute anim anim. Velit elit incididunt ut Lorem elit velit veniam. Labore est proident sunt do minim aliqua velit pariatur irure mollit aliquip voluptate. Aliqua duis consequat ea voluptate id amet et in elit nostrud. Proident ut pariatur eu laboris ea veniam ex officia. Fugiat quis culpa laborum velit sit fugiat do ad eu Lorem adipisicing sint commodo. Eu in anim sit minim fugiat dolore eu.',
    user_id: 2
  },
  {
    title: 'Amazing Title',
    post_content: 'Est exercitation magna aute culpa exercitation cillum tempor sit excepteur. Dolor proident amet laborum consectetur aliquip fugiat ea ipsum amet. Voluptate magna voluptate veniam proident qui officia. Enim tempor incididunt mollit ex dolore duis. Ex voluptate nulla est velit reprehenderit amet consectetur anim ullamco consectetur eu ut laborum ut. Irure dolor ut fugiat commodo reprehenderit eu nulla.',
    user_id: 3
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
