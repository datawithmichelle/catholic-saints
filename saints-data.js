// ── Shared Saints Dataset ────────────────────────────────────────────────────
// Used by search.html and saint.html
// Each entry: name, patronages, description, quote, image URL, wikipedia URL

const SAINTS_DATA = [
    {
        id: "anthony-of-padua",
        name: "St. Anthony of Padua",
        patronages: ["lost things", "lost items", "lost people", "travelers", "the poor", "pregnant women", "barren women", "horses", "amputees"],
        description: "Franciscan friar and Doctor of the Church, beloved for his powerful preaching and miracles. Born in Lisbon, he joined the Franciscans and became one of the most gifted preachers of his age. He is invoked especially for finding lost items.",
        quote: "Actions speak louder than words; let your words teach and your actions speak.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Murillo_-_San_Antonio_de_Padua_con_el_Ni%C3%B1o_Jes%C3%BAs_-_Museo_del_Prado.jpg/440px-Murillo_-_San_Antonio_de_Padua_con_el_Ni%C3%B1o_Jes%C3%BAs_-_Museo_del_Prado.jpg",
        wiki: "https://en.wikipedia.org/wiki/Anthony_of_Padua"
    },
    {
        id: "joseph",
        name: "St. Joseph",
        patronages: ["workers", "fathers", "families", "carpenters", "craftsmen", "engineers", "immigrants", "dying", "unborn children", "universal church"],
        description: "Foster father of Jesus and husband of Mary. Known for his silent strength and faithful obedience, Joseph protected and provided for the Holy Family. Patron of workers and the universal Church.",
        quote: "Do whatever he tells you.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Saint_Joseph"
    },
    {
        id: "thomas-aquinas",
        name: "St. Thomas Aquinas",
        patronages: ["students", "scholars", "universities", "philosophers", "theologians", "academics", "schools", "booksellers", "chastity"],
        description: "Dominican friar and Doctor of the Church, one of the greatest theologians in history. His Summa Theologiae remains a cornerstone of Catholic thought and philosophy.",
        quote: "The things that we love tell us what we are.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/St-thomas-aquinas.jpg/440px-St-thomas-aquinas.jpg",
        wiki: "https://en.wikipedia.org/wiki/Thomas_Aquinas"
    },
    {
        id: "luke",
        name: "St. Luke the Evangelist",
        patronages: ["doctors", "physicians", "surgeons", "artists", "painters", "nurses", "notaries", "butchers", "glassworkers"],
        description: "Physician and evangelist who wrote the Gospel of Luke and Acts of the Apostles. His Gospel is known for its emphasis on mercy, women, and the poor.",
        quote: "Nothing will be impossible with God.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Luke_the_Evangelist"
    },
    {
        id: "cecilia",
        name: "St. Cecilia",
        patronages: ["musicians", "music", "singers", "poets", "composers", "organ makers"],
        description: "Roman martyr who sang in her heart to God during her wedding. Patron of music and musicians since the 16th century, she is one of the most venerated martyrs of Christian antiquity.",
        quote: "Let my heart be sound in thy statutes; that I be not ashamed.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Raphael_-_St_Cecilia_with_Sts_Paul%2C_John_the_Evangelist%2C_Augustine_and_Mary_Magdalene_-_WGA18944.jpg/440px-Raphael_-_St_Cecilia_with_Sts_Paul%2C_John_the_Evangelist%2C_Augustine_and_Mary_Magdalene_-_WGA18944.jpg",
        wiki: "https://en.wikipedia.org/wiki/Cecilia_(saint)"
    },
    {
        id: "francis-of-assisi",
        name: "St. Francis of Assisi",
        patronages: ["animals", "environment", "ecology", "nature", "birds", "merchants", "Italy", "peace"],
        description: "Founder of the Franciscan Order, known for his radical poverty, love of creation, and mystical union with Christ. His Canticle of the Sun is one of the first works of Italian literature.",
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cimabue_-_St_Francis_of_Assisi_-_WGA04910.jpg/440px-Cimabue_-_St_Francis_of_Assisi_-_WGA04910.jpg",
        wiki: "https://en.wikipedia.org/wiki/Francis_of_Assisi"
    },
    {
        id: "christopher",
        name: "St. Christopher",
        patronages: ["travelers", "motorists", "drivers", "sailors", "surfers", "athletes", "transportation"],
        description: "Martyr who according to legend carried the Christ child across a river. Long venerated as protector of travelers and those in danger of sudden death.",
        quote: "I have served a king mightier than any earthly ruler.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Saint_Christopher"
    },
    {
        id: "jude",
        name: "St. Jude Thaddeus",
        patronages: ["hopeless causes", "desperate situations", "lost causes", "hospitals", "impossible cases"],
        description: "One of the twelve apostles, cousin of Jesus, and author of the Epistle of Jude. Invoked when all other hope is gone — the patron of hopeless and desperate cases.",
        quote: "Keep yourselves in the love of God, waiting for the mercy of our Lord Jesus Christ.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Jude_the_Apostle"
    },
    {
        id: "michael",
        name: "St. Michael the Archangel",
        patronages: ["soldiers", "police officers", "military", "paramedics", "EMTs", "first responders", "grocers", "mariners", "Germany"],
        description: "Leader of the heavenly army and protector against evil. One of only three angels named in Scripture, Michael is invoked by soldiers, police, and all who fight against darkness.",
        quote: "Who is like God?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Guido_Reni_031.jpg/440px-Guido_Reni_031.jpg",
        wiki: "https://en.wikipedia.org/wiki/Michael_(archangel)"
    },
    {
        id: "gabriel",
        name: "St. Gabriel the Archangel",
        patronages: ["messengers", "communications", "postal workers", "radio workers", "television", "telecommunications", "diplomats"],
        description: "The archangel who announced the Incarnation to Mary with the words Ave Maria. Patron of all who work in communications and messaging.",
        quote: "Do not be afraid, Mary, for you have found favor with God.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Gabriel"
    },
    {
        id: "raphael",
        name: "St. Raphael the Archangel",
        patronages: ["healing", "healers", "doctors", "travelers", "blind", "the sick", "pharmacists", "lovers"],
        description: "The healing archangel who accompanied Tobias on his journey and restored his father's sight. Patron of the sick, healers, and travelers.",
        quote: "I am Raphael, one of the seven angels who stand in the glorious presence of the Lord.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Raphael_(archangel)"
    },
    {
        id: "teresa-of-avila",
        name: "St. Teresa of Ávila",
        patronages: ["Spain", "headache sufferers", "chess players", "lacemakers", "people in need of grace"],
        description: "Carmelite mystic, reformer, and Doctor of the Church. Her Interior Castle remains one of the great works of Christian mysticism.",
        quote: "Let nothing disturb you, let nothing frighten you. All things pass away. God never changes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Santa_teresa_de_jesus.jpg/440px-Santa_teresa_de_jesus.jpg",
        wiki: "https://en.wikipedia.org/wiki/Teresa_of_%C3%81vila"
    },
    {
        id: "therese-of-lisieux",
        name: "St. Thérèse of Lisieux",
        patronages: ["missions", "missionaries", "florists", "France", "HIV/AIDS sufferers", "aviators", "tuberculosis sufferers"],
        description: "The Little Flower, a Carmelite nun who died at 24. Her Little Way of spiritual childhood became one of the most beloved spiritualities of modern times.",
        quote: "Miss no single opportunity of making some small sacrifice, here by a smiling look, there by a kindly word.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Therese_von_Lisieux.jpg/440px-Therese_von_Lisieux.jpg",
        wiki: "https://en.wikipedia.org/wiki/Th%C3%A9r%C3%A8se_of_Lisieux"
    },
    {
        id: "isidore-farmer",
        name: "St. Isidore the Farmer",
        patronages: ["farmers", "agriculture", "rural communities", "farm workers", "laborers"],
        description: "Spanish farmer who worked the land with great piety, attending daily Mass before his work. Angels were said to plow alongside him while he prayed. Patron of farmers and rural communities.",
        quote: "Work is prayer when done with a pure intention.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Isidore_the_Farmer"
    },
    {
        id: "dymphna",
        name: "St. Dymphna",
        patronages: ["mental illness", "mental health", "anxiety", "depression", "epilepsy", "sleepwalkers", "nervous disorders", "abuse victims"],
        description: "Irish princess martyred by her own father after she fled to Belgium to escape him. She is the patron of those with mental illness, anxiety, and nervous disorders.",
        quote: "I will not deny Christ to please any man.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Dymphna"
    },
    {
        id: "peregrine",
        name: "St. Peregrine Laziosi",
        patronages: ["cancer", "cancer patients", "illness", "sick people"],
        description: "Servite friar who was miraculously cured of cancer of the foot the night before his scheduled amputation. Widely invoked by those suffering from cancer and other serious illnesses.",
        quote: "I have found in suffering the surest path to God.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Peregrine_Laziosi"
    },
    {
        id: "blaise",
        name: "St. Blaise",
        patronages: ["throat ailments", "sore throats", "animals", "wool combers", "wild animals"],
        description: "Bishop and martyr known for miraculously curing a boy choking on a fish bone. His feast day includes the blessing of throats with crossed candles.",
        quote: "Go in peace, and if you had any illness may it please God to grant you a cure.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Blaise_of_Sebaste"
    },
    {
        id: "valentine",
        name: "St. Valentine",
        patronages: ["love", "lovers", "couples", "engaged couples", "beekeepers", "epilepsy", "plague"],
        description: "Roman priest and martyr associated with courtly love since the Middle Ages. He was imprisoned for performing marriages for soldiers who were forbidden to wed.",
        quote: "Love one another as I have loved you.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Saint_Valentine"
    },
    {
        id: "patrick",
        name: "St. Patrick",
        patronages: ["Ireland", "Irish people", "engineers", "snakes", "paralegals"],
        description: "Apostle of Ireland who used the shamrock to explain the Trinity. Kidnapped as a boy and enslaved in Ireland, he returned as a missionary and converted the nation.",
        quote: "Christ with me, Christ before me, Christ behind me, Christ in me.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/StPatrickDriving.jpg/440px-StPatrickDriving.jpg",
        wiki: "https://en.wikipedia.org/wiki/Saint_Patrick"
    },
    {
        id: "nicholas",
        name: "St. Nicholas",
        patronages: ["children", "sailors", "merchants", "brewers", "pawnbrokers", "prisoners", "repentant thieves", "Russia"],
        description: "Bishop of Myra known for secret gift-giving and miracles. He secretly provided dowries for three poor girls by tossing bags of gold through their window at night — the origin of the Santa Claus tradition.",
        quote: "The giver of every good and perfect gift has called upon us to mimic His giving.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Nicholas_of_Myra"
    },
    {
        id: "joan-of-arc",
        name: "St. Joan of Arc",
        patronages: ["France", "soldiers", "military", "women in military", "prisoners", "martyrs", "captives"],
        description: "The Maid of Orléans, a peasant girl who led France to victory under divine inspiration at age 17. Burned at the stake at 19, she was declared a saint 500 years later.",
        quote: "I am not afraid. I was born to do this.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Joan_of_Arc_on_horseback.jpg/440px-Joan_of_Arc_on_horseback.jpg",
        wiki: "https://en.wikipedia.org/wiki/Joan_of_Arc"
    },
    {
        id: "mary-magdalene",
        name: "St. Mary Magdalene",
        patronages: ["women", "contemplatives", "repentant sinners", "hairdressers", "perfumers", "pharmacists", "glove makers"],
        description: "The first witness of the Resurrection, called Apostle to the Apostles by early Church writers. Her devotion to Christ never wavered, even at the foot of the Cross.",
        quote: "I have seen the Lord.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Titian_-_Penitent_Magdalene_%28c.1567%29.jpg/440px-Titian_-_Penitent_Magdalene_%28c.1567%29.jpg",
        wiki: "https://en.wikipedia.org/wiki/Mary_Magdalene"
    },
    {
        id: "peter",
        name: "St. Peter the Apostle",
        patronages: ["fishermen", "fishing", "net makers", "ship builders", "locksmiths", "cobblers", "popes", "Rome"],
        description: "First among the apostles and first Bishop of Rome. Called from his fishing nets by Christ, he became the rock upon which the Church was built.",
        quote: "Lord, to whom shall we go? You have the words of eternal life.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Saint_Peter"
    },
    {
        id: "paul",
        name: "St. Paul the Apostle",
        patronages: ["writers", "journalists", "publishers", "authors", "evangelists", "missionaries", "tentmakers", "press"],
        description: "Apostle to the Gentiles whose letters form much of the New Testament. His dramatic conversion on the road to Damascus is one of history's great stories.",
        quote: "I can do all things through Christ who strengthens me.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Paul_the_Apostle"
    },
    {
        id: "augustine",
        name: "St. Augustine of Hippo",
        patronages: ["theologians", "scholars", "printers", "brewers", "sore eyes", "Algeria"],
        description: "Bishop, theologian, and Doctor of the Church. His Confessions is one of the most influential spiritual autobiographies ever written.",
        quote: "Our heart is restless until it rests in You.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sandro_Botticelli_-_St_Augustine_in_his_Cell_-_WGA2898.jpg/440px-Sandro_Botticelli_-_St_Augustine_in_his_Cell_-_WGA2898.jpg",
        wiki: "https://en.wikipedia.org/wiki/Augustine_of_Hippo"
    },
    {
        id: "kateri",
        name: "St. Kateri Tekakwitha",
        patronages: ["environment", "ecology", "Native Americans", "Indigenous peoples", "exiles"],
        description: "The first Native American to be canonized, known as the Lily of the Mohawks. She suffered greatly for her faith and was devoted to prayer and penance.",
        quote: "Who can tell me what is most pleasing to God that I may do it?",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Kateri_Tekakwitha"
    },
    {
        id: "john-bosco",
        name: "St. John Bosco",
        patronages: ["youth", "young people", "children", "editors", "publishers", "students", "apprentices"],
        description: "Founder of the Salesians, dedicated his life to educating poor and at-risk youth in Turin. His preventive system of education influenced the world.",
        quote: "Do not be satisfied with mediocrity. Put out into the deep.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/John_Bosco"
    },
    {
        id: "padre-pio",
        name: "St. Padre Pio",
        patronages: ["stress relief", "civil defense volunteers", "adolescents"],
        description: "Italian Capuchin friar who bore the stigmata for 50 years. Known for his mystical gifts, healing, and hours spent in the confessional.",
        quote: "Pray, hope, and don't worry.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Padre_Pio_3.jpg/440px-Padre_Pio_3.jpg",
        wiki: "https://en.wikipedia.org/wiki/Padre_Pio"
    },
    {
        id: "maximilian-kolbe",
        name: "St. Maximilian Kolbe",
        patronages: ["journalists", "prisoners", "families", "drug addicts", "political prisoners", "pro-life movement"],
        description: "Polish Franciscan priest who voluntarily gave his life in Auschwitz to save another prisoner. Patron of journalists and prisoners.",
        quote: "The most deadly poison of our times is indifference.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Maximilian_Kolbe"
    },
    {
        id: "gianna",
        name: "St. Gianna Beretta Molla",
        patronages: ["mothers", "physicians", "unborn children", "families", "pro-life movement"],
        description: "Italian physician and mother who chose to continue her pregnancy despite a serious uterine condition, sacrificing her life for her child.",
        quote: "Love and sacrifice are as closely linked as the sun and the light.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Gianna_Beretta_Molla"
    },
    {
        id: "scholastica",
        name: "St. Scholastica",
        patronages: ["nuns", "education", "convulsive children", "rain", "schools"],
        description: "Twin sister of St. Benedict and founder of female Benedictine monasticism. Known for her deep prayer life and love of learning.",
        quote: "I asked you and you would not listen to me; so I asked my God and He has listened to me.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Scholastica"
    },
    {
        id: "benedict",
        name: "St. Benedict of Nursia",
        patronages: ["monks", "Europe", "students", "farmers", "engineers", "architects", "poison sufferers", "temptations"],
        description: "Father of Western monasticism whose Rule shaped European civilization. His motto Ora et Labora — Pray and Work — continues to guide communities worldwide.",
        quote: "Prefer nothing to the love of Christ.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Benedict_of_Nursia"
    },
    {
        id: "dominic",
        name: "St. Dominic",
        patronages: ["astronomers", "scientists", "Dominican Republic", "preachers"],
        description: "Founder of the Order of Preachers, known for his intellectual rigor and devotion to the Rosary. He met heresy with love and truth rather than force.",
        quote: "Arm yourself with prayer rather than a sword; wear humility rather than fine clothes.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Dominic_de_Guzm%C3%A1n"
    },
    {
        id: "ignatius-loyola",
        name: "St. Ignatius of Loyola",
        patronages: ["soldiers", "Jesuits", "spiritual retreats", "educators", "Spain"],
        description: "Founder of the Society of Jesus. His Spiritual Exercises remain one of the most widely used tools for discernment and prayer in the Catholic tradition.",
        quote: "Go forth and set the world on fire.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Ignatius_of_Loyola"
    },
    {
        id: "francis-xavier",
        name: "St. Francis Xavier",
        patronages: ["missionaries", "missions", "navigators", "Japan", "India", "Australia"],
        description: "Co-founder of the Jesuits who brought Christianity to India, Japan, and Southeast Asia. One of the greatest missionaries in history, he baptized tens of thousands.",
        quote: "Give me the grace to desire your honor and glory above everything else.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Francis_Xavier"
    },
    {
        id: "elizabeth-ann-seton",
        name: "St. Elizabeth Ann Seton",
        patronages: ["Catholic schools", "education", "teachers", "widows", "United States"],
        description: "First American-born saint and founder of the first free Catholic school in the United States. A widow and mother of five who converted to Catholicism.",
        quote: "Live simply so that all may simply live.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Elizabeth_Ann_Seton"
    },
    {
        id: "john-vianney",
        name: "St. John Vianney",
        patronages: ["priests", "parish priests", "confessors"],
        description: "The Curé of Ars, known for spending up to 18 hours a day in the confessional. His holiness transformed an entire village and drew pilgrims from across France.",
        quote: "The more we pray, the more we wish to pray.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/John_Vianney"
    },
    {
        id: "catherine-of-siena",
        name: "St. Catherine of Siena",
        patronages: ["Italy", "nurses", "fire prevention", "sick people", "Europe", "against miscarriages"],
        description: "Dominican tertiary, mystic, and Doctor of the Church who persuaded the Pope to return to Rome from Avignon. Known for her mystical experiences and political courage.",
        quote: "Be who God meant you to be and you will set the world on fire.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Catherine_of_Siena"
    },
    {
        id: "rita",
        name: "St. Rita of Cascia",
        patronages: ["impossible causes", "desperate situations", "widows", "abuse victims", "wounds", "loneliness"],
        description: "Augustinian nun known as the Patron of Impossible Causes. She bore the wound of the Crown of Thorns after praying to share in Christ's suffering.",
        quote: "Nothing is impossible to God.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Rita_of_Cascia"
    },
    {
        id: "isidore-of-seville",
        name: "St. Isidore of Seville",
        patronages: ["internet", "computers", "technology", "programmers", "students", "scholars"],
        description: "Archbishop of Seville and Doctor of the Church who compiled one of the first encyclopedias. Proposed as patron of the internet for his work organizing all human knowledge.",
        quote: "If a man wants to be always in God's company, he must pray regularly and read regularly.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Isidore_of_Seville"
    },
    {
        id: "our-lady-of-guadalupe",
        name: "Our Lady of Guadalupe",
        patronages: ["Americas", "Mexico", "unborn children", "immigrants", "Latin America", "pro-life"],
        description: "The image of Mary miraculously imprinted on the tilma of St. Juan Diego in 1531. Within seven years of the apparition, eight million people converted to Christianity.",
        quote: "Am I not here, I who am your Mother?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Guadalupe1.jpg/440px-Guadalupe1.jpg",
        wiki: "https://en.wikipedia.org/wiki/Our_Lady_of_Guadalupe"
    },
    {
        id: "athanasius",
        name: "St. Athanasius",
        patronages: ["theologians", "orthodoxy", "Alexandria"],
        description: "Bishop of Alexandria and Doctor of the Church, known as Athanasius contra mundum — Athanasius against the world — for his defense of Christ's divinity against Arianism.",
        quote: "The Son of God became man so that we might become God.",
        image: "",
        wiki: "https://en.wikipedia.org/wiki/Athanasius_of_Alexandria"
    },
    {
        id: "john-paul-ii",
        name: "St. John Paul II",
        patronages: ["World Youth Day", "families", "Poland", "young people"],
        description: "The beloved Polish pope who served for 27 years and helped bring down communism in Eastern Europe. Known for his philosophical depth and pastoral warmth.",
        quote: "Do not be afraid. Open wide the doors for Christ.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/JohannesPaul2-portrait.jpg/440px-JohannesPaul2-portrait.jpg",
        wiki: "https://en.wikipedia.org/wiki/Pope_John_Paul_II"
    },
    {
        id: "mother-teresa",
        name: "St. Teresa of Calcutta",
        patronages: ["World Youth Day", "Missionaries of Charity", "poor", "sick", "dying"],
        description: "Albanian-born nun who founded the Missionaries of Charity and devoted her life to serving the poorest of the poor in Calcutta. Nobel Peace Prize laureate.",
        quote: "Not all of us can do great things. But we can do small things with great love.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/440px-Mother_Teresa_1.jpg",
        wiki: "https://en.wikipedia.org/wiki/Mother_Teresa"
    }
];
