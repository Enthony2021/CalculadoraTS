let display: HTMLInputElement | null = document.querySelector(".display");

class Calculadora {
  private display: HTMLInputElement | null;

  constructor(display: HTMLInputElement | null) {
    this.display = display;
  }

  inicia(): void {
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
      let conta: string = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta Inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
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
    document.addEventListener("click", (e: MouseEvent) => {
      const el: HTMLButtonElement | null = e.target as HTMLButtonElement;
      
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

  btnParaDisplay(valor: string) {
    if (this.display) {
      this.display.value += valor;
      this.display.focus();
    }
  }
}

const calculadora = new Calculadora(display);
calculadora.inicia();
