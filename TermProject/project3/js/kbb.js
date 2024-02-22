document.addEventListener("DOMContentLoaded", startSelection);

function startSelection() {
    let $yearSelect = $('#year');
    let $makeSelect = $('#make');
    let $modelSelect = $('#model');

    function populateDropdown(select, data) {
        select.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            let option = document.createElement('option');
            option.text = data[i];
            select.add(option);
        }
    }

    function fetchYears() {       
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/~gallaghd/ymm/ymmdb.php?fmt=xml", true);

        xhr.onload = function () {
            if (xhr.status < 200 || xhr.status >= 300) {
                throw new Error("Network response was not ok");
            }

            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
            let year = xmlDoc.getElementsByTagName('year');
            let yearList = [];
            for (let i = 0; i < year.length; i++) {
                yearList.push(year[i].textContent);
            }
            populateDropdown($yearSelect, yearList);
            $yearSelect.disabled = false;
        };

        xhr.onerror = function () {
            console.error("Request failed");
        };

        xhr.send();
    }

    function fetchMakes(year) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/~gallaghd/ymm/ymmdb.php?fmt=xml&year=' + year, true);

        xhr.onload = function () {
            if (xhr.status < 200 || xhr.status >= 300) {
                throw new Error('Network response was not ok');
            }

            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
            let makes = xmlDoc.getElementsByTagName('make');
            let makeList = [];
            for (let i = 0; i < makes.length; i++) {
                makeList.push(makes[i].textContent);
            }
            populateDropdown($makeSelect, makeList);
            $makeSelect.disabled = false;
        };

        xhr.onerror = function () {
            console.error('Request failed');
        };

        xhr.send();
    }

    function fetchModels(year, make) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/~gallaghd/ymm/ymmdb.php?fmt=xml&year=' + year + '&make=' + make, true);

        xhr.onload = function () {
            if (xhr.status < 200 || xhr.status >= 300) {
                throw new Error('Network response was not ok');
            }

            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
            let models = xmlDoc.getElementsByTagName('model');
            let modelList = [];
            for (let i = 0; i < models.length; i++) {
                modelList.push(models[i].textContent);
            }
            populateDropdown($modelSelect, modelList);
            $modelSelect.disabled = false;
        };

        xhr.onerror = function () {
            console.error('Request failed');
        };

        xhr.send();
    }

    fetchYears();

    $yearSelect.onchange = function() {
        let selectedYear = $yearSelect.value;
        if (selectedYear !== '') {
            $makeSelect.selectedIndex = 0;
            $modelSelect.selectedIndex = 0;
            $makeSelect.disabled = true; 
            $modelSelect.disabled = true; 
            fetchMakes(selectedYear);
        } else {
            $makeSelect.selectedIndex = 0;
            $modelSelect.selectedIndex = 0;
            $makeSelect.disabled = true; 
            $modelSelect.disabled = true;
        }
    };

    $makeSelect.onchange = function() {
        let selectedYear = $yearSelect.value;
        let selectedMake = $makeSelect.value;
        if (selectedMake !== '') {
            $modelSelect.selectedIndex = 0;
            $modelSelect.disabled = true;
            fetchModels(selectedYear, selectedMake);
        } else {
            $modelSelect.selectedIndex = 0;
            $modelSelect.disabled = true;
        }
    };

    $makeSelect.disabled = true;
    $modelSelect.disabled = true;
};
