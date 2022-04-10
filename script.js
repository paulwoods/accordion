
// for each accordian
[...document.querySelectorAll('.accordian')].forEach (accordian => {

    // get the items
    const items = [...accordian.querySelectorAll('.accordian-item')]

    // for each item
    items.forEach (item => {

        // for the less icon
        item.querySelectorAll('.accordian-less').forEach (less => {

            // add the click handler
            less.addEventListener('click', e => {
                
                // remove the active class from all items
                items.forEach(i => i.classList.remove('active'))
            })

        })

        // for the more icon
        item.querySelectorAll('.accordian-more').forEach (more => {

            // add the more click handler
            more.addEventListener('click', e => {

                //remove the active class from all items
                items.forEach(i => i.classList.remove('active'))

                // add the active class
                item.classList.add('active')
            })

        })

    })

})
