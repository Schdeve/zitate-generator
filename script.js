function generiereZitate() {
    var zitate = {
        "Albers Steffen": "Die Realität verschwindet nicht, nur weil man seine Augen vor ihr verschließt.",
        "Paulick Harald": "Wer andere Menschen hasst, hat den Boden der Demokratie verlassen." ,
        "Lippold Steve": "Wer sich im Genuss übt, übersättigt sein Verlangen nach Gierheit.",
        "Kühn-Görg Monika": "Unsere höchste Mission ist es, die Erde so zu gestalten, um sie für nächste Generationen zu erhalten.",
        "Ockenga Klaas": "Der Morgen danach ist die Zukunft von Gestern, die Realität von Heute und die Aufgabe für Morgen.",
        "Vagianos Athanasios": "Es ist angemessen, dass sich die Gesellschaft auf den Optimismus stützt, der die Zukunft wohlwollend schmiert.",
        "Seibold Klaus": "Es macht wenig Sinn, sich Sorgen über die Zukunft zu machen. Es gilt erstmal, den heutigen Tag zu überstehen.",
    }

    var autoren = [
        "Albers Steffen", "Paulick Harald", "Lippold Steve", "Kühn-Görg Monika",
        "Ockenga Klaas", "Vagianos Athanasios", "Seibold Klaus",
    ] 
    
    var autor = autoren[Math.floor(Math.random() * autoren.length)];
    var zitat = zitate[autor];

    document.getElementById("zitate").innerHTML = zitat;
    document.getElementById("autoren").innerHTML = autor;  
}

