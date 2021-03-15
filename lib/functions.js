var creationPerso = {
    'maitrise': 2,
    'race': {},
    'historique': {},
    'classe': {},

    'init': function () {
        var listLvlPuissance = jQuery('#niveau_de_puissance').html();
        for (i in niveauxPuissance) {
            listLvlPuissance += '<option value="' + i + '"';
            if (typeof(niveauxPuissance[i]['default']) != 'undefined') {
                listLvlPuissance += ' selected="selected"';
            }
            listLvlPuissance += '>' + niveauxPuissance[i].label + '</option>';
        }
        jQuery('#niveau_de_puissance').html(listLvlPuissance);

        var listRaces = jQuery('#race').html();
        for (i in races) {
            listRaces += '<option value="' + i + '">' + races[i].label + '</option>';
        }
        jQuery('#race').html(listRaces);

        var listHistoriques = jQuery('#historique').html();
        for (i in historiques) {
            listHistoriques += '<option value="' + i + '">' + historiques[i].label + '</option>';
        }
        jQuery('#historique').html(listHistoriques);

        var listCompetences = jQuery('#competences').html();
        for (i in competences) {
            listCompetences += '<tr><td><input class="checkbox_competence" type="checkbox" id="' + i + '" /></td><td><label for="'+ i + '">' + competences[i].label + '</label></td><td id="bonus_' + i + '">' + parseInt(jQuery('#bonus_' + competences[i].attribute).html()) + '</td></tr>';
        }
        jQuery('#competences').html(listCompetences);
    },
    'selectPuissance': function (niveau) {
        jQuery('#caracteristiques input').each(function () {
            jQuery(this).attr('min', niveauxPuissance[niveau]['min']);
            jQuery(this).attr('max', niveauxPuissance[niveau]['max']);
        });
    },
    'selectRace': function (race) {
        this.resetRaceAbilities();
        for (i in races[race].abilityBonuses) {
            jQuery('#racial_' + i).html(races[race].abilityBonuses[i]);
        }
        this.reCalculateAttributes();
    },
    'selectVariant': function (race, variant) {
        var app = this;
        app.selectRace(race);
        for (i in races[race].variants[variant].abilityBonuses) {
            jQuery('#racial_' + i).html(races[race].variants[variant].abilityBonuses[i]);
        }

    },
    'selectHistorique': function (historique) {
        var historique = historiques[historique];
        for (i in historique['competences']) {
            jQuery('#' + historique['competences'][i]).prop('checked', true);
        }
        this.recalculCompetences();
    },
    'reCalculateAttributes': function () {
        var app = this;
        jQuery('#caracteristiques .ligne_carac').each(function () {
            var calculCarac = parseInt(jQuery(this).find('.base_carac').val()) + parseInt(jQuery(this).find('.racial_bonus').html());
            jQuery(this).find('.base_plus_racial').html(calculCarac);
            var calcBonus = 0;
            if (calculCarac - 10 >= 0) {
                calcBonus = Math.floor((calculCarac - 10)/2);
            } else {
                calcBonus = Math.ceil((calculCarac - 10)/2);
            }
            jQuery(this).find('.computed_bonus').html(calcBonus);
        });
        app.recalculCompetences();
    },
    'recalculCompetences': function () {
        var app = this;
        jQuery('#competences tr').each(function () {
            if (jQuery(this).attr('id') != 'competences_header') {
                var competence = jQuery(this).find('input').attr('id');
                var competenceChecked = 0;
                if (jQuery(this).find('input').is(':checked')) {
                    competenceChecked = parseInt(app.maitrise);
                }
                jQuery('#bonus_' + competence).html(competenceChecked + parseInt(jQuery('#bonus_' + competences[competence].attribute).html()));
            }
        });
    },
    'resetRaceAbilities': function () {
        jQuery('.racial_bonus').each(function () {
            jQuery(this).html(0);
        });
    }
}
