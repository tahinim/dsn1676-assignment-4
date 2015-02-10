
var blueberries = {
    latin: 'Vaccinium corymbosum',
    growsonshrubs: true,
    energy: '240kJ',
    carbohydrates: '14.49g',
    protein: '0.74g',
};

var grapes = {
    latin: 'Vitis vinifera',
    growsonshrubs: false,
    energy: '228kJ',
    carbohydrates: '18.1g',
    protein: '0.72g'
};

var redcurrent = {
    latin: 'ribes rubrum',
    growsonshrubs: true,
    energy: '234 kJ',
    carbohydrates: '13.8g',
    protein: '1.4g',
};

var fruits2 = [blueberries, grapes, redcurrent]





















var dinos2 = [trex, stego];

// console.log ( dinos2[1].age )

dinos2.forEach(function (item) {
    document.write ('<dl>');
    document.write ('<dt>Age:<dt>');
    document.write('<dd>'+ item.age +'</dd>');
    document.write('</dl>');

});
