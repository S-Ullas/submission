### INTRODUCTION <br>
<div class="mb-3 space-y-1" id="theory">
            <h3 class="font-bold text-lg">Theory</h3>
            <h5 class="text-lg pt-5 font-bold">JK Flip-Flop</h5>
            <p>
                The JK flip flop is basically a gated SR flip-flop with the addition of a clock input circuitry
                that prevents the illegal or invalid output condition that can occur when both inputs S and R
                are equal to logic level “1”. Due to this additional clocked input, a JK flip-flop has four
                possible input combinations, “logic 1”, “logic 0”, “no change” and “toggle”.
            </p>
            <img class="m-0" src="./img/diagram.jpeg" style="display: block; margin: 0 auto;" alt="">
            <p class="text-center" >(Fig.2)</p> 
            <p>
                The thruth table for JK Flip-Flop is shown in TT1:
            </p>
            <p><img class="m-0" style="display: block;margin: 0 auto;margin-left:10%;" src="./img/correct_tt.png" alt=""></p>
            <p class="text-center" >(TT.1)</p> 
            <br>
            <h5 class="text-lg pt-5 font-bold">SA1 Fault</h5>
            
            <p>
                A stuck-at fault (SAF) is a logic-level fault that mimics a manufacturing defect on a digital
                circuit. An SAF is of two types-
            <ul class="pl-5 list-disc">
                <li>Stuck at 0</li>
                <li>Stuck at 1</li>
            </ul>
            Individual bit or signal on a wire of a logic gate is assumed to be stuck at Logical '1' or '0' if
            that bit or the
            signal is converted to logic-1 or logic-0 irrespective of its previous or assigned value.
            </p>
            <p>
                Logical faults are used to represent physical faults. They simplify the fault analysis process
                and
                reduces the number of faults.
            </p>
            <p>Single stuck line is a fault model used in digital circuits. It is used for post manufacturing
                testing, not design testing. The model assumes one line or node in the digital circuit is stuck
                at logic high or logic low. When a line is stuck it is called a fault.</p>
            <p>
            <p>For example, consider the image below, in this the faulty wire has been and marked. 
                <img class="m-0" src="./img/theory_page_pic_edited.png" style="display: block; margin: 0 auto;" alt="">
                <p class="text-center" >(Fig.3)</p> 
                Truth table for the above faulty JK Flip-Flop circuit,
                <img class="m-0" src="./img/truthtable.jpeg" style="display: block; margin: 0 auto;" alt="">
                <p class="text-center" >(TT.2)</p> 
            </p>
            
            
    </div>
    </div>
