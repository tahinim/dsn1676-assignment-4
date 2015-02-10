var blueberries = {
    name:'blueberries',
    latin: 'Vaccinium corymbosum',
    growsonshrubs: true,
    energy: '240kJ',
    carbohydrates: '14.49g',
    protein: '0.74g',
};

var grapes = {
    name:'grapes',
    latin: 'Vitis vinifera',
    growsonshrubs: false,
    energy: '228kJ',
    carbohydrates: '18.1g',
    protein: '0.72g'
};

var redcurrent = {
    name: 'redcurrent',
    latin: 'ribes rubrum',
    growsonshrubs: true,
    energy: '234 kJ',
    carbohydrates: '13.8g',
    protein: '1.4g',
};

var fruits2 = [blueberries, grapes, redcurrent]


    var writeFruits = function (allFruits) {
        allFruits.forEach (function (item) {
            
        document.write ('<dl>');
            
        document.write ('<dt>name:<dt>');
        document.write ('<dd>'+item.name + '</dd>');
        
        document.write ('<dt>latin:<dt>');
        document.write ('<dd>'+item.latin + '</dd>');
            
        document.write ('<dt>energy:<dt>');
        document.write ('<dd>'+item.energy + '</dd>');
            
        document.write ('<dt>carbohydrates:<dt>');
        document.write ('<dd>'+item.carbohydrates + '</dd>');
            
        document.write ('<dt>protein:<dt>');
        document.write ('<dd>'+item.protein + '</dd>');
            
            
        document.write('</dl>');
            
});
        
 };

writeFruits ([blueberries, grapes, redcurrent])
