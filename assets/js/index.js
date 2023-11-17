"use strict";
let display = document.querySelector(".display");
class Calculadora {
    constructor(display) {
        this.display = display;
    }
    inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();
    }
    pressionaEnter() {
        if (this.display) {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        }
    }
    realizaConta() {
        if (this.display) {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta Inválida");
                    return;
                }
                this.display.value = conta;
            }
            catch (e) {
                alert("Conta Inválida");
            }
        }
    }
    clearDisplay() {
        if (this.display) {
            this.display.value = "";
        }
    }
    apagaUm() {
        if (this.display) {
            this.display.value = this.display.value.slice(0, -1);
        }
    }
    cliqueBotoes() {
        document.addEventListener("click", (e) => {
            const el = e.target;
            if (el) {
                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerHTML);
                }
                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }
                if (el.classList.contains("btn-del")) {
                    this.apagaUm();
                }
                if (el.classList.contains("btn-eq")) {
                    this.realizaConta();
                }
            }
        });
    }
    btnParaDisplay(valor) {
        if (this.display) {
            this.display.value += valor;
            this.display.focus();
        }
    }
}
const calculadora = new Calculadora(display);
calculadora.inicia();
