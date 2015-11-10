 window.onload = function(){
    var quoteArray = new Array();
    quoteArray[0] = "No matter how fast you run at a set of automatic doors, they'll open in time. They have to be able to open fast as part of the fire code.";
    quoteArray[1] = "If you are having trouble scooping ice cream out of the container, warm up the spoon in the microwave for 45 seconds.";
    quoteArray[2] = "Did you know that there are more stars in the milky way galaxy then atoms in the universe?";
    quoteArray[3] = "Computer overclocking is done by changing the system time to several hours to a day later, forcing the CPU to speed up to compensate for lost time.";
    quoteArray[4] = "Teenage pregnancy rates drop off dramatically after age 20.";
    quoteArray[5] = "You can't see your own shadow in a mirror because mirrors only reflect light and shadows are an absence of light.";
    quoteArray[6] = "Dogs can't look up.";
    quoteArray[7] = "The Moon is closer to us than the core of the Earth.";
    quoteArray[8] = "If you break your bones on purpose they will become unbreakable after healing. Works pretty much the same way as vaccines.";
    quoteArray[9] = "Running 'sudo rm -rf /' will fix all of your problems...promise";
    quoteArray[10] = "In 2007 Oxford dictionaries removed the word 'gullible' from its lexicon.";
    quoteArray[11] = "Text on construction plans are generally in all caps because it is loud on the construction site and it is hard to hear.";
    quoteArray[12] = "If you lean your head back, close your eyes and shake an imaginary pepper shaker onto your tongue, after a few seconds you can taste the pepper.";
    quoteArray[13] = "The German word for flip-flops is flippen floppen.";
    quoteArray[14] = "You should regularly disinfect your iPhone by running it through the dishwasher (But make sure its turned off to prevent damage).";
    quoteArray[15] = "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo.";
    quoteArray[16] = "Nowhere in the Humpty Dumpty Nursery Rhyme does it say that Humpty Dumpty is an egg.";
    quoteArray[17] = "Your chances of being killed by a vending machine are actually twice as large as your chance of being bitten by a shark.";
    quoteArray[18] = "If you put your finger in your ear and scratch, it sounds just like Pac-Man.";
    quoteArray[19] = "dog food lid";
    
    
    
    
    var rand = Math.floor(Math.random()*quoteArray.length); 
    document.getElementById("quote").innerHTML = quoteArray[rand];
};
 

