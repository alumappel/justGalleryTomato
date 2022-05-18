var currentPlace = 0;

function nextImg() {
    currentPlace++;
    chaing()
}

function previousImg() {
    currentPlace--;
    chaing()
}

function chaing() {
    if (currentPlace < 0) {
        currentPlace = 4;
    }
    if (currentPlace > 4) {
        currentPlace = 0;
    }

    var outputimg = [
        "images/gallary/img/1.png",
        "images/gallary/img/2.png",
        "images/gallary/img/3.png",
        "images/gallary/img/4.png",
        "images/gallary/img/5.png"];

    var outputalt = [
        "איור המדגים את השלב הראשון בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב השני בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב השלישי בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב הרביעי בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב החמישי בהקמת הדליה על גבי חוט"
    ];

    var outputText = [
        "העמידו בקרקע שני עמודים. הם יכולים להיות מברזל (בזנטים), עץ, או במבוק.",
        "קשרו חוט בין שני העמודים בצורה אופקית. עשו זאת בשתי רמות גובה לפחות, כאשר החשובות ביותר הן גובה הברך וגובה המותן.",
        "קשרו מהחבל העליון חוטים היורדים כלפי מטה בצורה אנכית לפי מיקום הצמחים בערוגה.",
        "קשרו את החוטים לצמחים, ולפפו מעט את הצמח סביב החוט כדי שייתפס עליו ולא ינוח על הקרקע. שימו לב לקשור בעדינות כדי שיהיה לצמח מקום לגדול.",
        "המשיכו ללפף את הצמחים על החוט במשך גדילתם. מרביתם יתפסו לבד, אך לפעמים תידרש עזרה חיצונית."
    ];
    
    document.getElementById("imgFromJs").src = outputimg[currentPlace];
    document.getElementById("imgFromJs").alt = outputalt[currentPlace];
    document.getElementById("galleryP").innerText = outputText[currentPlace];    
}