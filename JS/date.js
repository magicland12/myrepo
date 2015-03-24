/**
 * Created by mazurandrey on 12.02.2015.
 */


window.addEventListene("load", function all() {

        var im = document.querySelector('#ava1');
        console.log(im);

        document.querySelector('#ava1').addEventListener("click", flop);
        function flop() {
            alert("Bro!!!");
        }


        window.addEventListener("mouseover", function over() {
            alert("Garson");
        });
    }
)
