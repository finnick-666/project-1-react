"use strict"

let homePage
let aboutPage
let skillsPage
let resumePage
let contactPage
let allPages

function init() {
    allPages = document.querySelectorAll('main > section')
    homePage = document.querySelector('main > section[id = "Home"]')
    aboutPage = document.querySelector('main > section[id = "About"]')
    skillsPage = document.querySelector('main > section[id = "Skills"]')
    resumePage = document.querySelector('main > section[id = "Resume"]')
    hideAllPages()
    showHomePage()
}

function hideAllPages() {
    allPages.forEach(page => {
        page.style.display = 'none'
    })
}

function showHomePage() {
    hideAllPages()
    homePage.style.display = "block"
}

function showAboutPage() {
    hideAllPages()
    aboutPage.style.display = "block"
}

function showSkillsPage() {
    hideAllPages()
    skillsPage.style.display = "block"
}

function showResumePage() {
    hideAllPages()
    resumePage.style.display = "block"
}

const pageNavMap = {
    "#About": showAboutPage,
    "#Skills": showSkillsPage,
    "#Resume": showResumePage,
    "#Home":showHomePage,
}


function navPage() {
    pageNavMap[location.hash]()
}


window.onload = function () {
    init()
    window.onhashchange = navPage
}