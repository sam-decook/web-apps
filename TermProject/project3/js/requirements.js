// let url = "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getRequirements.php";

// try {
//     let resp = await fetch(url);
// } catch (error) {
//     console.error("Request failed: ", error);
// }
// if (!resp.ok) {
//     throw new Error("Network response not OK");
// }

// let reqs = resp.json();

// For local testing
let reqs = {
    "Core": {
      "courses": [
        "CS-1210",
        "CS-1220",
        "CS-2210",
        "CS-3210",
        "CS-3220",
        "CS-3310",
        "CS-3410",
        "CS-3510",
        "CS-3610",
        "CS-4810",
        "CS-4820",
        "CY-1000",
        "CY-3420",
        "EGCP-1010",
        "EGCP-3210",
        "EGCP-4310",
        "EGGN-3110",
        "EGGN-4010",
        "MATH-2520"
      ]
    },
    "Electives": {
      "courses": [
        "CY-3320",
        "CY-4310",
        "CY-4330",
        "CS-4430",
        "CS-4710",
        "CS-4730",
        "EGCP-3010",
        "EGCP-4210",
        "MATH-3610"
      ]
    },
    "Cognates": {
      "courses": [
        "CHEM-1050",
        "MATH-1710",
        "MATH-1720",
        "PHYS-2110",
        "PHYS-2120"
      ]
    },
    "GenEds": {
      "courses": [
        "BTGE-1725",
        "BTGE-2730",
        "BTGE-2740",
        "BTGE-3755",
        "BTGE-3765"
      ]
    }
  }

// Make requirements HTML:
// <h3> Section </h3>
// <div>
//   content...
// </div>
// ...
let acc = $("#accordion");
console.log(acc)

{
    header = $("h3").text("Core");
    div = $("div");

    Object.values(reqs.Core.courses).forEach(course => {
        let span = $("span");
        span.addClass("tag");
        span.html(course)
        let p = ($("p").append(span));
        div.append(p)
    });
    acc.append(header)
    acc.append(div)
}

// JQuery accordion
$(function() {
    $("#accordion").accordion({
        collapsible: true
    });
});