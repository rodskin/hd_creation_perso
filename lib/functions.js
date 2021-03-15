var creationPerso = {
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
    'selectVariant': function (variant) {

    },
    'reCalculateAttributes': function () {
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
    },
    'resetRaceAbilities': function () {
        jQuery('.racial_bonus').each(function () {
            jQuery(this).html(0);
        });
    }
}
