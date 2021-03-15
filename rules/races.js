const races = {
    'demi_elfe' : {
        'key': 'demi-elfe',
        'label': 'Demi-elfe',
        'abilityBonuses' : {
            'cha' : 2
        },
        'freeAbilityBonuses': 2,
        'speed': 9,
        'languages': [
            'commun',
            'elfe'
        ],
        'freeLanguages': 1,
        'racialAbilities': {
            0: "<strong>Vision dans le noir.</strong> Grâce à votre sang elfe, vous avez hérité d'une vision supérieure dans l'obscurité et dans la lumière faible. Dans un rayon de 18 mètres, vous pouvez voir dans une zone de lumière faible comme s'il s'agissait d'une lumière vive et dans l'obscurité comme s'il s'agissait d'une lumière faible. Par contre, vous ne distinguez pas les couleurs dans l'obscurité, seulement des nuances de gris.",
            1: "<strong>Ascendance féerique.</strong> Vous bénéficiez d'un avantage sur les jets de sauvegarde contre l'effet charmé et un effet magique ne peut pas vous plonger dans le sommeil.",
            2: "<strong>Polyvalence.</strong> Vous gagnez la maîtrise de deux compétences de votre choix."
        }
    },

    'demi_orque': {
        'key': 'demi-orque',
        'label': 'Demi-orque',
        'abilityBonuses' : {
            'for' : 2,
            'con': 1
        },
        'freeAbilityBonuses': 0,
        'speed': 9,
        'languages': [
            'commun',
            'orque'
        ],
        'freeLanguages': 1,
        'racialAbilities': {
            0: "<strong>Vision dans le noir.</strong> Grâce à votre sang orc, vous avez hérité d'une vision supérieure dans l'obscurité et dans la lumière faible. Dans un rayon de 18 mètres, vous pouvez voir dans une zone de lumière faible comme s'il s'agissait d'une lumière vive et dans l'obscurité comme s'il s'agissait d'une lumière faible. Par contre, vous ne distinguez pas les couleurs dans l'obscurité, seulement des nuances de gris.",
            1: "<strong>Menaçant.</strong> Vous gagnez la maîtrise de la compétence Intimidation.",
            2: "<strong>Acharnement.</strong> Quand vous vous retrouvez à 0 point de vie, mais que vous n'êtes pas tué sur le champ, vous pouvez choisir d'être réduit à 1 point de vie à la place. Vous ne pouvez pas réutiliser cette aptitude tant que vous n'avez pas terminé un repos long.",
            3: "<strong>Sauvagerie.</strong> Quand vous réussissez un coup critique avec une attaque de corps à corps, vous pouvez lancer un dé de dégâts supplémentaire correspondant à l'arme utilisée et l'ajouter aux dégâts bonus du coup critique."
        }
    },

    'elfe': {
        'key': 'elfe',
        'label': 'Elfe',
        'abilityBonuses' : {
            'dex' : 2
        },
        'freeAbilityBonuses': 0,
        'speed': 9,
        'languages': [
            'commun',
            'elfe'
        ],
        'freeLanguages': 1,
        'racialAbilities': {
            0: "<strong>Vision dans le noir.</strong> Habitué à la pénombre des forêts et au ciel nocturne, vous jouissez d'une vision supérieure dans l'obscurité et dans la lumière faible. Dans un rayon de 18 mètres, vous pouvez voir dans une zone de lumière faible comme s'il s'agissait d'une lumière vive et dans l'obscurité comme s'il s'agissait d'une lumière faible. Par contre, vous ne distinguez pas les couleurs dans l'obscurité, seulement des nuances de gris.",
            1: "<strong>Sens aiguisés.</strong> Vous maîtrisez la compétence Perception.",
            2: "<strong>Ascendance féerique.</strong> Vous obtenez un avantage sur les jets de sauvegarde contre l'effet charmé et un effet magique ne peut pas vous plonger dans le sommeil.",
            3: "<strong>Transe.</strong> Les elfes n'ont pas besoin de dormir. À la place, ils passent 4 heures par jour dans un état de méditation profonde, tout en restant semi-conscients. Le mot qui décrit cette méditation en langage commun est « transe ». Pendant cette méditation, vous pouvez avoir un équivalent de rêves. De tels rêves sont en réalité des exercices mentaux qui sont devenus des réflexes au bout de plusieurs années de pratique. En vous reposant ainsi, vous obtenez les mêmes bénéfices que ceux d'un sommeil de 8 heures pour un humain. Toutefois, il faut toujours 8 heures à un elfe pour obtenir les effets d'un repos long."
        },
        'mustSelectVariant': true,
        'variants': {
            'elfe_aether': {
                'key': 'elfe_aether',
                'label': 'Elfe d\'Aether',
                'abilityBonuses' : {
                    'int' : 1
                },
            }
        }
    }

};
