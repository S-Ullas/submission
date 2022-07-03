let exp = { Q: 0, Q_bar: 0 };
let Clk = 1;
let results=["b","a d e f","d e f h","d e f a b"];
const tableBody = document.getElementById("table-body");

function Exp_JK_Flip_Flop(Clk, J, K) {
    if (Clk == 1) {
        if (J != K) {
            if (J == 0) {
                exp.Q = 0;
                exp.Q_bar = 1;
            }
            else {
                exp.Q = 1;
                exp.Q_bar = 0;
            }
        }
        else if (J == 1 && K == 1) {
            let temp = exp.Q;
            exp.Q = exp.Q_bar;
            exp.Q_bar = temp;
        }
    }
    return exp
}

function fault(){
    let exp=Exp_JK_Flip_Flop(1, parseInt(J_Value.value), parseInt(K_Value.value))
    if(exp.Q==parseInt(Q_Value.value) && exp.Q_bar==parseInt(Q_bar_Value.value)){
        return("-");
    }else{
        if (parseInt(J_Value.value)==0) {
            if (parseInt(K_Value.value)==0) {
                return("d e f a b");
            }else {
                return("a d e f")
            }
        }else{
            if(parseInt(K_Value.value)==0){
                return("b");
            }else{
                return("d e f h");
            }
        }
    }
}

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if((J_Value.value && K_Value.value && Q_Value.value && Q_bar_Value.value)){
        exp = Exp_JK_Flip_Flop(Clk, parseInt(J_Value.value), parseInt(K_Value.value));
        createRow(parseInt(J_Value.value), parseInt(K_Value.value),parseInt(Q_Value.value),parseInt(Q_bar_Value.value), exp.Q, exp.Q_bar,fault());
    }
})


// ===== Create a td tag =====
const createTd = (value) => {
    const td = document.createElement("td");
    td.innerText = value;
    td.classList.add("border");
    td.classList.add("border-gray-400");
    return td;
};

// ===== Creating a row =====
const createRow = (J, K, q, q_bar,exp_Q,exp_Q_bar, fault) => {
    const tr = document.createElement("tr");
    const td1 = createTd(`${J} ${K}`);
    tr.appendChild(td1);
    const td3 = createTd(exp_Q);
    tr.appendChild(td3);
    const td4 = createTd(exp_Q_bar);
    tr.appendChild(td4);
    const td5 = createTd(q);
    tr.appendChild(td5);
    const td6 = createTd(q_bar);
    tr.appendChild(td6);
    const td2 = createTd(`${fault}`);
    if(fault !="-"){
        td2.classList.add("bg-danger")
    }
    tr.appendChild(td2);
    tableBody.appendChild(tr);
};