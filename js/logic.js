function convertToMonths() 
    {
        
        var rendimento = document.getElementById("rendimento_liquido").value;
        var outras_dividas = document.getElementById("outras_dividas").value;

        if (!(isNaN(rendimento) && isNaN(outras_dividas))) 
        {           
           // months = years*12;
            //this.tableGenerator(years);

            var price = document.getElementById("price").value;
            var juros = document.getElementById("juros").value;

        var table = document.getElementById("table_viewer");
            tableRows = table.rows.length;
            this.resetTable(tableRows);
       
            //fixed = price/months;
        
                var row = table.insertRow(1);
                var antes = row.insertCell(0);
                var capital = row.insertCell(1);
                var juro = row.insertCell(2);
                var total = row.insertCell(3);
                
                antes.innerHTML =rendimento;
                capital.innerHTML= PMT(Number(juros)/12 , 120 , Number(price) , 0 , 0)*(-1);
                
                juro.innerHTML = outras_dividas;
                total.innerHTML = (Number(capital.innerHTML) + Number(juro.innerHTML))/Number(antes.innerHTML);
              
                if (Number(total.innerHTML)<=40) {
                    document.getElementById("bad").hidden = true;
                    document.getElementById("good").hidden = false;
                }else{
                    document.getElementById("bad").hidden = false;
                    document.getElementById("good").hidden = true;
                }
                // juros_por_acumular = Number(juros_acumulados.innerHTML);
                // price = Number(depois.innerHTML);
           
        }else
        {
            alert("Please insert a number");
        }
    }    
    function tableGenerator(months)
    {
       var price = document.getElementById("price").value;
       var juros = document.getElementById("juros").value;

        var table = document.getElementById("table_viewer");
        var tableRows = 1;
            tableRows = table.rows.length;
            this.resetTable(tableRows);
        var juros_por_acumular = 0; 
            fixed = price/months;
           for (var month = 1; month <= months; month++) 
           {
                var row = table.insertRow(month);
                var monthCount = row.insertCell(0);
                var antes = row.insertCell(1);
                var capital = row.insertCell(2);
                var juro = row.insertCell(3);
                var total = row.insertCell(4);
                var juros_acumulados = row.insertCell(5);
                var depois = row.insertCell(6);

                monthCount.innerHTML = month;
                antes.innerHTML =price;
                capital.innerHTML= fixed;
                juro.innerHTML = juros*price*30/36500;
                total.innerHTML = Number(capital.innerHTML) + Number(juro.innerHTML);
                juros_acumulados.innerHTML = Number(juro.innerHTML) + juros_por_acumular;
                depois.innerHTML = Number(antes.innerHTML) - Number(capital.innerHTML);
            
                juros_por_acumular = Number(juros_acumulados.innerHTML);
                price = Number(depois.innerHTML);
           }
    }

    function resetTable(tableRows)
    {
        console.log("total rows to delete="+tableRows);
        if (tableRows>=2) 
        {
            var table = document.getElementById("table_viewer");
            for (var index = 1; index < tableRows; index++) 
            {
                
                table.deleteRow(1);
    
            } 
        }
        

    }

    
function PMT(rate, nperiod, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return -(pv + fv)/nperiod;

    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };

    return pmt;
}