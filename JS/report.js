/**
 * Created by mazurandrey on 12.02.2015.
 */


document.addEventListener("DOMContentLoaded", function() {




    rep2.addEventListener('click', function massive() {

        var name = document.querySelector('#inp1').value;
        var surname = document.querySelector('#inp2').value;
        var sex = document.querySelector('#sel1').value;
        var age = document.querySelector('#age1').value;
        var comment = document.querySelector('#com1').value;
        var user = {
            name: document.querySelector('#inp1').value,
            surname: document.querySelector('#inp2').value,
            sex: document.querySelector('#sel1').value,
            age: document.querySelector('#age1').value,
            comment: document.querySelector('#com1').value
        };
        var rep2 = document.querySelector("rep2");
        var array = [];

        if (
            (document.querySelector('#inp1').value == "") ||
            (document.querySelector('#inp2').value == "") ||
            (document.querySelector('#sel1').value == "") ||
            (document.querySelector('#age1').value == "") ||
            (document.querySelector('#com1').value == "")
        ) {

            alert("All fields must be filled.");
        }

        else {

            array.push(user);

            alert("Name: " + user.name + "\nSurname: " + user.surname + "\nSex: " + user.sex + "\nAge: " + user.age + "\nComment: " + user.comment);

        }

        console.log(array);
        localStorage.setItem("local", JSON.stringify(user));


    })

});










