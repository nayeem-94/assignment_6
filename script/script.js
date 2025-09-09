console.log("hello world");

const loadTrees = async () => {
    const url = "https://openapi.programming-hero.com/api/plants";
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
loadTrees();

