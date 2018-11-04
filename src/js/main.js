var malePopular = ['Γεώργιος', 'Δημήτριος', 'Κωνσταντίνος', 'Ιωάννης', 'Νικόλαος', 'Χρήστος', 'Παναγιώτης', 'Βασίλειος', 'Αθανάσιος', 'Ευάγγελος', 'Μιχαήλ', 'Αλέξανδρος', 'Θεόδωρος', 'Αναστάσιος', 'Σπυρίδων', 'Αντώνιος', 'Εμμανουήλ', 'Ηλίας', 'Ανδρέας', 'Απόστολος']

var femalePopular = ['Μαρία', 'Ελένη', 'Αικατερίνη', 'Βασιλική', 'Γεωργία', 'Σοφία', 'Αναστασία', 'Ευαγγελία', 'Ιωάννα', 'Δήμητρα', 'Ειρήνη', 'Παναγιώτα', 'Χριστίνα', 'Κωνσταντίνα', 'Άννα', 'Αγγελική', 'Δέσποινα', 'Παρασκευή', 'Φωτεινή', 'Αλεξάνδρα']

var maleAncient = ['Άρης', 'Δημοσθένης', 'Αριστοτέλης', 'Μιλτιάδης', 'Αχιλλέας', 'Πλάτων', 'Έρως', 'Νικόλαος', 'Ερμής', 'Σωκράτης', 'Λεωνίδας', 'Περικλής', 'Θεμιστοκλής', 'Ορφέας', 'Ιπποκράτης', 'Κίμων']

var femaleAncient = ['Αθηνά', 'Αγαθή', 'Ειρήνη', 'Αναστασία', 'Ανδρεία', 'Αγγελική', 'Δάφνη', 'Δήμητρα', 'Ελένη', 'Ερμιόνη', 'Λυδία', 'Μαργαρίτα', 'Σοφία', 'Ξένια', 'Αριάδνη', 'Αγαθονίκη', 'Άλκηστις', 'Αφροδίτη']

var maleRare = ['Χρόνης', 'Φαίδων', 'Σαμψών', 'Τσαμπίκος', 'Χρυσοβέργης', 'Τίτος', 'Ράλλης', 'Πύρρος', 'Πολύδωρος', 'Πολυνείκης', 'Πάτροκλος', 'Παρμενίων', 'Παΐσιος', 'Νέστορας', 'Όμηρος', 'Μερκούριος', 'Κύριλλος', 'Κήρυκος', 'Κανέλλος', 'Καρυοφύλλης']

var femaleRare = ['Χριστοθέα', 'Τζένη', 'Στεριανή', 'Σωτήρα', 'Ροδοθέα', 'Σαββίνα', 'Πολυνίκη', 'Πιπίτσα', 'Σωφρονία', 'Σταυριανή', 'Μεταμόρφη', 'Νομική', 'Πιπίτσα', 'Μιράντα', 'Νάντια', 'Λιλιάνα', 'Μαριούλη', 'Κική', 'Θώμη', 'Θεοδωρούλα']

function generateName() {

    var firstSelector = document.getElementById('gender');
    var firstValue = firstSelector[firstSelector.selectedIndex].value;
    var secondSelector = document.getElementById('popularity');
    var secondValue = secondSelector[secondSelector.selectedIndex].value;

    if (firstValue == 'male' && secondValue == 'popular'){
        var randomnumber = Math.floor(Math.random() * (malePopular.length));
        document.getElementById('result').innerHTML = malePopular[randomnumber] + '<br> <br> is a popular greek male name!';
    }
    else if (firstValue == 'male' && secondValue == 'rare'){
        var randomnumber = Math.floor(Math.random() * (maleRare.length));
        document.getElementById('result').innerHTML = maleRare[randomnumber] + '<br> <br> is a rare greek male name!';    
    }
    else if (firstValue == 'male' && secondValue == 'ancient'){
        var randomnumber = Math.floor(Math.random() * (maleAncient.length));
        document.getElementById('result').innerHTML = maleAncient[randomnumber] + '<br> <br> is an ancient greek male name!';   
    }
    else if ((firstValue == 'male' && secondValue == 'idontcare') || (firstValue == 'male' && secondValue == 'null')){
        var dontcare = malePopular.concat(maleRare).concat(maleAncient);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = dontcare[randomnumber] + '<br> <br> is a greek male name!';
    }

    if (firstValue == 'female' && secondValue == 'popular'){
        var randomnumber = Math.floor(Math.random() * (malePopular.length));
        document.getElementById('result').innerHTML = femalePopular[randomnumber] + '<br> <br> is a popular greek female name!';
    }
    else if (firstValue == 'female' && secondValue == 'rare'){
        var randomnumber = Math.floor(Math.random() * (maleRare.length));
        document.getElementById('result').innerHTML = femaleRare[randomnumber] + '<br> <br> is a rare greek female name!';    
    }
    else if (firstValue == 'female' && secondValue == 'ancient'){
        var randomnumber = Math.floor(Math.random() * (maleAncient.length));
        document.getElementById('result').innerHTML = femaleAncient[randomnumber] + '<br> <br> is an ancient greek female name!';   
    }
    else if ((firstValue == 'female' && secondValue == 'idontcare') || (firstValue == 'female' && secondValue == 'null')){
        var dontcare = femalePopular.concat(femaleRare).concat(femaleAncient);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = dontcare[randomnumber] + '<br> <br> is a greek female name!';
    }


    if ((firstValue == 'idontcare' && secondValue == 'popular') || (firstValue == 'null' && secondValue == 'popular')){
        var dontcare = malePopular.concat(femalePopular);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = dontcare[randomnumber] + '<br> <br> is a popular greek name!';
    }
    else if ((firstValue == 'idontcare' && secondValue == 'rare') || (firstValue == 'null' && secondValue == 'rare')){
        var dontcare = maleRare.concat(femaleRare);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = dontcare[randomnumber] + '<br> <br> is a rare greek name!';
    }
    else if ((firstValue == 'idontcare' && secondValue == 'ancient') || (firstValue == 'null' && secondValue == 'ancient')){
        var dontcare = maleAncient.concat(femaleAncient);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = dontcare[randomnumber] + '<br> <br> is an ancient greek name!'; 
    }
    else if ((firstValue == 'idontcare' && secondValue == 'idontcare') || (firstValue == 'idontcare' && secondValue == 'null') || (firstValue == 'null' && secondValue == 'idontcare')){
        var dontcare = malePopular.concat(maleRare).concat(maleAncient).concat(femalePopular).concat(femaleRare).concat(femaleAncient);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = dontcare[randomnumber] + '<br> <br> is a greek name!';
    }

    if (firstValue == 'null' && secondValue == 'null'){
        var dontcare = malePopular.concat(maleRare).concat(maleAncient).concat(femalePopular).concat(femaleRare).concat(femaleAncient);
        var randomnumber = Math.floor(Math.random() * (dontcare.length));
        document.getElementById('result').innerHTML = 'Υou didn\'t choose a category. I print whatever i want.<br> <br>' + dontcare[randomnumber];
    }

}   

