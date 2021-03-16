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
        'freeCompetences': 2,
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
                'freeLanguages': 1,
                'racialAbilities': {
                    0: "<strong>Entraînement aux armes elfiques.</strong> Vous maîtrisez les épées longues, les épées courtes, les arcs longs et les arcs courts.",
                    1: "<strong>Tour de magie.</strong> Vous connaissez un tour de magie de votre choix parmi la liste de sorts de magicien. Votre caractéristique d'incantation pour ce tour de magie est l'Intelligence."
                }
            },
            'elfe_fer': {
                'key': 'elfe_fer',
                'label': 'Elfe de fer',
                'abilityBonuses' : {
                    'cha' : 1
                },
                'freeLanguages': 1,
                'racialAbilities': {
                    0: "<strong>Entraînement aux armes elfiques.</strong> Vous maîtrisez les épées longues, les épées courtes, les arcs longs et les arcs courts.",
                    1: "<strong>Tour de magie.</strong> Vous connaissez un tour de magie de votre choix parmi la liste de sorts de barde. Votre caractéristique d'incantation pour ce tour de magie est le Charisme."
                }
            },
            'elfe_sylves': {
                'key': 'elfe_sylves',
                'label': 'Elfe des sylves',
                'abilityBonuses' : {
                    'sag' : 1
                },
                'freeLanguages': 0,
                'racialAbilities': {
                    0: "<strong>Créature des terres sauvages.</strong> Vous avez l'habitude de parcourir les espaces naturels. Vous obtenez l'avantage sur vos tests de Dextérité (Discrétion) et Sagesse (Survie) lorsque vous parcourez des espaces naturels à la lumière du jour ou des étoiles.",
                    1: "<strong>Artisans reconnus.</strong> Vous maîtrisez un type d'outils d'artisan de votre choix."
                }
            }
        }
    },
    'gnome': {
        'key': 'gnome',
        'label': 'Gnome',
        'abilityBonuses': {
            'int': 2
        },
        'freeAbilityBonuses': 0,
        'speed': 7.5,
        'languages': [
            'commun',
            'gnome'
        ],
        'freeLanguages': 0,
        'racialAbilities': {
            0: "<strong>Vision dans le noir.</strong> Habitué à la vie souterraine, vous avez une vision supérieure dans l'obscurité et dans la lumière faible. Dans un rayon de 18 mètres, vous pouvez voir dans une zone de lumière faible comme s'il s'agissait d'une lumière vive et dans l'obscurité comme s'il s'agissait d'une lumière faible. Par contre, vous ne distinguez pas les couleurs dans l'obscurité, seulement des nuances de gris.",
            1: "<strong>Ruse gnome.</strong> Vous bénéficiez d'un avantage pour tous les jets de sauvegarde d'Intelligence, Sagesse et Charisme contre la magie."
        },
        'mustSelectVariant': true,
        'variants': {
            'gnome_roches': {
                'key': 'gnome_roches',
                'label': 'Gnome des roches',
                'abilityBonuses': {
                    'con': 1
                },
                'freeAbilityBonuses': 0,
                'freeLanguages': 0,
                'racialAbilities': {
                    0: "<strong>Connaissances en ingénierie.</strong> Quand vous faites un test d'Intelligence (Histoire) relatif aux objets magiques, alchimiques ou technologiques, et que vous disposez de la maîtrise de cette compétence, vous ajoutez le double de votre bonus de maîtrise au résultat du test au lieu de votre bonus de maîtrise normal.",
                    1: "<strong>Bricoleur.</strong> Vous maîtrisez les outils d'artisans (outils de bricoleur). Grâce à ces outils, vous pouvez passer 1 heure et dépenser pour 10 po de matériaux pour construire un mécanisme de taille très petite (CA 5, 1 pv). Ce mécanisme cesse de fonctionner au bout de 24 heures (sauf si vous passez 1 heure à le réparer) ou si vous utilisez une action pour le démanteler. Vous pouvez à ce moment récupérer les matériaux qui ont servi à sa construction. Vous pouvez avoir jusqu'à trois mécanismes fonctionnant en même temps.<br />Quand vous créez un mécanisme, vous avez le choix entre trois options :\
                    <ul><li><strong>Jouet mécanique.</strong> Ce jouet est un animal, un monstre ou une personne mécanique. Une grenouille, une souris, un dragon ou un soldat, par exemple. Quand il est placé sur le sol, le jouet peut se déplacer de 1,50 mètre dans une direction aléatoire à chacun de vos tours. Il fait un bruit correspondant à la créature qu'il représente.</li>\
    <li><strong>Briquet.</strong> Ce mécanisme produit une petite flamme qui peut être utilisée pour allumer une bougie, une torche ou un feu de camp. L'utilisation du briquet coûte une action.</li>\
    <li><strong>Boîte à musique.</strong> Quand elle est ouverte, la boîte à musique joue une mélodie à un volume modéré. La boîte redevient silencieuse à la fin de la mélodie ou quand elle est fermée.</li></ul>"
                }
            },
            'gnome_fees': {
                'key': 'gnome_fees',
                'label': 'Gnome des fées',
                'abilityBonuses': {
                    'dex': 1
                },
                'freeLanguages': 0,
                'freeAbilityBonuses': 0,
                'racialAbilities': {
                    0: "<strong>Sens aiguisés.</strong> Vos sens supérieurs vous permettent de suivre n'importe quelle piste. Vous bénéficiez d'un avantage à tous vos tests de Sagesse (Survie) effectués afin de pister une créature.",
                    1: "<strong>Projection spirituelle.</strong> En dépensant une action, lorsque vous êtes en pleine forêt, vous pouvez appeler un petit animal : un petit oiseau ou un rongeur. Vous sifflez une étrange mélodie et, au bout d'une minute, une créature se présente à vous. Cette dernière doit être présente dans les environs afin de répondre à l'appel. Une fois la créature devant vous, vous projetez votre esprit et vos sens en elle. Vous pouvez prendre son contrôle et voir et entendre par ses yeux et ses oreilles. La projection dure 10 minutes et ne vous permet pas d'éloigner la créature de plus de 500 mètres de vous. Tant que le contrôle dure, vous ne pouvez pas voir, entendre, ni agir avec votre propre corps. Vous pouvez mettre fin à tout moment à votre emprise et revenir dans votre corps, sans autre contrecoup. Subir un coup ou des dégâts vous ramène immédiatement dans votre corps, libérant la créature de votre emprise. Cependant, dans ce cas, vous êtes désorienté et subissez un désavantage à toutes vos actions pendant 1 minute. Il en va de même si l'animal est tué pendant la projection. Vous devez terminer un repos long avant de pouvoir réutiliser cette capacité."
                }
            },
            'gnome_lacs': {
                'key': 'gnome_lacs',
                'label': 'Gnome des lacs',
                'abilityBonuses': {
                    'sag': 1
                },
                'freeLanguages': 0,
                'freeAbilityBonuses': 0,
                'racialAbilities': {
                    0: "<strong>Maître des illusions.</strong> Vous obtenez un avantage sur les jets de sauvegarde effectués afin de résister aux sorts d'illusion, ainsi qu'aux tests visant à discerner la présence d'une illusion déjà présente.",
                    1: "<strong>Amphibie.</strong> Vous êtes capable de respirer sous l'eau pendant une durée de 10 minutes au maximum. Au bout de ces 10 minutes, vous devez reprendre votre souffle à l'air libre.",
                    2: "<strong>Magie instinctive.</strong> Vous connaissez deux tours de magie que vous choisissez parmi la liste de sorts du barde. Votre caractéristique d'incantation pour ces sorts est la Sagesse."
                }
            }
        }
    },
    'halfelin': {
        'key': 'halfelin',
        'label': 'Halfelin',
        'abilityBonuses': {
            'dex': 2
        },
        'freeAbilityBonuses': 0,
        'speed': 7.5,
        'languages': [
            'commun',
            'halfelin'
        ],
        'freeLanguages': 0,
        'racialAbilities': {
            0: "<strong>Chanceux.</strong> Quand vous faites un 1 avec le d20 d'un jet d'attaque, d'un test de caractéristique ou d'un jet de sauvegarde, vous pouvez relancer le dé. Mais vous devez utiliser le nouveau résultat du jet.",
            1: "<strong>Brave.</strong> Vous bénéficiez d'un avantage sur les jets de sauvegarde contre la terreur.",
            2: "<strong>Agilité halfeline.</strong> Vous pouvez traverser n'importe quel emplacement occupé par une créature plus grande que vous."
        },
        'variants': {
            'halfelin_pied_leger': {
                'key': 'halfelin_pied_leger',
                'label': 'Halfelin pied-léger',
                'abilityBonuses': {
                    'cha': 1
                },
                'freeAbilityBonuses': 0,
                'freeLanguages': 0,
                'racialAbilities': {
                    0: "<strong>Discrétion naturelle.</strong> Vous pouvez tenter de vous cacher même quand vous êtes seulement dissimulé par une créature qui fait une taille de plus que vous."
                }
            },
            'halfelin_grand_sabot': {
                'key': 'halfelin_grand_sabot',
                'label': 'Halfelin grand-sabot',
                'abilityBonuses': {
                    'con': 1
                },
                'freeAbilityBonuses': 0,
                'freeLanguages': 0,
                'racialAbilities': {
                    0: "<strong>Esprit pragmatique.</strong> Vous obtenez un avantage sur les tests de Sagesse (Perspicacité) lorsque l'on tente de vous mentir ou de vous baratiner. De plus, vous obtenez un avantage aux jets de sauvegarde contre les sorts de charme.",
                    1: "<strong>Travailleur acharné.</strong> Vous obtenez la maîtrise d'un outil d'artisan au choix."
                }
            }
        }
    },
    'humain': {
        'key': 'humain',
        'label': 'Humain',
        'abilityBonuses': {
            'for': 1,
            'dex': 1,
            'con': 1,
            'int': 1,
            'sag': 1,
            'cha': 1
        },
        'freeAbilityBonuses': 0,
        'speed': 9,
        'languages': [
            'commun'
        ],
        'freeLanguages': 1,
        'racialAbilities': {},
        'variants': {
            'humain_competence': {
                'key': 'humain_competence',
                'label': 'Variante avec compétences',
                'abilityBonuses': {
                },
                'freeAbilityBonuses': 4,
                'freeCompetence': 2
            },
            'humain_don': {
                'key': 'humain_don',
                'label': 'Variantes avec Don',
                'abilityBonuses': {
                    'for': 0,
                    'dex': 0,
                    'con': 0,
                    'int': 0,
                    'sag': 0,
                    'cha': 0
                },
                'freeAbilityBonuses': 3,
                'freeDon': 1
            }
        }
    }

};
