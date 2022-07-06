
const $content = document.getElementById('content')
const content=[]
const imgContainer = document.getElementById('img-container')

// for loop utilized to define {i}

for(let i = 1 ; i <= 12; i++)
{
    content.push(`
     <div class="content">
       <img 
       class="img"
        src="images/imgsmall_${i}.jpg"
        alt="Image added dynamically"
        data-large="images/img_${i}.jpg"
        data-source="Image from Unsplash">
       
    </div>
    `)
}

imgContainer.innerHTML = content.join('')


const $modal = document.querySelector('.modal')


imgContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('img')) {
    $modal.innerHTML = `
    <img src="${e.target.dataset.large}">   
    <small>${e.target.dataset.source}</small>`
    $modal.classList.add('show')
}
})

$modal.addEventListener('click', function () {
  $modal.classList.remove('show')
})



// $img.addEventListener('click', function (e) {
//     $modal.innerHTML = `
//     <img src="${$img.dataset.large}">   
//     <small>${$img.dataset.source}</small>`
//     $modal.classList.add('show')
// })

// $modal.addEventListener('click', function () {
//   $modal.classList.remove('show')
// })

// if($img) {
//     $img.forEach(function(e) {
//     e.onclick = function() {
//         $modal.innerHTML = `
//         <img src="${$img.dataset.large}">   
//         <small>${$img.dataset.source}</small>`
//         $modal.classList.add('show');  
//     }
//     });
// }

// if($modal) {
//     $modal.forEach(function(e) {
//     e.onclick = function() {
//     $modal.classList.remove('show')
//     }
//     });
// }

// if($img) {
//     $img.forEach(function(e) {
//     e.onclick = function() {
//        alert("test");
//     }
//     });
// }



