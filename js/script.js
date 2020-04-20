'use strict'

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    Apple = document.querySelector("#prompt"),
    menuLi = document.createElement("li");

menu.insertBefore(menuLi, menu[0]);
menuLi.classList.add('menu-item');
menuLi.textContent = 'Пятый пункт';
adv.remove(adv);

document.body.style.background = 'url("img/apple_true.jpg") center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';
title.style.fontSize = '35px';

document.querySelector('#prompt').textContent = prompt('Какое у вас отношение к технике apple?', '');