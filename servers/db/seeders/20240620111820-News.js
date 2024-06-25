/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("News", [
      {
        title: "Школа клининга Ольги Кравченко",

        text: "Клинером быть стыдно. Стрёмно сказать кем ты работаешь… Это маразм и устаревшие стереотипы. Раньше…Если нет образования, связей, тяжелая жизненная ситуация, не обзавелся какой-то более «нормальной» профессией – тебе дорога в уборщицы. Безперспективняк. Тяжело пашут как лошади, получают мало. В общем, низшая ступень профессиональной эволюции. Брали всех. Но, клинер – это не уборщица! Вы спросите у любого профессионала, который имеет огромный опыт в клининге, вложила много времени и сил в свои знания, может решать на раз самые сложные задачи с прилипшей на солнце пленкой на окнах и эпоксидной затиркой на плитки. Что она думает? Ей стыдно? Она гордится своей работает, знает какой это непростой труд, требующий много знаний. На её услуги очередь, она делает своих клиентов счастливыми и получает удовольствие от результата своего труда, а иногда и чаевые. Клинеры сейчас, ох, в каком дефиците, они нужны всем и прямым клиентам и клининговым компаниям. Конечно, любой труд достоин уважение. Но! Самое главное тут, кем ВЫ себя чувствуете? Уборщицей или востребованным профессионалом. Ну, допустим. А кассиром Пятерочки быть лучше? Давайте сравним: 1. Кассир: работа по строгому графику 2/2 или 3/3 Клинер: можно самому выбрать график работы, который сочетается с садиком ребенка или учебой 2. Кассир: не может сильно влиять на свой доход – в среднем, 30.000 руб. Клинер: может получать от 80.000 руб 3. Кассир: сидячая монотонная работа Клинер: экономит на фитнесе, постоянно новые заказы, задачи, знакомства 4. Кассир: слышит часто недовольства клиентов про те процессы на которые не влияет Клинер: видит результат своей работы и слышит благодарности от клиентов 5. Кассир: для клиента все кассиры +_ одинаковые Клинер: найдя своего специалиста, клиенты его очень ценят и дорожат им 6. кассир: беседы со старушками про подорожавший сахар клинер: новые знакомства с успешными и интересными людьми. Знаю много примеров таких взаимоотношений от помощи по различным вопросам клинерам до удачного замужества. Кому тут ещё стыдно???? Если хотите повысить профессионализм, вам дарю 3 бесплатных урока. ПЕРЕЙТИ Обязательно перейдите и посмотрите! Те, кто присматриваются к клинингу, поймут подходит вам эта ниша или нет. А кто уже в профессии, найдет для себя 100% новую информацию.",

        photo:
          "https://чисто.net/wp-content/uploads/2023/10/459489489-1200x650.png",

        video: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "О, пар всемогущий!",

        text: "Парогенератор – пожалуй, самый загадочный прибор в клининге. Ему приписывают магические способности. А некоторые клинеры железобетонно уверены, раз приобрели эту чудо-машину, то теперь любое загрязнение им по плечу. Так ли это? Давайте разберёмся, сделаю серию постов про парогенератор.⠀Сегодня будем разрушать мифы и отвечать на часто задаваемые вопросы.⠀Поехали…⠀«Кому больше всего подходит уборка паром?» 💨Идеально для аллергиков и семей с маленькими детьми, когда нежелательно применение моющих средств. «Все ли поверхности можно почистить парогенератором?»⠀💨Практически все, главное, профессиональный подход. Не рекомендуется применять для очистки: электроприборов, изделий из мягкого пластика, незащищенного бетона, шелка, шерсти и картона.⠀“Убивает ли пар бактерии и клещей -сапрофитов?”⠀💨Уборка паром уничтожает бактерии, грибки и даже плесень. Но, далеко не все. А с ненависными сапрофитами справляется вполне.⠀«С какими сложными задачами лучше всего он справляется?»⠀💨Парогенератор поможет в уборке самых труднодоступных мест, пищевого оборудования, где нежелательно применение моющих средств, деликатных материалов. Или там, где нельзя очищать водой (салон автомобиля, вентиляция).⠀Например:⠀-очистит хрустальную люстру, состоящую из множества деталей⠀-обеспылит букет из сухоцветов⠀-удалит жир с вытяжки или вентрешетки⠀-очистит от микробов детские игрушки и лежанку для животных⠀– поможет при удалении защитной пленки на окнах, когда кажется, что отодрать ее можно только зубами⠀– позволит быстро и легко очистить радиаторы отопления, не ковыряя зубной щёткой между секциями⠀– удалит засохшую жвачку👍⠀«Где он не справится?»⠀💨В целом, послестрой ему не подвластен, увы. Есть ещё много сложных загрязнений, где необходимо применение работающей профессиональной химии и механическое воздействие. Поэтому, он хорош, но не везде.⠀Основной минус в том, что для достижения результата приходится работать им долго и нудно. Парогенератор применяют локально, он ее подходит для очистки большых площадей.⠀Но плюсов то больше😉⠀А где вы чаще всего применяете парогенератор?",
        photo:
          "https://чисто.net/wp-content/uploads/2023/10/screenshot_13-1-450x650.png",

        video: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          "МОП профессиональный, он же моющая насадка, он же половая тряпка-что за зверь и как за ним ухаживать?",
        text: "Эволюция грандиозная. Это уже не тряпка из старой майки, а профессиональный инструмент, который выбираем исходя из метода уборки, вида поверхности, типа загрязнения, целей и задач клинера. Да и стоят они уже не 2 копейки. Поэтому, очень важно приручить его и научиться правильно ухаживать. И тогда, он будет жить долго, а вы счастливо. Что важно знать: 1. Как стирать 2. Как сушить 3. Как хранить. СТИРКА. 👋 Качественная стирка возможна только в стиральной машине, ручками ничего хорошего не получится 🛁Обязательно стираем перед первым применением, чтобы волокна раскрылись и начали работать в полную силу.🌡Температура 40-60 градусов 🛀🏼 А если хотите прям Вау результат, сначала нужно замочить ткань в средстве для стирке с энзимом при низкой температуре и только потом подвергать активной стирке 🧪Если не хотите его потерять, забудьте про агрессивные синтетические моющие средства с высоким ph, они могут повредить ткань. А ещё, в сочетании с высокой температурой неизбежна потеря веса нашего Мопика(. Наиболее подвержена этому вискоза. 🧴Нельзя применять для стирки средства с отбеливателем или кондиционером, они портят волокна 🚿Улучшит результат предварительное полоскание в холодной воде, и чем дольше, тем лучше ‼️Лайфхак: при полоскании в стиральной машине или во время стирки, положите в барабан круг от Падов для ротера. Или можно ручной пад б/у порезать на кусочки. Они отлично собирают на себя волосы, нитки и другой мусор 👍🏻. 🧺Загрузка стиральной машины должна быть 50% при стирке салфеток, 100% при стирке моющих насадок для пола. При расчете загрузки используем вес сухого материала. Автор: Ольга Кравченко",
        photo:
          "https://чисто.net/wp-content/uploads/2023/09/screenshot_12-1-448x650.png",

        video: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
