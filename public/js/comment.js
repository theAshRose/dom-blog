$(".addPeanutBtn").on('click', addComment)



// const saveComment = async (event) => {
//     event.preventDefault();
//     console.log("step 1")
//     $(".savePeanutBtn").val()

//     if (username && password) {
//         console.log("step 2")
//         const response = await fetch('/api/user_routes/login', {
//             method: 'POST',
//             body: JSON.stringify({ username, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         console.log(response)
//         if (response.ok) {
//             alert("finish me if you dare")
//             console.log(response)
//             location.replace('/home');
//         } else {
//             alert("die die")
//         }
//     }
// };

$(".commentSaveBtn").on('click', saveComment)

function saveComment(event) {
    event.preventDefault()
    console.log("kiiiing yassss")
    $(".peanutInput").hide()
}

function addComment(event) {
    event.preventDefault()
    console.log("yasss")
    
    $(".peanutInput").show()
};

$(document).ready(function () {
    console.log("wowowowowo")
    $(".peanutInput").hide();
  });