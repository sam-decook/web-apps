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

    function fetchYears () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/~gallaghd/ymm/ymmdb.php?fmt=xml', true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
                var years = xmlDoc.getElementsByTagName('year');
                var yearList = [];
                for (var i = 0; i < year.length; i++) {
                    yearList.push(year[i].textContent);
                }
                populateDropdown(yearSelect, yearList);
                yearSelect.disabled = false;
            } else {
                throw new Error('Network response was not ok');
            }
        };

        xhr.onerror = function () {
            console.error('Request failed');
        };

        xhr.send();
    }

    function fetchMakes(year) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/~gallaghd/ymm/ymmdb.php?fmt=xml&year=' + year, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
                var makes = xmlDoc.getElementsByTagName('make');
                var makeList = [];
                for (var i = 0; i < makes.length; i++) {
                    makeList.push(makes[i].textContent);
                }
                populateDropdown(makeSelect, makeList);
                makeSelect.disabled = false;
            } else {
                throw new Error('Network response was not ok');
            }
        };

        xhr.onerror = function () {
            console.error('Request failed');
        };

        xhr.send();
    }

    function fetchModels(year, make) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/~gallaghd/ymm/ymmdb.php?fmt=xml&year=' + year + '&make=' + make, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
                var models = xmlDoc.getElementsByTagName('model');
                var modelList = [];
                for (var i = 0; i < models.length; i++) {
                    modelList.push(models[i].textContent);
                }
                populateDropdown(modelSelect, modelList);
                modelSelect.disabled = false;
            } else {
                throw new Error('Network response was not ok');
            }
        };

        xhr.onerror = function () {
            console.error('Request failed');
        };

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
