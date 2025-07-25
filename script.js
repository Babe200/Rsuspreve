const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

let data = [
  {
    "name": "Mouna Yahya Abdedayem",
    "number": 25408,
    "average": 18.2125,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Hamoud Sidi Mohamed Meiloud",
    "number": 36265,
    "average": 17.625,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Vadal Benahi Amar",
    "number": 33538,
    "average": 17.575,
    "result": "Admis",
    "school": "Lycée chinguetti"
  },
  {
    "name": "Meimouna Abdallah Cheikh Sidiya",
    "number": 31872,
    "average": 17.575,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Habib El Moustapha Moutali",
    "number": 22135,
    "average": 17.475,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Mohamed El Moktar Saad Bouh M'Hamoud",
    "number": 22994,
    "average": 17.375,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Hama Emama Mama",
    "number": 36683,
    "average": 17.275,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Djeinaba Ibrahima Sall",
    "number": 34319,
    "average": 17.25,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Arwa El Khalil Oumar",
    "number": 35954,
    "average": 17.2,
    "result": "Admis",
    "school": "Groupe Scolaire Waghif Maarif"
  },
  {
    "name": "Mohamed Tareq Brahim Sidi Abdellah",
    "number": 41435,
    "average": 17.075,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Saleh El Hacen Amar Jouda",
    "number": 33535,
    "average": 17.075,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "M'Hamed Mohamed Lemine Ethmane",
    "number": 23375,
    "average": 17.05,
    "result": "Admis",
    "school": "El Khouwa Zoueiratt"
  },
  {
    "name": "Mohamed El Moukhtar Mohamed Abdellahi Mohamed Ahmed",
    "number": 37945,
    "average": 17.0125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Toutou Ahmed Boubaye",
    "number": 49116,
    "average": 16.875,
    "result": "Admis",
    "school": "ZEMZEM EL HADITHA KSAR"
  },
  {
    "name": "Mariem Ahmed El Heiba Mamina",
    "number": 67884,
    "average": 16.85,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Oumoulmouminine El Hacen Dade",
    "number": 36727,
    "average": 16.85,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Lalla Aicha Cheikh Abdallahi Baba",
    "number": 65719,
    "average": 16.8,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Abdellahi Mohamed Mahmoud Abdel Jelil",
    "number": 48953,
    "average": 16.7625,
    "result": "Admis",
    "school": "EL Medina Toujounine"
  },
  {
    "name": "Zeidane Moulaye El Mihdi Lekhliffa",
    "number": 23052,
    "average": 16.75,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Fatimetou Zehera Jemal Babane",
    "number": 24371,
    "average": 16.725,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Mohamed Haye Haye",
    "number": 44578,
    "average": 16.6625,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Esmaa Mohamed M'Bareck Hewbe",
    "number": 57773,
    "average": 16.65,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Abdellahi Ahmed Moutaly",
    "number": 38160,
    "average": 16.6,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Sidi Ahmed Esslemhoum Mohamed Maouloud",
    "number": 31074,
    "average": 16.575,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Jewaher Mahfoudh Saleck",
    "number": 55563,
    "average": 16.5625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Cheikhani Ahmedou Mokhtar El Gayed",
    "number": 28702,
    "average": 16.55,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Sadegh Itawal Oumrou Massoud",
    "number": 26466,
    "average": 16.55,
    "result": "Admis",
    "school": "Lycée Boustailla"
  },
  {
    "name": "Ahmed Ely Sid' Ahmed Ely",
    "number": 41708,
    "average": 16.55,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Khadijetou Mohamed El Hecene Sidi Cheikh",
    "number": 76575,
    "average": 16.525,
    "result": "Admis",
    "school": "Lycée  Zouerat"
  },
  {
    "name": "Sidi Mohamed Mohamed Lemine Barike",
    "number": 23256,
    "average": 16.525,
    "result": "Admis",
    "school": "NEJAH- Bassiknou"
  },
  {
    "name": "Raghiya Yehefdhou Mini",
    "number": 61781,
    "average": 16.5,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Cheikh Tijany Cheikh Brahim Saleck",
    "number": 31825,
    "average": 16.475,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Ghelane Saleck Ahmed Taleb",
    "number": 49165,
    "average": 16.4473684210526,
    "result": "Admis",
    "school": "Jil El Moustaghbel Zoueiratt"
  },
  {
    "name": "Mohamed Abdellahi Beih",
    "number": 38507,
    "average": 16.425,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Lemrabott Mbareck Ramdhane",
    "number": 35596,
    "average": 16.35,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Mohamed Ahmed Moubareck",
    "number": 37544,
    "average": 16.35,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Houriya Ahmed Mheidi",
    "number": 22529,
    "average": 16.35,
    "result": "Admis",
    "school": "El Maaden Arafat"
  },
  {
    "name": "Mohamed'El Taleb Mokhtar Hamdy",
    "number": 52650,
    "average": 16.3375,
    "result": "Admis",
    "school": "Collège Tiguent"
  },
  {
    "name": "Aicha Ahmed Bezeid Bedda",
    "number": 58226,
    "average": 16.325,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mariem Salma Oumar Beheitt",
    "number": 22461,
    "average": 16.325,
    "result": "Admis",
    "school": "Collège Haye Madrid-NDB"
  },
  {
    "name": "Moulaye El Arbi Jiyid",
    "number": 36914,
    "average": 16.275,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Khadijetou Sidi Maouloud",
    "number": 10637,
    "average": 16.25,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Abdoullah Ahmed Fah",
    "number": 46758,
    "average": 16.25,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Khadijetou Brahim Vall El Am",
    "number": 55300,
    "average": 16.2125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Aichetou Mohamed Said",
    "number": 32812,
    "average": 16.1842105263158,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Moulaye Ismail Sadegh Moumene",
    "number": 40880,
    "average": 16.175,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Raghiya Maarouf Oudaa",
    "number": 56075,
    "average": 16.175,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Zein El Abidine Sidi Mohamed T'feil",
    "number": 34242,
    "average": 16.175,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Mounina El Moctar Ebey",
    "number": 56680,
    "average": 16.175,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Ezza Baba Ahmed Dah",
    "number": 73201,
    "average": 16.1625,
    "result": "Admis",
    "school": "Ejyal EL Moustaghbal Teyaret"
  },
  {
    "name": "Mariem Moustapha Bechir",
    "number": 56825,
    "average": 16.15,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Kerime Sidi El Hassen",
    "number": 70416,
    "average": 16.125,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Housseinou Cheikhou Diarra",
    "number": 38700,
    "average": 16.125,
    "result": "Admis",
    "school": "Lycée  Zouerate 2"
  },
  {
    "name": "Salah Dine Abdellahi Lehbouss",
    "number": 63297,
    "average": 16.1,
    "result": "Admis",
    "school": "Zem Zem TEY"
  },
  {
    "name": "Oum El Khairatt Mohamed Ali Memadi",
    "number": 70657,
    "average": 16.075,
    "result": "Admis",
    "school": "EL Medina Toujounine"
  },
  {
    "name": "Legniya Mohamed Abderahmane El Hadj M'Hamed",
    "number": 42192,
    "average": 16.075,
    "result": "Admis",
    "school": "Collège Kenewal"
  },
  {
    "name": "Vatimetou Mohamed Sidi Boubacar",
    "number": 63928,
    "average": 16.0526315789474,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Mohamed Selem Mohamed Lemine Heyine",
    "number": 27884,
    "average": 16.05,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mariem Mohamed Yahya El Bar",
    "number": 25419,
    "average": 16.025,
    "result": "Admis",
    "school": "El Mourad Ksar"
  },
  {
    "name": "Cheikh El Maloum Brahim Beyah",
    "number": 39786,
    "average": 16.0125,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "El Varough Ahmedou El Ghalawi",
    "number": 44481,
    "average": 15.975,
    "result": "Admis",
    "school": "Lycée Aghchorguit"
  },
  {
    "name": "Oumou El Benine Mohamed Lemine Zamel",
    "number": 55930,
    "average": 15.975,
    "result": "Admis",
    "school": "Collège Jeunnes Filles Zoueira"
  },
  {
    "name": "Lemeime Abdellahi Fall",
    "number": 36435,
    "average": 15.975,
    "result": "Admis",
    "school": "Ecole Privée RAWAE"
  },
  {
    "name": "Raiya Mohamed Yahya Kabad",
    "number": 70621,
    "average": 15.95,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Mohamed Lemin Abderrahmane Abderrahmane",
    "number": 24530,
    "average": 15.95,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Vatimetou Nah Mahmoudi",
    "number": 26469,
    "average": 15.95,
    "result": "Admis",
    "school": "Chems El Maarif  Toujounine"
  },
  {
    "name": "El Mostapha Mohamedou Issa Ahmedheya",
    "number": 22451,
    "average": 15.925,
    "result": "Admis",
    "school": "EL VOWZ TEY"
  },
  {
    "name": "Zghoume Ethemane Abderrahmane",
    "number": 44018,
    "average": 15.9,
    "result": "Admis",
    "school": "Mouhamediya Nouvelle KSAR"
  },
  {
    "name": "Mohamed Val Mohamed Abdellah Abdy",
    "number": 54213,
    "average": 15.85,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Maghlaha Abderrahmane Mohamed Ahmed",
    "number": 46885,
    "average": 15.85,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Taghy Mohamed Abdellahi Nejib",
    "number": 31337,
    "average": 15.85,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Khedeyja Sidiya Dahi",
    "number": 9613,
    "average": 15.825,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Cheikh Ahmed Abdel Wadoud Khada",
    "number": 31470,
    "average": 15.825,
    "result": "Admis",
    "school": "Noukbit El Asser RYD"
  },
  {
    "name": "Zeinebou Cheikh Sidi El Valli",
    "number": 31330,
    "average": 15.8157894736842,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Ahmedou Mohamed Mahmoud Ebou",
    "number": 35368,
    "average": 15.8125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Aichetou Teyeb Hamady",
    "number": 49912,
    "average": 15.8,
    "result": "Admis",
    "school": "AVAGH EL MOUSTAGHBEL TZN"
  },
  {
    "name": "Nessiba Mohamed Lemine El Moctar",
    "number": 23187,
    "average": 15.8,
    "result": "Admis",
    "school": "EL  Karama Rosso"
  },
  {
    "name": "Imane Ahmed Babi",
    "number": 28745,
    "average": 15.8,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mariem Mohamed Mahmoud Ahmed Kory",
    "number": 28933,
    "average": 15.7894736842105,
    "result": "Admis",
    "school": "Lycée Tidjikja 2 El Argoub"
  },
  {
    "name": "Aichetou Mohamed Djengui",
    "number": 33084,
    "average": 15.7894736842105,
    "result": "Admis",
    "school": "Lycée Arafat 3"
  },
  {
    "name": "Meimouna Mohamed Lemine Abdellahi",
    "number": 66988,
    "average": 15.775,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Ahmed Brahim Cheikh Sidiya",
    "number": 22509,
    "average": 15.775,
    "result": "Admis",
    "school": "Anwar El Houda privée"
  },
  {
    "name": "Ahmed Bah Ely Bowba",
    "number": 30739,
    "average": 15.775,
    "result": "Admis",
    "school": "Lycée  Akjoujt"
  },
  {
    "name": "Bedde Mohamed Lematt Nana",
    "number": 30299,
    "average": 15.75,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Aziza Mohamed Lemine Sbai",
    "number": 29066,
    "average": 15.75,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Maryem Mohamed Lemine Yacoub",
    "number": 33044,
    "average": 15.75,
    "result": "Admis",
    "school": "Ecole Privé Averroés"
  },
  {
    "name": "Fatma Mahfoudh Leaziz",
    "number": 45420,
    "average": 15.725,
    "result": "Admis",
    "school": "Lycée  Atar"
  },
  {
    "name": "Hebib Yaghoub Abdel Fettah",
    "number": 37321,
    "average": 15.725,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mounine Saadna Tidjani",
    "number": 32336,
    "average": 15.725,
    "result": "Admis",
    "school": "Collége Tintane 2"
  },
  {
    "name": "Ahmedou Mohamed Fadel Bedre Dine",
    "number": 60757,
    "average": 15.7,
    "result": "Admis",
    "school": "College Darnaim 5"
  },
  {
    "name": "Fatimetou Ahmed Ahmed Baba",
    "number": 45677,
    "average": 15.7,
    "result": "Admis",
    "school": "Lycée Aioun 1"
  },
  {
    "name": "Salka Mohamed Souleymane",
    "number": 35521,
    "average": 15.675,
    "result": "Admis",
    "school": "Lycée Bassiknou"
  },
  {
    "name": "Abderrahmane Mohamed Zein El Abidine",
    "number": 30567,
    "average": 15.675,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Sidi Mohamed Soule",
    "number": 35005,
    "average": 15.675,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Naha Abderrahmane Daddah",
    "number": 59082,
    "average": 15.65,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mariem Moulaye M'Hamed Ahmed Cherif",
    "number": 37380,
    "average": 15.625,
    "result": "Admis",
    "school": "Iman  ksar"
  },
  {
    "name": "Chriva Mohamed Lemine Cherif Ahmed",
    "number": 57068,
    "average": 15.625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Eminetou Enne Mohamed",
    "number": 23934,
    "average": 15.625,
    "result": "Admis",
    "school": "Lycée Boustailla"
  },
  {
    "name": "Zinebou Abdellahi Minih",
    "number": 26749,
    "average": 15.625,
    "result": "Admis",
    "school": "Ecole Privée RAWAE"
  },
  {
    "name": "Ghalia Laghdaf Khaye",
    "number": 57804,
    "average": 15.6125,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mariem Yahya Saleck",
    "number": 57831,
    "average": 15.6125,
    "result": "Admis",
    "school": "Lycée Tevrag-Zeina"
  },
  {
    "name": "Mariem Mohamed Amar Cheine",
    "number": 23395,
    "average": 15.6,
    "result": "Admis",
    "school": "El Maaden Arafat"
  },
  {
    "name": "Sadough Sidi Mohamed Taleb Maham",
    "number": 46108,
    "average": 15.575,
    "result": "Admis",
    "school": "Ejyal EL Moustaghbal Teyaret"
  },
  {
    "name": "Mohamed Brahim Mohamed Tfeil",
    "number": 53355,
    "average": 15.5625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Sidi Brahim Mohamed Bille",
    "number": 43272,
    "average": 15.5375,
    "result": "Admis",
    "school": "Collège El Mabrouk"
  },
  {
    "name": "Dianga Louty Ba",
    "number": 22750,
    "average": 15.525,
    "result": "Admis",
    "school": "CHEIKH MOHAMED TIDJANI Ryad"
  },
  {
    "name": "Mariem Mohamed Mahmoud Bowbenni",
    "number": 22324,
    "average": 15.525,
    "result": "Admis",
    "school": "Ecole El  Islah Raid"
  },
  {
    "name": "Rakiya Yahya Hama",
    "number": 27915,
    "average": 15.5125,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Jaber Ahmedou El Hacen",
    "number": 72829,
    "average": 15.5,
    "result": "Admis",
    "school": "Ejyal EL Moustaghbal Teyaret"
  },
  {
    "name": "Ahmed Mohamed Babah",
    "number": 49012,
    "average": 15.475,
    "result": "Admis",
    "school": "Lycée  Zouerat"
  },
  {
    "name": "Ezeiza Mohamed Bouya Mohamed Salem",
    "number": 54677,
    "average": 15.4625,
    "result": "Admis",
    "school": "Lycée  Nouadhibou 3"
  },
  {
    "name": "El Havedh Ahmed El Maaloum",
    "number": 53643,
    "average": 15.45,
    "result": "Admis",
    "school": "Groupe Scolaire Waghif Maarif"
  },
  {
    "name": "Eby Seyed Louleid",
    "number": 63353,
    "average": 15.45,
    "result": "Admis",
    "school": "Lycée Ekheweindi"
  },
  {
    "name": "Mohamed Amar Elbeyidh",
    "number": 20175,
    "average": 15.45,
    "result": "Admis",
    "school": "El Mina Candidat  Libre"
  },
  {
    "name": "Taghiya Taher El Varwa",
    "number": 73192,
    "average": 15.45,
    "result": "Admis",
    "school": "Ejyal EL Moustaghbal Teyaret"
  },
  {
    "name": "Bemba Sidi Brahim Sidi Brahim",
    "number": 27433,
    "average": 15.4375,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Aminetou Abdallahi Hourmet Alla",
    "number": 28392,
    "average": 15.425,
    "result": "Admis",
    "school": "Ecole Privée RAWAE"
  },
  {
    "name": "El Hssene Moussa Jeied",
    "number": 30326,
    "average": 15.425,
    "result": "Admis",
    "school": "EL KAWAVEL PRIVE KSAR"
  },
  {
    "name": "Mohamed El Moustapha El Jeilani",
    "number": 32553,
    "average": 15.4,
    "result": "Admis",
    "school": "RISSALA  Kiffa"
  },
  {
    "name": "Mohamed Cherif Ahmed El Moctar",
    "number": 23984,
    "average": 15.4,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Bounena Ahmedou Ahmedou",
    "number": 55456,
    "average": 15.4,
    "result": "Admis",
    "school": "Collège Tiguent"
  },
  {
    "name": "Nouha Yemehlou El Moctar",
    "number": 31596,
    "average": 15.4,
    "result": "Admis",
    "school": "Collége Tintane 2"
  },
  {
    "name": "Hamoudi Ahmed Salem Mohamed Ishagh",
    "number": 67604,
    "average": 15.375,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Youssouf Mohamed Baba Oubeid",
    "number": 52762,
    "average": 15.3625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mariem Mohamed Abderrahmane Sid Eba",
    "number": 30246,
    "average": 15.3552631578947,
    "result": "Admis",
    "school": "Maiine thakava tewsiia araffat"
  },
  {
    "name": "Zahra Mohamedhen Val Bebah",
    "number": 65295,
    "average": 15.35,
    "result": "Admis",
    "school": "EL Medina Toujounine"
  },
  {
    "name": "Teslem Mohamed Abdellahi Louly",
    "number": 37362,
    "average": 15.3375,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Oum Klthoum Sid El Moctar Lehbib",
    "number": 57306,
    "average": 15.325,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Lalle Fatma Mohamed Vadel Melainine",
    "number": 28930,
    "average": 15.325,
    "result": "Admis",
    "school": "Lycée  Timbedra"
  },
  {
    "name": "Aiche Cheikhna El Hacen",
    "number": 59550,
    "average": 15.325,
    "result": "Admis",
    "school": "Lycée  Timbedra"
  },
  {
    "name": "Ghaliye Mohamed Saha",
    "number": 28916,
    "average": 15.3,
    "result": "Admis",
    "school": "Lycée Guerrou"
  },
  {
    "name": "Tounnaja Mohamedou Tidjani",
    "number": 64028,
    "average": 15.3,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Abdel Melik Mohamed Vadel Achfagha Lemin",
    "number": 42282,
    "average": 15.275,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Hainna El Wely Meya",
    "number": 42398,
    "average": 15.2631578947368,
    "result": "Admis",
    "school": "Lycée Amourj"
  },
  {
    "name": "Oumoukelthoum Mohamed Zerough",
    "number": 28666,
    "average": 15.25,
    "result": "Admis",
    "school": "Tenwir"
  },
  {
    "name": "Lemina Moustapha Minem",
    "number": 36509,
    "average": 15.25,
    "result": "Admis",
    "school": "ENEJBAA NDB"
  },
  {
    "name": "Fatimetou Ould Oumeir Abdallahi",
    "number": 52151,
    "average": 15.225,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "El Mokhtar Mohamed M'Bareck",
    "number": 34689,
    "average": 15.225,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Nweina Sidi Mohamed Mohamdi",
    "number": 8775,
    "average": 15.2,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Aly M'Hadi Mohamed Mahmoud",
    "number": 36034,
    "average": 15.2,
    "result": "Admis",
    "school": "ZEMZEM EL HADITHA KSAR"
  },
  {
    "name": "Messara Mohamed El Mokhtar El Mahboubi",
    "number": 60251,
    "average": 15.2,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mouad Cheikh Saidy",
    "number": 38755,
    "average": 15.2,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Yahya Mohamed Lemine Souheib",
    "number": 22560,
    "average": 15.2,
    "result": "Admis",
    "school": "EL ATA EL MARIVI TOUJOUNINE"
  },
  {
    "name": "Ely Sadatt Maghlah",
    "number": 53011,
    "average": 15.175,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mohamed Moustapha Cheikh Abdallahi",
    "number": 53646,
    "average": 15.1625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Vatimetou Mohamed Abdellahi Ahmed Sid Brahim",
    "number": 26985,
    "average": 15.1578947368421,
    "result": "Admis",
    "school": "ATLAS HOURRA  GUERROU"
  },
  {
    "name": "Houda Edede Sidi Boubacar",
    "number": 36101,
    "average": 15.15,
    "result": "Admis",
    "school": "Sebil Timbédra"
  },
  {
    "name": "El Bokhary Mohamed El Hassen El Hemed",
    "number": 39100,
    "average": 15.15,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Bouna Yekber Bebana",
    "number": 52253,
    "average": 15.15,
    "result": "Admis",
    "school": "Lycée  Tidjikja"
  },
  {
    "name": "Meyne Ahmed M'Hamed El Vadel",
    "number": 57641,
    "average": 15.15,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Mohamed Mahmoud Mohamed El Moctar El Hassen",
    "number": 22910,
    "average": 15.1375,
    "result": "Admis",
    "school": "Iman  ksar"
  },
  {
    "name": "Nezha Mohamed Jedou Mohamed Jiddou",
    "number": 53931,
    "average": 15.1375,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Khalil Mohamed Lemine Diakité",
    "number": 44989,
    "average": 15.125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Sid'Ahmed Sidi Mohamed El Beinane",
    "number": 44044,
    "average": 15.125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Ahmed Amou Saleck",
    "number": 46596,
    "average": 15.125,
    "result": "Admis",
    "school": "El Isslah Sedid Toujounine"
  },
  {
    "name": "Dade Sidi Maouloud",
    "number": 10650,
    "average": 15.1,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Touttou Mohamed Mahmoud H'Mein Amar",
    "number": 45589,
    "average": 15.1,
    "result": "Admis",
    "school": "Lycée Aoujeft"
  },
  {
    "name": "Zeinebou Boukhary Salahi",
    "number": 70852,
    "average": 15.075,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Abdellahi Abderrahmane Kane",
    "number": 40272,
    "average": 15.075,
    "result": "Admis",
    "school": "CHEIKH MOHAMED TIDJANI Ryad"
  },
  {
    "name": "Esma Abdellahi Zeidane",
    "number": 58664,
    "average": 15.075,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Ibrahim Aboubacar Sedigh Soueidi",
    "number": 24834,
    "average": 15.05,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Khetry Mohamed Lemine Ahmed Zeidane",
    "number": 22300,
    "average": 15.05,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Henaa Mohamed Lemine El Mehdi",
    "number": 58319,
    "average": 15.05,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Mariem Taleb Khyar Cheikh Maleinine",
    "number": 42023,
    "average": 15.05,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Yacine Moussa Fall",
    "number": 25772,
    "average": 15.0375,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mariem Ahmed El Hadj",
    "number": 28483,
    "average": 15.0125,
    "result": "Admis",
    "school": "ENNASSR  TVZ"
  },
  {
    "name": "Cheikh Abd Elkader El Housseine Ahmed M'Bareck",
    "number": 112,
    "average": 15.0,
    "result": "Admis",
    "school": "Dhar Candidat  Libre"
  },
  {
    "name": "Salma Sidi Mohamed Boubou",
    "number": 47288,
    "average": 15.0,
    "result": "Admis",
    "school": "Lycée Aoujeft"
  },
  {
    "name": "Habiboullah Mohamed Sidi",
    "number": 64202,
    "average": 15.0,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Laghla Mohamed Radhi Ahmed Salem",
    "number": 16624,
    "average": 15.0,
    "result": "Admis",
    "school": "Djiguenni Candidat  Libre"
  },
  {
    "name": "Mohamed Abdel Haye Taher",
    "number": 31153,
    "average": 14.9875,
    "result": "Admis",
    "school": "Iman  ksar"
  },
  {
    "name": "Moussab Mohamed Habiboullah Baba",
    "number": 51515,
    "average": 14.9875,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Oumkelthoum Ahmed Cheikh Sidiya",
    "number": 36077,
    "average": 14.975,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mohamed Yahya Mohamed Moude",
    "number": 36420,
    "average": 14.975,
    "result": "Admis",
    "school": "El Isslah Sedid Toujounine"
  },
  {
    "name": "Isselmou Sidi Tablenkou",
    "number": 50275,
    "average": 14.9625,
    "result": "Admis",
    "school": "Collége Nouadhibou1"
  },
  {
    "name": "Fatimata Boubacar Sy",
    "number": 26551,
    "average": 14.9625,
    "result": "Admis",
    "school": "EL  Karama Rosso"
  },
  {
    "name": "Oum Sser Baba Koussa",
    "number": 20392,
    "average": 14.95,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Ahmed Aboul Maali El Moujtaba",
    "number": 50071,
    "average": 14.95,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Abdallhi Mohamed Mewloud Ahmed Mahmoud",
    "number": 25862,
    "average": 14.95,
    "result": "Admis",
    "school": "Lycée Levraiwa"
  },
  {
    "name": "Fatimetou Zahra Sidi Mohamed Vall",
    "number": 26548,
    "average": 14.9473684210526,
    "result": "Admis",
    "school": "Lycee Bareina"
  },
  {
    "name": "Yahya Ahmedou Vall Boua",
    "number": 73480,
    "average": 14.9375,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Aichatou El Moustapha Hamed",
    "number": 52559,
    "average": 14.9375,
    "result": "Admis",
    "school": "Lycée  Tidjikja"
  },
  {
    "name": "Barakha Brahim Aba",
    "number": 61171,
    "average": 14.9375,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Fatimetou El Jeily Aye",
    "number": 29671,
    "average": 14.9375,
    "result": "Admis",
    "school": "Zem Zem TEY"
  },
  {
    "name": "Fatimetou Mohamed Lemine Mohamed Val",
    "number": 27134,
    "average": 14.925,
    "result": "Admis",
    "school": "Rouad El Maarifa Ksar"
  },
  {
    "name": "Mohamed Ahmedou Dah",
    "number": 22580,
    "average": 14.925,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Nafissa Abderrahmane Cheikh Sidiya",
    "number": 34735,
    "average": 14.9125,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mariem Brahim Hamed",
    "number": 59508,
    "average": 14.9,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mohamed El Moustapha Cheikh Saed Bouh Cheikh Mohamed Vadel",
    "number": 28973,
    "average": 14.9,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Khadije Sidi Mohamed Taleb Zeidane",
    "number": 41448,
    "average": 14.9,
    "result": "Admis",
    "school": "RISSALA  Kiffa"
  },
  {
    "name": "Aichetou Ahmed Boukella",
    "number": 39962,
    "average": 14.8947368421053,
    "result": "Admis",
    "school": "Eloumeriya Arafat"
  },
  {
    "name": "Mohamed Taleb Khyar Ebaby",
    "number": 42584,
    "average": 14.875,
    "result": "Admis",
    "school": "Iman  ksar"
  },
  {
    "name": "El Hadramy Saadne Neine",
    "number": 32819,
    "average": 14.875,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Lala Yahya Cheikh Mohamed Vall",
    "number": 22859,
    "average": 14.875,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Lemneya Mohamed Amar Boba",
    "number": 28256,
    "average": 14.8625,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Abd El-Kader Baba Hadj Bala",
    "number": 2637,
    "average": 14.85,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Fatimetou Mohameden Mokhtar Baba",
    "number": 47079,
    "average": 14.85,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Sidi Mohamed Mohamed Abdallahi Gouh",
    "number": 44432,
    "average": 14.85,
    "result": "Admis",
    "school": "Ecole El  Islah Raid"
  },
  {
    "name": "Mohamed Salem Amanatoullah Bakha",
    "number": 33288,
    "average": 14.85,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Hanan Sidi Ahmed Moulay Erchid",
    "number": 29799,
    "average": 14.85,
    "result": "Admis",
    "school": "Chems El Maarif  Toujounine"
  },
  {
    "name": "Aminetou Mohamed Salem Lehbib",
    "number": 44875,
    "average": 14.85,
    "result": "Admis",
    "school": "El Maaden Arafat"
  },
  {
    "name": "Marieme Yahya Ebnou",
    "number": 61288,
    "average": 14.85,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Abd Elwehab Mohamed Lemine Kaber",
    "number": 784,
    "average": 14.8421052631579,
    "result": "Admis",
    "school": "Dhar Candidat  Libre"
  },
  {
    "name": "Abderrahmane Taleb Youmbaba",
    "number": 25675,
    "average": 14.825,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Abdallahi Mohamed Lemine Beina",
    "number": 50640,
    "average": 14.825,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Dedaye Yoube Aynina",
    "number": 30662,
    "average": 14.825,
    "result": "Admis",
    "school": "NEJAH- Bassiknou"
  },
  {
    "name": "Emani Ahmah Allah Cherif Bouye",
    "number": 44284,
    "average": 14.825,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Yemma El Mana Taleb Ely",
    "number": 40718,
    "average": 14.825,
    "result": "Admis",
    "school": "El Maaden Arafat"
  },
  {
    "name": "Oum Elmoumnin Sid'Elmoctar Ahmed Ramdhan",
    "number": 22877,
    "average": 14.825,
    "result": "Admis",
    "school": "Lycée Ougey"
  },
  {
    "name": "Isselmou Cheikh Tidjani Oudaa",
    "number": 55822,
    "average": 14.8125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mariem Mohamed Elwavi",
    "number": 70811,
    "average": 14.8,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Mohamed Cheikh Idoumou Eghah",
    "number": 52713,
    "average": 14.8,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Sidi Abdallahi Mohamed Brahim",
    "number": 35980,
    "average": 14.8,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Chiva Sidi Sned",
    "number": 22306,
    "average": 14.8,
    "result": "Admis",
    "school": "El Mahaja Baida  MLJ"
  },
  {
    "name": "El Mokhtar Bah Ahmedtak",
    "number": 26649,
    "average": 14.8,
    "result": "Admis",
    "school": "Collège Zoueiratt 2"
  },
  {
    "name": "Minetou Mohamedou Bah",
    "number": 26002,
    "average": 14.8,
    "result": "Admis",
    "school": "Dar El Ouloum Atar"
  },
  {
    "name": "Zeinebou Ahmed Adremize",
    "number": 40896,
    "average": 14.8,
    "result": "Admis",
    "school": "El Vadila Dar Naim"
  },
  {
    "name": "Sihame Mohamed Lemine Abdou",
    "number": 45097,
    "average": 14.7875,
    "result": "Admis",
    "school": "AVAGH EL MOUSTAGHBEL TZN"
  },
  {
    "name": "Lallamoulaty El Mahfoudh Moulaye Ismail",
    "number": 51494,
    "average": 14.7875,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Rime Sidi Maibess",
    "number": 44756,
    "average": 14.7875,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Seketou Mohamed Mahmoud El Mech",
    "number": 33066,
    "average": 14.7875,
    "result": "Admis",
    "school": "Collége Tintane 2"
  },
  {
    "name": "Ouadou Misbah Dine Cheikh Tourad",
    "number": 49773,
    "average": 14.775,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Ramla Yacoub Israil",
    "number": 25282,
    "average": 14.775,
    "result": "Admis",
    "school": "Nejah EL HOUR LEAREIGIB 1 NDB"
  },
  {
    "name": "Mariem Oubak Abdallahi",
    "number": 46459,
    "average": 14.775,
    "result": "Admis",
    "school": "Imam El Ghazaly KSAR"
  },
  {
    "name": "Mohamed Salem Mohamed Abdel Wedoud Hamoud",
    "number": 23135,
    "average": 14.775,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Raghiya El Mahfoudh Ahmed Abdy",
    "number": 48591,
    "average": 14.775,
    "result": "Admis",
    "school": "El Isslah Sedid Toujounine"
  },
  {
    "name": "Gebala Taher Mohamedou",
    "number": 62259,
    "average": 14.775,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Aicha Mohamedene Iyaye",
    "number": 65842,
    "average": 14.75,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Yeslem Zeini Moulaye Abdella",
    "number": 55302,
    "average": 14.75,
    "result": "Admis",
    "school": "Aboudoujana"
  },
  {
    "name": "Ahmed Yahya Mohamed Vadel Ahmed Said",
    "number": 46334,
    "average": 14.75,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Hamoud Mohamed Lemine Bardass",
    "number": 37606,
    "average": 14.75,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Ebeya Sid'Ahmed Dame",
    "number": 41243,
    "average": 14.75,
    "result": "Admis",
    "school": "Lycèe Voulaniya"
  },
  {
    "name": "Fatimetou Mohamed Salem Hedah",
    "number": 62941,
    "average": 14.75,
    "result": "Admis",
    "school": "Imtiyaz Toujounine"
  },
  {
    "name": "Taguiya Mohamed Abderrahmane El Ayel",
    "number": 64369,
    "average": 14.75,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Najia Sidi Mohamed Yacoub",
    "number": 50161,
    "average": 14.725,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Abderrahmane Idoumou Ely Rabi",
    "number": 36263,
    "average": 14.725,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Mohamed El Hassen Abderahman Abdel Vetah",
    "number": 39953,
    "average": 14.725,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Djeinaba Abdoulaye Cissokho",
    "number": 24937,
    "average": 14.725,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mohamed Lemin Sidaty Brahim",
    "number": 37026,
    "average": 14.725,
    "result": "Admis",
    "school": "Missbah Néma"
  },
  {
    "name": "Nebewy Izidbih Sidine",
    "number": 3513,
    "average": 14.7,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "El Khadir Vall Abidine",
    "number": 29513,
    "average": 14.7,
    "result": "Admis",
    "school": "SAGHER GHOUREICH"
  },
  {
    "name": "Mohamed Salem Hamdi Hamdi",
    "number": 44526,
    "average": 14.7,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Emal Abderrahmane Taleb Ebeidy",
    "number": 24019,
    "average": 14.7,
    "result": "Admis",
    "school": "Groupe Scolaire Mon Avenir"
  },
  {
    "name": "Moulaye Mhamed Mohamed Salem El Hachmy",
    "number": 32176,
    "average": 14.7,
    "result": "Admis",
    "school": "NEJAH- Bassiknou"
  },
  {
    "name": "Meriema Mohamed Lemine Bah",
    "number": 44817,
    "average": 14.7,
    "result": "Admis",
    "school": "Lycée J. F. Atar"
  },
  {
    "name": "Mohamed Said Mohamed Mahmoud Ahmed",
    "number": 26259,
    "average": 14.7,
    "result": "Admis",
    "school": "Tahssil Maarif"
  },
  {
    "name": "Aminetou Mohamed Mahmoud El Assaba",
    "number": 29956,
    "average": 14.7,
    "result": "Admis",
    "school": "Lycée Sava"
  },
  {
    "name": "Ghaya Brahim Vall Brahim",
    "number": 69913,
    "average": 14.6875,
    "result": "Admis",
    "school": "ELMOURAD"
  },
  {
    "name": "Cheibetta El Hadj Oudaa",
    "number": 28981,
    "average": 14.675,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Ahmed Zeidan Mohamed Lemine Barik",
    "number": 24948,
    "average": 14.675,
    "result": "Admis",
    "school": "NEJAH- Bassiknou"
  },
  {
    "name": "Aiche Inalla Boushab",
    "number": 25000,
    "average": 14.6710526315789,
    "result": "Admis",
    "school": "Noukbit El Asser RYD"
  },
  {
    "name": "Fatimetou Issa Niang",
    "number": 28675,
    "average": 14.6625,
    "result": "Admis",
    "school": "MAIN OULOUM NDB"
  },
  {
    "name": "Zeinebou Dah Chrif",
    "number": 55036,
    "average": 14.6625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Abdellahi Hemi",
    "number": 63506,
    "average": 14.65,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Ahmed Salem Cheikh Mohamedou Hamdy",
    "number": 53244,
    "average": 14.65,
    "result": "Admis",
    "school": "Collège Tiguent"
  },
  {
    "name": "Mohamed Yehdhih Mohamed Abdellahi Babah",
    "number": 53368,
    "average": 14.65,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Mohamed Lemine Mohamed yehdhih Tafa",
    "number": 42831,
    "average": 14.65,
    "result": "Admis",
    "school": "Anwar El Houda privée"
  },
  {
    "name": "Bouh Youba Meine",
    "number": 68559,
    "average": 14.6315789473684,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Khatry Dedah Ely",
    "number": 76382,
    "average": 14.625,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Moussa Amadou Kane",
    "number": 53596,
    "average": 14.625,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Hamath Ismaila Wele",
    "number": 50469,
    "average": 14.625,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mohamed Mohameden Ded",
    "number": 32079,
    "average": 14.625,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Khadijetou Sidi El Housein",
    "number": 48176,
    "average": 14.625,
    "result": "Admis",
    "school": "Missbah Néma"
  },
  {
    "name": "Mariem Ely Cheikh Tablenkou",
    "number": 72909,
    "average": 14.6052631578947,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Houda El Hadramy Ducros",
    "number": 36157,
    "average": 14.6,
    "result": "Admis",
    "school": "Lycée Excellence 1"
  },
  {
    "name": "Mohamed Ahmed Salem Brahim",
    "number": 51136,
    "average": 14.6,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Sidi Mahmoud Boune Sidi Ramdhane",
    "number": 70512,
    "average": 14.6,
    "result": "Admis",
    "school": "Lycée Aioun 3"
  },
  {
    "name": "Mohamed Ghalli Jemal Ahmed Taleb",
    "number": 37901,
    "average": 14.6,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Abdellahi Mohamed Salem Cheikh Hamdy",
    "number": 23968,
    "average": 14.6,
    "result": "Admis",
    "school": "Lycée Ekheweindi"
  },
  {
    "name": "Yahya Yasser Arafatt Rabani",
    "number": 44722,
    "average": 14.6,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Bechar Mohamed Bowbe",
    "number": 49970,
    "average": 14.6,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Ahmed Sid'Ahmed Ahmedou",
    "number": 26595,
    "average": 14.6,
    "result": "Admis",
    "school": "EL WESSILA  Toujounine"
  },
  {
    "name": "Oum Kelthoum Mohamed Mahmoud Dit Salem Teyeb",
    "number": 29029,
    "average": 14.5875,
    "result": "Admis",
    "school": "NEJAH PRIVEE"
  },
  {
    "name": "Mama Mohamed Sid'Ahmed Vall",
    "number": 45159,
    "average": 14.5789473684211,
    "result": "Admis",
    "school": "Lycée Walata"
  },
  {
    "name": "Chivay Mohamed Lemine Beina",
    "number": 11394,
    "average": 14.575,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Amy Papa Gaye",
    "number": 14157,
    "average": 14.575,
    "result": "Admis",
    "school": "Sebkha Candidat  Libre"
  },
  {
    "name": "Fatma Cheikh Sidi Moctar Abeidy",
    "number": 29868,
    "average": 14.575,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Azza Abidine Benbari",
    "number": 46141,
    "average": 14.575,
    "result": "Admis",
    "school": "Missbah Néma"
  },
  {
    "name": "Adama Yero Diallo",
    "number": 38758,
    "average": 14.5625,
    "result": "Admis",
    "school": "Lycee Kifa 3"
  },
  {
    "name": "Vatimetou Ahmed Sid Elemine",
    "number": 27501,
    "average": 14.5526315789474,
    "result": "Admis",
    "school": "Lycée  Rkiz"
  },
  {
    "name": "Mariem Zaid Cheikh",
    "number": 13223,
    "average": 14.55,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Salem Khaliva Bebane",
    "number": 35304,
    "average": 14.55,
    "result": "Admis",
    "school": "Lycée  Atar"
  },
  {
    "name": "Mohamed Salek El Mostapha Soueidana",
    "number": 25320,
    "average": 14.55,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Aly Mohamed Mohemd Sghayer",
    "number": 39721,
    "average": 14.55,
    "result": "Admis",
    "school": "Tenwir"
  },
  {
    "name": "H'Meidi Isselmou M'Kheytiratt",
    "number": 48738,
    "average": 14.55,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Vatimetou Sidi Aly Moulaye",
    "number": 27272,
    "average": 14.55,
    "result": "Admis",
    "school": "Lycée Guerrou"
  },
  {
    "name": "Khdeija Saleck Ebdemel",
    "number": 45652,
    "average": 14.55,
    "result": "Admis",
    "school": "Collège Jeunnes Filles Zoueira"
  },
  {
    "name": "Aîchetou Mohamed Elmoctar Elmoustapha",
    "number": 64566,
    "average": 14.55,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Aichetou Ely Denna",
    "number": 22845,
    "average": 14.5375,
    "result": "Admis",
    "school": "EL KAWAVEL PRIVE KSAR"
  },
  {
    "name": "Mariem Ene Ligdaly",
    "number": 8654,
    "average": 14.525,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Soukeina Mohamed Ahmed M'Bareck Vall",
    "number": 60799,
    "average": 14.525,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mohamed Khattary El Moustapha",
    "number": 37326,
    "average": 14.525,
    "result": "Admis",
    "school": "ZEMZEM EL HADITHA KSAR"
  },
  {
    "name": "Mohamed Lemin El Khalil Hawbett",
    "number": 72073,
    "average": 14.525,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Melhana Mohamed El Mehdi Sidi Ali",
    "number": 51717,
    "average": 14.525,
    "result": "Admis",
    "school": "El Isslah Sedid Toujounine"
  },
  {
    "name": "Mariem Mohamed Beidjel",
    "number": 24317,
    "average": 14.525,
    "result": "Admis",
    "school": "Tahssil  EL MAARIF Nouadhibou"
  },
  {
    "name": "Oum El Mouminine Mohamed Lemine Ebbaba",
    "number": 65423,
    "average": 14.525,
    "result": "Admis",
    "school": "EL Medina Toujounine"
  },
  {
    "name": "Lelle Mohamed Abdellahi Cheikh",
    "number": 72824,
    "average": 14.525,
    "result": "Admis",
    "school": "Ejyal EL Moustaghbal Teyaret"
  },
  {
    "name": "El Ghasstalani Mohamed Abdellahi El Ghastalani",
    "number": 39359,
    "average": 14.5125,
    "result": "Admis",
    "school": "Lycee Kifa 3"
  },
  {
    "name": "Mohemed Lehbib Mohamed Lemine Mohamed Cheikh",
    "number": 22650,
    "average": 14.5125,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Mohamed Yislim Mohamed Vadel El Ghotob",
    "number": 29301,
    "average": 14.5125,
    "result": "Admis",
    "school": "ENEJBAA NDB"
  },
  {
    "name": "Vatma Emi El Haibe Targhi",
    "number": 3782,
    "average": 14.5,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Tarba Ahmed Baba Beihiya",
    "number": 53288,
    "average": 14.5,
    "result": "Admis",
    "school": "EteEhil"
  },
  {
    "name": "Fatimetou Zahra Cheikhna Cheikh Mohamed Laghdhaf",
    "number": 29075,
    "average": 14.5,
    "result": "Admis",
    "school": "NEJAH- Bassiknou"
  },
  {
    "name": "Ikhyarhoum El Hefd Bezeid",
    "number": 61698,
    "average": 14.5,
    "result": "Admis",
    "school": "Imtiyaz Toujounine"
  },
  {
    "name": "Mama Behah Oubeid",
    "number": 39163,
    "average": 14.5,
    "result": "Admis",
    "school": "El Vadila Dar Naim"
  },
  {
    "name": "Mareim Ahmed Mreizigue",
    "number": 68503,
    "average": 14.4875,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Sarra Yeslem Ehel Ely",
    "number": 45945,
    "average": 14.475,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Lamina Sid'Ahmed Soufiane",
    "number": 65979,
    "average": 14.475,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mohamed Mahmoud Mohamed El Moustapha Moulaye Rchide",
    "number": 36634,
    "average": 14.475,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Youssouf Yehdih El Moustapha",
    "number": 39146,
    "average": 14.475,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Oumekelthoum Ahmedou Bazeid",
    "number": 32057,
    "average": 14.475,
    "result": "Admis",
    "school": "El Mourad TZN"
  },
  {
    "name": "Zeinebou Mohamed Vall Ghali",
    "number": 32166,
    "average": 14.475,
    "result": "Admis",
    "school": "Dhiyava WEL MANARA Toujounine"
  },
  {
    "name": "Bowba Mohamed Mahmoud Bedde",
    "number": 38859,
    "average": 14.475,
    "result": "Admis",
    "school": "College  Guerrou"
  },
  {
    "name": "Khira Cheikh Saad Bouh Ahmed Amou",
    "number": 51065,
    "average": 14.475,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Toutou Mohamed Belkheir",
    "number": 47481,
    "average": 14.475,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Oum El Kheiratt Yahye Amar Sidi",
    "number": 34238,
    "average": 14.4736842105263,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Teslem Mohamed Taleb",
    "number": 24869,
    "average": 14.4625,
    "result": "Admis",
    "school": "EL ADALA  Kiffa"
  },
  {
    "name": "Amal Ahmed Mini",
    "number": 58249,
    "average": 14.45,
    "result": "Admis",
    "school": "Aboudoujana"
  },
  {
    "name": "Emedou Mohamed Mousse Addi  Ould El Kharrachi",
    "number": 29438,
    "average": 14.45,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Mariem Abderrahmane Habib",
    "number": 37542,
    "average": 14.45,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Ahmed Cheikh Boutar Mohamed Ghoulam",
    "number": 36270,
    "average": 14.45,
    "result": "Admis",
    "school": "El Mourad TZN"
  },
  {
    "name": "Fatimata Abdoul Aziz Ly",
    "number": 35007,
    "average": 14.45,
    "result": "Admis",
    "school": "THIERNO NDIAYE BARRO"
  },
  {
    "name": "Metou Mohamed Yahya Ahmed Maaloumed",
    "number": 19221,
    "average": 14.45,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Ahmed Baba El Houssein El bou",
    "number": 62184,
    "average": 14.45,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Mariem Neh Khatra",
    "number": 59108,
    "average": 14.4375,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "El Mokhtar El Hacen Ahmed Salem Hamedou",
    "number": 71994,
    "average": 14.4375,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "El Moctar Mohamedou Lekweiry",
    "number": 67889,
    "average": 14.425,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Hassnatt Sidi Khattry",
    "number": 50806,
    "average": 14.425,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Fatimetou Mohamed Sidina Taya",
    "number": 26890,
    "average": 14.425,
    "result": "Admis",
    "school": "Azougui Houra"
  },
  {
    "name": "Nesiba Ridha Cheibani",
    "number": 60409,
    "average": 14.425,
    "result": "Admis",
    "school": "Zem Zem TEY"
  },
  {
    "name": "Aicheta Ennebewi Eida",
    "number": 69649,
    "average": 14.425,
    "result": "Admis",
    "school": "Lycée Bassiknou"
  },
  {
    "name": "Mohamed Zeidan El kheidher Mbarek",
    "number": 40620,
    "average": 14.425,
    "result": "Admis",
    "school": "Lycée Tamchekett"
  },
  {
    "name": "Khadijetou Itawal Oumrou El Maghari",
    "number": 31604,
    "average": 14.425,
    "result": "Admis",
    "school": "ETEWVIK EL HOURA KOBENY"
  },
  {
    "name": "Mariem Abderahman Ahmed Saleh",
    "number": 27525,
    "average": 14.425,
    "result": "Admis",
    "school": "Anwar El Houda privée"
  },
  {
    "name": "El Betoul Sidi Mohamed Mohamed L'Ely",
    "number": 46095,
    "average": 14.4125,
    "result": "Admis",
    "school": "Aboudoujana"
  },
  {
    "name": "Hindou El Vaghih Ahmed",
    "number": 51711,
    "average": 14.4078947368421,
    "result": "Admis",
    "school": "College Arafat 8"
  },
  {
    "name": "Kadijetou Yarbe Meissa",
    "number": 10106,
    "average": 14.4,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Lekrama Mohamed Abdellahi Amnir",
    "number": 34929,
    "average": 14.4,
    "result": "Admis",
    "school": "Tarbiya Atar"
  },
  {
    "name": "Fatimetou Birama Birama",
    "number": 18556,
    "average": 14.4,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Mouleye Ahmed Moamed Vadel Mouleye Ahmed",
    "number": 61695,
    "average": 14.4,
    "result": "Admis",
    "school": "Lycée  Nema"
  },
  {
    "name": "Cheikh El Mokhtar El Hacen El Kory",
    "number": 57073,
    "average": 14.4,
    "result": "Admis",
    "school": "Collège de N'aimé"
  },
  {
    "name": "Ahmed Cherif Ahmedou Ahmed Bouye",
    "number": 45447,
    "average": 14.3875,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Maryeme Sidi Mohamed Ahmed Deide",
    "number": 27975,
    "average": 14.375,
    "result": "Admis",
    "school": "Izdihar Nemewdhihiya Arafat"
  },
  {
    "name": "Soltana Mohamed Yille Chrive Ahmed",
    "number": 46798,
    "average": 14.375,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Mohmedlemeihi Ahmed Jiddou Khayna",
    "number": 33996,
    "average": 14.375,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Aminetou Cheikh Mohamed Brahim",
    "number": 68179,
    "average": 14.375,
    "result": "Admis",
    "school": "Lycée  Timbedra"
  },
  {
    "name": "Jeda Choueibe Semane",
    "number": 33708,
    "average": 14.375,
    "result": "Admis",
    "school": "College Kiffa 4"
  },
  {
    "name": "Fatimetou Mohamed Neina",
    "number": 76614,
    "average": 14.3684210526316,
    "result": "Admis",
    "school": "Collège Jeunnes Filles Zoueira"
  },
  {
    "name": "Fatme Mohamed Ahid Mohemed  Ahid",
    "number": 43995,
    "average": 14.3625,
    "result": "Admis",
    "school": "EL ADALA  Kiffa"
  },
  {
    "name": "Teslemne Salem Taleb",
    "number": 51835,
    "average": 14.3625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Hale Mohamed Abderrahmane Sid Eba",
    "number": 31023,
    "average": 14.3552631578947,
    "result": "Admis",
    "school": "Maiine thakava tewsiia araffat"
  },
  {
    "name": "Fatma El Ghadhfa Mohamed Yeslem Selimou",
    "number": 9358,
    "average": 14.35,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Mohamed Abdellahi Beilil",
    "number": 43165,
    "average": 14.35,
    "result": "Admis",
    "school": "EL MEDINA 2"
  },
  {
    "name": "Taghiou Allah Bamba Khlil",
    "number": 49046,
    "average": 14.35,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mohamed Vadel Mohamed Sidi Mohamed",
    "number": 39682,
    "average": 14.35,
    "result": "Admis",
    "school": "Lycée Aoueinatt Zbil"
  },
  {
    "name": "M'Barcka El Ghadi Limam",
    "number": 57541,
    "average": 14.35,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Lemrabott El Bane Samba",
    "number": 69171,
    "average": 14.35,
    "result": "Admis",
    "school": "Lycée Ekheweindi"
  },
  {
    "name": "Mohamed El Hassen Boubott",
    "number": 43288,
    "average": 14.35,
    "result": "Admis",
    "school": "Dhiyava WEL MANARA Toujounine"
  },
  {
    "name": "Khadi Cheikhani Jdoud",
    "number": 24112,
    "average": 14.35,
    "result": "Admis",
    "school": "LES PIONNIERS TEVRAGH ZEINA"
  },
  {
    "name": "Mohamed Sidi Soule",
    "number": 40016,
    "average": 14.35,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Cheikh Ahmed Hmeyada",
    "number": 42252,
    "average": 14.35,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Sid'El Mokhtar Sidi Mohamed Aly",
    "number": 46218,
    "average": 14.35,
    "result": "Admis",
    "school": "Lycée de Garçons 1"
  },
  {
    "name": "Kerime Cheikh Veten",
    "number": 50863,
    "average": 14.3375,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Saleck Khlifa Werie",
    "number": 22180,
    "average": 14.325,
    "result": "Admis",
    "school": "El Mourad TZN"
  },
  {
    "name": "Jewhara Cheikhna Elyasse",
    "number": 29548,
    "average": 14.325,
    "result": "Admis",
    "school": "SABLETTES T.ZN"
  },
  {
    "name": "Zoubeide Mohamed Aly Beyibahe",
    "number": 24174,
    "average": 14.3157894736842,
    "result": "Admis",
    "school": "Lycée Levraiwa"
  },
  {
    "name": "Khadijetou Mohamed Lemine Maham",
    "number": 27905,
    "average": 14.3125,
    "result": "Admis",
    "school": "Neil Elilm"
  },
  {
    "name": "Khadijetou Abass El Abass",
    "number": 36806,
    "average": 14.3,
    "result": "Admis",
    "school": "Lycée Excellence 1"
  },
  {
    "name": "Zeinebou Cheikh Baye Sidi Mohamed",
    "number": 31763,
    "average": 14.3,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Merdeya Naji Embeirik",
    "number": 30264,
    "average": 14.3,
    "result": "Admis",
    "school": "Tenwir"
  },
  {
    "name": "El Alia Mohamed Vall Soufi",
    "number": 33938,
    "average": 14.3,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Welid Bah Dahoud",
    "number": 52445,
    "average": 14.3,
    "result": "Admis",
    "school": "Groupe Scolaire Waghif Maarif"
  },
  {
    "name": "Mohamed Ghely Abderrahmane Sadballa",
    "number": 66117,
    "average": 14.3,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Tekbir Hamoud Habiboulah",
    "number": 29210,
    "average": 14.3,
    "result": "Admis",
    "school": "El Khouwa Zoueiratt"
  },
  {
    "name": "Fadileh Mohamed Vadile Abdallah",
    "number": 49405,
    "average": 14.2894736842105,
    "result": "Admis",
    "school": "Lycée  Mederdra"
  },
  {
    "name": "Mariem Isselmou Nemine",
    "number": 36748,
    "average": 14.2875,
    "result": "Admis",
    "school": "Iman  ksar"
  },
  {
    "name": "Fatma Mohamed Mahmoud Sidi Mahmoud",
    "number": 68933,
    "average": 14.2875,
    "result": "Admis",
    "school": "Lycée  Nouadhibou 3"
  },
  {
    "name": "Minna Mohamed Lemine Hamed",
    "number": 23477,
    "average": 14.275,
    "result": "Admis",
    "school": "Groupe Scolaire Waghif Maarif"
  },
  {
    "name": "Fatimetou Abdellahi Elemine",
    "number": 59910,
    "average": 14.275,
    "result": "Admis",
    "school": "ELMOURAD"
  },
  {
    "name": "Mariem Mohamed Sidiya Eby El Maali",
    "number": 52142,
    "average": 14.275,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Lalla Mohamed Enne",
    "number": 42255,
    "average": 14.275,
    "result": "Admis",
    "school": "Lycée Aioun 1"
  },
  {
    "name": "Mohamed Taha Chouaib Slama",
    "number": 33049,
    "average": 14.275,
    "result": "Admis",
    "school": "Lycée mon AFRIQUE"
  },
  {
    "name": "Mohamed Mohamed Sidi Aboubacar",
    "number": 55830,
    "average": 14.275,
    "result": "Admis",
    "school": "Groupe Scolaire Waghif Maarif"
  },
  {
    "name": "Oum Kelthoum Yeslem Didi",
    "number": 51319,
    "average": 14.2631578947368,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Hawa Mohamed El Bar",
    "number": 32244,
    "average": 14.2631578947368,
    "result": "Admis",
    "school": "Lycée Aghchorguit"
  },
  {
    "name": "Emnane Hamoudy Jaghdane",
    "number": 52457,
    "average": 14.2625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Saleh Abdoullah Sabougnouma",
    "number": 9833,
    "average": 14.25,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Zeina Sadagh El Arby",
    "number": 5716,
    "average": 14.25,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Mohamed Mahmoud Cheickna Yahdhih",
    "number": 50459,
    "average": 14.25,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Mohamed Yahya Sidi Heye",
    "number": 22747,
    "average": 14.25,
    "result": "Admis",
    "school": "Sebil Timbédra"
  },
  {
    "name": "Bechir Elghotob Houeiriya",
    "number": 36029,
    "average": 14.25,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Vatimettou Hameni El Moctar",
    "number": 46032,
    "average": 14.25,
    "result": "Admis",
    "school": "Lycée Aoujeft"
  },
  {
    "name": "Mohamed Lemine Mohamed Mahmoud Mohamed Lemine",
    "number": 41582,
    "average": 14.2375,
    "result": "Admis",
    "school": "Imam El Ghazaly KSAR"
  },
  {
    "name": "Sarra Abderrahmane El Ketab",
    "number": 30904,
    "average": 14.2368421052632,
    "result": "Admis",
    "school": "Lycée Levraiwa"
  },
  {
    "name": "Aminetou Chiva Mohamed Lemine Cheikh Ahmed",
    "number": 27737,
    "average": 14.225,
    "result": "Admis",
    "school": "Collège Haye Madrid-NDB"
  },
  {
    "name": "Fatimetou Hamoud Hamoud",
    "number": 54227,
    "average": 14.225,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Mounina Isselmou Beheitt",
    "number": 23815,
    "average": 14.22,
    "result": "Admis",
    "school": "Lycée Excellence 1"
  },
  {
    "name": "Mohamed Abdellahi Mohamed El Mehdi Mohamed Cheikh",
    "number": 68014,
    "average": 14.2125,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Mohamed Cheikh Sidi El Moktar",
    "number": 68396,
    "average": 14.2,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed El Hacen Mohamed Lemine Gary",
    "number": 44020,
    "average": 14.2,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Aziz Isselmou El Maaloum",
    "number": 48099,
    "average": 14.2,
    "result": "Admis",
    "school": "Lycée Boustailla"
  },
  {
    "name": "Chmes Dine Dahmed Lekhliva",
    "number": 38221,
    "average": 14.2,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mohamed Seidena Omar Sidi Ali",
    "number": 25836,
    "average": 14.2,
    "result": "Admis",
    "school": "SABRE EL HOURA"
  },
  {
    "name": "Mohamed'El Moustapha Mohamed Salem El Moujeded",
    "number": 52345,
    "average": 14.2,
    "result": "Admis",
    "school": "Collège Tiguent"
  },
  {
    "name": "Binta Mamadou Diallo",
    "number": 59058,
    "average": 14.1875,
    "result": "Admis",
    "school": "El Vaida El Mina"
  },
  {
    "name": "Dade Soueilek Salek",
    "number": 36554,
    "average": 14.1842105263158,
    "result": "Admis",
    "school": "Collége Laweinatt"
  },
  {
    "name": "Selemhe Nagi Elalem",
    "number": 71104,
    "average": 14.1842105263158,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Aminetou Sid'El Moktar Jean",
    "number": 43657,
    "average": 14.175,
    "result": "Admis",
    "school": "AVAGH EL MOUSTAGHBEL TZN"
  },
  {
    "name": "Elhabib Mohamed Abdellahi El Habib",
    "number": 40312,
    "average": 14.175,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Brahim Mohamed Mahmoud Sid'Ahmed",
    "number": 23976,
    "average": 14.175,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Fatmetou Mohamed Mahmoud Beddy",
    "number": 61941,
    "average": 14.175,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Lemin Nagi Said",
    "number": 43580,
    "average": 14.175,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Cheikh Mouftah Mohamden Cheikh Ahmed",
    "number": 41737,
    "average": 14.175,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Youssef Yacoub Hamoud",
    "number": 22520,
    "average": 14.175,
    "result": "Admis",
    "school": "Ecole Privée RAWAE"
  },
  {
    "name": "Bouchra Mohamed Baba Oubeid",
    "number": 53061,
    "average": 14.1625,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Mamadou Niang",
    "number": 43091,
    "average": 14.15,
    "result": "Admis",
    "school": "Lycee Tekane"
  },
  {
    "name": "Aminetou Mohamedou Chrif El Mokhtar",
    "number": 44643,
    "average": 14.15,
    "result": "Admis",
    "school": "ECOLE CHEIKH ABDOUKA"
  },
  {
    "name": "Ahmed Sidi Mohamed Ahmed Horma",
    "number": 46301,
    "average": 14.15,
    "result": "Admis",
    "school": "Nizari Arafat"
  },
  {
    "name": "Mariem Saleck Abdi",
    "number": 35317,
    "average": 14.15,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Hamza Ahmedou Baba",
    "number": 29776,
    "average": 14.15,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Cheikh El Ghadhi El Moustapha Abd El Jelil",
    "number": 46894,
    "average": 14.15,
    "result": "Admis",
    "school": "Lycée  Aleg"
  },
  {
    "name": "Lemina Sidiya Sidi Baba",
    "number": 55148,
    "average": 14.15,
    "result": "Admis",
    "school": "Ghawavil El Maarif TZN"
  },
  {
    "name": "Cheikh Eddy Tijani",
    "number": 38352,
    "average": 14.15,
    "result": "Admis",
    "school": "Collége Tintane 2"
  },
  {
    "name": "Mohamed Yeslem Deyin Bezbadi",
    "number": 24183,
    "average": 14.15,
    "result": "Admis",
    "school": "Anwar El Houda privée"
  },
  {
    "name": "Vatimetou Zehra Mohamed Salem El Hachmy",
    "number": 33625,
    "average": 14.1375,
    "result": "Admis",
    "school": "NEJAH- Bassiknou"
  },
  {
    "name": "Salka Haidi Massa",
    "number": 46906,
    "average": 14.1315789473684,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Lalla Aicha Itawel Oumrou Moulaye Ely",
    "number": 59716,
    "average": 14.125,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Abou Abderrahmane Dia",
    "number": 54177,
    "average": 14.125,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Nana Ahmed Noune",
    "number": 50160,
    "average": 14.125,
    "result": "Admis",
    "school": "Aboudoujana"
  },
  {
    "name": "Abdallahi Mohamed Saleck Beidje",
    "number": 42189,
    "average": 14.125,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Dedda Abdellahi Cheikh Mohameden Issa",
    "number": 67833,
    "average": 14.125,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "Mohamed Yahya Naji Vall",
    "number": 72889,
    "average": 14.125,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Egouya Babe M'Barek",
    "number": 13908,
    "average": 14.1184210526316,
    "result": "Admis",
    "school": "Tamchekett Candidat  Libre"
  },
  {
    "name": "Sidi Mohamed Mohamed Mahmoud Boudje",
    "number": 58291,
    "average": 14.1125,
    "result": "Admis",
    "school": "Lycée Guerrou"
  },
  {
    "name": "Ghlahoum Jiddou Boubacar",
    "number": 30595,
    "average": 14.1052631578947,
    "result": "Admis",
    "school": "College Arafat 8"
  },
  {
    "name": "Savia Mohamed Mahmoud Yaghoub",
    "number": 45424,
    "average": 14.1,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Abdelaahi Mohamed Bene",
    "number": 50972,
    "average": 14.1,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Sadough Baba Moulaye Idriss",
    "number": 35724,
    "average": 14.1,
    "result": "Admis",
    "school": "Missbah Néma"
  },
  {
    "name": "Mohamed Mahmoud Ahmed Taleb Mohamed Saghir",
    "number": 42784,
    "average": 14.1,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mohamed Yacoub Amar Salem",
    "number": 24825,
    "average": 14.0875,
    "result": "Admis",
    "school": "Lycée Excellence 2"
  },
  {
    "name": "Roughaya El Moustapha El Bah",
    "number": 55832,
    "average": 14.0875,
    "result": "Admis",
    "school": "El Maarif EL HOURA TZN"
  },
  {
    "name": "Abdellahi Mahfoudh Sidina",
    "number": 34945,
    "average": 14.075,
    "result": "Admis",
    "school": "El Mourad TZN"
  },
  {
    "name": "Lamty Aly Ebeidou",
    "number": 38257,
    "average": 14.075,
    "result": "Admis",
    "school": "College  Guerrou"
  },
  {
    "name": "Ghaliya Mohamed Dhaker",
    "number": 42811,
    "average": 14.075,
    "result": "Admis",
    "school": "Lycée Tamchekett"
  },
  {
    "name": "Idy Cheikh Hadrami Abdel Baghy",
    "number": 39431,
    "average": 14.075,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Lalia Fodié Sylla",
    "number": 33735,
    "average": 14.075,
    "result": "Admis",
    "school": "Lycée Ghabou"
  },
  {
    "name": "Mariem Chrif El Mokhtar Zeini",
    "number": 34204,
    "average": 14.0657894736842,
    "result": "Admis",
    "school": "Lycée Tichit"
  },
  {
    "name": "Khadijetou Sidi Bouya Eyene",
    "number": 42203,
    "average": 14.0657894736842,
    "result": "Admis",
    "school": "Eloumeriya Arafat"
  },
  {
    "name": "Aminetou Yahye Beibacar",
    "number": 11545,
    "average": 14.0526315789474,
    "result": "Admis",
    "school": "Arrondissement -Dar El Barka Candidat  Libre"
  },
  {
    "name": "Bouna Dja Mohamed Lemine Babe El Khalifa",
    "number": 4258,
    "average": 14.05,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Aminetou Bemba Mohamed Vall",
    "number": 52810,
    "average": 14.05,
    "result": "Admis",
    "school": "Dar Naim Candidat  Libre"
  },
  {
    "name": "Mahjouba Mohamed Melainine Seck",
    "number": 51155,
    "average": 14.05,
    "result": "Admis",
    "school": "Collége Mbarka Wamara"
  },
  {
    "name": "Mohamedou Mohamed Ayad",
    "number": 22776,
    "average": 14.05,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Aicha Mohamed Lemine Amar Maouloud",
    "number": 47687,
    "average": 14.05,
    "result": "Admis",
    "school": "Lycée Aoujeft"
  },
  {
    "name": "Fatimetou Moulaye Deikhene",
    "number": 28148,
    "average": 14.05,
    "result": "Admis",
    "school": "Lycée  Nema"
  },
  {
    "name": "Yehya Mohamed Saleck El Gharabi",
    "number": 51968,
    "average": 14.05,
    "result": "Admis",
    "school": "Ejyal EL Moustaghbal Teyaret"
  },
  {
    "name": "Habib Mohamed Lemine Emane",
    "number": 40913,
    "average": 14.05,
    "result": "Admis",
    "school": "Lycée Mebdouaa 1"
  },
  {
    "name": "Oum Eimen Sidi Mohamed El Ghaouth",
    "number": 24297,
    "average": 14.0394736842105,
    "result": "Admis",
    "school": "Collége Bouir El Ben"
  },
  {
    "name": "Sid'Ahmed Abdellahi Abdi Ould Jiyed",
    "number": 51191,
    "average": 14.0375,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Mohamed Vadel Mohamed Ejmeil",
    "number": 46043,
    "average": 14.0375,
    "result": "Admis",
    "school": "El Imtiyaz El Viely-MLJ"
  },
  {
    "name": "Cheikha Mowza Abou Larabass",
    "number": 71973,
    "average": 14.0375,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Tah Mohamed Salem Hemeina",
    "number": 22906,
    "average": 14.025,
    "result": "Admis",
    "school": "Rajaa  1 Carrafour"
  },
  {
    "name": "El Ghale Ahmed Salem Baba Ahmed",
    "number": 40185,
    "average": 14.025,
    "result": "Admis",
    "school": "EteEhil"
  },
  {
    "name": "El Khadhra Mohamed Meilid",
    "number": 35556,
    "average": 14.025,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Mohamed Mohamed Lemine Ahmed Ghayeb",
    "number": 34257,
    "average": 14.025,
    "result": "Admis",
    "school": "Lycée  Nema"
  },
  {
    "name": "Sokhna Adama Abdoulaye N'Diaye",
    "number": 32168,
    "average": 14.025,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "El Hassen Zayed Mohamed Emane",
    "number": 41463,
    "average": 14.025,
    "result": "Admis",
    "school": "Lycée Mebdouaa 1"
  },
  {
    "name": "Mariem Mohamed Malick",
    "number": 32599,
    "average": 14.025,
    "result": "Admis",
    "school": "Menab El Ouloum TZN"
  },
  {
    "name": "Mariem Hamoud Ebbatt",
    "number": 56708,
    "average": 14.025,
    "result": "Admis",
    "school": "Imtiyaz Toujounine"
  },
  {
    "name": "Mamadou Oumar Kane",
    "number": 38555,
    "average": 14.0125,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Coumba Mamadou Sow",
    "number": 6751,
    "average": 14.0,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "El Moustapha Sidi Herme",
    "number": 27950,
    "average": 14.0,
    "result": "Admis",
    "school": "Lycee Mata Moulana"
  },
  {
    "name": "Fatimetou Mohamed Abeidella",
    "number": 2848,
    "average": 14.0,
    "result": "Admis",
    "school": "Mbagne Candidat  Libre"
  },
  {
    "name": "Fatimetou El Moctar Mohameden",
    "number": 27662,
    "average": 14.0,
    "result": "Admis",
    "school": "ENNASSR  TVZ"
  },
  {
    "name": "Toutou Mohamed Haden",
    "number": 48448,
    "average": 14.0,
    "result": "Admis",
    "school": "Digh Ksar"
  },
  {
    "name": "Sidi Mohamed El Hadj El Kebed",
    "number": 51462,
    "average": 14.0,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Ely Cheikh Mohamed Tada",
    "number": 64519,
    "average": 14.0,
    "result": "Admis",
    "school": "Lycée  Rkiz"
  },
  {
    "name": "Havsa Cheikh Sidi Mohamed Babane",
    "number": 25261,
    "average": 14.0,
    "result": "Admis",
    "school": "Lycée Boukhzama"
  },
  {
    "name": "Oum El Kheirat Mohamed Lemine Cheriv",
    "number": 41375,
    "average": 14.0,
    "result": "Admis",
    "school": "El Khiyar R'Kiz"
  },
  {
    "name": "Mariem Saad Bouh Abdallah",
    "number": 36869,
    "average": 14.0,
    "result": "Admis",
    "school": "College Nema 1"
  },
  {
    "name": "Lalle Fatme Youssef El Id",
    "number": 22353,
    "average": 14.0,
    "result": "Admis",
    "school": "El Menara Rosso"
  },
  {
    "name": "Aïcha Mohamed El Aghib Limame",
    "number": 33546,
    "average": 14.0,
    "result": "Admis",
    "school": "El MENHEL EL JEDID  - NDB"
  },
  {
    "name": "M'Hamed Ahmed Salem Bekar",
    "number": 39366,
    "average": 14.0,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Nena Hassene Demba",
    "number": 45786,
    "average": 13.9875,
    "result": "Admis",
    "school": "Compléxe El Vadila Maghta Lehj"
  },
  {
    "name": "Zeinebou Mamadou Hamer Fall",
    "number": 8725,
    "average": 13.975,
    "result": "Admis",
    "school": "Rosso Candidat  Libre"
  },
  {
    "name": "Mohamed Ahmed Bazeid Bouleriah",
    "number": 40819,
    "average": 13.975,
    "result": "Admis",
    "school": "Sebil Nejah KSAR"
  },
  {
    "name": "Vatimetou Ahmed Jebbe",
    "number": 39693,
    "average": 13.975,
    "result": "Admis",
    "school": "Lycée Excellence 3"
  },
  {
    "name": "Mariem Atahallah Nour Dine",
    "number": 59875,
    "average": 13.975,
    "result": "Admis",
    "school": "Lycée Excellence 4 TZN"
  },
  {
    "name": "Alaty Ghaithi Ledhem",
    "number": 28166,
    "average": 13.975,
    "result": "Admis",
    "school": "Lycée Militaire"
  },
  {
    "name": "Ahmed Mohamed Saleck",
    "number": 63217,
    "average": 13.975,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Mohamedou Bocar Anne",
    "number": 36978,
    "average": 13.975,
    "result": "Admis",
    "school": "langue exc ndb"
  },
  {
    "name": "Mariem Mohamed Lemine Anza",
    "number": 30912,
    "average": 13.975,
    "result": "Admis",
    "school": "Sebil Néma"
  },
  {
    "name": "Nate Saadna Sidi Mohamed",
    "number": 57155,
    "average": 13.9736842105263,
    "result": "Admis",
    "school": "El Islah Raid  Arafat"
  },
  {
    "name": "Aminetou Al Havedh Dembiya",
    "number": 24283,
    "average": 13.9736842105263,
    "result": "Admis",
    "school": "El Khiyar R'Kiz"
  },
  {
    "name": "Khadej Abdellahi Sidi",
    "number": 56497,
    "average": 13.9625,
    "result": "Admis",
    "school": "College Nouadhibou 3"
  },
  {
    "name": "Ben Aouf Mohamed Mahmoud Mohamd' Ennabgha",
    "number": 67045,
    "average": 13.9625,
    "result": "Admis",
    "school": "EL Medina Toujounine"
  },
  {
    "name": "Habssa Mohamed Leghedhav Saleck",
    "number": 12073,
    "average": 13.95,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Saadna N'Deide Yoube",
    "number": 4898,
    "average": 13.95,
    "result": "Admis",
    "school": "Nema Candidat  Libre"
  },
  {
    "name": "Mohamed Maouloud Abdou Emy",
    "number": 49039,
    "average": 13.95,
    "result": "Admis",
    "school": "Lycée Rosso 2"
  },
  {
    "name": "Youma Taleb Ely Mohamed Ahmed",
    "number": 22764,
    "average": 13.95,
    "result": "Admis",
    "school": "Collège El Mabrouk"
  }
];

// عرض النتائج في القائمة
function displayResults(results) {
  resultsList.innerHTML = "";
  if (results.length === 0) {
    resultsList.innerHTML = "<li>لا توجد نتائج مطابقة</li>";
    return;
  }

  results.forEach(d => {
    const item = document.createElement("li");
    item.className = "bg-gray-100 p-4 rounded shadow-sm";
    item.innerHTML = `
      <strong>الاسم:</strong> ${d.name}<br>
      <strong>رقم الجلوس:</strong> ${d.number}<br>
      <strong>المعدل:</strong> ${d.average}<br>
      <strong>النتيجة:</strong> ${d.result}<br>
      <strong>المدرسة:</strong> ${d.school}
    `;
    resultsList.appendChild(item);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = data.filter(d =>
    d.name.toLowerCase().includes(query) ||
    d.number.toString().includes(query)
  );
  displayResults(filtered);
});

// عرض الكل مبدئيًا
displayResults(data);
