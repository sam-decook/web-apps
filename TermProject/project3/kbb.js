window.onload = function() {
    var yearSelect = document.getElementById('year');
    var makeSelect = document.getElementById('make');
    var modelSelect = document.getElementById('model');

    function populateDropdown(select, data) {
        select.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            var option = document.createElement('option');
            option.text = data[i];
            select.add(option);
        }
    }

    function fetchMakes(year) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var xmlData = xhr.responseXML;
                var makes = xmlData.getElementsByTagName('make');
                var makeList = [];
                for (var i = 0; i < makes.length; i++) {
                    makeList.push(makes[i].textContent);
                }
                populateDropdown(makeSelect, makeList);
                makeSelect.disabled = false; 
            }
        };
        xhr.open('GET', 'http://judah.cedarville.edu/~gallaghd/ymm/ymmdb.php?fmt=xml&year=' + year, true);
        xhr.send();
    }

    function fetchModels(year, make) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var xmlData = xhr.responseXML;
                var models = xmlData.getElementsByTagName('model');
                var modelList = [];
                for (var i = 0; i < models.length; i++) {
                    modelList.push(models[i].textContent);
                }
                populateDropdown(modelSelect, modelList);
                modelSelect.disabled = false; 
            }
        };
        xhr.open('GET', 'http://judah.cedarville.edu/~gallaghd/ymm/ymmdb.php?fmt=xml&year=' + year + '&make=' + make, true);
        xhr.send();
    }

    yearSelect.onchange = function() {
        var selectedYear = yearSelect.value;
        if (selectedYear !== '') {
            makeSelect.selectedIndex = 0;
            modelSelect.selectedIndex = 0; 
            makeSelect.disabled = true;
            modelSelect.disabled = true;
            fetchMakes(selectedYear);
        }
    };

    makeSelect.onchange = function() {
        var selectedYear = yearSelect.value;
        var selectedMake = makeSelect.value;
        if (selectedMake !== '') {
            modelSelect.selectedIndex = 0; 
            modelSelect.disabled = true;
            fetchModels(selectedYear, selectedMake);
        }
    };

    makeSelect.disabled = true;
    modelSelect.disabled = true;
};

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://judah.cedarville.edu/~gallaghd/ymm/ymmdb.php?fmt=xml&year=2000", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
    console.log(xmlDoc);
  } else {
    throw new Error("Network response was not ok");
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
