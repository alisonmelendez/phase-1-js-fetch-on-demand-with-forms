const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log(event.target.children[1].value) // access using event object 
        //event - the submit event
        //target - the element targetted - our form 
        //children - returns HTMLCollection with all nested elements of the form 
        //children[1] - the second child element
        //value - the actual value inserted into the input field 
        let input = document.querySelector('#searchByID') //grab the input box and grab the data from the input box 
        console.log(input.value)

        //input.value is the number that the user input
        //the API call would be ex) http://localhost:3000/movies/1`
        //that gives us the movie with an ID of 1 
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title //our JSON obj is data. the title key gives us our title
                summary.innerText = data.summary
            });
    });
}

document.addEventListener('DOMContentLoaded', init);