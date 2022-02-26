const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />'
  title.innerHTML = 'Hello World! This is Randhir...'
  excerpt.innerHTML =
    'A 4th-year student pursuing Bachelors in EEE from SVIST. I am a Data Science enthusiast, Web developer, and a Bathroom Singer.'
  profile_img.innerHTML =
    '<img src="https://avatars.githubusercontent.com/u/86173761?v=4" alt="" />'
  name.innerHTML = 'Randhir Shaw'
  date.innerHTML = 'Feb 26, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}