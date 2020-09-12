"use strict"

let homePage
let aboutPage
let skillsPage
let resumePage
let contactPage
let allPages

function init() {
    allPages = document.querySelectorAll('section')
    homePage = document.querySelector('section[id = "Home"]')
    aboutPage = document.querySelector('section[id = "About"]')
    skillsPage = document.querySelector('section[id = "Skills"]')
    resumePage = document.querySelector('section[id = "Resume"]')
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