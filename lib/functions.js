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
        console.log(niveau);
        jQuery('#caracteristiques input').each(function () {
            jQuery(this).attr('min', niveauxPuissance[niveau]['min']);
            jQuery(this).attr('max', niveauxPuissance[niveau]['max']);
        });
    }
}
