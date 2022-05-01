let searchImages = async (API, value, order = "", orien = "") => {
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}${order}${orien}`);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err)
    }
}

let masterSearch = (API,val,order = "", orien = "") => {
    let data = searchImages(API, val, order, orien).then((res) => {
        // console.log(res)
        let container = document.getElementById("container")
        container.innerHTML = null;
        append(res.results, container)
})
}

let append = (data, container) => {
    data.forEach(({alt_description, urls : {small}}) => {
        let div = document.createElement("div");
        div.setAttribute("class", "image") 
        let img = document.createElement("img");
        let h3 = document.createElement("h3")

        img.src = small;
        h3.innerText = alt_description;

        div.append(img,h3);
        container.append(div)
    });
}

export {searchImages, append, masterSearch}