function cul() {
    const plv = document.querySelector("#input1").value;
    const elv = document.querySelector("#input2").value;
    const debuff = document.querySelector("#input3").value;
    
    edef = ( 200 + ( elv * 10 )) * ((100 - debuff) / 100);
    defmul = 1 - ( edef / ( edef + 200 + ( 10 * plv)));
    
    document.querySelector("#result > p#edef > a").textContent = edef;
    document.querySelector("#result > p#defmul > a").textContent = defmul;
}
    