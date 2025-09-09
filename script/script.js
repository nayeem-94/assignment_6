console.log("hello world");

const loadTrees = async (url) => {
    // const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
        .then(res => res.json())
        .then(data => displayTrees(data.plants));
}
const displayTrees = (data) => {
    const treeContainer = document.getElementById("tree-container");
    treeContainer.innerHTML = "";
    data.forEach(tree => {
        const treeCard = document.createElement("div");
        treeCard.className = "max-w-xs bg-white rounded-2xl shadow p-4";
        treeCard.innerHTML = `
            <div class="w-full h-40 bg-gray-100 rounded-xl"><img class="w-full h-40" src=${tree.image} alt=""></div>
            <h2 class="text-gray-800 font-semibold mt-3">${tree.name}</h2>
            <p class="text-sm text-gray-500 mt-1">${tree.description}</p>
            <div class="flex items-center justify-between mt-3">
                <span class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">${tree.category}</span>
                <span class="font-semibold text-gray-800">৳${tree.price}</span>
            </div>
            <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">Add to Cart</button>
        `;
        treeContainer.appendChild(treeCard);
    });
}


const trig = document.getElementById("allOne");
trig.addEventListener("click", function () {
    const url = "https://openapi.programming-hero.com/api/plants";
    loadTrees(url);
    for (let j = 0; j < allCatagory.length; j++) {
        allCatagory[j].classList.remove("bg-green-600");
        allCatagory[j].classList.remove("text-white");
    }

    // Add active class to the clicked category
    allCatagory[0].classList.add("bg-green-600");
    allCatagory[0].classList.add("text-white");
});


const allCatagory = document.getElementsByClassName("catagory");
for (let i = 0; i < allCatagory.length; i++) {
    //   console.log(allCatagory[i]);
    if (i == 0) {
        const url = "https://openapi.programming-hero.com/api/plants";
        loadTrees(url);

    }
    else {


        allCatagory[i].addEventListener("click", function () {
            // const url = "https://openapi.programming-hero.com/api/category/i";
            const url = `https://openapi.programming-hero.com/api/category/${i}`;
            loadTrees(url)

            // Remove active class from all categories
            for (let j = 0; j < allCatagory.length; j++) {
                allCatagory[j].classList.remove("bg-green-600");
                allCatagory[j].classList.remove("text-white");
            }

            // Add active class to the clicked category
            allCatagory[i].classList.add("bg-green-600");
            allCatagory[i].classList.add("text-white");
        });

    }




}

