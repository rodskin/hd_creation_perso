var creationPerso = {
    'maitrise': 2,
    'race': {},
    'historique': {},
    'classe': {},
    'languesDisponibles': 0,
    'competencesDisponibles': 0,
    'bourse': {},

    'init': function () {
        var app = this;
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

        var listClasses = jQuery('#classe').html();
        for (i in classes) {
            listClasses += '<option value="' + i + '">' + classes[i].label + '</option>';
        }
        jQuery('#classe').html(listClasses);

        var listeAttributs = jQuery('#table_caracteristiques').html();
        for (i in attributs) {
            listeAttributs += '<tr class="ligne_carac"><td>' + attributs[i].label + '</td><td><input id="base_' + attributs[i].short + '" class="base_carac" type="number" value="8" min="8" max="15" /></td><td>+</td><td id="racial_' + attributs[i].short + '" class="racial_bonus">0</td><td>=</td><td class="base_plus_racial">8</td><td class="computed_bonus" id="bonus_' + attributs[i].short + '">-1</td></tr>';
        }
        jQuery('#table_caracteristiques').html(listeAttributs);

        var listCompetences = jQuery('#competences').html();
        for (i in competences) {
            listCompetences += '<tr><td><input class="checkbox_competence" type="checkbox" id="' + i + '" /></td><td><label for="'+ i + '">' + competences[i].label + '</label></td><td id="bonus_' + i + '">' + parseInt(jQuery('#bonus_' + competences[i].attribute).html()) + '</td></tr>';
        }
        jQuery('#competences').html(listCompetences);

        var listLangues = jQuery('#langues').html();
        for (i in langues) {
            listLangues += '<tr><td><input class="checkbox_langue" type="checkbox" id="langue_' + i + '" /></td><td><label for="langue_'+ i + '">' + langues[i].label + '</label></td></tr>';
        }
        jQuery('#langues').html(listLangues);

        app.bourse = bourse;
        var listBourse = jQuery('#bourse').html();
        for (i in bourse) {
            listBourse += '<tr><td>' + i + '</td><td id="bourse_' + i + '">0</td></tr>';
        }
        jQuery('#bourse').html(listBourse);

        jQuery('#modal').on('change', '.modal_attribute', function () {
            var modal_attributes_max = jQuery('#modal_attributs_max').val();
            if (jQuery('.modal_attribute:checked').length > modal_attributes_max) {
                jQuery(this).prop('checked', false);
            }
        });
        jQuery('#modal').on('submit', function () {
            if (jQuery('.modal_attribute').length) {
                jQuery('.modal_attribute:checked').each(function () {
                    var attribute_short = jQuery(this).attr('id').slice(-3);
                    jQuery('#racial_' + attribute_short).html(1);
                });
                app.reCalculateAttributes();
            }
            jQuery('#modal').modal('toggle');
        });
    },

    'selectPuissance': function (niveau) {
        jQuery('#caracteristiques input').each(function () {
            jQuery(this).attr('min', niveauxPuissance[niveau]['min']);
            jQuery(this).attr('max', niveauxPuissance[niveau]['max']);
        });
    },
    'selectRace': function (race) {
        var app = this;
        app.resetLangues();
        app.resetRaceAbilities();

        for (i in races[race].abilityBonuses) {
            jQuery('#racial_' + i).html(races[race].abilityBonuses[i]);
        }
        for (i in races[race].languages) {
            jQuery('#langue_' + races[race].languages[i]).prop('checked', true);
            jQuery('#langue_' + races[race].languages[i]).attr('disabled', 'disabled');
        }
        app.languesDisponibles = races[race].freeLanguages;
        jQuery('#langues_restantes').html(app.languesDisponibles);
        jQuery('#langues_max').html(app.languesDisponibles);

        if (typeof(races[race].freeCompetences) != 'undefined') {
            app.competencesDisponibles = races[race].freeCompetences;
            jQuery('#competences_restantes').html(app.competencesDisponibles);
            jQuery('#competences_max').html(app.competencesDisponibles);
        } else {
            jQuery('#competences_restantes').html(0);
            jQuery('#competences_max').html(0);
        }

        if (typeof(races[race].racialAbilities) != 'undefined') {
            var racialAbilities = '<ul>';
            for (i in races[race].racialAbilities) {
                racialAbilities += '<li>' + races[race].racialAbilities[i] + '</li>';
            }
            racialAbilities += '</ul>';
            jQuery('#capacites_race').html(racialAbilities);
        }

        if (typeof(races[race].freeAbilityBonuses) != 'undefined' && races[race].freeAbilityBonuses > 0) {
            app.openModal('attributs', races[race]);
        }

        app.reCalculateAttributes();
    },
    'selectVariant': function (race, variant) {
        var app = this;
        app.selectRace(race);
        for (i in races[race].variants[variant].abilityBonuses) {
            jQuery('#racial_' + i).html(races[race].variants[variant].abilityBonuses[i]);
        }
        if (typeof(races[race].variants[variant].freeAbilityBonuses) != 'undefined' && races[race].variants[variant].freeAbilityBonuses > 0) {
            if (races[race].key == 'humain') {
                for (i in attributs) {
                    jQuery('#racial_' + attributs[i].short).html(0);
                }
            }
            app.openModal('attributs', races[race].variants[variant]);
        }
        if (typeof(races[race].variants[variant].racialAbilities) != 'undefined') {
            var racialAbilities = '<ul>';
            for (i in races[race].racialAbilities) {
                racialAbilities += '<li>' + races[race].racialAbilities[i] + '</li>';
            }
            for (i in races[race].variants[variant].racialAbilities) {
                racialAbilities += '<li>' + races[race].variants[variant].racialAbilities[i] + '</li>';
            }
            racialAbilities += '</ul>';
            jQuery('#capacites_race').html(racialAbilities);
        }

        app.languesDisponibles = races[race].freeLanguages + races[race].variants[variant].freeLanguages;
        jQuery('#langues_restantes').html(app.languesDisponibles);
        jQuery('#langues_max').html(app.languesDisponibles);
    },
    'selectHistorique': function (historique) {
        var app = this;
        var historique = historiques[historique];
        for (i in historique['competences']) {
            jQuery('#' + historique['competences'][i]).prop('checked', true);
            jQuery('#' + historique['competences'][i]).attr('disabled', 'disabled');
        }
        this.recalculCompetences();

        var historique_aptitudes = '<ul>';
        for (i in historique['aptitudes']) {
            historique_aptitudes += '<li>' + historique['aptitudes'][i] + '</li>';
        }
        historique_aptitudes += '</ul>';
        jQuery('#capacites_historique').html(historique_aptitudes);

        var equipement = '<ul>';
        for (i in historique['equipement']) {
            equipement += '<li>' + historique['equipement'][i] + '</li>';
        }
        equipement += '</ul>';
        jQuery('#equipement').html(equipement);

        for (i in historique['bourse']) {
            jQuery('#bourse_' + i).html(historique['bourse'][i]);
            app.bourse[i] += historique['bourse'][i];
        }
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
    'openModal' : function (modalType, parameters) {
        var modalHtml = '';
        switch (modalType) {
            case 'attributs':
                modalHtml += '<h2>Quels attributs augmenter ?</h2>';
                modalHtml += '<input type="hidden" id="modal_attributs_max" value="' + parameters.freeAbilityBonuses + '" />';
                for (i in attributs) {
                    if (typeof(parameters['abilityBonuses'][attributs[i].short]) == 'undefined') {
                        modalHtml += '<input type="checkbox" id="modal_' + attributs[i].short + '" class="modal_attribute" /><label for="modal_' + attributs[i].short + '">' + attributs[i].label + '</label><br />';
                    }
                }
                break;
            case 'competences':
                modalHtml += '<h2>Choix des compétences</h2>';
                break;
        }
        modalHtml += '<br /><input type="submit" value="OK" />';
        jQuery('#modal').html(modalHtml);
        jQuery('#modal').modal({
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
    },
    'resetRaceAbilities': function () {
        jQuery('.racial_bonus').each(function () {
            jQuery(this).html(0);
        });
    },
    'resetLangues': function () {
        var app = this;
        app.languesDisponibles = 0;
        jQuery('.checkbox_langue').prop('checked', false);
        jQuery('.checkbox_langue').removeAttr('disabled');
    }
}
