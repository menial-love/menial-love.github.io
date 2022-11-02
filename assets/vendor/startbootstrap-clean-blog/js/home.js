let a_group_intro = document.getElementById('group-intro');
let a_research_directions = document.getElementById('research-directions');
a_group_intro.addEventListener('click', function (event) {
    let nav_wrap = document.getElementsByClassName('nav-wrap')[0];
    let div_group_intro = document.getElementsByClassName('group-intro-wrapper')[0];
    let div_research_directions = document.getElementsByClassName('research-directions-wrapper')[0];
    let li_group_intro = nav_wrap.children[0];
    let li_research_directions = nav_wrap.children[1];
    if (li_research_directions.classList.contains('act')) {
        li_research_directions.classList.remove('act');
        li_group_intro.classList.add('act');
    }
    if (div_group_intro.classList.contains('hidden')) {
        div_group_intro.classList.remove('hidden');
        div_research_directions.classList.add('hidden');
    }
}, false)
a_research_directions.addEventListener('click', function (event) {
    let nav_wrap = document.getElementsByClassName('nav-wrap')[0]
    let div_group_intro = document.getElementsByClassName('group-intro-wrapper')[0];
    let div_research_directions = document.getElementsByClassName('research-directions-wrapper')[0];
    let li_group_intro = nav_wrap.children[0];
    let li_research_directions = nav_wrap.children[1];
    if (li_group_intro.classList.contains('act')) {
        li_group_intro.classList.remove('act');
        li_research_directions.classList.add('act');
    }
    if (div_research_directions.classList.contains('hidden')) {
        div_research_directions.classList.remove('hidden');
        div_group_intro.classList.add('hidden');
    }
}, false)
