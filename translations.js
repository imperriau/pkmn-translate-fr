const pokemonTranslations = new Map([
    ["Bulbasaur", "Bulbizarre"],
    ["MissingNo.", "MissingNo."],
    ["Bulbasaur", "Bulbizarre"],
    ["Ivysaur", "Herbizarre"],
    ["Venusaur", "Florizarre"],
    ["Charmander", "Salamèche"],
    ["Charmeleon", "Reptincel"],
    ["Charizard", "Dracaufeu"],
    ["Squirtle", "Carapuce"],
    ["Wartortle", "Carabaffe"],
    ["Blastoise", "Tortank"],
    ["Caterpie", "Chenipan"],
    ["Metapod", "Chrysacier"],
    ["Butterfree", "Papilusion"],
    ["Weedle", "Aspicot"],
    ["Kakuna", "Coconfort"],
    ["Beedrill", "Dardargnan"],
    ["Pidgey", "Roucool"],
    ["Pidgeotto", "Roucoups"],
    ["Pidgeot", "Roucarnage"],
    ["Raticate", "Rattatac"],
    ["Spearow", "Piafabec"],
    ["Fearow", "Rapasdepic"],
    ["Ekans", "Abo"],
    ["Sandshrew", "Sabelette"],
    ["Sandslash", "Sablaireau"],
    ["Nidoran♀", "Nidoran♀"],
    ["Nidoran♂", "Nidoran♂"],
    ["Clefairy", "Mélofée"],
    ["Clefable", "Mélodelfe"],
    ["Vulpix", "Goupix"],
    ["Ninetales", "Feunard"],
    ["Jigglypuff", "Rondoudou"],
    ["Wigglytuff", "Grodoudou"],
    ["Zubat", "Nosferapti"],
    ["Golbat", "Nosferalto"],
    ["Oddish", "Mystherbe"],
    ["Gloom", "Ortide"],
    ["Vileplume", "Rafflesia"],
    ["Venonat", "Mimitoss"],
    ["Venomoth", "Aéromite"],
    ["Diglett", "Taupiqueur"],
    ["Dugtrio", "Triopikeur"],
    ["Meowth", "Miaouss"],
    ["Psyduck", "Psykokwak"],
    ["Golduck", "Akwakwak"],
    ["Mankey", "Férosinge"],
    ["Primeape", "Colossinge"],
    ["Growlithe", "Caninos"],
    ["Arcanine", "Arcanin"],
    ["Poliwag", "Ptitard"],
    ["Poliwhirl", "Têtarte"],
    ["Poliwrath", "Tartard"],
    ["Machop", "Machoc"],
    ["Machoke", "Machopeur"],
    ["Machamp", "Mackogneur"],
    ["Bellsprout", "Chétiflor"],
    ["Weepinbell", "Boustiflor"],
    ["Victreebel", "Empiflor"],
    ["Geodude", "Racaillou"],
    ["Graveler", "Gravalanch"],
    ["Golem", "Grolem"],
    ["Rapidash", "Galopa"],
    ["Slowpoke", "Ramoloss"],
    ["Slowbro", "Flagadoss"],
    ["Magnemite", "Magnéti"],
    ["Magneton", "Magnéton"],
    ["Farfetch'd", "Canarticho"],
    ["Seel", "Otaria"],
    ["Dewgong", "Lamantine"],
    ["Grimer", "Tadmorv"],
    ["Muk", "Grotadmorv"],
    ["Shellder", "Kokiyas"],
    ["Cloyster", "Crustabri"],
    ["Gastly", "Fantominus"],
    ["Haunter", "Spectrum"],
    ["Gengar", "Ectoplasma"],
    ["Drowzee", "Soporifik"],
    ["Hypno", "Hypnomade"],
    ["Kingler", "Krabboss"],
    ["Voltorb", "Voltorbe"],
    ["Electrode", "Électrode"],
    ["Exeggcute", "Noeunoeuf"],
    ["Exeggutor", "Noadkoko"],
    ["Cubone", "Osselait"],
    ["Marowak", "Ossatueur"],
    ["Hitmonlee", "Kicklee"],
    ["Hitmonchan", "Tygnon"],
    ["Lickitung", "Excelangue"],
    ["Koffing", "Smogo"],
    ["Weezing", "Smogogo"],
    ["Rhyhorn", "Rhinocorne"],
    ["Rhydon", "Rhinoféros"],
    ["Chansey", "Leveinard"],
    ["Tangela", "Saquedeneu"],
    ["Kangaskhan", "Kangourex"],
    ["Horsea", "Hypotrempe"],
    ["Seadra", "Hypocéan"],
    ["Goldeen", "Poissirène"],
    ["Seaking", "Poissoroy"],
    ["Staryu", "Stari"],
    ["Starmie", "Staross"],
    ["Mr. Mime", "M. Mime"],
    ["Scyther", "Insécateur"],
    ["Jynx", "Lippoutou"],
    ["Electabuzz", "Élektek"],
    ["Pinsir", "Scarabrute"],
    ["Magikarp", "Magicarpe"],
    ["Gyarados", "Léviator"],
    ["Lapras", "Lokhlass"],
    ["Ditto", "Métamorph"],
    ["Eevee", "Évoli"],
    ["Vaporeon", "Aquali"],
    ["Jolteon", "Voltali"],
    ["Flareon", "Pyroli"],
    ["Omanyte", "Amonita"],
    ["Omastar", "Amonistar"],
    ["Aerodactyl", "Ptéra"],
    ["Snorlax", "Ronflex"],
    ["Articuno", "Artikodin"],
    ["Zapdos", "Électhor"],
    ["Moltres", "Sulfura"],
    ["Dratini", "Minidraco"],
    ["Dragonair", "Draco"],
    ["Dragonite", "Dracolosse"],
    ["Chikorita", "Germignon"],
    ["Bayleef", "Macronium"],
    ["Meganium", "Méganium"],
    ["Cyndaquil", "Héricendre"],
    ["Quilava", "Feurisson"],
    ["Totodile", "Kaiminus"],
    ["Croconaw", "Crocrodil"],
    ["Feraligatr", "Aligatueur"],
    ["Sentret", "Fouinette"],
    ["Furret", "Fouinar"],
    ["Noctowl", "Noarfang"],
    ["Ledyba", "Coxy"],
    ["Ledian", "Coxyclaque"],
    ["Spinarak", "Mimigal"],
    ["Ariados", "Migalos"],
    ["Crobat", "Nostenfer"],
    ["Chinchou", "Loupio"],
    ["Cleffa", "Mélo"],
    ["Igglybuff", "Toudoudou"],
    ["Mareep", "Wattouat"],
    ["Flaaffy", "Lainergie"],
    ["Ampharos", "Pharamp"],
    ["Bellossom", "Joliflor"],
    ["Sudowoodo", "Simularbre"],
    ["Politoed", "Tarpaud"],
    ["Hoppip", "Granivol"],
    ["Skiploom", "Floravol"],
    ["Jumpluff", "Cotovol"],
    ["Aipom", "Capumain"],
    ["Sunkern", "Tournegrin"],
    ["Sunflora", "Héliatronc"],
    ["Wooper", "Axoloto"],
    ["Quagsire", "Maraiste"],
    ["Espeon", "Mentali"],
    ["Umbreon", "Noctali"],
    ["Murkrow", "Cornèbre"],
    ["Slowking", "Roigada"],
    ["Misdreavus", "Feuforêve"],
    ["Unown", "Zarbi"],
    ["Wobbuffet", "Qulbutoké"],
    ["Pineco", "Pomdepik"],
    ["Forretress", "Foretress"],
    ["Dunsparce", "Insolourdo"],
    ["Gligar", "Scorplane"],
    ["Scizor", "Cizayox"],
    ["Shuckle", "Caratroc"],
    ["Heracross", "Scarhino"],
    ["Sneasel", "Farfuret"],
    ["Slugma", "Limagma"],
    ["Magcargo", "Volcaropod"],
    ["Swinub", "Marcacrin"],
    ["Piloswine", "Cochignon"],
    ["Corsola", "Corayon"],
    ["Remoraid", "Rémoraid"],
    ["Delibird", "Cadoizo"],
    ["Mantine", "Démanta"],
    ["Skarmory", "Airmure"],
    ["Houndour", "Malosse"],
    ["Houndoom", "Démolosse"],
    ["Kingdra", "Hyporoi"],
    ["Stantler", "Cerfrousse"],
    ["Smeargle", "Queulorior"],
    ["Tyrogue", "Debugant"],
    ["Hitmontop", "Kapoera"],
    ["Smoochum", "Lippouti"],
    ["Elekid", "Élekid"],
    ["Miltank", "Écrémeuh"],
    ["Blissey", "Leuphorie"],
    ["Larvitar", "Embrylex"],
    ["Pupitar", "Ymphect"],
    ["Tyranitar", "Tyranocif"],
    ["Ho-Oh", "Ho-Oh"],
    ["Treecko", "Arcko"],
    ["Grovyle", "Massko"],
    ["Sceptile", "Jungko"],
    ["Torchic", "Poussifeu"],
    ["Combusken", "Galifeu"],
    ["Blaziken", "Braségali"],
    ["Mudkip", "Gobou"],
    ["Marshtomp", "Flobio"],
    ["Swampert", "Laggron"],
    ["Poochyena", "Medhyèna"],
    ["Mightyena", "Grahyèna"],
    ["Zigzagoon", "Zigzaton"],
    ["Linoone", "Linéon"],
    ["Wurmple", "Chenipotte"],
    ["Silcoon", "Armulys"],
    ["Beautifly", "Charmillon"],
    ["Cascoon", "Blindalys"],
    ["Dustox", "Papinox"],
    ["Lotad", "Nénupiot"],
    ["Seedot", "Grainipiot"],
    ["Nuzleaf", "Pifeuil"],
    ["Shiftry", "Tengalice"],
    ["Taillow", "Nirondelle"],
    ["Swellow", "Hélédelle"],
    ["Wingull", "Goélise"],
    ["Pelipper", "Bekipan"],
    ["Ralts", "Tarsal"],
    ["Surskit", "Arakdo"],
    ["Masquerain", "Maskadra"],
    ["Shroomish", "Balignon"],
    ["Breloom", "Chapignon"],
    ["Slakoth", "Parecool"],
    ["Slaking", "Monaflèmit"],
    ["Nincada", "Ningale"],
    ["Shedinja", "Munja"],
    ["Whismur", "Chuchmur"],
    ["Loudred", "Ramboum"],
    ["Exploud", "Brouhabam"],
    ["Nosepass", "Tarinor"],
    ["Sableye", "Ténéfix"],
    ["Mawile", "Mysdibule"],
    ["Aron", "Galekid"],
    ["Lairon", "Galegon"],
    ["Aggron", "Galeking"],
    ["Meditite", "Méditikka"],
    ["Medicham", "Charmina"],
    ["Electrike", "Dynavolt"],
    ["Manectric", "Élecsprint"],
    ["Plusle", "Posipi"],
    ["Minun", "Négapi"],
    ["Volbeat", "Muciole"],
    ["Illumise", "Lumivole"],
    ["Roselia", "Rosélia"],
    ["Gulpin", "Gloupti"],
    ["Swalot", "Avaltout"],
    ["Numel", "Chamallot"],
    ["Camerupt", "Camérupt"],
    ["Torkoal", "Chartor"],
    ["Grumpig", "Groret"],
    ["Trapinch", "Kraknoix"],
    ["Vibrava", "Vibraninf"],
    ["Flygon", "Libégon"],
    ["Swablu", "Tylton"],
    ["Zangoose", "Mangriff"],
    ["Seviper", "Séviper"],
    ["Lunatone", "Séléroc"],
    ["Solrock", "Solaroc"],
    ["Barboach", "Barloche"],
    ["Whiscash", "Barbicha"],
    ["Corphish", "Écrapince"],
    ["Crawdaunt", "Colhomard"],
    ["Baltoy", "Balbuto"],
    ["Claydol", "Kaorine"],
    ["Lileep", "Lilia"],
    ["Cradily", "Vacilys"],
    ["Feebas", "Barpau"],
    ["Milotic", "Milobellus"],
    ["Castform", "Morphéo"],
    ["Shuppet", "Polichombr"],
    ["Banette", "Branette"],
    ["Duskull", "Skelénox"],
    ["Dusclops", "Téraclope"],
    ["Chimecho", "Éoko"],
    ["Wynaut", "Okéoké"],
    ["Snorunt", "Stalgamin"],
    ["Glalie", "Oniglali"],
    ["Spheal", "Obalie"],
    ["Sealeo", "Phogleur"],
    ["Walrein", "Kaimorse"],
    ["Clamperl", "Coquiperl"],
    ["Huntail", "Serpang"],
    ["Gorebyss", "Rosabyss"],
    ["Luvdisc", "Lovdisc"],
    ["Bagon", "Draby"],
    ["Shelgon", "Drackhaus"],
    ["Salamence", "Drattak"],
    ["Beldum", "Terhal"],
    ["Metang", "Métang"],
    ["Metagross", "Métalosse"],
    ["Turtwig", "Tortipouss"],
    ["Grotle", "Boskara"],
    ["Chimchar", "Ouisticram"],
    ["Monferno", "Chimpenfeu"],
    ["Infernape", "Simiabraz"],
    ["Piplup", "Tiplouf"],
    ["Prinplup", "Prinplouf"],
    ["Empoleon", "Pingoléon"],
    ["Starly", "Étourmi"],
    ["Staravia", "Étourvol"],
    ["Staraptor", "Étouraptor"],
    ["Bidoof", "Keunotor"],
    ["Bibarel", "Castorno"],
    ["Kricketot", "Crikzik"],
    ["Kricketune", "Mélokrik"],
    ["Shinx", "Lixy"],
    ["Budew", "Rozbouton"],
    ["Cranidos", "Kranidos"],
    ["Rampardos", "Charkos"],
    ["Shieldon", "Dinoclier"],
    ["Burmy", "Cheniti"],
    ["Wormadam", "Cheniselle"],
    ["Mothim", "Papilord"],
    ["Combee", "Apitrini"],
    ["Vespiquen", "Apireine"],
    ["Buizel", "Mustébouée"],
    ["Floatzel", "Mustéflott"],
    ["Cherubi", "Ceribou"],
    ["Cherrim", "Ceriflor"],
    ["Shellos", "Sancoki"],
    ["Gastrodon", "Tritosor"],
    ["Ambipom", "Capidextre"],
    ["Drifloon", "Baudrive"],
    ["Drifblim", "Grodrive"],
    ["Buneary", "Laporeille"],
    ["Lopunny", "Lockpin"],
    ["Mismagius", "Magirêve"],
    ["Honchkrow", "Corboss"],
    ["Glameow", "Chaglam"],
    ["Purugly", "Chaffreux"],
    ["Chingling", "Korillon"],
    ["Stunky", "Moufouette"],
    ["Skuntank", "Moufflair"],
    ["Bronzor", "Archéomire"],
    ["Bronzong", "Archéodong"],
    ["Bonsly", "Manzaï"],
    ["Mime Jr.", "Mime Jr."],
    ["Happiny", "Ptiravi"],
    ["Chatot", "Pijako"],
    ["Gible", "Griknot"],
    ["Gabite", "Carmache"],
    ["Garchomp", "Carchacrok"],
    ["Munchlax", "Goinfrex"],
    ["Hippowdon", "Hippodocus"],
    ["Skorupi", "Rapion"],
    ["Drapion", "Drascore"],
    ["Croagunk", "Cradopaud"],
    ["Toxicroak", "Coatox"],
    ["Carnivine", "Vortente"],
    ["Finneon", "Écayon"],
    ["Lumineon", "Luminéon"],
    ["Mantyke", "Babimanta"],
    ["Snover", "Blizzi"],
    ["Abomasnow", "Blizzaroi"],
    ["Weavile", "Dimoret"],
    ["Magnezone", "Magnézone"],
    ["Lickilicky", "Coudlangue"],
    ["Rhyperior", "Rhinastoc"],
    ["Tangrowth", "Bouldeneu"],
    ["Electivire", "Élekable"],
    ["Magmortar", "Maganon"],
    ["Leafeon", "Phyllali"],
    ["Glaceon", "Givrali"],
    ["Gliscor", "Scorvol"],
    ["Mamoswine", "Mammochon"],
    ["Porygon-Z", "Porygon-Z"],
    ["Gallade", "Gallame"],
    ["Probopass", "Tarinorme"],
    ["Dusknoir", "Noctunoir"],
    ["Froslass", "Momartik"],
    ["Rotom", "Motisma"],
    ["Uxie", "Créhelf"],
    ["Mesprit", "Créfollet"],
    ["Azelf", "Créfadet"],
    ["Snivy", "Vipélierre"],
    ["Servine", "Lianaja"],
    ["Serperior", "Majaspic"],
    ["Tepig", "Gruikui"],
    ["Pignite", "Grotichon"],
    ["Emboar", "Roitiflam"],
    ["Oshawott", "Moustillon"],
    ["Dewott", "Mateloutre"],
    ["Samurott", "Clamiral"],
    ["Patrat", "Ratentif"],
    ["Watchog", "Miradar"],
    ["Lillipup", "Ponchiot"],
    ["Herdier", "Ponchien"],
    ["Stoutland", "Mastouffe"],
    ["Purrloin", "Chacripan"],
    ["Liepard", "Léopardus"],
    ["Pansage", "Feuillajou"],
    ["Simisage", "Feuiloutan"],
    ["Pansear", "Flamajou"],
    ["Simisear", "Flamoutan"],
    ["Panpour", "Flotajou"],
    ["Simipour", "Flotoutan"],
    ["Musharna", "Mushana"],
    ["Pidove", "Poichigeon"],
    ["Tranquill", "Colombeau"],
    ["Unfezant", "Déflaisan"],
    ["Blitzle", "Zébibron"],
    ["Zebstrika", "Zéblitz"],
    ["Roggenrola", "Nodulithe"],
    ["Boldore", "Géolithe"],
    ["Gigalith", "Gigalithe"],
    ["Woobat", "Chovsourir"],
    ["Swoobat", "Rhinolove"],
    ["Drilbur", "Rototaupe"],
    ["Excadrill", "Minotaupe"],
    ["Audino", "Nanméouïe"],
    ["Timburr", "Charpenti"],
    ["Gurdurr", "Ouvrifier"],
    ["Conkeldurr", "Bétochef"],
    ["Tympole", "Tritonde"],
    ["Palpitoad", "Batracné"],
    ["Seismitoad", "Crapustule"],
    ["Throh", "Judokrak"],
    ["Sawk", "Karaclée"],
    ["Sewaddle", "Larveyette"],
    ["Swadloon", "Couverdure"],
    ["Leavanny", "Manternel"],
    ["Venipede", "Venipatte"],
    ["Whirlipede", "Scobolide"],
    ["Scolipede", "Brutapode"],
    ["Cottonee", "Doudouvet"],
    ["Whimsicott", "Farfaduvet"],
    ["Petilil", "Chlorobule"],
    ["Lilligant", "Fragilady"],
    ["Basculin", "Bargantua"],
    ["Sandile", "Mascaïman"],
    ["Krokorok", "Escroco"],
    ["Krookodile", "Crocorible"],
    ["Darumaka", "Darumarond"],
    ["Darmanitan", "Darumacho"],
    ["Maractus", "Maracachi"],
    ["Dwebble", "Crabicoque"],
    ["Crustle", "Crabaraque"],
    ["Scraggy", "Baggiguane"],
    ["Scrafty", "Baggaïd"],
    ["Sigilyph", "Cryptéro"],
    ["Yamask", "Tutafeh"],
    ["Cofagrigus", "Tutankafer"],
    ["Tirtouga", "Carapagos"],
    ["Carracosta", "Mégapagos"],
    ["Archen", "Arkéapti"],
    ["Archeops", "Aéroptéryx"],
    ["Trubbish", "Miamiasme"],
    ["Garbodor", "Miasmax"],
    ["Minccino", "Chinchidou"],
    ["Cinccino", "Pashmilla"],
    ["Gothita", "Scrutella"],
    ["Gothorita", "Mesmérella"],
    ["Gothitelle", "Sidérella"],
    ["Solosis", "Nucléos"],
    ["Duosion", "Méios"],
    ["Reuniclus", "Symbios"],
    ["Ducklett", "Couaneton"],
    ["Swanna", "Lakmécygne"],
    ["Vanillite", "Sorbébé"],
    ["Vanillish", "Sorboul"],
    ["Vanilluxe", "Sorbouboul"],
    ["Deerling", "Vivaldaim"],
    ["Sawsbuck", "Haydaim"],
    ["Karrablast", "Carabing"],
    ["Escavalier", "Lançargot"],
    ["Foongus", "Trompignon"],
    ["Amoonguss", "Gaulet"],
    ["Frillish", "Viskuse"],
    ["Jellicent", "Moyade"],
    ["Alomomola", "Mamanbo"],
    ["Joltik", "Statitik"],
    ["Galvantula", "Mygavolt"],
    ["Ferroseed", "Grindur"],
    ["Ferrothorn", "Noacier"],
    ["Klink", "Tic"],
    ["Klang", "Clic"],
    ["Klinklang", "Cliticlic"],
    ["Tynamo", "Anchwatt"],
    ["Eelektrik", "Lampéroie"],
    ["Eelektross", "Ohmassacre"],
    ["Elgyem", "Lewsor"],
    ["Beheeyem", "Neitram"],
    ["Litwick", "Funécire"],
    ["Lampent", "Mélancolux"],
    ["Chandelure", "Lugulabre"],
    ["Axew", "Coupenotte"],
    ["Fraxure", "Incisache"],
    ["Haxorus", "Tranchodon"],
    ["Cubchoo", "Polarhume"],
    ["Beartic", "Polagriffe"],
    ["Cryogonal", "Hexagel"],
    ["Shelmet", "Escargaume"],
    ["Accelgor", "Limaspeed"],
    ["Stunfisk", "Limonde"],
    ["Mienfoo", "Kungfouine"],
    ["Mienshao", "Shaofouine"],
    ["Druddigon", "Drakkarmin"],
    ["Golett", "Gringolem"],
    ["Golurk", "Golemastoc"],
    ["Pawniard", "Scalpion"],
    ["Bisharp", "Scalproie"],
    ["Bouffalant", "Frison"],
    ["Rufflet", "Furaiglon"],
    ["Braviary", "Gueriaigle"],
    ["Vullaby", "Vostourno"],
    ["Mandibuzz", "Vaututrice"],
    ["Heatmor", "Aflamanoir"],
    ["Durant", "Fermite"],
    ["Deino", "Solochi"],
    ["Zweilous", "Diamat"],
    ["Hydreigon", "Trioxhydre"],
    ["Larvesta", "Pyronille"],
    ["Volcarona", "Pyrax"],
    ["Cobalion", "Cobaltium"],
    ["Terrakion", "Terrakium"],
    ["Virizion", "Viridium"],
    ["Tornadus", "Boréas"],
    ["Thundurus", "Fulguris"],
    ["Landorus", "Démétéros"],
    ["Chespin", "Marisson"],
    ["Quilladin", "Boguérisse"],
    ["Chesnaught", "Blindépique"],
    ["Fennekin", "Feunnec"],
    ["Braixen", "Roussil"],
    ["Delphox", "Goupelin"],
    ["Froakie", "Grenousse"],
    ["Frogadier", "Croâporal"],
    ["Greninja", "Amphinobi"],
    ["Bunnelby", "Sapereau"],
    ["Diggersby", "Excavarenne"],
    ["Fletchling", "Passerouge"],
    ["Fletchinder", "Braisillon"],
    ["Talonflame", "Flambusard"],
    ["Scatterbug", "Lépidonille"],
    ["Spewpa", "Pérégrain"],
    ["Vivillon", "Prismillon"],
    ["Litleo", "Hélionceau"],
    ["Pyroar", "Némélios"],
    ["Flabébé", "Flabébé"],
    ["Skiddo", "Cabriolaine"],
    ["Gogoat", "Chevroum"],
    ["Pancham", "Pandespiègle"],
    ["Pangoro", "Pandarbare"],
    ["Furfrou", "Couafarel"],
    ["Espurr", "Psystigri"],
    ["Meowstic", "Mistigrix"],
    ["Honedge", "Monorpale"],
    ["Doublade", "Dimoclès"],
    ["Aegislash", "Exagide"],
    ["Spritzee", "Fluvetin"],
    ["Aromatisse", "Cocotine"],
    ["Swirlix", "Sucroquin"],
    ["Slurpuff", "Cupcanaille"],
    ["Inkay", "Sepiatop"],
    ["Malamar", "Sepiatroce"],
    ["Binacle", "Opermine"],
    ["Barbaracle", "Golgopathe"],
    ["Skrelp", "Venalgue"],
    ["Dragalge", "Kravarech"],
    ["Clauncher", "Flingouste"],
    ["Clawitzer", "Gamblast"],
    ["Helioptile", "Galvaran"],
    ["Heliolisk", "Iguolta"],
    ["Tyrunt", "Ptyranidur"],
    ["Tyrantrum", "Rexillius"],
    ["Amaura", "Amagara"],
    ["Aurorus", "Dragmara"],
    ["Sylveon", "Nymphali"],
    ["Hawlucha", "Brutalibré"],
    ["Carbink", "Strassie"],
    ["Goomy", "Mucuscule"],
    ["Sliggoo", "Colimucus"],
    ["Goodra", "Muplodocus"],
    ["Klefki", "Trousselin"],
    ["Phantump", "Brocélôme"],
    ["Trevenant", "Desséliande"],
    ["Pumpkaboo", "Pitrouille"],
    ["Gourgeist", "Banshitrouye"],
    ["Bergmite", "Grelaçon"],
    ["Avalugg", "Séracrawl"],
    ["Noibat", "Sonistrelle"],
    ["Noivern", "Bruyverne"],
    ["Rowlet", "Brindibou"],
    ["Dartrix", "Efflèche"],
    ["Decidueye", "Archéduc"],
    ["Litten", "Flamiaou"],
    ["Torracat", "Matoufeu"],
    ["Incineroar", "Félinferno"],
    ["Popplio", "Otaquin"],
    ["Brionne", "Otarlette"],
    ["Primarina", "Oratoria"],
    ["Pikipek", "Picassaut"],
    ["Trumbeak", "Piclairon"],
    ["Toucannon", "Bazoucan"],
    ["Yungoos", "Manglouton"],
    ["Gumshoos", "Argouste"],
    ["Grubbin", "Larvibule"],
    ["Charjabug", "Chrysapile"],
    ["Vikavolt", "Lucanon"],
    ["Crabrawler", "Crabagarre"],
    ["Oricorio", "Plumeline"],
    ["Cutiefly", "Bombydou"],
    ["Ribombee", "Rubombelle"],
    ["Rockruff", "Rocabot"],
    ["Lycanroc", "Lougaroc"],
    ["Wishiwashi", "Froussardine"],
    ["Mareanie", "Vorastérie"],
    ["Toxapex", "Prédastérie"],
    ["Mudbray", "Tiboudet"],
    ["Mudsdale", "Bourrinos"],
    ["Dewpider", "Araqua"],
    ["Araquanid", "Tarenbulle"],
    ["Fomantis", "Mimantis"],
    ["Lurantis", "Floramantis"],
    ["Morelull", "Spododo"],
    ["Shiinotic", "Lampignon"],
    ["Salandit", "Tritox"],
    ["Salazzle", "Malamandre"],
    ["Stufful", "Nounourson"],
    ["Bewear", "Chelours"],
    ["Bounsweet", "Croquine"],
    ["Steenee", "Candine"],
    ["Tsareena", "Sucreine"],
    ["Comfey", "Guérilande"],
    ["Oranguru", "Gouroutan"],
    ["Passimian", "Quartermac"],
    ["Wimpod", "Sovkipou"],
    ["Golisopod", "Sarmuraï"],
    ["Sandygast", "Bacabouh"],
    ["Palossand", "Trépassable"],
    ["Pyukumuku", "Concombaffe"],
    ["Type: Null", "Type:0"],
    ["Silvally", "Silvallié"],
    ["Minior", "Météno"],
    ["Komala", "Dodoala"],
    ["Turtonator", "Boumata"],
    ["Mimikyu", "Mimiqui"],
    ["Bruxish", "Denticrisse"],
    ["Drampa", "Draïeul"],
    ["Dhelmise", "Sinistrail"],
    ["Jangmo-o", "Bébécaille"],
    ["Hakamo-o", "Écaïd"],
    ["Kommo-o", "Ékaïser"],
    ["Tapu Koko", "Tokorico"],
    ["Tapu Lele", "Tokopiyon"],
    ["Tapu Bulu", "Tokotoro"],
    ["Tapu Fini", "Tokopisco"],
    ["Cosmoem", "Cosmovum"],
    ["Nihilego", "Zéroïd"],
    ["Buzzwole", "Mouscoto"],
    ["Pheromosa", "Cancrelove"],
    ["Xurkitree", "Câblifère"],
    ["Celesteela", "Bamboiselle"],
    ["Kartana", "Katagami"],
    ["Guzzlord", "Engloutyran"],
    ["Poipole", "Vémini"],
    ["Naganadel", "Mandrillon"],
    ["Stakataka", "Ama-ama"],
    ["Blacephalon", "Pierroteknik"],
    ["Grookey", "Ouistempo"],
    ["Thwackey", "Badabouin"],
    ["Rillaboom", "Gorythmic"],
    ["Scorbunny", "Flambino"],
    ["Raboot", "Lapyro"],
    ["Cinderace", "Pyrobut"],
    ["Sobble", "Larméléon"],
    ["Drizzile", "Arrozard"],
    ["Inteleon", "Lézargus"],
    ["Skwovet", "Rongourmand"],
    ["Greedent", "Rongrigou"],
    ["Rookidee", "Minisange"],
    ["Corvisquire", "Bleuseille"],
    ["Corviknight", "Corvaillus"],
    ["Blipbug", "Larvadar"],
    ["Dottler", "Coléodôme"],
    ["Orbeetle", "Astronelle"],
    ["Nickit", "Goupilou"],
    ["Thievul", "Roublenard"],
    ["Gossifleur", "Tournicoton"],
    ["Eldegoss", "Blancoton"],
    ["Wooloo", "Moumouton"],
    ["Dubwool", "Moumouflon"],
    ["Chewtle", "Khélocrok"],
    ["Drednaw", "Torgamord"],
    ["Yamper", "Voltoutou"],
    ["Boltund", "Fulgudog"],
    ["Rolycoly", "Charbi"],
    ["Carkol", "Wagomine"],
    ["Coalossal", "Monthracite"],
    ["Applin", "Verpom"],
    ["Flapple", "Pomdrapi"],
    ["Appletun", "Dratatin"],
    ["Silicobra", "Dunaja"],
    ["Sandaconda", "Dunaconda"],
    ["Cramorant", "Nigosier"],
    ["Arrokuda", "Embrochet"],
    ["Barraskewda", "Hastacuda"],
    ["Toxel", "Toxizap"],
    ["Toxtricity", "Salarsen"],
    ["Sizzlipede", "Grillepattes"],
    ["Centiskorch", "Scolocendre"],
    ["Clobbopus", "Poulpaf"],
    ["Grapploct", "Krakos"],
    ["Sinistea", "Théffroi"],
    ["Polteageist", "Polthégeist"],
    ["Hatenna", "Bibichut"],
    ["Hattrem", "Chapotus"],
    ["Hatterene", "Sorcilence"],
    ["Impidimp", "Grimalin"],
    ["Morgrem", "Fourbelin"],
    ["Grimmsnarl", "Angoliath"],
    ["Obstagoon", "Ixon"],
    ["Perrserker", "Berserkatt"],
    ["Cursola", "Corayôme"],
    ["Sirfetch'd", "Palarticho"],
    ["Mr.Rime", "M. Glaquette"],
    ["Runerigus", "Tutétékri"],
    ["Milcery", "Crèmy"],
    ["Alcremie", "Charmilly"],
    ["Falinks", "Hexadron"],
    ["Pincurchin", "Wattapik"],
    ["Snom", "Frissonille"],
    ["Frosmoth", "Beldeneige"],
    ["Stonjourner", "Dolman"],
    ["Eiscue", "Bekaglaçon"],
    ["Indeedee", "Wimessir"],
    ["Cufant", "Charibari"],
    ["Copperajah", "Pachyradjah"],
    ["Dracozolt", "Galvagon"],
    ["Arctozolt", "Galvagla"],
    ["Dracovish", "Hydragon"],
    ["Arctovish", "Hydragla"],
    ["Duraludon", "Duralugon"],
    ["Dreepy", "Fantyrm"],
    ["Drakloak", "Dispareptil"],
    ["Dragapult", "Lanssorien"],
    ["Eternatus", "Éthernatos"],
    ["Kubfu", "Wushours"],
    ["Glastrier", "Blizzeval"],
    ["Spectrier", "Spectreval"],
    ["Calyrex", "Sylveroy"],
    ["Wyrdeer", "Cerbyllin"],
    ["Kleavor", "Hachécateur"],
    ["Ursaluna", "Ursaking"],
    ["Basculegion", "Paragruel"],
    ["Sneasler", "Farfurex"],
    ["Overqwil", "Qwilpik"],
    ["Lovetolos", "Amovénus"],
    ["Sprigatito", "Poussacha"],
    ["Floragato", "Matourgeon"],
    ["Meowscarada", "Miascarade"],
    ["Fuecoco", "Chochodile"],
    ["Crocalor", "Crocogril"],
    ["Skeledirge", "Flâmigator"],
    ["Quaxly", "Coiffeton"],
    ["Quaxwell", "Canarbello"],
    ["Quaquaval", "Palmaval"],
    ["Lechonk", "Gourmelet"],
    ["Oinkologne", "Fragroin"],
    ["Tarountula", "Tissenboule"],
    ["Spidops", "Filentrappe"],
    ["Nymble", "Lilliterelle"],
    ["Lokix", "Gambex"],
    ["Pawmi", "Pohm"],
    ["Pawmo", "Pohmotte"],
    ["Pawmot", "Pohmarmotte"],
    ["Tandemaus", "Compagnol"],
    ["Maushold", "Famignol"],
    ["Fidough", "Pâtachiot"],
    ["Dachsbun", "Briochien"],
    ["Smoliv", "Olivini"],
    ["Dolliv", "Olivado"],
    ["Squawkabilly", "Tapatoès"],
    ["Nacli", "Selutin"],
    ["Naclstack", "Amassel"],
    ["Garganacl", "Gigansel"],
    ["Charcadet", "Charbambin"],
    ["Armarouge", "Carmadura"],
    ["Ceruledge", "Malvalame"],
    ["Tadbulb", "Têtampoule"],
    ["Bellibolt", "Ampibidou"],
    ["Wattrel", "Zapétrel"],
    ["Kilowattrel", "Fulgulairo"],
    ["Maschiff", "Grondogue"],
    ["Mabosstiff", "Dogrino"],
    ["Shroodle", "Gribouraigne"],
    ["Grafaiai", "Tag-Tag"],
    ["Bramblin", "Virovent"],
    ["Brambleghast", "Virevorreur"],
    ["Toedscool", "Terracool"],
    ["Toedscruel", "Terracruel"],
    ["Klawf", "Craparoi"],
    ["Capsakid", "Pimito"],
    ["Scovillain", "Scovilain"],
    ["Rellor", "Léboulérou"],
    ["Rabsca", "Bérasca"],
    ["Flittle", "Flotillon"],
    ["Espathra", "Cléopsytra"],
    ["Tinkatink", "Forgerette"],
    ["Tinkatuff", "Forgella"],
    ["Tinkaton", "Forgelina"],
    ["Wiglett", "Taupikeau"],
    ["Wugtrio", "Triopikeau"],
    ["Bombirdier", "Lestombaile"],
    ["Finizen", "Dofin"],
    ["Palafin", "Superdofin"],
    ["Varoom", "Vrombi"],
    ["Revavroom", "Vrombotor"],
    ["Cyclizar", "Motorizard"],
    ["Orthworm", "Ferdeter"],
    ["Glimmet", "Germéclat"],
    ["Glimmora", "Floréclat"],
    ["Greavard", "Toutombe"],
    ["Houndstone", "Tomberro"],
    ["Flamigo", "Flamenroule"],
    ["Cetoddle", "Piétacé"],
    ["Cetitan", "Balbalèze"],
    ["Veluza", "Délestin"],
    ["Dondozo", "Oyacata"],
    ["Tatsugiri", "Nigirigon"],
    ["Annihilape", "Courrousinge"],
    ["Clodsire", "Terraiste"],
    ["Dudunsparce", "Deusolourdo"],
    ["Kingambit", "Scalpereur"],
    ["Great Tusk", "Fort-Ivoire"],
    ["Scream Tail", "Hurle-Queue"],
    ["Brute Bonnet", "Fongus-Furie"],
    ["Flutter Mane", "Flotte-Mèche"],
    ["Slither Wing", "Rampe-Ailes"],
    ["Sandy Shocks", "Pelage-Sablé"],
    ["Iron Treads", "Roue-de-Fer"],
    ["Iron Bundle", "Hotte-de-Fer"],
    ["Iron Hands", "Paume-de-Fer"],
    ["Iron Jugulis", "Têtes-de-Fer"],
    ["Iron Moth", "Mite-de-Fer"],
    ["Iron Thorns", "Épine-de-Fer"],
    ["Frigibax", "Frigodo"],
    ["Arctibax", "Cryodo"],
    ["Baxcalibur", "Glaivodo"],
    ["Gimmighoul", "Mordudor"],
    ["Gholdengo", "Gromago"],
    ["Wo-Chien", "Chongjian"],
    ["Chien-Pao", "Baojian"],
    ["Ting-Lu", "Dinglu"],
    ["Chi-Yu", "Yuyu"],
    ["Roaring Moon", "Rugit-Lune"],
    ["Iron Valiant", "Garde-de-Fer"],
    ["Walking Wake", "Serpente-Eau"],
    ["Iron Leaves", "Vert-de-Fer"],
    ["Dipplin", "Pomdramour"],
    ["Sinistcha", "Théffroyable"],
    ["Okidogi", "Félicanis"],
    ["Munkidori", "Fortusimia"],
    ["Fezandipiti", "Favianos"],
    ["Archaludon", "Pondralugon"],
    ["Hydrapple", "Pomdorochi"],
    ["Gouging Fire", "Feu-Perçant"],
    ["Raging Bolt", "Ire-Foudre"],
    ["Iron Boulder", "Roc-de-Fer"],
    ["Iron Crown", "Chef-de-Fer"],
    ["Pecharunt", "Pêchaminus"]
]);
