document.addEventListener("DOMContentLoaded", function(){})
    const signup_btn = document.querySelector(".custom-signup");
    signup_btn.addEventListener("click", function(e){
        e.preventDefault();
        alert("Redirecting to sign-up");
    })

    const pieChart = document.getElementById('pieChart').getContext('2d');
    new CharacterData(pieChart, {
        type: 'pie',
        data: {
            lables: ['Carb', 'Protein', 'Fat', 'Mineral'],
            datasets: [{
                lable: 'Current visits',
                data: [20, 30, 35, 15],
                backgroundColor: ['rgb(223, 223, 174) ']
            }] 
        }
    })

