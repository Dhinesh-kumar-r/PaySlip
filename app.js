let calculate = () => {
    
    let bp = document.getElementById("bp").value;
    let hra = document.getElementById("hra").value = bp * (10 / 100);
    let da = document.getElementById("da").value = bp * (5 / 100);
    let travel = document.getElementById("travel").value = bp * (15 / 100);
    let pf = document.getElementById("pf").value = bp * (15 / 100);
    let gross = document.getElementById("gross").value = pf + hra + da + travel + pf;
    let netSal = document.getElementById("net").value = gross - pf;

    hra = parseInt(hra).toFixed(2);
    da = parseInt(da).toFixed(2);
    travel = parseInt(travel).toFixed(2);
    pf = parseInt(pf).toFixed(2);
    gross = parseInt(gross).toFixed(2);
    netSal = parseInt(netSal).toFixed(2);
}

let Input = document.getElementById("bp");
Input.addEventListener("input", calculate);

let print = () => {
    let display = document.getElementById("display")
    let id = document.getElementById("id").value
    let name = document.getElementById("ename").value
    let design = document.getElementById("design").value
    let bp = document.getElementById("bp").value;
    let hra = document.getElementById("hra").value = bp * (10 / 100);
    let da = document.getElementById("da").value = bp * (5 / 100);
    let travel = document.getElementById("travel").value = bp * (15 / 100);
    let pf = document.getElementById("pf").value = bp * (15 / 100);
    let gross = document.getElementById("gross").value = pf + hra + da + travel + pf;
    let netSal = document.getElementById("net").value = gross - pf;



    let employeeData = {
        id: id,
        name: name,
        design: design,
        bp: bp,
        hra: hra,
        da: da,
        travel: travel,
        pf: pf,
        gross: gross,
        netSal: netSal
    };

    let storedData = JSON.parse(localStorage.getItem("employeeData")) || [];
     storedData.push(employeeData);
     localStorage.setItem("employeeData", JSON.stringify(storedData));
 

    display.innerHTML += `<tr>
                <td>${id}</td> 
                <td>${name}</td> 
                <td>${design}</td>
                <td>${bp}</td>
                <td>${hra}</td>
                <td>${da}</td>
                <td>${travel}</td>
                <td>${pf}</td>
                <td>${gross}</td>
                <td>${netSal}</td>`
                document.getElementById("thead").style=display=""
}


