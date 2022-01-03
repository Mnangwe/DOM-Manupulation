const users = [
    {
        image: './images/proverb.jpeg',
        name:'Tebogo Sidney Thekisho',
        age:40,
        profession:'Rapper, Producer and Lyricist',
        // followers:
    },
    {
        image: './images/Stogie-T.jpeg',
        name:'Boitumelo Molekane',
        age:'40',
        profession:'Rapper, Poet'
    },
    {
        image:'./images/Reason.jpeg',
        name:'Sizwe Moeketsi Moniker',
        age:'34',
        profession:'Rapper, Vocalist'
    },
    {
        image:'./images/A-Reece.jpeg',
        name:'Lehlogonolo Ronald Mataboge',
        age:24,
        profession:'Rapper, Freestyler'
    }
]



let cardHTML = '';
users.map(element => {
     cardHTML += ` <div class="card p-3 col-sm-12 col-md-6 col-lg-4 col-xl-3">
     <div class="d-flex align-items-center ">
         <div class="image"> 
         <img src="${element.image}" class="rounded" width="155"> 
         </div>
         <div class="ml-3 w-100">
             <h4 class="mb-0 mt-0">${element.name}</h4> <span>${element.profession}</span>
             <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                 <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">38</span> </div>
                 <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span> </div>
                 <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3">8.9</span> </div>
             </div>
             <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
         </div>
     </div>
 </div>
 `;
});

document.getElementsByClassName('products-cards')[0].innerHTML = cardHTML;
