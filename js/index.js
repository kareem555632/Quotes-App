//================> q-1 <==================>

var text = [
    "Resentment is like drinking poison and waiting for your enemies to die.",
    "Do not take life too seriously. You will not get out alive.",
    "Resentment is like drinking poison and waiting for your enemies to die.",
    "You miss 100% of the shots you don't take.",
    "Do not take life too seriously. You will not get out alive."
];

function Resentment() 
{

        document.getElementById("pa").innerHTML=text[    Math.ceil(    Math.random() * text.length )  ]
};

