function getColumn(data, index){
    var initial = data.map(function(item){return item[index];});
    return Array.from(new Set(initial));
}

function selectRowBy(data, criteria, index){
    return data.map(function(item){
        if (item[index] === criteria){
            return item;
        }
    })
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

function fillDropdown(id ,title, optionsSet){
    var menu = document.getElementById(id);
    var buttonName = document.createElement("button");
    setAttributes(buttonName,{"class":"btn btn-secondary dropdown-toggle","type":"button","id":"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"});
    var options = document.createElement("div");
    setAttributes(options, {"class":"dropdown-menu","aria-labelledby":"dropdownMenuButton"});
    buttonName.innerText = title;
    optionsSet.forEach(element => {
        var a = document.createElement("a");
        a.innerText = element;
        setAttributes(a, {"class":"dropdown-item", "href":"#"});
        options.appendChild(a);
    })
    menu.appendChild(buttonName);
    menu.appendChild(options);
}